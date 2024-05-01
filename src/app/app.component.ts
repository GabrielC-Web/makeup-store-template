import { ScrollStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { Component } from '@angular/core';

export const CC_PROJECT_INITIALS = 'makeup-store-template';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'meat-store-template';

  scrollStrategy!: ScrollStrategy;

  constructor(
    private readonly scrollStrategyOptions: ScrollStrategyOptions
  ) {

  }

  ngOnInit() {

    this.scrollStrategy = this.scrollStrategyOptions.noop();

    document.documentElement.style.setProperty('--v-dynamic-primary', '#260719');
    document.documentElement.style.setProperty('--v-dynamic-secundary', '#C90077');
    document.documentElement.style.setProperty('--v-dynamic-tertiary', '#801660');

  }

}

