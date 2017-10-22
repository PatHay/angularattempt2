import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { RouterModule, Routes, Router }  from '@angular/router';
import { Http } from '@angular/http';
import { Question } from './../question';
import "rxjs/Rx";

@Component({
  selector: 'app-questionlist',
  templateUrl: './questionlist.component.html',
  styleUrls: ['./questionlist.component.css']
})
export class QuestionlistComponent implements OnInit {

  user = "";
  questions = [];


  constructor(
    private _apiService: ApiService,
    private router: Router,
    private _http: Http,
    
  ) {
    this.getQuestions();
  }

  ngOnInit() {
    this.user = this._apiService.whoLogin();
    console.log(`this user is logged in ${this.user}`);
  }

  getQuestions() {
    var allQuestions = this._http.get('/questions')
      .map(data => data.json())
      .toPromise()

    allQuestions.then(data => {      //cleans up the initial response data
      console.log(data);
      for (var i = 0; i < data['questions'].length; i++) {
        // var created_at_clean = data['notes'][i].created_at; //grab the created at from data and set to var
        // var created_at = new Date(created_at_clean); // Clean up date
        // var newNote = new Note(data['notes'][i].text, created_at); // create a new Note from Note class using clean date
        // this._notes.push(newNote); //push new note in line above to an array in component
        this.questions.push(data['questions'][i])
      }
    });
  }

  logout(){
    this._apiService.logout();
  }

}
