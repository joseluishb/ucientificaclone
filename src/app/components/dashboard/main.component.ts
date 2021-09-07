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
      image: 'assets/images/books.svg',
    },
    serviceBolsa: {
      title: 'Bolsa de trabajo',
      description: 'Trabajo y Prácticas',
      image: 'assets/images/camera.svg',
    },
    serviceCorreo: {
      title: 'Mi correo',
      description: 'Buzón UCSUR',
      image: 'assets/images/email.svg',
    },    
    serviceTutoriales: {
      title: 'Tutoriales',
      description: 'Guia sobre Aula Virtual',
      image: 'assets/images/tutorial.svg',
    },
  }


  
  events: Event[] = [
    {
      id: '1',
      image: 'https://www.cientifica.edu.pe/sites/default/files/styles/medium_400x200/public/entities/nodes/news/images/nota-santa-natura.png?itok=HW5i2qri',
      title: 'Convenio Agroforestal – Santa Natura',
      description: 'Este convenio servirá para reforzar nuestro trabajo en plantas medicinales. Nuestra carrera de Agroforestal tiene dentro de sus líneas de trabajo las plantas medicinales y de la mano con Santa Natura iniciaremos actividades con el Programa Tiqsi y otras sinergias que nos permitirán múltiples beneficios, tanto para los estudiantes como para el agricultor.'
    },
    {
      id: '2',
      image: 'https://www.cientifica.edu.pe/sites/default/files/styles/medium_400x200/public/entities/nodes/news/images/arte-nota-psicolog%C3%ADa.png?itok=wckT0WK9',
      title: 'Egresada y docente de Psicología presentarán trabajos de investigación en el “12th IAAH World Congress in Adolescent Health”',
      description: 'Bajo la organización de la Sociedad Peruana de Adolescencia y Juventud y The International Association for Adolescent Health (IAAH), el 12th IAAH World Congress in Adolescent Health es un proyecto que busca reunir a usuarios y profesionales alrededor del mundo para explorar las oportunidades, desafíos y enfoques que implican el desarrollo de programas que mejoren la salud de adolescentes y adultos jóvenes. '
    },
    {
      id: '3',
      image: 'https://www.cientifica.edu.pe/sites/default/files/styles/medium_400x200/public/entities/nodes/news/images/CONGRESO-INTERNACIONAL---PSICOLOG%C3%8DA--nota.jpg?itok=xaYtGjKc',
      title: 'I Congreso Internacional de Terapias basadas en evidencia y Ciencia Contextual',
      description: 'El impacto de la Covid-19 en la vida de las personas ha generado una serie de problemas y dificultades en el bienestar y de salud de muchas personas en el mundo. Recuperar, fortalecer y preservar la salud es una prioridad para los profesionales de la salud.'
    },
  ]
}