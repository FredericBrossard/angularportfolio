import { Injectable } from '@angular/core';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() {
   // permet d'initialiser
    this.selectedMenu = this.list[0];
   }

  selectedMenu: Menu;

  // Service qui coordonne les données
 list: Menu[] =

 [
   {
     id: 0,
     nameMenu: 'Contact',
     textMenu: 'Hello Menu Contact'
   },
   {
     id: 1,
     nameMenu: 'Réalisation',
     textMenu: 'Ola Menu réalisation'
   },
   {
     id: 2,
     nameMenu: 'Biographie',
     textMenu: 'Hye Menu Biographie'
   }
 ];

}
