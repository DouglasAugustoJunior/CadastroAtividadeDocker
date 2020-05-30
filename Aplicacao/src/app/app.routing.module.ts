import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AtividadeListComponent } from './atividades/atividade-list/atividade-list.component'
import { AtividadeFormComponent } from './atividades/atividade-form/atividade-form.component'
import { NotFoundComponent } from './errors/not-found/not-found.component'
import { AtividadeListResolver } from './atividades/atividade-list/atividade-list.resolver'
import { AtividadeDetailComponent } from './atividades/atividade-detail/atividade-detail.component'

const routes: Routes = [
    {
      path: '',
      component: AtividadeListComponent,
      resolve:{ // Resolve serve para preparar os dados antes de carregar o componente
        atividades: AtividadeListResolver // importa o resolve
      }
    },
    { 
      path: 'atividade/add',
      component: AtividadeFormComponent,
    },{ 
      path: 'atividade/:atividadeId', // :id é um coringa pra aceitar dados na rota
      component: AtividadeDetailComponent
    },
    { 
      path: '**', component: NotFoundComponent 
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes,{useHash: true})], // Importa com as rotas da aplicação preenchidas, useHash exibe ou não a # na rota, true para compatibilidade
    exports: [RouterModule] // Exporta o Router Module para que quem importar não precisar importar novamente
})
export class AppRoutingModule{}