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

    ngAfterViewInit() {}

    showTop(){
        this.galleryComponent.topButtonClicked();
        console.log(this.galleryComponent.topSelected);
    }
    showNew(){
        this.galleryComponent.newButtonClicked();
        console.log(this.galleryComponent.topSelected);
    }

}