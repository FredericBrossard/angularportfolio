import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Menu } from '../menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  colorvar: boolean;
  constructor(public menuService: MenuService) { }

  ngOnInit() {
  }

  showMenuDetail(m: Menu) {
    this.menuService.selectedMenu = m;
    this.colorvar = true;
  }

}
