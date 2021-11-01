import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import { UsersModule } from './users/users.module';
import { ThemesModule } from './themes/themes.module';
import { DefinitionsModule } from './definitions/definitions.module';
import { FormulasModule } from './formulas/formulas.module';
import { ExamplesModule } from './examples/examples.module';
import { TestsModule } from './tests/tests.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb://localhost:27017/users"), UsersModule, ThemesModule, DefinitionsModule, FormulasModule, ExamplesModule, TestsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
