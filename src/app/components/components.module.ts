import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';


@NgModule({
  declarations: [ 
    SidebarComponent, ToolbarComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports : [
    SidebarComponent
  ]
})
export class ComponentsModule { }
