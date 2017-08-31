import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GithubService } from '../github/github.service';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
  providers: [GithubService]
})
export class SearchResultComponent implements OnInit {
  public user;
  constructor(private activatedRoute: ActivatedRoute, private githubService: GithubService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['userId'];
    console.log('this ', id);
    this.githubService.getUserDetail(id).subscribe(
      res => {
        this.user = res[0]; // object to json, hard code
        console.log(this.user);
      }
    );
  }
  // read router
}
