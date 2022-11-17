import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class CatInfoService {

    fetchCatsInfo() {
        return new Promise<void>((resolve, reject) => {
            fetch('https://api.thecatapi.com/v1/images/search?limit=100&has_breeds=1', {headers: {'x-api-key': 'live_QsczSa4NsqG8yZiUShaXZfYWfW4k6LZsN1MCEdxVSungCF1jmhR1WL37EgfcS6h1'} })
            .then(response => response.json())
            .then(response => resolve(response))
        })
    }

    fetchCatfact() {
       return new Promise((resolve, reject) => {
            fetch('https://catfact.ninja/fact?max_length=120')
            .then(response => response.json())
            .then(response => resolve(response))
        })
    }
} 
