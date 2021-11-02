import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export type TestDocument = Test & Document

@Schema()
export class Test {
    @Prop()
    name: string

    @Prop()
    tasks: Task[]
}

export const TestSchema = SchemaFactory.createForClass(Test)

class Task {
    task: string

    answer1: string

    answer2: string

    answer3: string

    answer4: string
}