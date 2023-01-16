import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ 
    SidebarComponent, ToolbarComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports : [
    SidebarComponent,
    ToolbarComponent
  ]
})
export class ComponentsModule { }
