import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html'
})
export class FeedbackPage {

  menu = false;
  feedback: FormGroup;
  name: CharacterData;

  constructor(public navCtrl: NavController,  public _form: FormBuilder) {
       
  this.feedback = this._form.group({
   "name": ["", Validators.required], 
   "email": ["", Validators.required],
   "rating":["", Validators.required],
   "message":["", Validators.required]
  });

  }

  ratings($event){
    console.log($event);
  }

  post_feedback($event){
    console.log('hello');
  }
}
