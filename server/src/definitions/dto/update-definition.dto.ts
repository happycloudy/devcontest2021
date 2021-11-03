import {ApiProperty} from "@nestjs/swagger";

export class UpdateDefinitionDto{
    @ApiProperty()
    readonly id: string
    @ApiProperty()
    readonly name: string
    @ApiProperty()
    readonly description: string
}