// This service handles all the necessary api calls for top stories, new stories and individual stories.
import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {
    url: string | undefined;
    constructor(private http: HttpClient){}
    async getTop(){
        return this.http.get('https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty')
    }
    async getNew(){
        return this.http.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty');
    }
    async getStory(id: string){
        return this.http.get('https://hacker-news.firebaseio.com/v0/item/' + id  + '.json?print=pretty')
    }
}
