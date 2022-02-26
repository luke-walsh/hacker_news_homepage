import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent{

  constructor(http: HttpClient) {
    http.get('https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty')
    .subscribe(response => {
        console.log(response);
    });
  }

}