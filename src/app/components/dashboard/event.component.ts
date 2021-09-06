import { Component, Input, OnInit } from "@angular/core";
import { Event } from "src/app/event.model";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})

export class EventComponent implements OnInit {
  title = '';
  @Input() event: Event;

  constructor() {

  }
  ngOnInit() {
    // aqui recomienda hacer llamada a servicios de datos
    console.log('--ngOnInit');
  }
}