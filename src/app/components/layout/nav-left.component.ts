import { Component } from "@angular/core";

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.scss']
})

export class NavLeftComponent {
  menuitems = [
    {
      id: 1,
      name: 'Inicio',
      icon: 'home',
      url: '/',
    },
    {
      id: 2,
      name: 'Horario',
      icon: 'calendar',
      url: '#',
    },
    {
      id: 3,
      name: 'Mis pagos',
      icon: 'dollar-sign',
      url: '#',
    },
    {
      id: 4,
      name: 'Record Académico',
      icon: 'graduation-cap',
      url: '#',
    },
    {
      id: 5,
      name: 'Historial de cursos',
      icon: 'folder-open',
      url: '#',
    },
    {
      id: 6,
      name: 'Documentos Académicos',
      icon: 'file',
      url: '#',
    },
  ];
}
