import {Module} from "@nestjs/common";
import {ApplicationModule} from "../application/application.module";
import {InfrastructureModule} from "../infrastructure/infrastructure.module";
import {CategoryController} from "./category.controller";
import {BrandController} from "./brand.controller";
import {ProviderController} from "./provider.controller";
import {ProductController} from "./product.controller";
import {ProductInputController} from "./product.input.controller";
import {ProductOutputController} from "./product.output.controller";
import {ClientController} from "./client.controller";
import {UserController} from "./user.controller";

@Module({
    imports: [
        ApplicationModule,
        InfrastructureModule
    ],
    controllers: [
        CategoryController,
        BrandController,
        ProviderController,
        ProductController,
        ProductInputController,
        ProductOutputController,
        ClientController,
        UserController
    ]
})
export class ControllersModule{}