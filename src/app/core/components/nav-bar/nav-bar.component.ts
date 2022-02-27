import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isCollapsed: boolean = true;
  nextLanguage: string;

  constructor(public translate: TranslateService) {
    this.nextLanguage = (translate.currentLang || translate.defaultLang)
    this.calculeNextLanguage();
  }

  ngOnInit(): void { }

  calculeNextLanguage() {
    this.nextLanguage = this.nextLanguage == 'es' ? 'en' : 'es';
  }

  switchLang() {
    this.translate.use(this.nextLanguage);
    this.calculeNextLanguage();
  }
}

