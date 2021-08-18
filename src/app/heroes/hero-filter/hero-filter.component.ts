import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeroService } from '../hero.service';
import { COUNTRIES } from './countries';

@Component({
  selector: 'app-hero-filter',
  templateUrl: './hero-filter.component.html',
  styleUrls: ['./hero-filter.component.scss']
})
export class HeroFilterComponent implements OnInit {

  @Output() onFilter = new EventEmitter<string>();
  @Input() set filterData(data) {
    console.log(data);

    this.initFormGroup(data)
  };

  countries = COUNTRIES;
  filterFormGroup: FormGroup

  constructor(private fb: FormBuilder, private heroService: HeroService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.heroService.getAllCountries().subscribe(data => {
      this.countries = data;
      console.log(this.countries);
    });
  }

  initFormGroup(obj: any = null) {
    this.filterFormGroup = this.fb.group({
      email: [obj?.email || ''],
      phone: [obj?.phone || ''],
      name: [obj?.name || ''],
      company: [obj?.company || ''],
      country: [obj?.country || ''],
      date: [obj?.date || ''],
    })
  }

  onFilterSubmit(form: FormGroup): void {
    this.onFilter.emit(this.removeEmptyItemFromObject(form.value));
  }

  removeEmptyItemFromObject(obj: any): any {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] === '') {
          delete obj[key];
        }
      }
    }
    return obj;
  }

}
