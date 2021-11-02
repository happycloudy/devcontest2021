import {Injectable} from '@nestjs/common';
import {CreateTestDto} from "./dto/create-test.dto";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Test, TestDocument} from "./tests.schema";

@Injectable()
export class TestsService {
    constructor(@InjectModel(Test.name) private testModel: Model<TestDocument>) {}

    async create(createTestDto: CreateTestDto): Promise<Test> {
        const createdTest = new this.testModel(createTestDto)
        return createdTest.save()
    }

    async findAll(): Promise<Test[]> {
        return this.testModel.find().exec()
    }
}
