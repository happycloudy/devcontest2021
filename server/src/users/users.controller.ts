import {Body, Controller, Get, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Get()
    getAllUsers(){
        return this.userService.findAll()
    }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto): Promise<string>{
        await this.userService.create(createUserDto)
        return `User ${createUserDto.username} was created`
    }
}
