import { Component, OnInit } from '@angular/core';
import { CatInfoService } from '../Service/cat-info.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {

  cats: any = [];
  uniqeCats: any = [];

  constructor(
    private catService: CatInfoService,
  ) { }

  async getCatFact() {
    const catFactText: any = document.getElementById("cat-fact")!;
    const catFact:any =  await this.catService.fetchCatfact();
    catFactText.innerText = catFact.fact;
  }

  async getCatsInfo() {
    const catInfo = await this.catService.fetchCatsInfo();
    this.cats = catInfo;
    this.uniqeCats = [...this.cats.reduce((map: any, obj: any) => map.set(obj.breeds[0].name, obj), new Map()).values()];
    console.log(this.uniqeCats);
  }
  
  displayCatInfo() {
    for (let i = 0; i < 10; i++ ) {
      let catCardId = document.getElementById("cat-card-" + i);
        catCardId?.addEventListener("click", () => {
        console.log(this.uniqeCats[i].breeds[0].name)
      })
    }
  }

  ngOnInit(): void {
  this.getCatsInfo();
  this.getCatFact();
  }
}
