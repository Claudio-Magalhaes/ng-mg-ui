import {Inject, Injectable} from '@angular/core';

export interface CustomColor {
  activeBackgroundColor?: string,
  menuItemHover?: string,
  textColor?: string,
  iconColor?: string,
  background?: string
}

export interface SidebarSize {
  maximizado: string,
  minimizado: string,
  fontSizeItemMenu?: string,
  fontSizeIconMenu?: string,
  fontIconDropdownMenu?: string
}

export interface BackgroundImage {
  image: string,
  corPelicula?: string
}

export interface CustomConfig {
  customColors?: CustomColor,
  sidebarSize?: SidebarSize,
  backgroundImage?: BackgroundImage
}

@Injectable({
  providedIn: 'root'
})
export class MgSidebarService {

  public configSidebar: CustomConfig = {};

  public customColors: CustomColor = {
    activeBackgroundColor: 'rgba(255, 255, 255, .2)',
    menuItemHover: 'rgba(255, 255, 255, .2)',
    textColor: 'white',
    iconColor: 'white',
    background: 'blue'
  }

  public sidebarSize: SidebarSize = {
    maximizado: '260px',
    minimizado: '80px',
    fontSizeItemMenu: '16px',
    fontSizeIconMenu: '20pt',
    fontIconDropdownMenu: '13pt'
  };

  public backgroungImage: BackgroundImage | undefined = undefined;

  constructor(@Inject('config') private config: CustomConfig) {
    this.configSidebar = config;

    if (config.customColors) {
      this.customColors = {
        ...this.customColors,
        ...config.customColors
      }
    }

    if (config.sidebarSize) {
      this.sidebarSize = {
        ...this.sidebarSize,
        ...config.sidebarSize
      }
    }

    if (config.backgroundImage) {
      this.backgroungImage = {
        image: config.backgroundImage.image,
        corPelicula: config.backgroundImage.corPelicula ? config.backgroundImage.corPelicula : 'rgba(0, 0, 0, .8)'
      }
    }
  }
}
