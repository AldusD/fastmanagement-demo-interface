import { Pipe, PipeTransform } from '@angular/core';
import { Application } from './models/Application'; 

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform(list: Application[], status: string): Application[] {
    return list.filter(e => e.status.includes(status));
  }

}
 