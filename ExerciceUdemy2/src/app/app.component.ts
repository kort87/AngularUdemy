import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username = '';

  onResetUsername() {
    this.username = '';
  }

  isUsernameEmpty() {
    return this.username === '';
  }
}
