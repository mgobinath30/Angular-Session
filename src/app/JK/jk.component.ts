// Write logic - Done
// create unique name of this component logic

import { Component, OnDestroy, OnInit  } from "@angular/core";

import { HttpClient} from "@angular/common/http";

import { map } from 'rxjs/operators';

import { FirebaseServiceService} from '../firebase-service.service';
import { Router , ActivatedRoute ,Params } from '@angular/router';

import { Subscription } from "rxjs";

@Component({
  selector:'app-jk-jk1',
  templateUrl:'./jk.component.html',
  styleUrls:['./jk.component.css']  
})

export class JkComponent implements OnInit , OnDestroy {

  leavetype = '';
  leaveDays = 0;

  brand : any;

  paramsSubscripe : any;

  constructor(private http:HttpClient , private firabse:FirebaseServiceService,private route: ActivatedRoute , private router: Router ) {

  }

  ngOnInit(): void {
    console.log('ngOnInit');

    this.brand = this.route.snapshot.params['id'];

    console.log(this.route.snapshot.queryParams['price'])
  
    console.log(this.route.snapshot.fragment)

    this.paramsSubscripe = this.route.params.subscribe(
      (Params: Params) => {
        this.brand = Params['id'];
      }
    )
    console.log(this.brand);
    // this.getArticlesHandler();
  }

  goTo() {
    console.log('called');
    this.router.navigate(['/jk','samsung'],{
      queryParams: {price:'20K'},
      fragment:'loaded'
    }
    )
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    // this.paramsSubscripe.unSubscribe();
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
    this.firabse.fetchPost().subscribe(data => console.log(data));
    // this.firabse.fetchArticles('11',0)
  }


  getLeaveLogs() {
    console.log('called');
    this.http.get('https://jktech-602dc-default-rtdb.firebaseio.com/leaves.json')
    .pipe(map((data:any) => {
      const leaveLogs = [];

      for(let key in data) {
        if(data.hasOwnProperty(key)){
         leaveLogs.push(data[key])
        }
      }
    }))
    
    .subscribe(response => {
      console.log(response);
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