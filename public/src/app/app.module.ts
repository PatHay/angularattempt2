import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { QuestionlistComponent } from './questionlist/questionlist.component';
import { NewComponent } from './new/new.component';
import { ShowComponent } from './show/show.component';
import { AnswerComponent } from './answer/answer.component';

import { routing } from './routes';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuestionlistComponent,
    NewComponent,
    ShowComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
