import { Component } from '@angular/core';



export interface InterfaceManuList {
  url?: string,
  nome: string,
  icon: string,
  subMenu?: InterfaceManuList[]
}
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
  userMenuList: {url: string, nome: string, icon: string, subMenu?: {}[] | undefined}[] = [
    {
      url: '#', nome: 'teste', icon: 'settings', subMenu: [
        {url: '#', nome: 'teste', icon: 'settings'},
        {url: '#', nome: 'teste', icon: 'settings'}
      ]
    }
  ];
}
