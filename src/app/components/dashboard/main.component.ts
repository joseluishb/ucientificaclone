import { Component } from "@angular/core";
import { Event } from "src/app/event.model";

@Component({
  selector: 'app-main-dashb',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})

export class MainDashboardComponent {

  servicesSections = {
    serviceBiblio: {      
      title: 'Biblioteca online',
      description: 'Red de bibliotecas',
      image: '',
    },
    serviceBolsa: {
      title: 'Bolsa de trabajo',
      description: 'Trabajo y Prácticas',
      image: '',
    },
    serviceCorreo: {
      title: 'Mi correo',
      description: 'Buzón UCSUR',
      image: '',
    },    
    serviceTutoriales: {
      title: 'Tutoriales',
      description: 'Guia sobre Aula Virtual',
      image: '',
    },
  }


  
  events: Event[] = [
    {
      id: '1',
      image: '',
      title: 'Lorem',
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: '',
      title: 'Ipsum',
      description: 'bla bla bla bla bla 2'
    },
    {
      id: '3',
      image: '',
      title: 'Gotten',
      description: 'bla bla bla bla bla 3'
    },
  ]
}