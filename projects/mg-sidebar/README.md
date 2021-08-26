# MgSidebar

## apresentação

Biblioteca gerada com [Angular CLI](https://github.com/angular/angular-cli) version 12.1.0.

[clique aqui para ir a página de exemplo](http://mgui.uni5.net/sidebar)

## Início Rápido

#### importe a biblioteca
app.module.ts
```node
import { MgSidebarModule } from "mg-sidebar";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MgSidebarModule.forRoot(),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
app.component.ts
```ts
import { InterfaceMenuList } from "sidebar";

/**     PARA CONFORTO APRESENTO A INTERFACE DE ENTRADA
    
     interface InterfaceMenuList {
        url?: string,
        nome: string,
        icon: string,
        subMenu?: InterfaceMenuList[]
     }
 
 */

export class AppComponent {
  menuList: InterfaceMenuList[] = [
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

### Alterando estilos

Para alterar estilos, como cores e tamanhos. Utilize o *forRoot()* existente em app.module
alterando apenas os dados que deseja modificar.

*A apresentação irá mostrar os valores padrões existentes na biblioteca*

```ts
const config = {
  customColors: {
  activeBackgroundColor: 'rgba(255, 255, 255, .2)',
  menuItemHover: 'rgba(255, 255, 255, .2)',
  textColor: 'white',
  iconColor: 'white',
  background: 'blue'
  },
  customSize: {
    maximizado: '260px',
    minimizado: '80px',
    fontSizeItemMenu: '16px',
    fontSizeIconMenu: '20pt',
    fontIconDropdownMenu: '13pt'
  },
  backgroungImage: undefined
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MgSidebarModule.forRoot(config),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```
#### Background Imagem
Perceba que o background imagem é por padrão desativado, para ativalos use a seguinte estrutura

* corPelicula - representa a camada de cor sobre a imagem, isso ajudará na leitura dos dados
e sobreposição mais adequada do background.

```ts
const config = {
  backgroungImage: {
    image: 'link_ou_base64_da_imagem.png',
    corPelicula: 'rgba(0, 0, 0, .8)'
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MgSidebarModule.forRoot(config),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```
