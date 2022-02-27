import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopStoriesService {
  topStories: any;
  
  getTopStories(http: HttpClient){
    http.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    .subscribe(response => {
        this.topStories = response;
        console.log(this.topStories);
        return this.topStories;
    });
  }
}
