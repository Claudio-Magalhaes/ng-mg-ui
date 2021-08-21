import {Inject, Injectable} from '@angular/core';

export interface CustomConfig {
  img?: string;
}

@Injectable({
  providedIn: 'root'
})
export class MgSidebarService {

  public configSidebar: CustomConfig;

  constructor(@Inject('config') private config: CustomConfig) {
    this.configSidebar = config;
  }
}
