import { Component, Input } from '@angular/core';

@Component({
  selector: 'cmp-main-dropdown-menu',
  templateUrl: './main-dropdown-menu.component.html',
  styleUrls: ['./main-dropdown-menu.component.scss']
})
export class MainDropdownMenuComponent {

  @Input() data: any[] = []

}
