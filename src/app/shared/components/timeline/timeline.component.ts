import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { TimelineDetailComponent } from './timeline-detail/timeline-detail.component';
import { TimelineEvent } from './timeline-event';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  @Input() events: TimelineEvent[] = [];
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openModal(event: TimelineEvent) {
    // const initialState: ModalOptions = {
    //   initialState: {
    //     data: event
    //   }
    // };
    // this.bsModalRef = this.modalService.show(TimelineDetailComponent, initialState);
    // this.bsModalRef.content.closeBtnName = 'Cerrar';
  }
}
