import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  public brand: any;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    // this.brand = this.activatedRoute.snapshot.params['id'];

    this.route.paramMap.subscribe(params => {
      console.log(params)
})
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
    // type === 'user' ? this.router.navigate(['/user']) : this.router.navigate(['/jk']);
    // if(type === 'user') {
    //   console.log('called');
    //   this.router.navigate(['/user'])
    // } else {
    //   this.router.navigate(['/jk'])

    // }

  }

}
