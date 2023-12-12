import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TimelineEvent } from '@shared/components/timeline/timeline-event';
import { Observable } from 'rxjs';
import { EducationService } from './education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  @ViewChild('chkCourses', { static: true }) chkCoursesElement!: ElementRef;
  events$: Observable<TimelineEvent[]>;

  constructor(private educationService: EducationService) { 
    this.events$ = educationService.events;
  }

  ngOnInit(): void {
    this.selectionChanged();
  }

  selectionChanged() {
    let selection = ["education"];

    if (this.chkCoursesElement.nativeElement.checked == true)
      selection.push("course")

    this.educationService.changeSelection(selection);
  }

}
