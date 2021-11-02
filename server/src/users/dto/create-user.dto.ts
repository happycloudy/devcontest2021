export class CreateUserDto {
    readonly name1: string
    readonly name2: string
    readonly name3: string
    readonly username: string
    readonly password: string
    readonly fullProgress: number
    readonly progress: Progress[]
}

class Progress {
    readonly name : string
    readonly progress: number
}