import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-mediaplayer',
  templateUrl: './mediaplayer.component.html',
  styleUrls: ['./mediaplayer.component.css']
})
export class MediaplayerComponent implements OnInit {
  //tiene que cumplir con el modelo de la interfaz TrackModel
  mockOver: TrackModel={
    cover:'https://jenesaispop.com/wp-content/uploads/2009/09/guetta_onelove.jpg',
    album:'One Love',
    name: '"Getting Over"',
    _id:1,
    url:'http://localhost:3000/track.mp3' 

  }

  constructor() { }

  ngOnInit(): void {
  }

}
