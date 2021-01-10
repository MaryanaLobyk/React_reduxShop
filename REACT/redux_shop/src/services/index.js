import {ProductService} from "./product-service";
import {httpClient} from "./htttp-client";

export const services = {
    productService: new ProductService(httpClient)
}