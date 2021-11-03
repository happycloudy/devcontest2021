import {Body, Controller, Get, Param, Patch, Post} from '@nestjs/common';
import {CreateTestDto} from "./dto/create-test.dto";
import {TestsService} from "./tests.service";
import {Test} from "./tests.schema";
import {UpdateTestDto} from "./dto/update-test.dto";
import {ApiBody} from "@nestjs/swagger";

@Controller('tests')
export class TestsController {
    constructor(private testService: TestsService) {
    }

    @Get()
    async findAll(): Promise<Test[]> {
        return this.testService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id: string){
        return this.testService.findOne(id)
    }

    @Post()
    @ApiBody({type: CreateTestDto})
    async create(@Body() createTestDto: CreateTestDto): Promise<Test> {
        return await this.testService.create(createTestDto)
    }


    @Patch()
    @ApiBody({type: UpdateTestDto})
    async update(@Body() updateTestDto: UpdateTestDto) {
        return await this.testService.updateOne(updateTestDto)
    }
}
