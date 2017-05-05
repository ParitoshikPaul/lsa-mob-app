import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CategoryService {
  constructor(public http: Http) {
  }
 load() {
  return  this.http.get('http://devlsa.paulson.co.in/?q=apiv1/lst_bsns_cat')
      .map(res => res.json());
 }
  
}
