import {Injectable} from '@nestjs/common';
import {User, UserDocument} from "./user.schema";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateProgressDto} from "./dto/update-progress.dto";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
    }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(createUserDto)
        return createdUser.save()
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec()
    }

    async findOne(id: string): Promise<User> {
        return this.userModel.findById(id)
    }

    async updateProgress(updateProgressDto: UpdateProgressDto): Promise<User> {
        const updatedUser = await this.userModel.findById(updateProgressDto.id)
        let findProgress = updatedUser.progress.find(progress => progress.name === updateProgressDto.name)

        if (findProgress) {
            let filteredProgress = updatedUser.progress.filter(progress => progress.name !== updateProgressDto.name)
            findProgress.progress = updateProgressDto.progress

            await updatedUser.updateOne({
                progress: [...filteredProgress, findProgress]
            })
        } else {
            await updatedUser.progress.push({
                name: updateProgressDto.name,
                progress: updateProgressDto.progress
            })
        }

        return await updatedUser.save()
    }

    async updateFullProgress(updateProgressDto: UpdateProgressDto): Promise<User> {
        const updatedUser = await this.userModel.findById(updateProgressDto.id)
        let fullProgress = updatedUser.progress.reduce((prev, curr) => prev+= curr.progress,0)

        // логика для расчета полного прогресса

        return await updatedUser.save()
    }
}
