import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  disableOverflowX() {
    document.body.style.overflowX = "hidden";
  }
  
  
  ngOnInit(): void {
    this.disableOverflowX();
  }
}
