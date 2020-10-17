import { Component, OnInit } from '@angular/core';
import { eventNames } from 'process';
import { MainTopBarMenuService } from './services/core/main-top-bar-menu.service';

declare var App: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private menuSvc: MainTopBarMenuService){}

  title = 'app-realtime';
  miEmpresa: string = 'Grupo Flecha Amarilla';
  periodo: number = 2020;

  menuItems: any[] = [];

  ngOnInit(){
    App.init()

    this.getData();
  }

  getData() {
    this.menuSvc.getItemsMenu().subscribe((data: any) =>  {
      this.menuItems = data;
    });
  }

  listenChildMenuEvent(eventArgs: any) {
    console.log('Los datos emitidos por el componete so: ',  eventArgs);
    console.log('el indice seleccioado es: ', eventArgs.index);
    console.log('El item seleccionado es:', eventArgs.item);
  }

}
