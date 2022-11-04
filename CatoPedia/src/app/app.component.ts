import { Component, OnInit } from '@angular/core';
import { CatInfoService } from './Service/cat-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  catInfo: any = [];

  constructor(
    private catService: CatInfoService
  ) {}

  catPromise = new Promise((resolve, reject) => {
    
  });

  ngOnInit(): void {
    this.catService.fetchCatsInfo();
    setTimeout(() => {
      this.catInfo = this.catService.allCats;
    console.log(this.catInfo)
    }, 2000);
  }
}
