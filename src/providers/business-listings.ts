import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class BusinessLists {
  public data: any;
  constructor(public http: Http) {
  }
 load(tid) {
  return  this.http.get('http://devlsa.paulson.co.in/?q=apiv1/business/'+tid)
      .map(res => res.json());
}
   load_detail(nid) {
  return  this.http.get('http://devlsa.paulson.co.in/?q=apiv1/content/'+nid)
      .map(res => res.json());
}
}
