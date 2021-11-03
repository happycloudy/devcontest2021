import {Body, Controller, Get, Param, Patch, Post} from '@nestjs/common';
import {ExamplesService} from "./examples.service";
import {CreateExampleDto} from "./dto/create-example.dto";
import {UpdateExampleDto} from "./dto/update-example.dto";
import {Example} from "./example.schema";

@Controller('examples')
export class ExamplesController {
    constructor(private exampleService: ExamplesService) {
    }

    @Get()
    async findAll(): Promise<Example[]> {
        return this.exampleService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Example> {
        return await this.exampleService.findOne(id)
    }

    @Post()
    async create(@Body() createExampleDto: CreateExampleDto): Promise<Example>{
        return await this.exampleService.create(createExampleDto)
    }

    @Patch()
    async updateOne(@Body() updateExampleDto: UpdateExampleDto) {
        return this.exampleService.updateOne(updateExampleDto)
    }
}
