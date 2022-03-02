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


    ngOnInit() {
        this.init = true;
    }

    //showTop() and showNew() switch between top and new posts if not already in use and reset to the first page.
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

    //nextPage() and previousPage() are used to increment or decrement firstIndex by 12, since we're loading up 12 posts at a time in Gallery screen.
    nextPage(){
        if(this.firstIndex <= 488){
            this.firstIndex += 12;
            this.galleryComponent.startSlice = this.firstIndex;
            console.log(this.galleryComponent.startSlice);
        }
    }
    previousPage(){
        if(this.firstIndex >= 12){
            this.firstIndex -= 12;
            this.galleryComponent.startSlice = this.firstIndex;
            console.log(this.galleryComponent.startSlice);
        }
    }

}