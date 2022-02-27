import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  @Input() storyId: string = '30489003';
  post: any;
    

  constructor(private http: HttpClient){} 

  ngOnInit(): void {
    this.storyId = this.storyId.toString();
    this.http.get('https://hacker-news.firebaseio.com/v0/item/' + this.storyId  + '.json?print=pretty')
    .subscribe(response => {
        this.post = response;
    });
  }
}