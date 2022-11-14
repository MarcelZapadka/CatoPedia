import { Component, OnInit } from '@angular/core';
import { CatInfoService } from '../Service/cat-info.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {
  
  filteredCatsInfo: any = []
  catsSet: any = new Set()

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
    this.filteredCatsInfo = catInfo

  
  }

 
  
  ngOnInit(): void {
  this.getCatsInfo();
  this.getCatFact()
  }
}

// Do zrobienia: opisać typy i zrobić interfejsy jeśli dam rade to ogarnąć (pray for this)
// Jeśli możliwe to zrobić destrukturyzacje obiektu z infromacjami o kotach
// Dokończyć aplikacje 
