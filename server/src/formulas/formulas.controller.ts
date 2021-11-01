import {Body, Controller, Get, Post} from '@nestjs/common';
import {FormulasService} from "./formulas.service";
import {CreateFormulaDto} from "./dto/create-formula.dto";

@Controller('formulas')
export class FormulasController {
    constructor(private formulaService: FormulasService) {}

    @Get()
    findAll() {
        return this.formulaService.findAll()
    }

    @Post()
    async create(@Body() createFormulaDto: CreateFormulaDto){
        await this.formulaService.create(createFormulaDto)
        return `Formula ${createFormulaDto.name} has been created`
    }
}
