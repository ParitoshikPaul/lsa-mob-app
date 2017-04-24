import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

export const CATEGORIES = [];

@Injectable()
export class CategoryService {
  public data: any;
  categories: string[];
  constructor(public http: Http) {
  }
 load() {
  return  this.http.get('http://devlsa.paulson.co.in/?q=apiv1/category')
      .map(res => res.json());
}
  
}
