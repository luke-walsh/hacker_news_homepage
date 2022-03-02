import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { StoriesService } from '../stories.service';

// I had originally planned on creating an instance of the 'Post' interface for each of the 500 results in the top-posts GET request.
// This became obsolete once I switched to the best-posts request, which is already sorted.

// interface Post {
//     by : string,
//     descendants : number,
//     idNumber : number,
//     kids : number[],
//     score : number,
//     time : number,
//     title : string,
//     type : string,
//     url : string
// }


@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [StoriesService]
})


export class GalleryComponent{
    @Input() topSelected: boolean = true;
    @Input() startSlice: number = 0;
    topStories: any;
    newStories: any;
    initialised: boolean = false;    
    
     constructor(private _obj: StoriesService){}

     async ngOnInit(){
         this.initialised = true;
        (await this._obj.getTop()).subscribe(async (topData)=> {
            this.topStories = topData; 
         });
         (await this._obj.getNew()).subscribe((newData)=> {
            this.newStories = newData;
         });  
     }

     //This hook refreshes the gallery component with the new batch of posts.
     ngOnChanges(){
         this.initialised = false;
         this.initialised = true;
     }

     //The following functions are used to switch between top and new posts.
     topButtonClicked(){
         if(!this.topSelected){
            this.topSelected = true;
         }
     }
     newButtonClicked(){
        if(this.topSelected){
           this.topSelected = false;
        }
    }
}