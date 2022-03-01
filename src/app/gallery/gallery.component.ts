import { Component, OnInit, Input } from '@angular/core';
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
    topSelected: boolean = true;
    topStories: any;
    newStories: any;
    selectedStories: any;
    
     constructor(private _obj: StoriesService){}

     async ngOnInit(){
         console.log(this.topSelected);
        (await this._obj.getTop()).subscribe(async (topData)=> {
            this.topStories = topData;
            // console.log(this.topStories);
            if(this.topSelected){
                this.selectedStories = this.topStories;
             }
         });
         (await this._obj.getNew()).subscribe((newData)=> {
            this.newStories = newData;
            // console.log(this.newStories);
            if(!this.topSelected){
                this.selectedStories = this.newStories.slice(0, 16);
             }
         });  
     }

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