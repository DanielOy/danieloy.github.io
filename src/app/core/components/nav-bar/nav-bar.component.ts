import { Component, OnInit } from '@angular/core';
import { ThemeService } from '@core/services/theme.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isCollapsed: boolean = true;
  nextLanguage: string;

  constructor(public translate: TranslateService,
    private theme: ThemeService) {
    this.nextLanguage = (translate.currentLang || translate.defaultLang)
    this.calculeNextLanguage();
  }

  ngOnInit(): void { }

  calculeNextLanguage() {
    this.nextLanguage = this.nextLanguage == 'es' ? 'en' : 'es';
  }

  switchLang() {
    this.translate.use(this.nextLanguage);
    localStorage.setItem('lang', this.nextLanguage);
    this.calculeNextLanguage();
  }

  switchTheme() {
    if (this.theme.current === 'light') {
      this.theme.current = 'dark';
    } else {
      this.theme.current = 'light';
    }
  }

  isCurrenThemeLight() {
    return this.theme.current == 'light';
  }
}

