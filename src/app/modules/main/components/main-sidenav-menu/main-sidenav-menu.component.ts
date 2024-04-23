import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cmp-main-sidenav-menu',
  templateUrl: './main-sidenav-menu.component.html',
  styleUrls: ['./main-sidenav-menu.component.scss']
})
export class MainSidenavMenuComponent {

  /**
   * Emite evento de cerrar el sidenav
   */
  @Output() closeSidenav: EventEmitter<boolean> = new EventEmitter()

  /**
   * Data para los expansion panel
   */
  expansionPanelData: any[] = [
    {
      header: 'Skin care',
      items: [
        'Protector solar',
        'Crema hidratante'
      ]
    },
    {
      header: 'Hair',
      items: [
        'Champú',
        'Crema para peinar'
      ]
    },
    {
      header: 'Make Up',
      items: [
        'Todo',
        'Sombras',
        'Base',
        'Polvos',
        'Labiales',
        'Rimers',
        'Lápices'
      ]
    },
    {
      header: 'New',
      items: []
    },
    {
      header: 'Kits',
      items: []
    },
    {
      header: 'Nosotros',
      items: []
    },
  ]

  /**
   * Index del panele expandido
   */
  panelExpanded!: number
}
