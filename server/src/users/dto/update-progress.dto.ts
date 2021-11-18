import {ApiProperty} from "@nestjs/swagger";

export class UpdateProgressDto{
    @ApiProperty()
    readonly id: string
    @ApiProperty()
    readonly themeId: string
    @ApiProperty()
    readonly progress: number
}