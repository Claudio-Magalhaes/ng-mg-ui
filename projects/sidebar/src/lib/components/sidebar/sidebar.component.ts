import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';

interface InterfaceManuList {
  url?: string,
  nome: string,
  icon: string,
  subMenu?: InterfaceManuList[]
}

@Component({
  selector: 'mg-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [
    './scss/_sidebar.component.scss',
    './scss/_sidebar.LG.component.scss',
    './scss/_sidebar.MD.component.scss',
    './scss/_sidebar.SM.component.scss'
  ]
})
export class SidebarComponent implements OnInit {

  @Input('menuList') menuList: InterfaceManuList[] = [];
  @Input('userMenuList') userMenuList: any = [];
  @Input('backgroundImage') backgroundImage: string = '';

  // nav sidebar
  @ViewChild('sideBar') sideBar: any;

  jss: {} = {
    'background-image': `url("${this.backgroundImage}")`,
    'background-size': 'cover',
    'background-position': 'top center'
  };

  constructor() {

    console.log('jss', this.jss);
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  ngAfterViewInit() {
    console.log('jss', this.jss);
  }

  /****************************************************
   * GERENCIANDO APARIÇÃO DO BACKGROUND DO SIDEBAR
   ****************************************************/
  public closeBackground(event: any) {
    if (!this.sideBar.nativeElement.contains(event.target)) {
      this.changeOpen();
    }
  }

  /****************************************************
   * METODOS PUBLICOS
   ****************************************************/
  open: boolean = (window.localStorage.getItem('controleDeStatuSidebar') === 'true');

  @HostListener('window:openMgSidebar', ['$event'])
  public changeOpen() {
    if (window.innerWidth > 991) {
      window.localStorage.setItem('controleDeStatuSidebar', String(!this.open));
    }
    this.open = !this.open;
  }

  /****************************************************
   * GERENCIANDO LEITURA DO " WIDTH "
   ****************************************************/
  public innerWidth: any;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    if (window.innerWidth <= 991) {
      this.open = false;
    } else {
      this.open = (window.localStorage.getItem('controleDeStatuSidebar') === 'true');
    }
  }
}
