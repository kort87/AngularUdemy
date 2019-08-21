import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDisplayed = false;
  displayingArray: string[] = [];
  displayCount = 0;

  onDisplay() {
    this.isDisplayed = true;
    this.displayingArray.push('Le paragraphe a été demandé à ' + Date.now() + ' pour la ' + (++this.displayCount) + 'ème fois.');
  }

  getBackgroundColor(index) {
    console.log(index);
    if (index >= 4) {
      return 'blue';
    } else {
      return 'white';
    }
  }

  hasTooManyMessages(index) {
    console.log(index);
    return index >= 4;
  }
}
