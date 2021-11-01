import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export type UserDocument = User & Document

@Schema()
export class User {
    @Prop()
    name1: string

    @Prop()
    name2: string

    @Prop()
    name3: string

    @Prop()
    username: string

    @Prop()
    password: string
}

export const UserSchema = SchemaFactory.createForClass(User)