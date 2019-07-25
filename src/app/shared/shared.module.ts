import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlrModule} from '../plr/plr.module';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { ReviewSectionComponent } from './components/review-section/review-section.component';
import { InfoSectionComponent } from './components/info-section/info-section.component';
import { BannerSectionComponent } from './components/banner-section/banner-section.component';
import { IconSectionComponent } from './components/icon-section/icon-section.component';
import { CardSectionComponent } from './components/card-section/card-section.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';
import { HomeAppComponent } from './components/home-app/home-app.component';

@NgModule({
  declarations: [
    HeaderSectionComponent,
    ReviewSectionComponent,
    InfoSectionComponent,
    BannerSectionComponent,
    IconSectionComponent,
    CardSectionComponent,
    FooterSectionComponent,
    HomeAppComponent
  ],
  imports: [
    CommonModule,
    PlrModule
  ],
  exports: [
    HomeAppComponent
  ]
})
export class SharedModule { }
