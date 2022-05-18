import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(private http:HttpClient) { }

  fetchArticles(leavetype : string,leaveDays : Number) {
    this.http.post('https://jktech-602dc-default-rtdb.firebaseio.com/leaves.json' , {
      name:'Sample Name',
      type: leavetype,
      days: leaveDays
    }).subscribe(x => {
      console.log(x);
    });
  }

  fetchPost() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
