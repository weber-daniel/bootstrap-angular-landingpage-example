import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlrViewComponent } from './plr/plr-view/plr-view.component';
import {HomeAppComponent} from './shared/components/home-app/home-app.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'plr-home'
  },
  {
    path: 'plr-home',
    component: HomeAppComponent
  },
  {
    path: 'plr-view/:id',
    component: PlrViewComponent
  },
  {
    path: '**',
    redirectTo: 'plr-home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 50]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
