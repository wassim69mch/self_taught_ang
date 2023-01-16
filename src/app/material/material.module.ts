import { NgModule } from '@angular/core';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule} from '@angular/material/toolbar'
import { FormsModule } from '@angular/forms';
import { MatIconModule} from '@angular/material/icon';
import { MatDialogModule} from "@angular/material/dialog";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule} from '@angular/material/menu';

const Material =  [
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  FormsModule,
  MatIconModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatSelectModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatCardModule,
  MatMenuModule
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
