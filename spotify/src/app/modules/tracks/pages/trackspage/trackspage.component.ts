import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as dataRaw from '../../../../data/tracks.json';

@Component({
  selector: 'app-trackspage',
  templateUrl: './trackspage.component.html',
  styleUrls: ['./trackspage.component.css']
})
export class TrackspageComponent implements OnInit {
    mockTraksList: Array <TrackModel>=[
    
  ]
  constructor() { }

  ngOnInit(): void {
    const { data }: any=(dataRaw as any).default
    this.mockTraksList=data
  }

}
