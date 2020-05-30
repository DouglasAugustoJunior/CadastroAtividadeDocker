import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs'

import { AtividadeService } from '../atividade/atividade.service'
import { Atividade } from 'src/app/models/Atividade'

@Injectable({ providedIn: 'root'})
export class AtividadeListResolver implements Resolve<Observable<Atividade[]>>{

    constructor(private service: AtividadeService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Atividade[]> {
      return this.service.listAll(1) // recebe o N° da página
    }

}