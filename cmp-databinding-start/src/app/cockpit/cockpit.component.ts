import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Server } from '../shared/server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<Server>();
  // tslint:disable-next-line:no-output-rename
  @Output('bpCreated') blueprintCreated = new EventEmitter<Server>();
  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverNameInput', {static: true}) serverNameInput: ElementRef;
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: string) {
    this.serverCreated.emit({
      serverName: nameInput,
      serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(nameInput: string) {
    this.blueprintCreated.emit({
      serverName: nameInput,
      serverContent: this.serverContentInput.nativeElement.value});
  }

  disableButtons(srvName: string, srvContent: string): boolean {
    const result = srvName === '' && srvContent === '';
    console.log(result);
    return result;
  }
}
