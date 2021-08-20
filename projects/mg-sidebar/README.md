# MgSidebar

## Início Rápido

#### importe a biblioteca
app.module.ts
```node
import { MgSidebarModule } from "mg-sidebar";
```
app.component.ts
```ts
import { InterfaceMeniList } from "sidebar";

/**     PARA CONFORTO APRESENTO A INTERFACE DE ENTRADA
    
     interface InterfaceManuList {
        url?: string,
        nome: string,
        icon: string,
        subMenu?: InterfaceManuList[]
     }
 
 */

export class AppComponent {
  menuList: InterfaceManuList[] = [
    {url: '/', nome: 'Dashboard', icon: 'settings'},
    {
      nome: 'Dropdown', url: '/usuarios', icon: 'settings', subMenu: [
        {url: '/usuarios', nome: 'usuarios', icon: 'settings'}
      ]
    }
  ];
//...
}
```
app.component.html
```html
<mg-sidebar
    #sideBar
    logoSm="/link_da_sua_logo.jpeg"
    logoMarca="/link_da_sua_logo_escrita.png"
    [menuList]="menuList"
    backgroundColor="#fffff"
></mg-sidebar>
```

### Maximizar e minimizar sideBar

O controle de apresentação conta com a sua base em *sessionStorag*, sua alteração pode
ser realizada pela variavel exportada pelo html ou por meio de um evento.

```html
<!-- variavel HTML -->
<button (click)="sideBar.changeOpen()">open/close</button>
<!-- emissão de evento -->
<button (click)="click()">open/close</button>
```
```ts
function click() {
  window.dispatchEvent(new CustomEvent('openMgSidebar'));
}
```

### Background Imagem

Informe ao sidebar um link ou base64 da imagem pelo atributo *backgroundImage* 

```html
<mg-sidebar
  [backgroundImage]="/link_da_imagem.jpeg"
></mg-sidebar>
```



## apresentação

Biblioteca gerada com [Angular CLI](https://github.com/angular/angular-cli) version 12.1.0.

Biblioteca de sideBar menu responsivo. Para isso, foram projetados 3 estágios de apresentação,
sendo esses;

* maximizado:

Esta apresentação se dá para telas acima de 991px, e ocupam um espaço fixo no
  laytout da aplicação de 260px.
  
![maximizado](src/assets/img/doc/sidebar-maximizado.png?raw=true "teste")


* minimizado:

Esta apresentação se dá para telas menores que 992px e maiores que 768px
  e ocupam um espaço fixo de 80px.
  
A propriedade HOVER irá espandir a tela, contudo sua apresentação não irá
ocupar espaço no layout.
  
![maximizado](src/assets/img/doc/sidebar-minimizado.png?raw=true "teste")

* escondido:

Essa apresentação se dá para telas de celulares, para telas menores que
maiores que 769px.

![maximizado](src/assets/img/doc/sidebar-sm-maximizado.png?raw=true "teste")

