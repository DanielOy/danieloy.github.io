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
      title: "Nasa Tecnología - Líder de Innovación",
      description: "",
      date: "Ene 23 - Presente", category: "work"
    },
    {
      title: "Onikom - Desarrollador Ionic",
      description: "",
      date: "Sep 22 - Ago 23", category: "work"
    },
    {
      title: "Id For Ideas - Desarrollador Backend",
      description: "",
      date: "Dic 21 - Jun 22", category: "work"
    },
    {
      title: "Nasa Tecnología - Desarrollador .NET Sr",
      description: "",
      date: "Ago 19 - Ene 23", category: "work"
    },
    {
      title: "Nasa Tecnología - Desarrollador .NET Jr",
      description: "",
      date: "Jul 18 - Ago 19", category: "work"
    },
  ];

  private eventsEN: TimelineEvent[] = [
    {
      title: "Nasa Tecnología - Innovation leader",
      description: "",
      date: "Jan 23 - Present", category: "work"
    },
    {
      title: "Onikom - Ionic Developer",
      description: "",
      date: "Sep 22 - Aug 23", category: "work"
    },
    {
      title: "Id For Ideas - Backend Developer",
      description: "",
      date: "Dic 21 - Jun 22", category: "work"
    },
    {
      title: "Nasa Tecnología - Sr .NET Developer",
      description: "",
      date: "Aug 19 - Jan 23", category: "work"
    },
    {
      title: "Nasa Tecnología - Jr .NET Developer",
      description: "",
      date: "Jul 18 - Aug 19", category: "work"
    },
  ];

  private categories: string[] = ["work"];
  private language: string = "";

  public events: BehaviorSubject<TimelineEvent[]> = new BehaviorSubject(this.eventsES);

  constructor(translateSrv: TranslateService) {
    this.languageChanged(translateSrv.defaultLang)
    translateSrv.onLangChange.asObservable().subscribe((evt) => {
      this.languageChanged(evt.lang)
    })
  }

  languageChanged(language: string) {
    this.language = language;
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
