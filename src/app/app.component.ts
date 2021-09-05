import { Component } from '@angular/core';
import { InterfaceMenuList } from "mg-sidebar";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuList: InterfaceMenuList[] = [
    {url: '/sidebar', nome: 'Sidebar', icon: 'settings'},
    {
      nome: 'Components', url: '/componsnts', icon: 'settings', subMenu: [
        {url: '/cards', nome: 'Cards', icon: 'settings'},
        {url: '#', nome: 'teste', icon: 'settings'}
      ]
    }
  ];
}
