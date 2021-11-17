import {Module} from '@nestjs/common';
import {UsersController} from './users.controller';
import {UsersService} from './users.service';
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "./user.schema";
import {FormulasModule} from "../formulas/formulas.module";
import {ThemesModule} from "../themes/themes.module";
import {JwtModule} from "@nestjs/jwt";

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [
        MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
        FormulasModule,
        ThemesModule,
        JwtModule.register({})
    ],
    exports: [UsersService]
})
export class UsersModule {
}
