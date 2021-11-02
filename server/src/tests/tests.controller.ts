import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreateTestDto} from "./dto/create-test.dto";
import {TestsService} from "./tests.service";

@Controller('tests')
export class TestsController {
    constructor(private testService: TestsService) {}

    @Get()
    getAllUsers(){
        return this.testService.findAll()
    }

    @Post()
    async createUser(@Body() createTestDto: CreateTestDto): Promise<string>{
        await this.testService.create(createTestDto)
        return `Test ${createTestDto.name} was created`
    }
}
