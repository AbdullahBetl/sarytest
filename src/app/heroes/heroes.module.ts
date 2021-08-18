import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountryPipe } from '../country.pipe';
import { HeroFilterComponent } from './hero-filter/hero-filter.component';
import { HeroesComponent } from './heroes.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    HeroesComponent,
    HeroFilterComponent,
    CountryPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class HeroesModule { }
