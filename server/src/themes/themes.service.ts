import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Theme, ThemeDocument} from "./themes.schema";
import {CreateThemeDto} from "./dto/create-theme.dto";

@Injectable()
export class ThemesService {
    constructor(@InjectModel(Theme.name) private themeModel: Model<ThemeDocument>) {}

    async findAll(): Promise<Theme[]>{
        return this.themeModel.find().exec()
    }

    async create(createThemeDto: CreateThemeDto): Promise<Theme> {
        const createdTheme = await new this.themeModel(createThemeDto)
        return createdTheme.save()
    }
}
