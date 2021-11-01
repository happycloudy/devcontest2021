import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document, ObjectId} from "mongoose";

export type DefinitionDocument = Definition & Document

@Schema()
export class Definition {
    @Prop()
    name: string

    @Prop()
    description: string
}

export const DefinitionsSchema = SchemaFactory.createForClass(Definition)