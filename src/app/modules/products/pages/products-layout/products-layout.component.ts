import { Component } from '@angular/core';
import { icons, images } from 'src/assets/images/image-routes';

@Component({
  selector: 'pag-products-layout',
  templateUrl: './products-layout.component.html',
  styleUrls: ['./products-layout.component.scss']
})
export class ProductsLayoutComponent {

  images = images

  icons = icons

  products: any[] = [
    {
      image: images.product4,
      name: 'SNEAKERS MARCA',
      price: '158',
      variants: [
        '#D7D3D2',
        '#000',
        '#E5B8A3'
      ]
    },
    {
      image: images.product4,
      name: 'SANDALIAS MARCA',
      price: '200',
      variants: [
        '#E5B8A3',
        '#000',
      ]
    },
    {
      image: images.product4,
      name: 'CAMISETA MARCA',
      price: '158',
      variants: [
        '#fff',
        '#000',
        '#148954',
        '#0C1284',
        '#A46D09'
      ]
    },
    {
      image: images.product4,
      name: 'JEANS MARCA',
      price: '158',
      variants: [
        '#356281',
        '#6F9FC5',
        '#000'
      ]
    },
    {
      image: images.product4,
      name: 'CARTERA ALTAS',
      price: '200',
      variants: [
        '#000'
      ]
    },
    {
      image: images.product4,
      name: 'GORRA MARCA',
      price: '200',
      variants: [
        '#D7D3D2',
        '#000',
        '#074459'
      ]
    },
    {
      image: images.product4,
      name: 'GORRA MARCA',
      price: '200',
      variants: [
        '#D7D3D2',
        '#000',
        '#074459'
      ]
    },
    {
      image: images.product4,
      name: 'GORRA MARCA',
      price: '200',
      variants: [
        '#D7D3D2',
        '#000',
        '#074459'
      ]
    },
    {
      image: images.product4,
      name: 'GORRA MARCA',
      price: '200',
      variants: [
        '#D7D3D2',
        '#000',
        '#074459'
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
