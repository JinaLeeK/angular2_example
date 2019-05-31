import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', state: 'WA' },
      { id: 12, name: 'Narco', state: 'MA' },
      { id: 13, name: 'Bombasto', state: 'WA' },
      { id: 14, name: 'Celeritas', state: 'WA' },
      { id: 15, name: 'Magneta', state: 'MA' },
      { id: 16, name: 'RubberMan', state: 'WA' },
      { id: 17, name: 'Dynama', state: 'MA' },
      { id: 18, name: 'Dr IQ', state: 'WA' },
      { id: 19, name: 'Magma', state: 'WA' },
      { id: 20, name: 'Tornado', state: 'WA' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
