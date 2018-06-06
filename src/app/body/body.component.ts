import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Menu } from '../menu';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(public menuService: MenuService) { }

  menu: Menu;

  ngOnInit() {
    this.menu = this.menuService.selectedMenu;
  }

}
