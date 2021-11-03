import {ApiProperty} from "@nestjs/swagger";

export class UpdateProgressDto{
    @ApiProperty()
    readonly id: string
    @ApiProperty()
    readonly name: string
    @ApiProperty()
    readonly progress: number
}