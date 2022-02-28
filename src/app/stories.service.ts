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
        return this.http.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
        // this.http.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').subscribe(response =>{
        //     return response;
        // })
    }
    async getNew(){
        return this.http.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty');
        // this.http.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty').subscribe(response =>{
        //     return response;
        // })
    }
    async getStory(id: string){
        return this.http.get('https://hacker-news.firebaseio.com/v0/item/' + id  + '.json?print=pretty')

    }



}
