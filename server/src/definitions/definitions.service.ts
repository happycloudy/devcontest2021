import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Definition, DefinitionDocument} from "./definitions.schema";
import {CreateDefinitionDto} from "./dto/create-definition.dto";
import {UpdateDefinitionDto} from "./dto/update-definition.dto";

@Injectable()
export class DefinitionsService {
    constructor(@InjectModel(Definition.name) private definitionModel: Model<DefinitionDocument>) {
    }

    async findAll(): Promise<Definition[]> {
        return this.definitionModel.find().exec()
    }

    async create(createDefinitionDto: CreateDefinitionDto): Promise<Definition> {
        const createdDefinition = await new this.definitionModel(createDefinitionDto)
        return createdDefinition.save()
    }

    async findOne(id: string): Promise<Definition> {
        return this.definitionModel.findById(id)
    }

    async updateOne(updateDefinitionDto: UpdateDefinitionDto): Promise<Definition> {
        console.log(updateDefinitionDto)
        return this.definitionModel.findByIdAndUpdate(updateDefinitionDto.id, {
            name: updateDefinitionDto.name,
            description: updateDefinitionDto.description
        })
    }
}
