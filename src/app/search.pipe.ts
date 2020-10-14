import { Pipe, PipeTransform } from '@angular/core';
import { student } from './student';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list: Array<student>, ...args: string[]): Array<student> {
    console.log('Search Text Pipe transform function')
    let firstChar = args[0];
    let filteredList = list.filter(element => element.name.startsWith(firstChar));
    return filteredList;
  }

}
