import { Module } from '@nestjs/common';
import { ExamplesController } from './examples.controller';
import { ExamplesService } from './examples.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Example, ExampleSchema} from "./example.schema";

@Module({
  controllers: [ExamplesController],
  providers: [ExamplesService],
  imports: [MongooseModule.forFeature([{name: Example.name, schema: ExampleSchema}])]
})
export class ExamplesModule {}
