import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CmmEcomFooterConfig } from 'src/app/common/data/utils/models/ecommerce.models';
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
    socialNetworkIcons: [icons.facebook,icons.instagram],
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

  @HostListener('window:resize')
  onResize(e: Event) {

    if (window.innerWidth <= 992) {
      this.smallMode = true
    } else {
      this.smallMode = false
    }

  }

  constructor(
    private router: Router
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

    if(this.showTopAnnouce) {
      this.headerAppSpace = 60
    }

  }

  listenRouteChanges() {

    this.router.events.subscribe(event => {
      this.currentRoute = location.href
    })

  }

}
