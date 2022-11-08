import { Component, OnInit } from '@angular/core';
import { CatInfoService } from '../Service/cat-info.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {

  constructor(
    private catService: CatInfoService
  ) { }

  fetchRandomCatFact() {
    let catFactText = document.getElementById("cat-fact")!;
    this.catService.fetchRandomCatFact();
    catFactText.innerText = this.catService.randomCatFact.fact
  }

  dawaj() {
   let  mypromise = new Promise ((resolve, reject) => {
      this.catService.fetchCatsInfo();
      resolve(console.log("Cats are here"))
    })

    mypromise.then(() => {
      console.log(this.catService.catName + "timeout")
    })
  }


 
 

  ngOnInit(): void {
    this.catService.fetchRandomCatFact();
    this.dawaj()
  }
}
