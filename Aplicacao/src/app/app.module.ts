import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { AtividadesModule } from './atividades/atividades.module'
import { AppRoutingModule } from './app.routing.module'
import { ErrorsModule } from './errors/errors.module'
import { CoreModule } from './core/core.module'

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule, // Comunicação com o navegador
    AtividadesModule, // Module de atividades para acessar seus componentes
    ErrorsModule, // Importa o módulo de erros
    CoreModule,
    AppRoutingModule // Importa o módulo que inicia as rotas da aplicação
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }