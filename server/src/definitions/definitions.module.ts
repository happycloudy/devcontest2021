import { Module } from '@nestjs/common';
import { DefinitionsController } from './definitions.controller';
import { DefinitionsService } from './definitions.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Definition, DefinitionsSchema} from "./definitions.schema";

@Module({
  controllers: [DefinitionsController],
  providers: [DefinitionsService],
  imports: [MongooseModule.forFeature([{name: Definition.name, schema: DefinitionsSchema}])],
  exports: [DefinitionsService]
})
export class DefinitionsModule {}
