import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { RouterModule, Routes, Router, ParamMap, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Question } from './../question';
import { Answer } from './../answer';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  // user: string;
  // answer: string;  
  // desc: string;
  // like: number;
  // created_at: Date;

  user = "";
  answer: Answer = new Answer(
    "",
    "",
    "",
    0,
    ""
  );

  allQuestions = [];
  question = [];
  id;

  constructor(
    private _apiService: ApiService,
    private router: Router,
    private _http: Http,
    private _route: ActivatedRoute,
  ) {
    this._route.params.subscribe( param => {
      this.allQuestions = this._apiService.qList();
      // console.log(this.allQuestions);
      for ( let i = 0; i < this.allQuestions.length; i++){
        if(this.allQuestions[i]._id == param.id){
          console.log(`this is the param id ${param.id}`)
          this.id = param.id;
          this.question = this.allQuestions[i];  //Setting question to our selected id
          break;
        }
      }
    })
  }

  ngOnInit() {
    this.user = this._apiService.whoLogin();
    console.log(this.user);
    console.log(this.id);
  }

  onSubmit() {
    this.answer.user = this.user;
    this.answer.created_at = new Date();
    console.log(`${this.answer}`)

    console.log(this.question);


    this._http.post(`/question/${this.id}/new_answer`, this.answer).toPromise()
      .then(data => {
        console.log("inside then of promise in post")
        console.log(data)
      })
      .catch(err => {
        console.log("in api service promise catch")
        console.log(err)
      });

    this.answer = new Answer(
      "",
      "",
      "",
      0,
      ""
    );
    this.router.navigateByUrl("/questions");
  }

}
