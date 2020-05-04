import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatCardModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
} from "@angular/material";

const myModule = [
  MatCardModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, myModule],
  exports: [myModule],
})
export class MaterialModule {}
