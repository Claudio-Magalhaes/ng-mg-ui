import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SidebarComponent} from "./pages/sidebar/sidebar.component";
import {HomeComponent} from "./pages/home/home.component";
import {CardsComponent} from "./pages/cards/cards/cards.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'cards', component: CardsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
