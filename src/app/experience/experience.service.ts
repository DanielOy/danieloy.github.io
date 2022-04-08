import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TimelineEvent } from '@shared/components/timeline/timeline-event';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private eventsES: TimelineEvent[] = [
    {
      title: "Id For Ideas - Desarrollador Backend",
      description: "",
      date: "Dic 21 - Presente", category: "work"
    },
    {
      title: "Nasa Tecnologia - Desarollador .NET Sr",
      description: "",
      date: "Ago 19 - Presente", category: "work"
    },
    {
      title: "Nasa Tecnologia - Desarollador .NET Jr",
      description: "",
      date: "Jul 18 - Ago 2019", category: "work"
    },
  ];

  private eventsEN: TimelineEvent[] = [
    {
      title: "Id For Ideas - Backend Developer",
      description: "",
      date: "Dic 21 - Present", category: "work"
    },
    {
      title: "Nasa Tecnologia - Sr .NET Developer",
      description: "",
      date: "Aug 19 - Present", category: "work"
    },
    {
      title: "Nasa Tecnologia - Jr .NET Developer",
      description: "",
      date: "Jul 18 - Aug 2019", category: "work"
    },
  ];

  private categories: string[] = ["work"];
  private language:string="";
  
  public events: BehaviorSubject<TimelineEvent[]> = new BehaviorSubject(this.eventsES);
  
  constructor(translateSrv: TranslateService) {
    this.languageChanged(translateSrv.defaultLang)
    translateSrv.onLangChange.asObservable().subscribe((evt) => {
      this.languageChanged(evt.lang)
    })
  }

  languageChanged(language: string) {
    this.language=language;
    this.reloadData();
  }

  changeSelection(categories: string[]) {
    this.categories = categories;
    this.reloadData();
  }

  reloadData() {
    if (this.language == 'en') {
      this.events.next(this.eventsEN.filter(x => this.categories.includes(x.category)));
    } else {
      this.events.next(this.eventsES.filter(x => this.categories.includes(x.category)));
    }
  }

}
