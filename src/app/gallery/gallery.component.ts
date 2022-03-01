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
    @Input() topSelected: boolean = true;
    @Input() startSlice: number = 0;
    topStories: any;
    newStories: any;
    
    
     constructor(private _obj: StoriesService){}

     async ngOnInit(){
         console.log(this.topSelected);
        (await this._obj.getTop()).subscribe(async (topData)=> {
            this.topStories = topData;
         });
         (await this._obj.getNew()).subscribe((newData)=> {
            this.newStories = newData;
         });  
     }

     ngOnChanges(){
         if(this.startSlice > 0 && this.topSelected){
            let allTopStories: [] = this.topStories;
            this.topStories = allTopStories.slice(this.startSlice, this.startSlice+16);
         }else if(this.startSlice > 0 && !this.topSelected){
            let allNewStories: [] = this.newStories;
            this.newStories = allNewStories.slice(this.startSlice, this.startSlice+16);
         }
        // if(this.topSelected){
        //     this.topStories = this.topStories.slice(this.startSlice, this.startSlice+16);
        //  }else{
        //     this.newStories = this.newStories.slice(this.startSlice, this.startSlice+16);
        //  }
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