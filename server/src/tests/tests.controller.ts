import {Body, Controller, Get, Param, Patch, Post} from '@nestjs/common';
import {CreateTestDto} from "./dto/create-test.dto";
import {TestsService} from "./tests.service";
import {Test} from "./tests.schema";
import {UpdateTestDto} from "./dto/update-test.dto";

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
    async create(@Body() createTestDto: CreateTestDto): Promise<Test> {
        return await this.testService.create(createTestDto)
    }


    @Patch()
    async update(@Body() updateTestDto: UpdateTestDto) {
        return await this.testService.updateOne(updateTestDto)
    }
}
