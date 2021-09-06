import { Component } from "@angular/core";
import { Service } from "src/app/service.model";

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


}