import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({providedIn: 'root'})
export class CatInfoService {
    allCats: any = []
    randomCatFact: any = []

    constructor(
        private http: HttpClient,
    ) {}

    //fetch all cats info
     fetchCatsInfo() {
        const header = new HttpHeaders().set('x-api-key' , 'live_QsczSa4NsqG8yZiUShaXZfYWfW4k6LZsN1MCEdxVSungCF1jmhR1WL37EgfcS6h1');
        return this.http.get('https://api.thecatapi.com/v1/images/search?limit=1&has_breeds=1', {'headers': header}).subscribe((response) => {
        this.allCats = response;
    })
    }

    fetchRandomCatFact() {
        return this.http.get('https://catfact.ninja/fact').subscribe((response) => {
        this.randomCatFact = response
        console.log(response)
        })
    }
} 
