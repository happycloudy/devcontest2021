import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreateDefinitionDto} from "./dto/create-definition.dto";
import {DefinitionsService} from "./definitions.service";

@Controller('definitions')
export class DefinitionsController {
    constructor(private definitionService: DefinitionsService) {}

    @Get()
    findAll() {
        return this.definitionService.findAll()
    }

    @Post()
    async create(@Body() createDefinitionDto: CreateDefinitionDto){
        await this.definitionService.create(createDefinitionDto)
        return `Definition ${createDefinitionDto.name} has been created`
    }
}
