import { Component } from '@angular/core';
import { images } from 'src/assets/images/image-routes';

@Component({
  selector: 'pag-products-detail-layout',
  templateUrl: './products-detail-layout.component.html',
  styleUrls: ['./products-detail-layout.component.scss']
})
export class ProductsDetailLayoutComponent {

  /**
   * Producto del detalle
   */
  product = {
    images: [
      images.product6,
      images.product3,
      images.product7,
    ],
    mainImage: images.product6,
    name: 'CAMISETA MARCA',
    brand: 'UNICOLOR',
    price: '175.00',
    sku: 'KROGGM93746917',
    partNumber: '93746917',
    maximunPurchase: 1,
    quantity: 1,
    aditionalInfo: {
      'Color': 'Blanco',
      'Talla': 'S',
    },
    variants: [
      '#fff',
      '#000',
      '#148954',
      '#0C1284',
      '#A46D09'
    ],
    sizes: [
      'XS',
      'S',
      'M',
      'L',
      'XL',
      'XXL',
    ]
  }

  /**
   * Más productos por ver
   */
  moreProducts: any[] = [
    {
      name: 'MAKEUP SET PIAZZO',
      price: '$158',
      previousPrice: '$250',
      image: images.combo
    },
    {
      name: 'PERFECT SKIN LOREAL',
      price: '$200',
      previousPrice: '$250',
      image: images.product9
    },
    {
      name: 'ACE PERFECT LOREAL',
      price: '$200',
      previousPrice: '$250',
      image: images.product10
    },
    {
      name: 'X2 SERÚN REVITALIF LOREAL PARIS',
      price: '$200',
      previousPrice: '$250',
      image: images.product11
    },
  ]

}
