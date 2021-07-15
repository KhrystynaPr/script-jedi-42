// https://www.codewars.com/kata/547c71fdc5b2b38db1000098/train/javascript

function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = `${this.firstName} ${this.lastName}`;
}


// https://www.codewars.com/kata/this-is-an-other-problem

function NamedOne(first, last) {
  return {
    firstName: first,
    lastName: last,
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
      const arr = name.split(" ");
      if (arr.length === 2) {
        this.firstName = arr[0];
        this.lastName = arr[1];
      }
    },
  };
}
