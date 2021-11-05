import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import { UsersModule } from './users/users.module';
import { ThemesModule } from './themes/themes.module';
import { DefinitionsModule } from './definitions/definitions.module';
import { FormulasModule } from './formulas/formulas.module';
import { ExamplesModule } from './examples/examples.module';
import { TestsModule } from './tests/tests.module';
import { AuthModule } from './auth/auth.module';
import {AppController} from "./app.controller";

@Module({
  imports: [MongooseModule.forRoot("mongodb://localhost:27017/users"),
    UsersModule,
    ThemesModule,
    DefinitionsModule,
    FormulasModule,
    ExamplesModule,
    TestsModule,
    AuthModule
  ],
  controllers: [AppController]
})
export class AppModule {}
