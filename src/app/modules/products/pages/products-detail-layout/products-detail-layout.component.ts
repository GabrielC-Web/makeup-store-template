import { Component, HostListener } from '@angular/core';
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
    name: 'SOMBRAS 5 COLORES',
    brand: 'DIOR',
    price: '175.00',
    sku: 'KROGGM93746917',
    partNumber: '93746917',
    maximunPurchase: 1,
    quantity: 1,
    aditionalInfo: {
      'Color': 'Paleta de azules',
    },
    variants: [
      '#9A8073',
      '#B79184',
      '#C79A85',
      '#D7BCB3'
    ],
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

  /**
   * Productos del carrusel
   */
  carouselProducts: any[] = [
    {
        "image": "assets/images/products/product5.png",
        "name": "PROTECTOR SOLAR",
        "price": "158",
        "variants": [
            "#9A8073",
            "#B79184",
            "#C79A85",
            "#D7BCB3"
        ]
    },
    {
        "image": "assets/images/products/product6.png",
        "name": "POLVO COMPACTO",
        "price": "200",
        "variants": [
            "#9A8073",
            "#B79184",
            "#C79A85",
            "#D7BCB3"
        ]
    },
    {
        "image": "assets/images/products/product7.png",
        "name": "SOMBRA 5 COLORES DIOR",
        "price": "158",
        "variants": [
            "#9A8073",
            "#B79184",
            "#C79A85",
            "#D7BCB3"
        ]
    },
    {
        "image": "assets/images/products/product4.png",
        "name": "PROTECTOR SOLAR",
        "price": "158",
        "variants": [
            "#9A8073",
            "#B79184",
            "#C79A85",
            "#D7BCB3"
        ]
    },
    {
        "image": "assets/images/products/product9.png",
        "name": "LABIAL MATE",
        "price": "200",
        "variants": [
            "#9A8073",
            "#B79184",
            "#C79A85",
            "#D7BCB3"
        ]
    },
    {
        "image": "assets/images/products/product10.png",
        "name": "LABIAL HIDRATANTE",
        "price": "200",
        "variants": [
            "#9A8073",
            "#B79184",
            "#C79A85",
            "#D7BCB3"
        ]
    },
    {
        "image": "assets/images/products/product5.png",
        "name": "PROTECTOR SOLAR",
        "price": "158",
        "variants": [
            "#9A8073",
            "#B79184",
            "#C79A85",
            "#D7BCB3"
        ]
    },
    {
        "image": "assets/images/products/product6.png",
        "name": "POLVO COMPACTO",
        "price": "200",
        "variants": [
            "#9A8073",
            "#B79184",
            "#C79A85",
            "#D7BCB3"
        ]
    },
    {
        "image": "assets/images/products/product7.png",
        "name": "SOMBRA 5 COLORES DIOR",
        "price": "158",
        "variants": [
            "#9A8073",
            "#B79184",
            "#C79A85",
            "#D7BCB3"
        ]
    },
    {
        "image": "assets/images/products/product4.png",
        "name": "PROTECTOR SOLAR",
        "price": "158",
        "variants": [
            "#9A8073",
            "#B79184",
            "#C79A85",
            "#D7BCB3"
        ]
    },
    {
        "image": "assets/images/products/product9.png",
        "name": "LABIAL MATE",
        "price": "200",
        "variants": [
            "#9A8073",
            "#B79184",
            "#C79A85",
            "#D7BCB3"
        ]
    },
    {
        "image": "assets/images/products/product10.png",
        "name": "LABIAL HIDRATANTE",
        "price": "200",
        "variants": [
            "#9A8073",
            "#B79184",
            "#C79A85",
            "#D7BCB3"
        ]
    }
]

}
