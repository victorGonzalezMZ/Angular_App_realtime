import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { CancelComponent } from './cancel/cancel.component';
import { SearchComponent } from './search/search/search.component';
import { ComponentsRouterModule } from './components.routes';
import { PaisesComponent } from './paises/paises.component';

@NgModule({
  declarations: [
    ComponentsComponent, 
    ButtonsComponent, 
    CardsComponent, 
    CancelComponent, 
    SearchComponent, 
    PaisesComponent
  ],
  imports: [
    CommonModule,
    ComponentsRouterModule
  ]
})
export class ComponentsModule { }
