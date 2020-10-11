import {Connection, MongoRepository} from "typeorm";
import {BrandRepository} from "../repositories/brand.repository";
import {CategoryRepository} from "../repositories/category.repository";
import {ProviderRepository} from "../repositories/provider.repository";
import {ProductRepository} from "../repositories/product.repository";
import {ProviderOrm} from "../database/entity/provider.orm";


export interface IUnitOfWork{

    //REPOSITORIES
    brandRepository: BrandRepository;
    categoryRepository: CategoryRepository;
    providerRepository: ProviderRepository;
    productRepository: ProductRepository;

    start(): void;
    complete(work: () => any): Promise<any>;
    getConnection(): Connection;
    closeConnection();
}