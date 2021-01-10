export class HttpClient{
    get(url){
        return fetch(url)
    }
}
export const httpClient = new HttpClient()