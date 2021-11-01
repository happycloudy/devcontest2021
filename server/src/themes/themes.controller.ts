import {Body, Controller, Get, Post} from '@nestjs/common';
import {ThemesService} from "./themes.service";
import {CreateThemeDto} from "./dto/create-theme.dto";

@Controller('themes')
export class ThemesController {
    constructor(private themeService: ThemesService) {}

    @Get()
    findAll() {
        return this.themeService.findAll()
    }

    @Post()
    async create(@Body() createThemeDto: CreateThemeDto){
        await this.themeService.create(createThemeDto)
        return `Theme ${createThemeDto.name} has been created`
    }
}
