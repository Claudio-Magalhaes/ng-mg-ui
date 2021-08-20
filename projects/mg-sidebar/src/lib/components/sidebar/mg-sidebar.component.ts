import {Component, HostListener, Input, ModuleWithProviders, OnInit, ViewChild} from '@angular/core';

interface InterfaceManuList {
  url?: string,
  nome: string,
  icon: string,
  subMenu?: InterfaceManuList[]
}

interface InterfaceImgBackground {
  'backgroundImage': string,
  'backgroundSize'?: string | 'cover',
  'backgroundPosition'?: string | 'top center'
};

@Component({
  selector: 'mg-sidebar',
  templateUrl: './mg-sidebar.component.html',
  styleUrls: [
    './scss/_sidebar.component.scss',
    './scss/_sidebar.LG.component.scss',
    './scss/_sidebar.MD.component.scss',
    './scss/_sidebar.SM.component.scss'
  ]
})
export class MgSidebarComponent implements OnInit {

  @Input('backgroundColor') backgroundColor: string = 'blue';

  @Input('menuList') menuList: InterfaceManuList[] = [];
  @Input('userMenuList') userMenuList: any = [];
  @Input('backgroundImage') backgroundImage: string | undefined = undefined;

  @Input('logoSm') logoSm: string | undefined;
  @Input('logoMarca') logoMarca: string | undefined;
  @Input('logoMarcaText') logoMarcaText : string | undefined;

  // nav sidebar
  @ViewChild('sideBar') sideBar: any;

  jss: {} = {};

  constructor() {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;

    if (this.backgroundImage) {
      this.jss = {
        'background-image': `url("${this.backgroundImage}")`,
        'background-size': 'cover',
        'background-position': 'top center'
      };
    } else {
      this.jss = {
        'background-color': this.backgroundColor
      };
    }
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
