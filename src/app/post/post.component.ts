import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent{
    post: any;

  constructor(http: HttpClient) {
    http.get('https://hacker-news.firebaseio.com/v0/item/30477630.json?print=pretty')
    .subscribe(response => {
        this.post = response;
    });
  }

}