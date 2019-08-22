import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Rsvp} from './Rsvp'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';
  model = new Rsvp('','','');

  processForm(form: NgForm){

    const name = form.controls["name"].value;
    const email = form.controls["email"].value;
    const phone = form.controls["phone"].value;
    const attending = form.controls["attending"].value;
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(attending);
  }

  resetForm(form: NgForm){
    form.reset();
  }
}
