import {ApiProperty} from "@nestjs/swagger";

export class UpdateExampleDto {
    @ApiProperty()
    readonly id: string
    @ApiProperty()
    readonly name: string
    @ApiProperty()
    readonly example: string
}