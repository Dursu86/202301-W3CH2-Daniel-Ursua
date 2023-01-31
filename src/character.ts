/* eslint-disable no-unused-vars */
interface Got {
  name: string;
  family: string;
  age: number;
  isLive: boolean;
}

export class Character implements Got {
  isLive: boolean;
  serie: string;
  message: string;
  constructor(public name: string, public family: string, public age: number) {
    this.isLive = true;
    this.serie = 'Games of thrones';
    this.message = '';
  }

  died() {
    this.isLive = false;
  }

  comunicate() {
    return this.message;
  }
}
