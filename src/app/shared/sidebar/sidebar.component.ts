import { Component, OnInit } from '@angular/core';
import { SidebardService } from '../../services/sidebard.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menuItems: any[];

  constructor( private sidebardService: SidebardService ) {
    this.menuItems = sidebardService.menu;
   }

  ngOnInit(): void {
  }

}
