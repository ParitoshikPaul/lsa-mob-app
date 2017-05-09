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
   load_product_cat() {
  return  this.http.get('http://devlsa.paulson.co.in/?q=apiv1/product_cat')
      .map(res => res.json());
 }
  load_event_cat() {
  return  this.http.get('http://devlsa.paulson.co.in/?q=apiv1/event_cat')
      .map(res => res.json());
 }
  load_sub_cat(tid) {
  return  this.http.get('http://devlsa.paulson.co.in/?q=apiv1/sub_cat/'+tid)
      .map(res => res.json());
 }
}
 