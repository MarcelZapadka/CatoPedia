import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({providedIn: 'root'})
export class CatInfoService {
    allCats: any = []

    constructor(
        private http: HttpClient,
    ) {}

    //fetch all cats info
    fetchCatsInfo() {
        const header = new HttpHeaders().set('x-api-key' , 'live_QsczSa4NsqG8yZiUShaXZfYWfW4k6LZsN1MCEdxVSungCF1jmhR1WL37EgfcS6h1');
        return this.http.get('https://api.thecatapi.com/v1/images/search?limit=1&has_breeds=1', {'headers': header}).subscribe((response) => {
        console.log(response)
        this.allCats = response;
    })
    }
} 
