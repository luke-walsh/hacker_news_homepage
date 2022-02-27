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
  colorPalette:string[] = [
    '#fbf8cc',
    '#fde4cf',
    '#ffcfd2',
    '#f1c0e8',
    '#cfbaf0',
    '#a3c4f3',
    '#90dbf4',
    '#8eecf5',
    '#98f5e1',
    '#b9fbc0'
  ];
  randomNum: number = Math.floor(Math.random() * this.colorPalette.length);
    

  constructor(private http: HttpClient){} 

  ngOnInit(): void {
    this.storyId = this.storyId.toString();
    this.http.get('https://hacker-news.firebaseio.com/v0/item/' + this.storyId  + '.json?print=pretty')
    .subscribe(response => {
        this.post = response;
    });
  }
}