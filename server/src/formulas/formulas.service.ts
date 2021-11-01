import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Formula, FormulaDocument} from "./formula.schema";
import {CreateFormulaDto} from "./dto/create-formula.dto";

@Injectable()
export class FormulasService {
    constructor(@InjectModel(Formula.name) private formulaModel: Model<FormulaDocument>) {}

    async findAll(): Promise<Formula[]> {
        return this.formulaModel.find().exec()
    }

    async create(createFormulaDto: CreateFormulaDto): Promise<Formula> {
        const createdTheme = await new this.formulaModel(createFormulaDto)
        return createdTheme.save()
    }
}
