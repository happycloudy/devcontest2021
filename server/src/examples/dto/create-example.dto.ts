import {ApiProperty} from "@nestjs/swagger";

export class CreateExampleDto {
    @ApiProperty()
    readonly name: string
    @ApiProperty()
    readonly example: string
}