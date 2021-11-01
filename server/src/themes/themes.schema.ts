import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document, ObjectId} from "mongoose";

export type ThemeDocument = Theme & Document

@Schema()
export class Theme {
    @Prop()
    name: string

    // @Prop()
    // definitions: {
    //     type: ObjectId
    // }
}

export const ThemeSchema = SchemaFactory.createForClass(Theme)