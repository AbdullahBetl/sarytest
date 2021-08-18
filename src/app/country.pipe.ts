import { Pipe, PipeTransform } from '@angular/core';

// array of all countries
import { COUNTRIES } from './heroes/hero-filter/countries';

@Pipe({
  name: 'country'
})

export class CountryPipe implements PipeTransform {

  transform(value: string): unknown {
    return value ? this.getCountryByCode(value) : null;
  }

  getCountryByCode(code: string) {
    return COUNTRIES.find(country => country.code === code)?.name;
  }

}
