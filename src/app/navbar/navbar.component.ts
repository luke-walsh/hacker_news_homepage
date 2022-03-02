import { GalleryComponent } from './../gallery/gallery.component';
import {Component, ViewChild} from '@angular/core';

@Component ({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
    
})

export class NavbarComponent{
    @ViewChild(GalleryComponent)
    private galleryComponent!: GalleryComponent;
    toggleSwitch: boolean = true;
    firstIndex: number = 0;
    init: boolean = false;


    constructor() {
        this.init = true;
    }

    showTop(){
        if(!this.toggleSwitch){
            console.log(this.toggleSwitch);
            this.toggleSwitch = true;
            this.firstIndex = 0;
        }
    }
    showNew(){
        console.log(this.toggleSwitch);
        if(this.toggleSwitch){
            this.toggleSwitch = false;
            this.firstIndex = 0;
        }
    }
    nextPage(){
        if(this.firstIndex <= 484){
            this.firstIndex += 16;
            this.galleryComponent.startSlice = this.firstIndex;
            console.log(this.galleryComponent.startSlice);
        }
    }
    previousPage(){
        if(this.firstIndex >= 16){
            this.firstIndex -= 16;
            this.galleryComponent.startSlice = this.firstIndex;
            console.log(this.galleryComponent.startSlice);
        }
    }

}