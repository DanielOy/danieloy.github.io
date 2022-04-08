import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './components/timeline/timeline.component';
import { TimelineDetailComponent } from './components/timeline/timeline-detail/timeline-detail.component';
import { ModalModule } from 'ngx-bootstrap/modal'


@NgModule({
  declarations: [
    TimelineComponent,
    TimelineDetailComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  exports: [
    TimelineComponent
  ]
})
export class SharedModule { }
