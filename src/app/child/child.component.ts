import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() childMessage: EventEmitter < string > = new EventEmitter < string > ();
    dataHandler() {
        this.childMessage.emit("Hello from child component....")
    }

}
