import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/menuitem.model';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.scss']
})

export class MenuItemComponent implements OnInit {
  icono = ['home','user'];
  @Input() menuitem: MenuItem;

  ngOnInit() {
    // aqui recomienda hacer llamada a servicios de datos
    console.log('--ngOnInit');
  }
}
