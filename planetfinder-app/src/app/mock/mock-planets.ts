import { Planet } from '../models/planet';

export const MOCK_PLANETS: Planet[] = [
  {
    name: 'Tatooine',
    diameter: '10465',
    rotationPeriod: '23',
    orbitalPeriod: '304',
    gravity: '1',
    population: '120000',
    climate: 'Arid',
    terrain: 'Dessert',
    surfaceWater: '1',
    residents: ['https://swapi.co/api/people/1/'],
    films: ['https://swapi.co/api/films/1/'],
    url: 'https://swapi.co/api/planets/1/',
    created: '2014-12-09T13:50:49.641000Z',
    edited: '2014-12-15T13:48:16.167217Z'
  }
];
