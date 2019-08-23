import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter = 0;
  counterUpdated = new EventEmitter<number>();

  constructor() { }

  IncrementCounter() {
    this.counter++;
    this.counterUpdated.emit(this.counter);
  }
}
