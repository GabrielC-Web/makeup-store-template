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

  /**
   * Productos del carrusel
   */
  carouselProductsBigScreen: any[] = [
    [
      {
        image: images.product12,
        name: 'SNEAKERS MARCA',
        price: '158',
        variants: [
          '#D7D3D2',
          '#000',
          '#E5B8A3'
        ]
      },
      {
        image: images.product3,
        name: 'SANDALIAS MARCA',
        price: '200',
        variants: [
          '#E5B8A3',
          '#000',
        ]
      },
      {
        image: images.product5,
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
    ],
    [
      {
        image: images.product6,
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
        image: images.product7,
        name: 'GORRA MARCA',
        price: '200',
        variants: [
          '#D7D3D2',
          '#000',
          '#074459'
        ]
      },
    ],
    [
      {
        image: images.product11,
        name: 'SANDALIAS MARCA',
        price: '200',
        variants: [
          '#E5B8A3',
          '#000',
        ]
      },
      {
        image: images.product12,
        name: 'SNEAKERS MARCA',
        price: '158',
        variants: [
          '#D7D3D2',
          '#000',
          '#E5B8A3'
        ]
      },
      {
        image: images.product5,
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
    ],
  ]
  /**
   * Productos del carrusel
   */
  carouselProductsSmallScreen: any[] = []

  @HostListener('window:resize', ['$event'])
  onResize(e: Event) {

    //* Veo si la pantalla es lo suficientemente pequeña
    if (window.innerWidth <= 992) {
      this.changeListMode()
    } else {
      this.carouselProductsSmallScreen = []
    }

  }

  ngOnInit() {

    this.changeListMode()

  }

  /**
   * Genera una lista con todos los items del listado con secciones de items
   */
  changeListMode() {

    //* Vacío el listado
    this.carouselProductsSmallScreen = []

    //* Creo el listado con todos los items por separado
    this.carouselProductsBigScreen.forEach(section => {

      section.forEach((item: any) => {

        this.carouselProductsSmallScreen.push(item)

      })

    })

  }

}
