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
        '#D7D3D2',
        '#000',
        '#E5B8A3'
      ]
    },
    {
      image: images.product3,
      name: 'PROTECTOR SOLAR',
      price: '120',
      variants: [
        '#E5B8A3',
        '#000',
      ]
    },
    {
      image: images.product4,
      name: 'PROTECTOR SOLAR',
      price: '120',
      variants: [
        '#fff',
        '#000',
        '#148954',
        '#0C1284',
        '#A46D09'
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
