import { Component } from '@angular/core';
import { icons, logos } from 'src/assets/images/image-routes';

@Component({
  selector: 'cmp-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss']
})
export class MainFooterComponent {

  mainLogo: string = logos.nature

  icons = icons

  footerLogoHeight: number = 0

  ngAfterViewInit() {

    this.footerLogoHeight = document.getElementById('footer_logo')?.offsetHeight as number

  }

}
