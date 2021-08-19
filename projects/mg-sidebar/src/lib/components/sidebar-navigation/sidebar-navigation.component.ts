import {Component, Input, OnInit, ViewChild} from '@angular/core';

export interface InterfaceManuList {
  url?: string,
  nome: string,
  icon: string,
  subMenu?: InterfaceManuList[]
}

@Component({
  selector: 'app-sidebar-navigation',
  templateUrl: './sidebar-navigation.component.html',
  styleUrls: [
    './SCSS/_sidebar-navigation.component.scss',
    './SCSS/_sidebar-navigation-minificado.scss',
    './SCSS/_sidebar-navigation-maximizado.scss'
  ]
})
export class SidebarNavigationComponent implements OnInit {

  @Input('menuList') menuList: InterfaceManuList[] | any = [];
  @Input('open') open?: boolean = false;
  @Input('isSubmenu') isSubmenu?: boolean = false;

  @ViewChild('navigationComponent') navigationComponent: any;

  constructor() { }

  ngOnInit(): void {}

  public click() {
    this.open = !this.open;
  }

  public activeItemMenu(menu: InterfaceManuList) {

    if (menu.url) {
      if (window.location.pathname === menu.url) {
        return true;
      }
    }

    return false;
  }

  public activeSubmenuUrl(menu: InterfaceManuList){
    if (menu.url){
      if (window.location.pathname === menu.url) {
        return true;
      } else {
      }
    }
    return false;
  }
}
