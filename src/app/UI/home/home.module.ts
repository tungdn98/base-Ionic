import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {ButtonComponent} from '../../Component/Button/button.component';
import {HeaderComponent} from '../../Component/header/header.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [HomePage, ButtonComponent, HeaderComponent]
})
export class HomePageModule {}
