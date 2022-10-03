import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  mainMenu: {
    defaultOptions: Array<any>, accessLink: Array<any>
  } = { defaultOptions: [], accessLink: [] }
  customOptions: Array<any> = []


  constructor(/*private router: Router*/) { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/', 'auth']
      },
      {
        name: 'Search',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Your library',
        icon: 'uil uil-chart',
        router: ['/', 'favorites'],
        query: { hola: 'mundo' }
      }
    ]
    this.mainMenu.accessLink = [
      {
        name: 'Create Playlist',
        icon: 'uil-plus-square'
      },
      {
        name: 'Liked Songs',
        icon: 'uil-heart-medical'
      }
    ]
    this.customOptions = [
      {
        name: 'My list º1',
        router: ['/']
      },
      {
        name: 'My list º2',
        router: ['/']
      },
      {
        name: 'My list º3',
        router: ['/']
      },
      {
        name: 'My list º4',
        router: ['/']
      }
    ]

  }

}
