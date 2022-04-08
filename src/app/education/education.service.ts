import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TimelineEvent } from '@shared/components/timeline/timeline-event';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private eventsES: TimelineEvent[] = [
    { title: "Curso: Learn to build an e-commerce app with .Net Core and Angular", description: "Curso online por Udemy", date: "Marzo 2022", category: "course" },
    { title: "Curso: Docker & Kubernetes: The Practical Guide", description: "Curso online por Udemy", date: "Abril 2021", category: "course" },
    { title: "Curso: Clean Code", description: "Curso online por Udemy", date: "Diciembre 2020", category: "course" },
    { title: "Curso: Unit Testing for C# Developers", description: "Curso online por Udemy", date: "Julio 2020", category: "course" },
    { title: "Curso: Git: Become an Expert in Git & GitHub in 4 Hours", description: "Curso online por Udemy", date: "Mayo 2020", category: "course" },
    { title: "Curso: Ionic - Build iOS, Android & Web Apps with Ionic & Angular", description: "Curso online por Udemy", date: "Abril 2020", category: "course" },
    { title: "Ingenieria en Sistemas computacionales", description: "Instituto Tecnológico Superior de Valladolid, Ingenieria en Sistemas con especialidad en el desarollo de aplicaciones moviles.", date: "2015 - 2020", category: "education" },
    { title: "Certificación Ingles B1", description: "Cambridge Assesment English, Certificacion B1 Preliminary", date: "Noviembre 2019", category: "education" },
    { title: "Tecnico bachiller en soporte y mantenimiento equipo computo", description: "Centro de Bachillerato Tecnológico Agropecuario No. 87, Tecnico bachiller en soporte y mantenimiento equipo computo", date: "2012 - 2015", category: "education" }
  ];

  private eventsEN: TimelineEvent[] = [
    { title: "Course: Learn to build an e-commerce app with .Net Core and Angular", description: "Online Course by Udemy", date: "March 2022", category: "course" },
    { title: "Course: Docker & Kubernetes: The Practical Guide", description: "Online Course by Udemy", date: "April 2021", category: "course" },
    { title: "Course: Clean Code", description: "Online Course by Udemy", date: "December 2020", category: "course" },
    { title: "Course: Unit Testing for C# Developers", description: "Online Course by Udemy", date: "July 2020", category: "course" },
    { title: "Course: Git: Become an Expert in Git & GitHub in 4 Hours", description: "Online Course by Udemy", date: "May 2020", category: "course" },
    { title: "Course: Ionic - Build iOS, Android & Web Apps with Ionic & Angular", description: "Online Course by Udemy", date: "April 2020", category: "course" },
    { title: "Computer systems engineer", description: "Instituto Tecnológico Superior de Valladolid, Computer systems engineer with specialization in mobile application development.", date: "2015 - 2020", category: "education" },
    { title: "English B1 Certification", description: "Cambridge Assesment English, Certification B1 Preliminary", date: "November 2019", category: "education" },
    { title: "Technical high school in support and maintenance of computer equipment", description: "Centro de Bachillerato Tecnológico Agropecuario No. 87, Technical high school in support and maintenance of computer equipment", date: "2012 - 2015", category: "education" }
  ];

  private categories: string[] = ["education"];
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
