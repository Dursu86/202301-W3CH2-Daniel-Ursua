/* eslint-disable no-unused-vars */
import { Character } from '../character';
import { Fighter } from '../models/Fighter';

export class Conselour extends Character {
  constructor(
    name: string,
    family: string,
    age: number,
    public asses: Fighter
  ) {
    super(name, family, age);
    this.message = 'Creo que voy a morir pronto.';
  }
}
