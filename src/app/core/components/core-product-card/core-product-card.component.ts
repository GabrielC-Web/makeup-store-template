import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cmp-core-product-card',
  templateUrl: './core-product-card.component.html',
  styleUrls: ['./core-product-card.component.scss']
})
export class CoreProductCardComponent {

  @Input() data: any

  /**
   * Configuración de estilos
   */
  @Input() config: {
    bgColor?: string,
    textColor?: string
  } = {
      bgColor: '#947676',
      textColor: 'black'
    }

  /**
   * Cantidad de producto agragada al carrito
   */
  productQuantity: number = 0

  /**
   * Emite evento de quitar del carrito
   */
  @Output() removeEvent: EventEmitter<any> = new EventEmitter()

  /**
   * Emite evento de sumar al carrito
   */
  @Output() addEvent: EventEmitter<any> = new EventEmitter()

  /**
   * Emite evento de añadir al carro
   */
  @Output() addToCart: EventEmitter<any> = new EventEmitter()

  constructor(
    private router: Router
  ) { }

  navigate() {

    this.router.navigate(['products/detail'])

  }

}
