import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { TimelineEvent } from '../timeline-event';

@Component({
  selector: 'app-timeline-detail',
  templateUrl: './timeline-detail.component.html',
  styleUrls: ['./timeline-detail.component.scss']
})
export class TimelineDetailComponent implements OnInit {
  data?:TimelineEvent;
  closeBtnName?: string;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

}
