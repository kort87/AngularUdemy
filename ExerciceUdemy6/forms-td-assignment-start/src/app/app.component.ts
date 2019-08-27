import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', {static: true}) subscriptionForm: NgForm;
  defaultSubscription = 'advanced';
  subsInfo = {
    email: '',
    subscription: ''
  };

  onSubmit() {
    this.subsInfo.email = this.subscriptionForm.value.email;
    this.subsInfo.subscription = this.subscriptionForm.value.subscription;
    this.subscriptionForm.reset({subscription: this.defaultSubscription});
  }
}
