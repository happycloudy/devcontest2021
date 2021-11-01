import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Definition, DefinitionDocument} from "./definitions.schema";
import {CreateDefinitionDto} from "./dto/create-definition.dto";

@Injectable()
export class DefinitionsService {
    constructor(@InjectModel(Definition.name) private definitionModel: Model<DefinitionDocument>) {}

    async findAll(): Promise<Definition[]>{
        return this.definitionModel.find().exec()
    }

    async create(createDefinitionDto: CreateDefinitionDto): Promise<Definition> {
        const createdTheme = await new this.definitionModel(createDefinitionDto)
        return createdTheme.save()
    }
}
