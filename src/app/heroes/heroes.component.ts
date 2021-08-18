import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IHero } from './hero.model';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['name', 'phone', 'email', 'date', 'country', 'company'];
  dataSource: MatTableDataSource<IHero>;
  
  queryParams: any;
  
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.queryParams = this.route.snapshot.queryParams
    console.log(this.queryParams);

    this.route.queryParams.subscribe(params => {
      this.getHeroes(params)
    })
  }

  getHeroes(params): void {
    this.heroService.getHeroes(params).subscribe((heroes: IHero[]) => {
      this.dataSource = new MatTableDataSource(heroes);
      this.dataSource.sort = this.sort
    });
  }

  onFilter(e) {
    this.router.navigate(['/heroes'], { queryParams: e })
  }


}
