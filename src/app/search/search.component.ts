import { Component, OnInit } from '@angular/core';
import {GithubService} from '../github/github.service'; // import githubservice

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [GithubService] // provider takes collection
})
export class SearchComponent implements OnInit {
   public searchText;
   public countText;
  constructor(private githubService: GithubService) {

   }

  ngOnInit() {

  }
  onKeyup(event) {
    this.searchText = event.target.value;
    // console.log('this is event ', event);
  }

  getUsers() {
    this.githubService.getUser(this.searchText).subscribe(
      res => {
       this.countText = res.length;
       this.searchText = res;
       console.log(res);
      }
    );
  }
}

