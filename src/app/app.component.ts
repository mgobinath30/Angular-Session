import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'JK Tech 123';

  userStatus = 'user';

  updateTitle(title:any) {
    debugger;
    this.title = title;
  }

  updatHandlr(value:any) {
    this.userStatus = value;
  }

}
