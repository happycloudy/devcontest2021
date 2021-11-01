import {Body, Controller, Get, Post} from '@nestjs/common';
import {ThemesService} from "../themes/themes.service";
import {CreateThemeDto} from "../themes/dto/create-theme.dto";
import {ExamplesService} from "./examples.service";
import {CreateExampleDto} from "./dto/create-example.dto";

@Controller('examples')
export class ExamplesController {
    constructor(private exampleService: ExamplesService) {}

    @Get()
    findAll() {
        return this.exampleService.findAll()
    }

    @Post()
    async create(@Body() createExampleDto: CreateExampleDto){
        await this.exampleService.create(createExampleDto)
        return `Example ${createExampleDto.name} has been created`
    }
}
