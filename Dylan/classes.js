// create a class player

class Player {
  constructor(name, country) {
    this.name = name;
    this.country = country;
  }
  details() {
    console.log(`${this.name} was born in ${this.country}`);
  }
}

class TennisPlayer extends Player {
  constructor(name, country, age) {
    super(name, country);
    this.age = age;
  }
  aged() {
    console.log(`${this.name} is ${this.age} years old`);
  }
}

// const messi = new Player("Messi", "Argentina");
// messi.details();

const ekong = new TennisPlayer("Ekong", "Nigeria", 31);
ekong.aged();
