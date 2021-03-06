import {Body, Controller, Get, Param, Patch, Post} from '@nestjs/common';
import {ThemesService} from "./themes.service";
import {CreateThemeDto} from "./dto/create-theme.dto";
import {UpdateThemeDto} from "./dto/update-theme.dto";
import {ApiBody} from "@nestjs/swagger";

@Controller('themes')
export class ThemesController {
    constructor(private themeService: ThemesService) {
    }

    @Get()
    findAll() {
        return this.themeService.findAll()
    }

    @Get(':id')
    findOne(@Param() id: string) {
        return this.themeService.findOne(id)
    }

    @Post()
    @ApiBody({type: CreateThemeDto})
    async create(@Body() createThemeDto: CreateThemeDto) {
        return await this.themeService.create(createThemeDto)
    }

    @Patch()
    @ApiBody({type: UpdateThemeDto})
    async updateOne(@Body() updateThemeDto: UpdateThemeDto) {
        return this.themeService.updateOne(updateThemeDto)
    }
}
