import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";

export type FormulaDocument = Formula & Document

@Schema()
export class Formula {
    @Prop()
    name: string

    @Prop()
    formula: string
}

export const FormulaSchema = SchemaFactory.createForClass(Formula)