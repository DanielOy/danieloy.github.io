import { Component, OnInit } from '@angular/core';
import { Project } from '@core/models/project';
import { Qualification } from '@core/models/qualification';
import { Skill } from '@core/models/skill';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  activeSlideIndex: number = 0;

  qualifications$: Observable<Qualification[]>;
  skills$: Observable<Skill[]>;
  projects$: Observable<Project[]>;

  constructor(homeService: HomeService) {
    this.qualifications$ = homeService.qualifications;
    this.skills$ = homeService.skills;
    this.projects$ = homeService.projects;
  }

  ngOnInit(): void { }

}
