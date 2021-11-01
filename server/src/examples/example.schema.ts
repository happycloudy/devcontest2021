import {Document} from "mongoose";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export type ExampleDocument = Example & Document

@Schema()
export class Example {
    @Prop()
    name: string
    example: string
}

export const ExampleSchema = SchemaFactory.createForClass(Example)