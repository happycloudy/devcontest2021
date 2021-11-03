import {ApiProperty} from "@nestjs/swagger";

export class CreateThemeDto {
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