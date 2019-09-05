import { Component } from '@angular/core';
import { Server }  from './server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('stable');
    }, 2000);
  });
  servers = [
    new Server(
      'medium',
      'Production',
      'stable',
      new Date(15, 1, 2017)
    ),
    new Server(
      'large',
      'User Database',
      'stable',
      new Date(15, 1, 2017)
    ),
    new Server(
      'small',
      'Development Server',
      'offline',
      new Date(15, 1, 2017)
    ),
    new Server(
      'small',
      'Testing Environment Server',
      'stable',
      new Date(15, 1, 2017)
    )
  ];
  filteredStatus = '';
  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }
  onAddServer() {
    this.servers.push({
      instanceType: 'small',
      name: 'New Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    });
  }
}
