import { Module } from '@nestjs/common';
import { TestsController } from './tests.controller';
import { TestsService } from './tests.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Test, TestSchema} from "./tests.schema";

@Module({
  controllers: [TestsController],
  providers: [TestsService],
  imports: [MongooseModule.forFeature([{name: Test.name, schema: TestSchema}])]
})
export class TestsModule {}
