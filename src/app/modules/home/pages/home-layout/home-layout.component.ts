import { Component } from '@angular/core';
import { icons, images, logos } from 'src/assets/images/image-routes';

@Component({
  selector: 'pag-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent {

  images = images

  logos = logos

  brandImages = [
    logos.nars,
    logos.loreal,
    logos.channel,
    logos.dior,
  ]

  /**
   * Productos populares
   */
  popularProducts = [
    {
      image: images.product2,
      name: 'PROTECTOR SOLAR',
      price: '120',
      variants: [
        '#9A8073',
        '#B79184',
        '#C79A85',
        '#D7BCB3'
      ]
    },
    {
      image: images.product3,
      name: 'PROTECTOR SOLAR',
      price: '120',
      variants: [
        '#9A8073',
        '#B79184',
        '#C79A85',
        '#D7BCB3'
      ]
    },
    {
      image: images.product4,
      name: 'PROTECTOR SOLAR',
      price: '120',
      variants: [
        '#9A8073',
        '#B79184',
        '#C79A85',
        '#D7BCB3'
      ]
    },
  ]

  items: any[] = [
    {
      icon: icons.van,
      info: 'Envío Gratis',
      text: 'Solo dentro la ciudad de Caracas'
    },
    {
      icon: icons.return,
      info: 'Devoluciones',
      text: 'Devoluciones gratuitas y cambios'
    },
    {
      icon: icons.purse,
      info: 'Empaque exclusivo',
      text: 'Empaque exclusivo por marca'
    },
  ]

}
