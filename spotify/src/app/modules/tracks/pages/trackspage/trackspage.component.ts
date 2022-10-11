import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trackspage',
  templateUrl: './trackspage.component.html',
  styleUrls: ['./trackspage.component.css']
})
export class TrackspageComponent implements OnInit {
  mockTraksList=[
    {
      name:'Aventura'
    },
    {
      name:'Hector Acosta'
    },
    {
      name:'Luis miguel del amargue'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
