import { Component, OnInit, Input,
          ViewEncapsulation, OnChanges, SimpleChanges,
          DoCheck, AfterContentInit, AfterContentChecked,
          AfterViewInit, AfterViewChecked, OnDestroy,
          ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent
  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: {type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log('Constructor called!');
  }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('Text content: ' + this.header.nativeElement.textContent);
    console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
    console.log('Text content: ' + this.header.nativeElement.textContent);
    console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
    console.log('Text content: ' + this.header.nativeElement.textContent);
    console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    console.log('OnDestroy called!');
  }
}
