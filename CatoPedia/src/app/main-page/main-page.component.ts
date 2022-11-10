import { Component, OnInit } from '@angular/core';
import { CatInfoService } from '../Service/cat-info.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {
    allCats: any = []

  constructor(
    private catService: CatInfoService,
  ) { }

  displayRandomCatFact() {
    let catFactText = document.getElementById("cat-fact")!;
    this.catService.fetchRandomCatFact();
    catFactText.innerText = this.catService.randomCatFact.fact
  }

  ngOnInit(): void {
    this.catService.fetchRandomCatFact();
  }
}
