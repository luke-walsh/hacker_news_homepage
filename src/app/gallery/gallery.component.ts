import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { StoriesService } from '../stories.service';


interface Post {
    by : string,
    descendants : number,
    id : number,
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
    // selectedStoryObjects: Post[] = [];
    topSelected: boolean = true;
    story:any;

    
     constructor(private _obj: StoriesService){}

     async ngOnInit(){
        (await this._obj.getTop()).subscribe(async (topData)=> {
            this.topStories = topData;
            console.log(this.topStories);
            if(this.topSelected){
                this.selectedStories = this.topStories;
                for(var story in this.selectedStories){
                    story.toString();
                    (await this._obj.getStory(story)).subscribe((storyData)=> {
                        // this.story = data;
                        console.log(storyData);
                     });
                }
             }
         });
         (await this._obj.getNew()).subscribe((newData)=> {
            this.newStories = newData;
            console.log(this.newStories);
            if(!this.topSelected){
                this.selectedStories = this.newStories.slice(0, 16);
             }
         });
        // (await this._obj.getStory('30477078')).subscribe((data)=> {
        //     this.story = data;
        //     console.log(this.story);
        //  });

         
     }
    

         
        //  console.log(_obj.getTop());
        //  console.log('hello');
        // http.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').subscribe(response =>{
        //     this.topStories = response;
        //     this.topStories = this.topStories.slice(0, 16);
        //     if(this.topSelected){
        //         this.selectedStories = this.topStories;
        //         for(var story in this.selectedStories){
        //             this.addPost(story);
        //         }
        //     }
        // })
        // http.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty').subscribe(response =>{
        //     this.newStories = response;
        //     this.newStories = this.newStories.slice(0, 16);
        //     if(!this.topSelected){
        //         this.selectedStories = this.newStories;
        //     }
        // })
    }



    

    // addPost(id: any){
    //     String(id);
    //     this.http.get('https://hacker-news.firebaseio.com/v0/item/' + id  + '.json?print=pretty')
    //     .subscribe(response => {  
    //         // console.log(response);
    //         this.selectedStoryObjects.push(response);
    //     });
    // }

    // changeStories(){
    //     this.topSelected = !this.topSelected;
    //     console.log(this.topSelected);
    // }
    // test(){
    //     console.log('hi');
    // }
    
// }


// export class GalleryComponent{
//     selectedStories: any = [];

//     constructor(private _obj: TopStoriesService){
        
//     }
//     ngOnInit(){
//         this.selectedStories = this._obj.getData();
//         this.selectedStories = this.selectedStories.slice(0, 16);
//     }
// }