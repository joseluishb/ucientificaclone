import { Component, Input, OnInit } from '@angular/core';
import { ScheduleItem } from 'src/app/scheduleitem.model';

@Component({
  selector: 'app-scheduleitem',
  templateUrl: './scheduleitem.component.html',
  styleUrls: ['./scheduleitem.component.scss']
})

export class ScheduleItemComponent implements OnInit{
  @Input() scheduleitem: ScheduleItem;

  ngOnInit() {
    // aqui recomienda hacer llamada a servicios de datos
    console.log('--ngOnInit');
  }
}
