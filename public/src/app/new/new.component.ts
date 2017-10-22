import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { Http } from '@angular/http';
import { Question } from './../question';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  user = "";

  newQuestion: Question = new Question(
    "",
    "",
    "",
    ""
  );

  constructor(
    private _apiService: ApiService,
    private router: Router,
    private _http: Http,
  ) { }

  ngOnInit() {
    this.user = this._apiService.whoLogin();
    console.log(this.user);
  }

  onSubmit() {
    this.newQuestion.user = this.user;
    this.newQuestion.created_at = new Date();
    console.log(`${this.newQuestion}`)

    this._http.post('/questions', this.newQuestion).toPromise()
      .then(data => {
        console.log("inside then of promise in post")
        console.log(data)
      })
      .catch(err => {
        console.log("in api service promise catch")
        console.log(err)
      });

    this.newQuestion = new Question(
      "",
      "",
      "",
      ""
    );
    this.router.navigateByUrl("/questions");
  }

}
