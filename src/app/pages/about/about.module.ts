import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutInfoComponent } from './about-info/about-info.component';



@NgModule({
  declarations: [
    AboutComponent,
    AboutInfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AboutModule { }
