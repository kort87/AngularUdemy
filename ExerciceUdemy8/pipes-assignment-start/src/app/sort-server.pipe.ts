import { Pipe, PipeTransform } from '@angular/core';
import { Server } from './server.model';

@Pipe({
  name: 'sortServer'
})
export class SortServerPipe implements PipeTransform {

  transform(value: Server[], ...args: any[]): Server[] {
    return value.sort((a: Server, b: Server): number => {
        return (a.name > b.name) ? 1 : -1;
    });
  }

}
