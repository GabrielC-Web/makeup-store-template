import { Component, EventEmitter, Input, Output } from '@angular/core';
import { icons, logos } from 'src/assets/images/image-routes';

@Component({
  selector: 'cmp-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent {

  /**
   * Emite evento de abrir sidenav
   */
  @Output() openSidenav: EventEmitter<boolean> = new EventEmitter()

  /**
   * Indica si el sidenav está abierto
   */
  @Input() sidenavOpen: boolean = false

  icons = icons

  logos = logos

  /**
   * Enlaces del menú de navegación
   */
  menuLinks = [
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

}
