import { Pipe, PipeTransform } from '@angular/core'

import { Atividade } from 'src/app/models/Atividade'

@Pipe({
  name: 'filterByDescription'
})
export class FilterByDescriptionPipe implements PipeTransform {

  transform(atividades: Atividade[], descriptionQuery: string){ // Recebe o array e a descrição para filtrar
    descriptionQuery = descriptionQuery
            .trim()
            .toLowerCase() // Remove os espaços da descrição e deixa tudo em minusculo para comparar

        if(descriptionQuery) { // se houver descrição
            return atividades.filter(atividade => // filtra para cada atividade no array
                atividade.name.toLowerCase() // deixa a descrição da atividade em minusculo
                .includes(descriptionQuery) // verifica se a descrição bate com a descrição do filtro
            )
        } else {
            return atividades
        }
    }
}