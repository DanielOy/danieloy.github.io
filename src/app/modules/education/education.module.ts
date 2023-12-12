import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './education.component';
import { EducationRoutingModule } from './education-routing.module';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    EducationComponent
  ],
  imports: [
    CommonModule,
    EducationRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class EducationModule { }
