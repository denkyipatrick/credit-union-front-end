import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const materialComponents = [
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatSelectModule,
  MatCheckboxModule,
  MatDialogModule,
  MatSnackBarModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: [materialComponents],
  exports: [materialComponents]
})
export class MaterialComponentsModule { }
