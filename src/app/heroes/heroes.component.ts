import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit() {
    const state = this.route.snapshot.paramMap.get('st');
    console.log(state);
    if(state) {
      this.getHeroesByState(state);
    } else {
      this.getHeroes();
    }
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
    console.log(this.heroes);
  }

  getHeroesByState(state): void {
    this.heroService.searchHeroes(state.toUpperCase(), 'state')
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string, state: string): void {
    name = name.trim();
    state = state.trim();
    if (!name || !state) { return; }

    this.heroService.addHero({name, state} as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
