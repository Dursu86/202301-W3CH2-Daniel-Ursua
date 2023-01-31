import { Conselour } from '../models/conselour';
import { Esquire } from '../models/esquire';
import { Fighter } from '../models/Fighter';
import { King } from '../models/king';

const Joffrey = new King('Joffrey', 'Baratheon', 28, 2);
const Jaime = new Fighter('Jaime', 'Lannister', 39, 'Sword', 8);
const Daenerys = new Fighter('Daenerys', 'Targaryen', 32, 'Dragon', 9);
const Varys = new Conselour('Varys', 'No one', 45, Daenerys);
const Pepe = new Esquire('Pepe', 'de los Pepes', 87, Jaime, 8);

export const charactersArr = [Joffrey, Jaime, Daenerys, Varys, Pepe];
