import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})
export class SectionGenericComponent implements OnInit {
  // @Input() and @Output() give a child component 
  // a way to communicate with its parent component
  @Input()title:string=''
  @Input()mode:'small' | 'big'= 'big'
  @Input()dataTracks:Array<TrackModel>=[]


  constructor() { }

  ngOnInit(): void {
  }

}
