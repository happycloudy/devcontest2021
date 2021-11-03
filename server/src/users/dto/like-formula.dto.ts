import {ApiProperty} from "@nestjs/swagger";

export class LikeFormulaDto {
    @ApiProperty()
    readonly userId: string
    @ApiProperty()
    readonly formulaId: string
}