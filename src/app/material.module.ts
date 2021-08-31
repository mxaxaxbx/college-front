import { NgModule } from '@angular/core';

import { MatToolbarModule }   from '@angular/material/toolbar';
import { MatIconModule }      from '@angular/material/icon';
import { MatButtonModule }    from '@angular/material/button';
import { MatTooltipModule }   from '@angular/material/tooltip';
import { MatCardModule }      from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule }     from '@angular/material/input';
import { MatSelectModule }    from '@angular/material/select';
import { MatSnackBarModule }    from '@angular/material/snack-bar';
import { MatProgressBarModule }    from '@angular/material/progress-bar';

const modules = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatTooltipModule,
  MatCardModule,
  MatFormFieldModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule,
  MatProgressBarModule,
]

@NgModule({
  imports: [ modules ],
  exports: [ modules ],
})
export class MaterialModule { }
