import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [ MatButtonModule, MatIconModule, MatInputModule , MatToolbarModule, MatCardModule , MatSelectModule],
  exports: [ MatButtonModule, MatIconModule, MatInputModule , MatToolbarModule, MatCardModule , MatSelectModule]
  }
)

export class MaterialModule {
}
