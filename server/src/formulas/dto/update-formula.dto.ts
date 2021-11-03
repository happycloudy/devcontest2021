import {ApiProperty} from "@nestjs/swagger";

export class UpdateFormulaDto {
    @ApiProperty()
    readonly id: string
    @ApiProperty()
    readonly name: string
    @ApiProperty()
    readonly formula: string
}