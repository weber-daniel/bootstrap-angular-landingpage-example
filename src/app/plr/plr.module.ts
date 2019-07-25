import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PlrListComponent} from './plr-list/plr-list.component';
import {PlrViewComponent} from './plr-view/plr-view.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MomentModule} from 'ngx-moment';
import {AppRoutingModule} from '../app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    PlrListComponent,
    PlrViewComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule,
    MomentModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PlrListComponent,
    PlrViewComponent,
    AppRoutingModule,
    FontAwesomeModule,
    MomentModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PlrModule { }
