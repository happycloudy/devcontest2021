import {Module} from '@nestjs/common';
import {UsersController} from './users.controller';
import {UsersService} from './users.service';
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "./user.schema";
import {FormulasModule} from "../formulas/formulas.module";
import {ThemesModule} from "../themes/themes.module";

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [
        MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
        FormulasModule,
        ThemesModule
    ]
})
export class UsersModule {
}
