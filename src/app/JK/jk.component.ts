// Write logic - Done
// create unique name of this component logic

import { Component } from "@angular/core";


@Component({
  selector:'app-jk-jk1',
  templateUrl:'./jk.component.html',
  styleUrls:['./jk.component.css']  
})

export class JkComponent {

  Status:boolean = false;

  sampletext: string = 'pending';

  searchText: string = '';

  items = [{
    name:'One',
    sampletext:'Pending'
  },
  {
    name:'Two',
    sampletext:'Approved'
  },
  {
    name:'Three',
    sampletext:'Pending'
  }]

  title = 'Nice Students';

  updateStatus() {
    this.Status = false;
  }

  aaa() {
    this.sampletext = 'Approved';
    console.log('called')
  }

  getColor() {
    return this.sampletext === 'Approved' ? 'green' : 'red';
  }

  updateTitlehandler(response : any) {
    debugger;
    console.log(response.target.value);
    this.title = response.target.value;
  }

  statusHandler(value:any) {
    debugger;
    console.log(value);
  }
  
}