import { Module } from '@nestjs/common';
import { ThemesService } from './themes.service';
import { ThemesController } from './themes.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Theme, ThemeSchema} from "./themes.schema";

@Module({
  providers: [ThemesService],
  controllers: [ThemesController],
  imports: [MongooseModule.forFeature([{name: Theme.name, schema: ThemeSchema}])]
})
export class ThemesModule {}
