export class ProductService{
    constructor(httpClient) {
        this.api = httpClient;
        this.baseUrl = 'https://fakestoreapi.com/products'
    }
    getProducts(){
        return this.api.get(this.baseUrl)
    }
}