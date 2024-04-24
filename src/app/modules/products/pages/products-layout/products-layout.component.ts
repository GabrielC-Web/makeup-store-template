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
      image: images.product5,
      name: 'PROTECTOR SOLAR',
      price: '158',
      variants: [
        '#9A8073',
        '#B79184',
        '#C79A85',
        '#D7BCB3'
      ]
    },
    {
      image: images.product6,
      name: 'POLVO COMPACTO',
      price: '200',
      variants: [
        '#9A8073',
        '#B79184',
        '#C79A85',
        '#D7BCB3'
      ]
    },
    {
      image: images.product7,
      name: 'SOMBRA 5 COLORES DIOR',
      price: '158',
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
      price: '158',
      variants: [
        '#9A8073',
        '#B79184',
        '#C79A85',
        '#D7BCB3'
      ]
    },
    {
      image: images.product9,
      name: 'LABIAL MATE',
      price: '200',
      variants: [
        '#9A8073',
        '#B79184',
        '#C79A85',
        '#D7BCB3'
      ]
    },
    {
      image: images.product10,
      name: 'LABIAL HIDRATANTE',
      price: '200',
      variants: [
        '#9A8073',
        '#B79184',
        '#C79A85',
        '#D7BCB3'
      ]
    },
    {
      image: images.product5,
      name: 'PROTECTOR SOLAR',
      price: '158',
      variants: [
        '#9A8073',
        '#B79184',
        '#C79A85',
        '#D7BCB3'
      ]
    },
    {
      image: images.product6,
      name: 'POLVO COMPACTO',
      price: '200',
      variants: [
        '#9A8073',
        '#B79184',
        '#C79A85',
        '#D7BCB3'
      ]
    },
    {
      image: images.product7,
      name: 'SOMBRA 5 COLORES DIOR',
      price: '158',
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
      price: '158',
      variants: [
        '#9A8073',
        '#B79184',
        '#C79A85',
        '#D7BCB3'
      ]
    },
    {
      image: images.product9,
      name: 'LABIAL MATE',
      price: '200',
      variants: [
        '#9A8073',
        '#B79184',
        '#C79A85',
        '#D7BCB3'
      ]
    },
    {
      image: images.product10,
      name: 'LABIAL HIDRATANTE',
      price: '200',
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
