import {ApiProperty} from "@nestjs/swagger";

class Progress {
    readonly name : string

    readonly progress: number
}

export class CreateUserDto {
    @ApiProperty()
    readonly name1: string
    @ApiProperty()
    readonly name2: string
    @ApiProperty()
    readonly name3: string
    @ApiProperty()
    readonly username: string
    @ApiProperty()
    readonly password: string
    @ApiProperty()
    readonly fullProgress: number
    @ApiProperty({readOnly: true})
    readonly progress: Progress[]
}

