import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { StoriesService } from '../stories.service';


interface Post {
    by : string,
    descendants : number,
    idNumber : number,
    kids : number[],
    score : number,
    time : number,
    title : string,
    type : string,
    url : string
}

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [StoriesService]
})


export class GalleryComponent{
    topStories: any;
    newStories: any;
    selectedStories: any;
    storyObjects: Post[] = [];
    topSelected: boolean = true;
    story:any;

    
     constructor(private _obj: StoriesService){}

     async ngOnInit(){
        (await this._obj.getTop()).subscribe(async (topData)=> {
            this.topStories = topData;
            console.log(this.topStories);
            if(this.topSelected){
                this.selectedStories = this.topStories;
            //     for(var story in this.selectedStories){
            //         (await this._obj.getStory(story)).subscribe((storyData)=> {
            //             let post: Post = <Post>storyData;
            //             this.storyObjects.push(post);
            //          });
            //     }
            //     this.storyObjects.sort(function (a, b) {
            //         return a.score - b.score;
            //       });
                
            //     console.log('Story Objects:');
            //     console.log(this.storyObjects);
             }
         });
         (await this._obj.getNew()).subscribe((newData)=> {
            this.newStories = newData;
            console.log(this.newStories);
            if(!this.topSelected){
                this.selectedStories = this.newStories.slice(0, 16);
             }
         });  
     }
}