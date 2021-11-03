import {Body, Controller, Get, Param, Patch, Post} from '@nestjs/common';
import {CreateDefinitionDto} from "./dto/create-definition.dto";
import {DefinitionsService} from "./definitions.service";
import {UpdateDefinitionDto} from "./dto/update-definition.dto";

@Controller('definitions')
export class DefinitionsController {
    constructor(private definitionService: DefinitionsService) {}

    @Get()
    async findAll() {
        return this.definitionService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id: string){
        return this.definitionService.findOne(id)
    }

    @Post()
    async create(@Body() createDefinitionDto: CreateDefinitionDto){
        return await this.definitionService.create(createDefinitionDto)
    }

    @Patch()
    async updateOne(@Body() updateDefinitionDto: UpdateDefinitionDto){
        return await this.definitionService.updateOne(updateDefinitionDto)
    }
}
