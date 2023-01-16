import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculComponent } from './calcul/calcul.component';
import { ComponentsModule } from './components/components.module';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

const appRoutes : Routes = [
  {path: '' , component: CalculComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CalculComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
