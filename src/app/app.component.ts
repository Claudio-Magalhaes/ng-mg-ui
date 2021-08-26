import { Component } from '@angular/core';
import { InterfaceManuList } from "mg-sidebar";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuList: InterfaceManuList[] = [
    {url: '/', nome: 'Dashboard', icon: 'settings'},
    {
      nome: 'Dropdown', url: '/usuarios', icon: 'settings', subMenu: [
        {url: '/usuarios', nome: 'usuarios', icon: 'settings'},
        {url: '#', nome: 'teste', icon: 'settings'}
      ]
    }
  ];
}
