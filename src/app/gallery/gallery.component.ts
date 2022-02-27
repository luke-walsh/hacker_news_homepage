// import { TopStoriesService } from './../top-stories.service';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent{
    topStories: any;
    newStories: any;
    
    constructor(http: HttpClient){
        http.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').subscribe(response =>{
            this.topStories = response;
            this.topStories = this.topStories.slice(0, 16);
            console.log(this.topStories);
        })
        http.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty').subscribe(response =>{
            this.newStories = response;
            this.newStories = this.newStories.slice(0, 16);
            console.log(this.newStories);
        })
    }
}