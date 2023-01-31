/* eslint-disable no-unused-vars */
import { Character } from '../character';
import { Fighter } from '../models/Fighter';

export class Esquire extends Character {
  constructor(
    name: string,
    family: string,
    age: number,
    public knight: Fighter,
    public submission: number
  ) {
    super(name, family, age);
    this.message = 'Soy un loser';
  }
}
