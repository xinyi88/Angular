import { Component, OnInit } from '@angular/core';
import {GithubService} from '../github/github.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [GithubService]
})
export class SearchComponent implements OnInit {
   public searchText;
  constructor(private githubService: GithubService) { }

  ngOnInit() {

  }
  onKeyup(event) {
    this.searchText = event.target.value;
  }

  getUsers() {
    this.githubService.getUser(this.searchText).subscribe(
      res => {
        console.log(res);
      }
    );
  }
}

