import {Body, Controller, Get, Param, Patch, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateProgressDto} from "./dto/update-progress.dto";

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

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto): Promise<string> {
        await this.userService.create(createUserDto)
        return `User ${createUserDto.username} was created`
    }

    @Patch('updateProgress')
    async updateProgress(@Body() updateProgressDto: UpdateProgressDto){
        let user = await this.userService.updateProgress(updateProgressDto)
        await this.userService.updateFullProgress(updateProgressDto)
        return `Progress of user ${user} has been updated`
    }
}
