import {Connection} from "typeorm";
import {BrandOrm} from "../entity/brand.orm";
import {CategoryOrm} from "../entity/category.orm";
import {ProviderOrm} from "../entity/provider.orm";
import {ProductOrm} from "../entity/product.orm";
import {ClientOrm} from "../entity/client.orm";
import {ProductTransactionOrm} from "../entity/product.transaction.orm";
import {UserOrm} from "../entity/user.orm";


export const brandProviders = [
    {
        provide: 'BRAND_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(BrandOrm),
        inject: ['DATABASE_CONNECTION'],
    }
];

export const categoryProviders = [
    {
        provide: 'CATEGORY_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(CategoryOrm),
        inject: ['DATABASE_CONNECTION'],
    }
];

export const providerProviders = [
    {
        provide: 'PROVIDER_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(ProviderOrm),
        inject: ['DATABASE_CONNECTION'],
    }
];

export const productProviders =[
    {
        provide: 'PRODUCT_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(ProductOrm),
        inject: ['DATABASE_CONNECTION'],
    }
]

export const productTransactionProviders = [
    {
        provide: 'PRODUCT_TRANSACTION_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(ProductTransactionOrm),
        inject: ['DATABASE_CONNECTION'],
    }
];

export const clientProviders = [
    {
        provide: 'CLIENT_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(ClientOrm),
        inject: ['DATABASE_CONNECTION'],
    }
];

export const userProviders = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(UserOrm),
        inject: ['DATABASE_CONNECTION'],
    }
];