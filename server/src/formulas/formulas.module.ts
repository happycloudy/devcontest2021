import { Module } from '@nestjs/common';
import { FormulasController } from './formulas.controller';
import { FormulasService } from './formulas.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Formula, FormulaSchema} from "./formula.schema";

@Module({
  controllers: [FormulasController],
  providers: [FormulasService],
  imports: [MongooseModule.forFeature([{name: Formula.name, schema: FormulaSchema}])]
})
export class FormulasModule {}
