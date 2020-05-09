import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ListOfOptions = ['Basic', 'Advanced', 'Pro'];
  DefaultSubscription = 1;
  SubmittedFormValue: Object;

  @ViewChild('MainForm') submittedForm: NgForm;
  OnSubmit() {
    this.SubmittedFormValue = this.submittedForm.value;
  }
}
