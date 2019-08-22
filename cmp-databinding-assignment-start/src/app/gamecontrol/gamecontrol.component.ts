import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  gameCounter = 0;
  eventFired = new EventEmitter<number>();
  incrementRef: any;
  constructor() { }

  ngOnInit() {
  }

  onIncrementCounter() {
    this.incrementRef = setInterval(() => this.play(), 1000);
  }

  play() {
    console.log(this.gameCounter++);
    this.eventFired.emit(this.gameCounter);
  }
  onStopGame() {
    clearInterval(this.incrementRef);
  }
}
