// Write logic - Done
// create unique name of this component logic

import { Component, OnInit } from "@angular/core";

import { HttpClient} from "@angular/common/http";

@Component({
  selector:'app-jk-jk1',
  templateUrl:'./jk.component.html',
  styleUrls:['./jk.component.css']  
})

export class JkComponent implements OnInit {

  leavetype = '';
  leaveDays = 0;

  constructor(private http:HttpClient) {

  }

  ngOnInit(): void {
    // this.getArticlesHandler();
  }

  articles : any = [];

  Status:boolean = false;

  sampletext: string = 'pending';

  searchText: string = '';

  modelData : any;
  modelDataStatus : boolean = false;

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

  getArticlesHandler() {

    this.http.post('https://jksoft-a50c9-default-rtdb.firebaseio.com/leaves.json' , {
      name:'Sample Name',
      type: this.leavetype,
      days: this.leaveDays
    }).subscribe(x => {
      console.log(x);
      this.leaveDays = 0;
      this.leavetype = '';
      // this.articles = x;
    });
  }

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

  modelCOntent(item:any) {
    // debugger;
    // console.log(item);
    // this.modelDataStatus = true;
    // // Object.keys(item).length
    // this.modelData = item;
    alert(item.name);
  }
  
}