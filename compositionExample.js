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
  const person = Object.assign({},canEat,canWalk);
  person.eat();
  person.walk();
  
  const fish = Object.assign({}, canEat, canSwim);
  fish.eat(); // Eating...
  fish.swim(); // Swimming...
  

  const engineV1 = {
    start() {
      console.log("Engine V1 is starting ...");
    },
  };
  
  const engineV2 = {
    start() {
      console.log("Engine V2 is starting...");
    },
  };
  
  const car = {
    engine: engineV1, // Initial engine
    startCar() {
      this.engine.start(); // Delegate to engine
    },
  };
  
  car.startCar(); // Engine V1 starts...
  car.engine = engineV2; // Replace engine dynamically
  car.startCar(); // Engine V2 starts...
  


  const createPerson = () => {
    const eat = () => console.log("Eating...");
    const walk = () => console.log("Walking...");
    
    return { eat, walk }; // Return behaviors as properties
  };
  
  const person1 = createPerson();
  
  person1.eat(); // Eating...
  person1.walk(); // Walking...
  