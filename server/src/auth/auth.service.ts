import { Injectable } from '@nestjs/common';
import {UsersService} from "../users/users.service";
import {User} from "../users/user.schema";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService,
                private jwtService: JwtService
    ) {}

    async validateUser(username: string, pass: string): Promise<User | null> {
        const user = await this.usersService.findOneByName(username);
        if (user && user.password === pass) {
            user.password = ''
            return user;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
            access_token: this.jwtService.sign(payload),
            user: user
        };
    }
}
