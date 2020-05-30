import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'


@NgModule({
  declarations: [
    HeaderComponent, //Cabeçalho da aplicação
    FooterComponent // Rodapé da aplicação
  ],
  imports: [ 
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }