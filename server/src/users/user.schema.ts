import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export type UserDocument = User & Document

@Schema()
export class User {
    @Prop({ required: true })
    name1: string

    @Prop({ required: true })
    name2: string

    @Prop({ required: true })
    name3: string

    @Prop({ required: true })
    username: string

    @Prop({ required: true })
    password: string

    @Prop({
        default: 0
    })
    fullProgress: number

    @Prop({
        default: []
    })
    progress: Progress[]
}

export const UserSchema = SchemaFactory.createForClass(User)

class Progress {
    name: string
    progress: number
}