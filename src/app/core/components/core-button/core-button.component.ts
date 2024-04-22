import { Component, Input } from '@angular/core';

@Component({
  selector: 'cmp-core-button',
  templateUrl: './core-button.component.html',
  styleUrls: ['./core-button.component.scss']
})
export class CoreButtonComponent {

  @Input() mode: 'light' | 'dark' = 'dark'

  @Input() customBgColor: string = ''

  darkBg = '#010101'

  lightBg = 'rgba(255, 255, 255, 0.7)'

}
