export class UpdateThemeDto {
    readonly id: string
    readonly name: string
    readonly definitionsId: string[]
    readonly formulasId: string[]
    readonly examplesId: string[]
    readonly testsId: string[]
}