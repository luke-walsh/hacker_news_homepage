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
    initialised: boolean = false;
    alternatePic: number = 0;
    
    
     constructor(private _obj: StoriesService){}

     async ngOnInit(){
         console.log(this.topSelected);
        (await this._obj.getTop()).subscribe(async (topData)=> {
            this.topStories = topData;
            this.initialised = true;
         });
         (await this._obj.getNew()).subscribe((newData)=> {
            this.newStories = newData;
         });  
     }

     ngOnChanges(){
         this.initialised = false;
         this.initialised = true;
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