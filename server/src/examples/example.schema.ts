import {Document} from "mongoose";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export type ExampleDocument = Example & Document

@Schema()
export class Example {
    @Prop({required: true})
    name: string

    @Prop({required: true})
    example: string
}

export const ExampleSchema = SchemaFactory.createForClass(Example)