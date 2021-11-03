import {ApiProperty} from "@nestjs/swagger";

export class CreateDefinitionDto{
    @ApiProperty()
    readonly name: string
    @ApiProperty()
    readonly description: string
}