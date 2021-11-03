import {ApiProperty} from "@nestjs/swagger";

export class CreateTestDto {
    @ApiProperty()
    readonly name: string
    @ApiProperty()
    readonly tasks: Task[]
}

class Task {
    @ApiProperty()
    readonly task: string
    @ApiProperty()
    readonly answer1: string
    @ApiProperty()
    readonly answer2: string
    @ApiProperty()
    readonly answer3: string
    @ApiProperty()
    readonly answer4: string
}