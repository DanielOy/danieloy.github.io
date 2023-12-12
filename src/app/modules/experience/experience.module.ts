import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience.component';
import { ExperienceRoutingModule } from './experience-routing.module';
import { SharedModule } from '@shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    ExperienceRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class ExperienceModule { }
