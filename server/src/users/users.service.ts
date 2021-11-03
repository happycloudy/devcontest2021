import {Injectable} from '@nestjs/common';
import {User, UserDocument} from "./user.schema";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateProgressDto} from "./dto/update-progress.dto";
import {LikeFormulaDto} from "./dto/like-formula.dto";
import {FormulasService} from "../formulas/formulas.service";
import {ThemesService} from "../themes/themes.service";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,
                private formulasService: FormulasService,
                private themeService: ThemesService
                ) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(createUserDto)
        return createdUser.save()
    }

    async findAll(): Promise<User[]> {
        const users = await this.userModel.find()
        for (let user of users){
            await this.includeDeps(user)
        }

        return users
    }

    async findOne(id: string): Promise<User> {
        const user = await this.userModel.findById(id)
        await this.includeDeps(user)
        return user
    }

    async includeDeps(user: User): Promise<User> {
        user.likedFormulas = await Promise.all(user.likedFormulasId.map(async id => {
            return await this.formulasService.findOne(id)
        }))
        user.likedFormulas = user.likedFormulas.indexOf(null) != -1 ? [] : user.likedFormulas
        return user
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

    async updateFullProgress(updateProgressDto: UpdateProgressDto): Promise<number> {
        let updatedUser = await this.userModel.findById(updateProgressDto.id)
        let sumProgress = updatedUser.progress.reduce((prev, {progress}) => prev += progress, 0)
        let fullPercentProgress = await this.themeService.count()
        let fullProgress = sumProgress/fullPercentProgress

        updatedUser = await this.userModel.findByIdAndUpdate(updateProgressDto.id, {
            fullProgress: fullProgress
        })

        await updatedUser.save()
        return fullProgress
    }

    async addFormulaToLiked(likeFormulaDto: LikeFormulaDto): Promise<User | string> {
        if (!(likeFormulaDto.userId && likeFormulaDto.formulaId)) {
            return "Wrong dto"
        }

        const updatedUser = await this.userModel.findById(likeFormulaDto.userId)

        const isExists = updatedUser.likedFormulasId.find(id => id === likeFormulaDto.formulaId)
        if(isExists){
            return "Formula already added"
        }
        if(!(await this.formulasService.checkIsAvailable(likeFormulaDto.formulaId))){
            return "Formula not available"
        }

        updatedUser.likedFormulasId.push(likeFormulaDto.formulaId)
        return updatedUser.save()
    }

    async removeFormulaFromLiked(likeFormulaDto: LikeFormulaDto): Promise<User | string> {
        if (!(likeFormulaDto.userId && likeFormulaDto.formulaId)) {
            return "Wrong dto"
        }

        const updatedUser = await this.userModel.findById(likeFormulaDto.userId)

        const isExists = updatedUser.likedFormulasId.find(id => id === likeFormulaDto.formulaId)
        if(!isExists){
            return "Formula not found"
        }

        updatedUser.likedFormulasId = updatedUser.likedFormulasId.filter(formula => likeFormulaDto.formulaId !== formula)

        return updatedUser.save()
    }
}
