import { Component, OnInit } from '@angular/core';
import { CatInfoService } from '../Service/cat-info.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {

  isCatStrangerFriendly: string | number = ''
  catSocialNeeds: string | number = ''
  catAdaptability: number | string = ''
  catHealthIssues: string | number = ''
  catWeightImperial: string = ''
  catIntelligence: number | string = ''
  isCatChildFriendly: string | number = ''
  catAffectionLevel: string | number = '';
  catOrigin: string = '';
  catImageUrl: string = '';
  allCats: any = [];
  filteredCats: any = [];
  catDescription: string = '';
  catWeightMetric: string = '';
  catName: string = '';
  catTemperament: string = '';
  catLifeSpan: string = '';
  catWikiLink: string = '';
  
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
    this.allCats = catInfo;
    this.filteredCats = [...this.allCats.reduce((map: any, obj: any) => map.set(obj.breeds[0].id, obj), new Map()).values()];
    console.log(this.filteredCats);
  }
  
  displayCatInfo() {
    for (let i = 0; i < 60; i++ ) {
      let catCardId = document.getElementById("cat-card-" + i);
      let overlay = document.getElementById("overlay")!;
      let catPopUp = document.getElementById("cat-popup");
      catCardId?.addEventListener("click", () => {
      this.catName = this.filteredCats[i].breeds[0].name;
      this.catWeightMetric = this.filteredCats[i].breeds[0].weight.metric;
      this.catDescription = this.filteredCats[i].breeds[0].description;
      this.catTemperament = this.filteredCats[i].breeds[0].temperament;
      this.catLifeSpan = this.filteredCats[i].breeds[0].life_span;
      this.catImageUrl = this.filteredCats[i].url;
      this.catOrigin = this.filteredCats[i].breeds[0].origin;
      this.catIntelligence = this.filteredCats[i].breeds[0].intelligence;
      this.isCatChildFriendly = this.filteredCats[i].breeds[0].child_friendly;
      this.catAffectionLevel = this.filteredCats[i].breeds[0].affection_level;
      this.catWeightImperial = this.filteredCats[i].breeds[0].weight.imperial;
      this.catHealthIssues = this.filteredCats[i].breeds[0].health_issues;
      this.catAdaptability = this.filteredCats[i].breeds[0].adaptability;
      this.catSocialNeeds = this.filteredCats[i].breeds[0].social_needs;
      this.isCatStrangerFriendly = this.filteredCats[i].breeds[0].stranger_friendly;
      this.catWikiLink = this.filteredCats[i].breeds[0].wikipedia_url;
      this.displayAdditionalCatInfo();
      overlay.classList.add("active");
      catPopUp?.classList.add("active");

      })
    }
  }

  displayAdditionalCatInfo() {
    switch (
      this.catIntelligence,
      this.catAffectionLevel,
      this.isCatChildFriendly,
      this.catHealthIssues,
      this.catAdaptability,
      this.isCatStrangerFriendly,
      this.catSocialNeeds) {
      case 1:
      case 2:
        this.catIntelligence = "Low";
        this.catAffectionLevel = "Low";
        this.isCatChildFriendly = "Unfriendly";
        this.catHealthIssues = "Very rarely";
        this.catAdaptability = "Low";
        this.isCatStrangerFriendly = "Distrustful"
        this.catSocialNeeds = "Low"
        break;
      case 3:
        this.catIntelligence = "Medium";
        this.catAffectionLevel = "Medium";
        this.isCatChildFriendly = "Neutral";
        this.catHealthIssues = "Sometimes";
        this.catAdaptability = "Medium";
        this.isCatStrangerFriendly = "Neutral"
        this.catSocialNeeds = "Medium"
        break;
      case 4:
      case 5:
        this.catIntelligence = "High";
        this.catAffectionLevel = "High";
        this.isCatChildFriendly = "Friendly";
        this.catHealthIssues = "Very often";
        this.catAdaptability = "High";
        this.isCatStrangerFriendly = "Friendly"
        this.catSocialNeeds = "High"
        break;
    }
  }

  hideCatInfo() {
    let overlay = document.getElementById("overlay")!;
    let catPopUp = document.getElementById("cat-popup");
    overlay.classList.remove("active");
    catPopUp?.classList.remove("active");
  }

  ngOnInit(): void {
  this.getCatsInfo();
  this.getCatFact();
  }
}
