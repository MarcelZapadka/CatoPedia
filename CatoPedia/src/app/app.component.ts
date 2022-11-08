import { Component, OnInit } from '@angular/core';
import { CatInfoService } from './Service/cat-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    private catService: CatInfoService
  ) {}
  
  
  ngOnInit(): void {
    this.catService.fetchRandomCatFact()
  }
}
