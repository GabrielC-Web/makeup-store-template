import { Component } from '@angular/core';

export const CC_PROJECT_INITIALS = 'makeup-store-template';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'meat-store-template';

  ngOnInit() {

    document.documentElement.style.setProperty('--v-dynamic-primary', '#E76715');
    document.documentElement.style.setProperty('--v-dynamic-secondary', '#5B0506');

  }

}

