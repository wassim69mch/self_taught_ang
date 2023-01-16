import { Component, OnInit } from '@angular/core';


declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  { path: '/calcul', title: 'calculator',  icon: 'calcul', class: '' },
  
];


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit{
  menuItems!: any[];
  constructor() { }
  ngOnInit(){
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
