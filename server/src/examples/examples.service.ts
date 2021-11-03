import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Example, ExampleDocument} from "./example.schema";
import {CreateExampleDto} from "./dto/create-example.dto";
import {UpdateExampleDto} from "./dto/update-example.dto";

@Injectable()
export class ExamplesService {
    constructor(@InjectModel(Example.name) private exampleModel: Model<ExampleDocument>) {
    }

    async findAll(): Promise<Example[]> {
        return this.exampleModel.find().exec()
    }

    async create(createExampleDto: CreateExampleDto): Promise<Example> {
        const createdExample = await new this.exampleModel(createExampleDto)
        return createdExample.save()
    }

    async findOne(id: string): Promise<Example> {
        return this.exampleModel.findById(id)
    }

    async updateOne(updateExampleDto: UpdateExampleDto): Promise<Example> {
        return this.exampleModel.findByIdAndUpdate(updateExampleDto.id, {
            name: updateExampleDto.name,
            example: updateExampleDto.example
        });
    }
}
