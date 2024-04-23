import { Component, Input } from '@angular/core';

@Component({
  selector: 'cmp-core-product-card',
  templateUrl: './core-product-card.component.html',
  styleUrls: ['./core-product-card.component.scss']
})
export class CoreProductCardComponent {

  @Input() data: any

  choosenVariant: number = 0

}
