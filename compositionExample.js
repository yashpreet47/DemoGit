const canEat = {
    eat() {
      console.log("Eating...");
    },
  };
  
  const canWalk = {
    walk() {
      console.log("Walking...");
    },
  };
  
  const canSwim = {
    swim() {
      console.log("Swimming...");
    },
  };
  
  // Composing behaviors into a new object
  const person = Object.assign({}, canEat, canWalk);
  person.eat(); // Eating...
  person.walk(); // Walking...
  
  const fish = Object.assign({}, canEat, canSwim);
  fish.eat(); // Eating...
  fish.swim(); // Swimming...
  