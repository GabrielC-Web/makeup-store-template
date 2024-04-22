import { Component, Input } from '@angular/core';
import { logos } from 'src/assets/images/image-routes';

@Component({
  selector: 'cmp-core-brands',
  templateUrl: './core-brands.component.html',
  styleUrls: ['./core-brands.component.scss']
})
export class CoreBrandsComponent {

  /**
   * Logos
  */
  @Input() brandImages: string[] = []

}
