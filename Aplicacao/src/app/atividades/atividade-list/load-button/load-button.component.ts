import { Component, Input } from '@angular/core'

@Component({
  selector: 'ap-load-button',
  templateUrl: './load-button.component.html'
})
export class LoadButtonComponent {

  @Input() hasMore: boolean = false // Indica se existe mais algo a exibir, recebe a informação do componente acima

}