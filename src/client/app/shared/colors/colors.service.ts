import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/observable/from';

@Injectable()
export class ColorsService {
  colors: string[] = []; //inital as empty list

  constructor(private http: Http) {
    this.colors = [
      'red',
      'green'
    ]
  }

  getColors() {
    if(this.colors && this.colors.length) {
      return this.colors;
    }
    return this.colors;
  }
}
