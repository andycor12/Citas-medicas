import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//angular material
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    BrowserAnimationsModule
  ]
})
export class SharedModule { }
