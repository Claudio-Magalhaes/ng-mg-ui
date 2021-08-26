import {Inject, Injectable} from '@angular/core';

export interface InterfaceCustomColor {
  activeBackgroundColor?: string,
  menuItemHover?: string,
  textColor?: string,
  iconColor?: string,
  background?: string
}

export interface InterfaceCustomSize {
  maximizado: string,
  minimizado: string,
  fontSizeItemMenu?: string,
  fontSizeIconMenu?: string,
  fontIconDropdownMenu?: string
}

export interface InterfaceBackgroundImage {
  image: string,
  corPelicula?: string
}

export interface CustomConfig {
  customColors?: InterfaceCustomColor,
  customSize?: InterfaceCustomSize,
  backgroundImage?: InterfaceBackgroundImage
}

@Injectable({
  providedIn: 'root'
})
export class MgSidebarService {

  public configSidebar: CustomConfig = {};

  public customColors: InterfaceCustomColor = {
    activeBackgroundColor: 'rgba(255, 255, 255, .2)',
    menuItemHover: 'rgba(255, 255, 255, .2)',
    textColor: 'white',
    iconColor: 'white',
    background: 'blue'
  }

  public customSize: InterfaceCustomSize = {
    maximizado: '260px',
    minimizado: '80px',
    fontSizeItemMenu: '16px',
    fontSizeIconMenu: '20pt',
    fontIconDropdownMenu: '13pt'
  };

  public backgroungImage: InterfaceBackgroundImage | undefined = undefined;

  constructor(@Inject('config') private config: CustomConfig) {
    this.configSidebar = config;

    if (typeof config === 'object') {

      if (config.customColors) {
        this.customColors = {
          ...this.customColors,
          ...config.customColors
        }
      }

      if (config.customSize) {
        this.customSize = {
          ...this.customSize,
          ...config.customSize
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
}
