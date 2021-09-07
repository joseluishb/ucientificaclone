import { Component } from "@angular/core";


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})

export class ScheduleComponent {

  scheduleitems = [
    {
      id: '1',
      curso: 'Realidad Nacional',
      seccion: '22F-TEO',
      horario: '18:10 - 19:45',
      fecha: '2021-09-06',
    },
    {
      id: '1',
      curso: 'Realidad Nacional',
      seccion: '22F1-PRA',
      horario: '19:45 - 21:15',
      fecha: '2021-09-06',
    },
  ];
}
