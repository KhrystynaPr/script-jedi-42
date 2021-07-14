// https://www.codewars.com/kata/santaclausable-interface

function isSantaClausable(obj) {
  const arrayOfMethods = ["sayHoHoHo", "distributeGifts", "goDownTheChimney"];
  return arrayOfMethods.every((elem) => typeof obj[elem] === "function");
}


// https://www.codewars.com/kata/cylon-evolution

class Cylon {
  constructor(model) {
    this.model = model;
    this.attack = () => `Destroy all humans!`;
  }
}

class HumanSkin extends Cylon {
  constructor(model) {
    super(model);
    this.infiltrate =  () => `Infiltrate the colonies`;
  }
}

