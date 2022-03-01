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


    ngAfterViewInit() {}

    showTop(){
        if(!this.toggleSwitch){
            console.log(this.toggleSwitch);
            this.toggleSwitch = true;
        }
    }
    showNew(){
        console.log(this.toggleSwitch);
        if(this.toggleSwitch){
            this.toggleSwitch = false;
        }
    }

}