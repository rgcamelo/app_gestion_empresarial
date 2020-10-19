import {Body, Controller, Get, Post} from "@nestjs/common";
import {UnitOfWork} from "../infrastructure/unitOfWork/unitOfWork";
import {RegisterBrandRequest, RegisterBrandResponse, RegisterBrandService} from "../application/register.brand.service";
import {SearchBrandRequest, SearchBrandResponse, SearchBrandService} from "../application/search.brand.service";

@Controller('brand')
export class BrandController{

    constructor(private readonly _unitOfWork: UnitOfWork) {}

    @Post()
    async registerBrand(@Body() request: RegisterBrandRequest){
        const service: RegisterBrandService = new RegisterBrandService(this._unitOfWork);
        const response: RegisterBrandResponse = await service.execute(request);
        return response.message;
    }

    @Get()
    async searchBrand(@Body() request: SearchBrandRequest){
        const service: SearchBrandService = new SearchBrandService(this._unitOfWork);
        return await service.execute(request);
    }

}