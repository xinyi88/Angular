import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github/github.service'; // import githubservice
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [GithubService] // provider takes collection
})
export class SearchComponent implements OnInit {
   public searchText;
   public countText;
   public searchResult;
  constructor(private router: Router, private githubService: GithubService) {

   }

  ngOnInit() {

  }
  showUserDetail(user) {
    // case sensitive
    // console.log('this show detail', user.id);
    this.router.navigate(['user', user.id]);
  }
  onKeyup(event) {
    this.searchText = event.target.value;
    // console.log('this is event ', event);
  }

  getUsers() {
    this.githubService.getUser(this.searchText).subscribe(
      res => {
       this.countText = res.length;
       this.searchResult = res;
       console.log(res);
      }
    );
  }
}

