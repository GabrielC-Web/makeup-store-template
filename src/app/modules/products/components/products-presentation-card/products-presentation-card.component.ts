import { Component, Input } from '@angular/core';

@Component({
  selector: 'cmp-products-presentation-card',
  templateUrl: './products-presentation-card.component.html',
  styleUrls: ['./products-presentation-card.component.scss']
})
export class ProductsPresentationCardComponent {

  @Input() product: any

}
