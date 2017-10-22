import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Question } from './../question';
import { Answer } from './../answer';
import { RouterModule, Routes, Router, ParamMap, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

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
          this.id = param.id;
          this.question = this.allQuestions[i];  //Setting question to our selected id
          break;
        }
      }
    });
    // this.showAnswers();
  }


  allQuestions = [];
  question = [];

  id;
  allAnswers = [];

  ngOnInit() {
    
    // this._route.params.subscribe( param => {
    //   this.allQuestions = this._apiService.qList();
    //   // console.log(this.allQuestions);
    //   for ( let i = 0; i < this.allQuestions.length; i++){
    //     if(this.allQuestions[i]._id == param.id){
    //       this.id = param.id;
    //       this.question = this.allQuestions[i];  //Setting question to our selected id
    //       break;
    //     }
    //   }
    // });
    console.log(`question array in show ${this.question}`);

  }

  showAnswers() {
    // var answers = this._http.get(`/question/${this.id}`)
    //   .map(data => data.json())
    //   .toPromise()

    // answers.then(data => {      //cleans up the initial response data
    //   console.log(data);
    //   for (var i = 0; i < data['answers'].length; i++) {
    //     // var created_at_clean = data['notes'][i].created_at; //grab the created at from data and set to var
    //     // var created_at = new Date(created_at_clean); // Clean up date
    //     // var newNote = new Note(data['notes'][i].text, created_at); // create a new Note from Note class using clean date
    //     // this._notes.push(newNote); //push new note in line above to an array in component
    //     this.allAnswers.push(data['answers'][i])
    //   }
    // });
    this._http.get(`/question/${this.id}`)
    .subscribe((question)=>{
      console.log(question.json());
      this.allAnswers = question.json();
    },
  (err) =>{
    console.log(err);
  });
  }

}
