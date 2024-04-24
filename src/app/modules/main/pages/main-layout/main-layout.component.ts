import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

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
