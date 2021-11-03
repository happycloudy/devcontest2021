export class UpdateTestDto {
    readonly id: string
    readonly name: string
    readonly tasks: Task[]
}

class Task {
    readonly task: string
    readonly answer1: string
    readonly answer2: string
    readonly answer3: string
    readonly answer4: string
}