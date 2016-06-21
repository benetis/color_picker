import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';

/**
 * This class provides the NameList service with methods to read colors and add colors.
 */
@Injectable()
export class ColorsService {
  colors: string[] = []; //initial as empty list

  constructor(private http: Http) {}

  private request: Observable<string[]>;

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource. If there was a previous successful request
   * (the local colors array is defined and has elements), the cached version is returned
   * @return {string[]} The Observable for the HTTP request.
   */
  getColors(): Observable<string[]> {
    if (this.colors && this.colors.length) {
      return Observable.from([this.colors]);
    }
    if (!this.request) {
      this.request = this.http.get('http://www.colourlovers.com/api/colors/top?format=json&numResults=10')
          .map((response: Response) => response.json())
          .map((data: string[]) => {
            this.request = null;
            return this.colors = data;
          });
    }
    return this.request;

  }
}
