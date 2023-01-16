import { NgModule } from '@angular/core';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule} from '@angular/material/toolbar'
import { FormsModule } from '@angular/forms';
import { MatIconModule} from '@angular/material/icon';
const Material =  [
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  FormsModule,
  MatIconModule
];

@NgModule({
  exports : [
    Material
  ],
  imports: [
    Material
  ]
})
export class MaterialModule { }
