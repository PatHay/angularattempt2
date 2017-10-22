import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Question } from './question';
import "rxjs/Rx";

@Injectable()
export class ApiService {

  constructor(
    private _http: Http,
  ) {
    this.getQuestions();
    console.log(this.allQuestions);
  }

  private user = "";
  allQuestions = [];

  login(user){
    this.user = user;
    // console.log(`this user is logged in ${this.user}`);
  }

  whoLogin(){
    return this.user;
  }

  qList(){
    return this.allQuestions;
  }

  logout(){
    this.user = "";
    // console.log(`Current logged in user is ${this.user}`)
  }

  // questions(list){
  //   for(var i =0; i< list.length; i++){
  //     this.allQuestions.push(list[i]);
  //   }
  // }

  getQuestions() {
    var allQ = this._http.get('/questions')
      .map(data => data.json())
      .toPromise()

    allQ.then(data => {      //cleans up the initial response data
      console.log(data);
      for (var i = 0; i < data['questions'].length; i++) {
        // var created_at_clean = data['notes'][i].created_at; //grab the created at from data and set to var
        // var created_at = new Date(created_at_clean); // Clean up date
        // var newNote = new Note(data['notes'][i].text, created_at); // create a new Note from Note class using clean date
        // this._notes.push(newNote); //push new note in line above to an array in component
        this.allQuestions.push(data['questions'][i])
      }
    });
  }

}
