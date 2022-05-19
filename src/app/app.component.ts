import { Component, OnInit } from '@angular/core';

import {Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  brand: string = '';

  constructor(private router:Router , private activatedRoute:ActivatedRoute) {

  }

  ngOnInit(): void {
     }

  title = 'JK Tech 123';

  userStatus = 'user';

  updateTitle(title:any) {
    debugger;
    this.title = title;
  }

  updatHandlr(value:any) {
    this.userStatus = value;
  }

  goToUserModule(type:string) {
    debugger;
    this.brand = this.activatedRoute.snapshot.params['brand'];
    type === 'user' ? this.router.navigate(['/user']) : this.router.navigate(['/jk']);
    // if(type === 'user') {
    //   console.log('called');
    //   this.router.navigate(['/user'])
    // } else {
    //   this.router.navigate(['/jk'])

    // }

  }

}
