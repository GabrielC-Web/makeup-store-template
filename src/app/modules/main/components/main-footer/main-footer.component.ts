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

  items: any[] = [
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
  ]

  ngAfterViewInit() {

    this.footerLogoHeight = document.getElementById('footer_logo')?.offsetHeight as number

  }

}
