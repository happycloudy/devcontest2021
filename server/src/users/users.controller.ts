import {Body, Controller, Get, Param, Patch, Post, UseGuards} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateProgressDto} from "./dto/update-progress.dto";
import {User} from "./user.schema";
import {LikeFormulaDto} from "./dto/like-formula.dto";
import {ApiBody} from "@nestjs/swagger";
import {Public} from "../public.decorator";

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {
    }

    @Get()
    getAllUsers() {
        return this.userService.findAll()
    }

    @Get(':id')
    getOne(@Param('id') id: string) {
        return this.userService.findOne(id)
    }

    @Public()
    @Post()
    @ApiBody({type: CreateUserDto})
    async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        return await this.userService.create(createUserDto)
    }

    @Patch('updateProgress')
    @ApiBody({type: UpdateProgressDto})
    async updateProgress(@Body() updateProgressDto: UpdateProgressDto): Promise<number>{
        await this.userService.updateProgress(updateProgressDto)
        return await this.userService.updateFullProgress(updateProgressDto)
    }

    @Patch('likeFormula')
    @ApiBody({type: LikeFormulaDto})
    async addFormulaToLiked(@Body() likeFormulaDto: LikeFormulaDto): Promise<User | string>{
        return this.userService.addFormulaToLiked(likeFormulaDto)
    }

    @Patch('unlikeFormula')
    @ApiBody({type: LikeFormulaDto})
    async removeFormulaFromLiked(@Body() likeFormulaDto: LikeFormulaDto): Promise<User | string>{
        return this.userService.removeFormulaFromLiked(likeFormulaDto)
    }
}
