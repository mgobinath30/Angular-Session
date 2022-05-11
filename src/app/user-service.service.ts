import { Injectable } from '@angular/core';

import { LeaveServiceService } from './service/leave-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  name:string = 'Apple';
  name1:string = 'Apple 1';

  constructor(private leaveServiceService:LeaveServiceService) { }

  updateName(value:any) {
    debugger;
    this.name1 = value;
  }
}
