import {ApiProperty} from "@nestjs/swagger";

export class CreateFormulaDto {
    @ApiProperty()
    readonly name: string
    @ApiProperty()
    readonly formula: string
}