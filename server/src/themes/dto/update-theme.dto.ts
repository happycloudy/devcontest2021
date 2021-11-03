import {ApiProperty} from "@nestjs/swagger";

export class UpdateThemeDto {
    @ApiProperty()
    readonly id: string
    @ApiProperty()
    readonly name: string
    @ApiProperty()
    readonly definitionsId: string[]
    @ApiProperty()
    readonly formulasId: string[]
    @ApiProperty()
    readonly examplesId: string[]
    @ApiProperty()
    readonly testsId: string[]
}