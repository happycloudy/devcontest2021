import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Formula, FormulaDocument} from "./formula.schema";
import {CreateFormulaDto} from "./dto/create-formula.dto";
import {UpdateFormulaDto} from "./dto/update-formula.dto";

@Injectable()
export class FormulasService {
    constructor(@InjectModel(Formula.name) private formulaModel: Model<FormulaDocument>) {}

    async findAll(): Promise<Formula[]> {
        return this.formulaModel.find().exec()
    }

    async create(createFormulaDto: CreateFormulaDto): Promise<Formula> {
        const createdFormula = await new this.formulaModel(createFormulaDto)
        return createdFormula.save()
    }

    async findOne(id: string): Promise<Formula> {
        return this.formulaModel.findById(id)
    }

    async updateOne(updateFormulaDto: UpdateFormulaDto): Promise<Formula>{
        return this.formulaModel.findByIdAndUpdate(updateFormulaDto.id, {
            name: updateFormulaDto.name,
            formula: updateFormulaDto.formula
        })
    }
}
