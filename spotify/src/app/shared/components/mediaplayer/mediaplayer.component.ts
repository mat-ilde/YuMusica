import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mediaplayer',
  templateUrl: './mediaplayer.component.html',
  styleUrls: ['./mediaplayer.component.css']
})
export class MediaplayerComponent implements OnInit {
  mockOver: any={
    cover:'https://imagen.research.google/main_gallery_images/the-toronto-skyline-with-google-brain-logo.jpg',
    album:'album',
    name: 'canción'

  }

  constructor() { }

  ngOnInit(): void {
  }

}
