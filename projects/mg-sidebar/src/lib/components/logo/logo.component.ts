import {Component, Input, OnInit} from '@angular/core';

interface InterfaceSidebarLogo {
  urlDestino: string;
  logoSm: string;
  logoMarca: string;
  logoMarcaText: string;
}

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./_logo.component.scss']
})
export class LogoComponent implements OnInit {

  @Input('logoSm') logoSm: string | undefined;
  @Input('logoMarca') logoMarca: string | undefined;
  @Input('logoMarcaText') logoMarcaText : string | undefined;
  @Input('urlDestino') urlDestino : string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
