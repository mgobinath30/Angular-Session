import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import {UserServiceService} from '../user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: []
})
export class HeaderComponent implements OnInit {

  @Input() titleName:any = '';

  @Input() userType:any = '';

  @Output() updateTitleChild = new EventEmitter<string>();

  companyname : string = '';

  constructor(private user:UserServiceService) { }

  ngOnInit(): void {
    this.companyname = this.user.name1;
    // this.updateTitleChild.emit(this.titleName)
  }

  updateTitle(value: string) {
    this.updateTitleChild.emit(value)
  }

  updateTitle1(value: string) {
    this.user.updateName(value);
  }

  // updateTitle() {
  //   this.titleName = 'JK Tech'
  // }

}
