import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CmmEcomFooterConfig } from 'src/app/common/data/utils/models/ecommerce.models';
import { CmmUtilsService } from 'src/app/common/services/utils.service';
import { icons, logos } from 'src/assets/images/image-routes';

@Component({
  selector: 'pag-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

  /**
   * Indica si el sidenav está abierto
   */
  sidenavOpen: boolean = false

  /**
   * Ruta actual en la que estoy
   */
  currentRoute: string = ''

  /**
   * Indica si debo poner el layout en modo responsive
   */
  smallMode: boolean = false

  /**
   * Espacio que se le dará al anuncio superior
   */
  headerAppSpace: number = 0

  /**
   * Indica si debo mostrar el anuncio de arriba
   */
  showTopAnnouce: boolean = true

  mainLogo: string = logos.nature

  icons = icons

  /**
   * Configuración del footer
   */
  footerConfig: CmmEcomFooterConfig = {
    items: [
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
    ],
    socialNetworkIcons: [icons.facebook, icons.instagram],
    mainLogo: logos.nature,
    mainLogoSize: { width: '150px', height: '50px' },
    businessInfo: {
      name: 'nature',
      direction: 'Av. Circumbalación del sol, calle 110 con av 62 de El Cafetal, Caracas',
      phone: '+58 0424-5555607',
      mail: 'atencion@nature.com'
    },
    products: [
      'Ropa',
      'Calzado',
      'Accesorios',
      'Damas',
      'Caballeros'
    ],
    aboutUs: [
      'Quienes somos',
      'Ventas al mayor',
      'Ofertas'
    ]
  }

  /**
   * Indica si estoy scrolleando hacia abajo
   */
  scrollingDown: boolean = false

  @HostListener('window:resize')
  onResize(e: Event) {

    if (window.innerWidth <= 992) {
      this.smallMode = true
    } else {
      this.smallMode = false
    }

  }

  constructor(
    private router: Router,
    private utilsService: CmmUtilsService
  ) {

  }

  ngOnInit() {

    if (window.innerWidth <= 992) {
      this.smallMode = true
    } else {
      this.smallMode = false
    }

    this.currentRoute = location.href
    this.listenRouteChanges()

    if (this.showTopAnnouce) {
      this.headerAppSpace = 60
    }

    this.detectScrollDirection()

  }

  listenRouteChanges() {

    this.router.events.subscribe(event => {
      this.currentRoute = location.href
    })

  }

  /**
   * Detecta el sentido en el que estoy scrolleando
   */
  detectScrollDirection() {

    this.utilsService.isScrollingDown.subscribe(value => {

      let totalHeight = document.scrollingElement?.scrollHeight as number

      //* Oculto el header permanentemente si he recorrido al menos 70% de la altura
      if (window.scrollY / totalHeight * 100 < 70) {
        this.scrollingDown = value
      } else {
        this.scrollingDown = true
      }

    })

  }

}
