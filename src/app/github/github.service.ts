import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import {Observable} from 'rxjs/Rx'; // make method observable
import 'rxjs/add/operator/map';
@Injectable()
export class GithubService {

  constructor(private http: Http) { }

  getUser(searchText): Observable<any> {
    // cross domain issue with this api
    // const url = 'http://api.github.com/search/users?q=' + searchText;

    // use data from
    // https://jsonplaceholder.typicode.com/
    const url = 'https://jsonplaceholder.typicode.com/posts?userId=' + searchText;
    return this.http.get(url).map(
      res => {
        const data = res.json();
        return data;
      }
    ); // map go through all things
  }
}
