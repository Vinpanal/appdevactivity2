import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  allimages = [{
    'src' : 'assets/image/1.jpg'
}, {
    'src' : 'assets/image/1.jpg'
}, {
    'src' : 'assets/image/1.jpg'
},{
    'src' : 'assets/image/1.jpg'
}];
  constructor() { }

  ngOnInit() {}

}
