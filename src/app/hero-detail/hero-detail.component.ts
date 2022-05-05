import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-detail',
  // templateUrl: './hero-detail.component.html',
  template:`<h1>HERO 
    Component</h1>
    `,
  // styleUrls: ['./hero-detail.component.css']
  styles:[' h1 { color:blue} ']
})
export class HeroDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
