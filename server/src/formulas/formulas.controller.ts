import {Body, Controller, Get, Param, Patch, Post} from '@nestjs/common';
import {FormulasService} from "./formulas.service";
import {CreateFormulaDto} from "./dto/create-formula.dto";
import {UpdateFormulaDto} from "./dto/update-formula.dto";

@Controller('formulas')
export class FormulasController {
    constructor(private formulaService: FormulasService) {}

    @Get()
    async findAll() {
        return await this.formulaService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id: string){
        return await this.formulaService.findOne(id)
    }

    @Post()
    async create(@Body() createFormulaDto: CreateFormulaDto){
        console.log(createFormulaDto)
        return await this.formulaService.create(createFormulaDto)
    }

    @Patch()
    async updateOne(@Body() updateFormulaDto: UpdateFormulaDto){
        return await this.formulaService.updateOne(updateFormulaDto)
    }
}
