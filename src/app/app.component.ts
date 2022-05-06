import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'JK Tech 1';

  updateTitle(title:any) {
    debugger;
    this.title = title;
  }

}
