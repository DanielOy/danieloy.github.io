import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TimelineEvent } from '@shared/components/timeline/timeline-event';
import { Observable } from 'rxjs';
import { ExperienceService } from './experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @ViewChild('chkProjects', { static: true }) chkProjectsElement!: ElementRef;
  events$: Observable<TimelineEvent[]>;

  constructor(private experienceService:ExperienceService) {
    this.events$=experienceService.events;
   }

  ngOnInit(): void {
    this.selectionChanged();
  }

  selectionChanged() {
    let selection = ["work"];
    if(this.chkProjectsElement.nativeElement.checked==true) selection.push("projects");
    this.experienceService.changeSelection(selection);
  }
}
