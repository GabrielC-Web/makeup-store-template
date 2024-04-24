import { Component } from '@angular/core';
import { icons, images } from 'src/assets/images/image-routes';

@Component({
  selector: 'pag-products-overview-layout',
  templateUrl: './products-overview-layout.component.html',
  styleUrls: ['./products-overview-layout.component.scss']
})
export class ProductsOverviewLayoutComponent {

  productsList: any[] = [
    {
      image: images.product6,
      name: 'Sombra Dior',
      brandName: '5 colores',
      sku: 'krogm93746917',
      aditionalInfo: {
        'Color': 'Paletas azules',
      },
      quantity: 1,
      price: 175,
      currency: 'us$'
    },
    {
      image: images.product6,
      name: 'Labial Mate',
      brandName: 'Dior',
      sku: 'krogm93746917',
      aditionalInfo: {
        'Color': 'Rosa claro',
      },
      quantity: 1,
      price: 175,
      currency: 'us$'
    },
    {
      image: images.product6,
      name: 'Serún Revitalift',
      brandName: 'L´oreal',
      sku: 'krogm93746917',
      aditionalInfo: {
        'Color': 'Beige',
        'Talla': '40'
      },
      quantity: 1,
      price: 175,
      currency: 'us$'
    },
  ]

  prebill: any = {
    basePrice: 175,
    delivery: 175,
    totalPrice: 175,
    discount: '_ US$',
    currency: 'US$'
  }

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
