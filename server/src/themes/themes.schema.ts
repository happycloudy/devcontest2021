import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";
import {Definition} from "../definitions/definitions.schema";
import {Formula} from "../formulas/formula.schema";
import {Example} from "../examples/example.schema";
import {Test} from "../tests/tests.schema";

export type ThemeDocument = Theme & Document

@Schema()
export class Theme {
    @Prop({required: true})
    name: string

    //definitions
    @Prop()
    definitionsId: string[]
    @Prop()
    definitions: Definition[]

    //formulas
    @Prop()
    formulasId: string[]
    @Prop()
    formulas: Formula[]

    //examples
    @Prop()
    examplesId: string[]
    @Prop()
    examples: Example[]

    @Prop()
    testsId: string[]
    @Prop()
    tests: Test[]
}

export const ThemeSchema = SchemaFactory.createForClass(Theme)