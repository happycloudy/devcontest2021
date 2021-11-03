import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Theme, ThemeDocument} from "./themes.schema";
import {CreateThemeDto} from "./dto/create-theme.dto";
import {DefinitionsService} from "../definitions/definitions.service";
import {FormulasService} from "../formulas/formulas.service";
import {ExamplesService} from "../examples/examples.service";
import {TestsService} from "../tests/tests.service";
import {UpdateThemeDto} from "./dto/update-theme.dto";

@Injectable()
export class ThemesService {
    constructor(@InjectModel(Theme.name) private themeModel: Model<ThemeDocument>,
                private definitionsService: DefinitionsService,
                private formulasService: FormulasService,
                private examplesService: ExamplesService,
                private testsService: TestsService
    ) {
    }

    async findAll(): Promise<Theme[]> {
        const themes = await this.themeModel.find().exec()
        for (const theme of themes) {
            await this.includeDeps(theme)
        }
        return themes
    }

    async findOne(id: string): Promise<Theme> {
        const theme = await this.themeModel.findById(id).exec()
        await this.includeDeps(theme)
        return theme
    }

    async create(createThemeDto: CreateThemeDto): Promise<Theme> {
        const createdTheme = await new this.themeModel(createThemeDto)
        return createdTheme.save()
    }


    async includeDeps(theme: Theme): Promise<Theme> {
        // definitions
        theme.definitions = await Promise.all(theme.definitionsId.map(async id => {
            return await this.definitionsService.findOne(id)
        }))
        theme.definitions = theme.definitions.indexOf(null) != -1 ? [] : theme.definitions

        //formulas
        theme.formulas = await Promise.all(theme.formulasId.map(async id => {
            return await this.formulasService.findOne(id)
        }))
        theme.formulas = theme.formulas.indexOf(null) != -1 ? [] : theme.formulas

        //examples
        theme.examples = await Promise.all(theme.examplesId.map(async id => {
            return await this.examplesService.findOne(id)
        }))
        theme.examples = theme.examples.indexOf(null) != -1 ? [] : theme.examples

        //tests
        theme.tests = await Promise.all(theme.testsId.map(async id => {
            return await this.testsService.findOne(id)
        }))
        theme.tests = theme.tests.indexOf(null) != -1 ? [] : theme.tests
        return theme
    }

    async updateOne(updateThemeDto: UpdateThemeDto): Promise<Theme> {
        return this.themeModel.findByIdAndUpdate(updateThemeDto.id, {
            name: updateThemeDto.name,
            definitionId: updateThemeDto.definitionsId,
            formulaId: updateThemeDto.formulasId,
            examplesId: updateThemeDto.examplesId,
            testId: updateThemeDto.testsId
        })
    }

    async count(): Promise<number>{
        return this.themeModel.count()
    }
}
