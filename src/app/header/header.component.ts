import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() titleName:any = '';

  @Input() userType:any = '';

  @Output() updateTitleChild = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    // this.updateTitleChild.emit(this.titleName)
  }

  updateTitle(value: string) {
    this.updateTitleChild.emit(value)
  }

  // updateTitle() {
  //   this.titleName = 'JK Tech'
  // }

}
