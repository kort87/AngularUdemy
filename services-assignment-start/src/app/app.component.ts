import { Component, OnInit, EventEmitter } from '@angular/core';
import { UserService } from './shared/services/user.service';
import { CounterService } from './shared/services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeUsers: string[];
  inactiveUsers: string[];
  statusChangeCounter = 0;

  constructor(private usrSrv: UserService, private counterService: CounterService) {}

  ngOnInit() {
    this.activeUsers = this.usrSrv.activeUsers;
    this.inactiveUsers = this.usrSrv.inactiveUsers;
    this.counterService.counterUpdated.subscribe(
      (counter: number) => this.statusChangeCounter = counter
    );
  }

  onSetToInactive(id: number) {
    this.usrSrv.setToInactive(id);
  }

  onSetToActive(id: number) {
    this.usrSrv.setToActive(id);
  }
}
