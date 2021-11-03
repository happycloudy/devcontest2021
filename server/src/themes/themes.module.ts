import { Module } from '@nestjs/common';
import { ThemesService } from './themes.service';
import { ThemesController } from './themes.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Theme, ThemeSchema} from "./themes.schema";
import {DefinitionsModule} from "../definitions/definitions.module";
import {FormulasModule} from "../formulas/formulas.module";
import {ExamplesModule} from "../examples/examples.module";
import {TestsModule} from "../tests/tests.module";

@Module({
  providers: [ThemesService],
  controllers: [ThemesController],
  imports: [
      MongooseModule.forFeature([{name: Theme.name, schema: ThemeSchema}]),
      DefinitionsModule,
      FormulasModule,
      ExamplesModule,
      TestsModule
  ],
    exports: [ThemesService]
})
export class ThemesModule {}
