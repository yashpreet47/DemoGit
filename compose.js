const prepare = ()=>{
    return {
        prepare : ()=>{
            console.log("Preparing..");
        }
    }
}

const bake = ()=>{
    return {
        bake : ()=>{
            console.log("Baking..");
        }
    }
}

const toss = ()=>{
    return {
        toss : ()=>{
            console.log("Tossing..");
        }
    }
}

const ready = ()=>{
    return {
        ready : ()=>{
            console.log("Ready..");
        }
    }
}

const stuff = ()=>{
    return {
        stuff : ()=>{
            console.log("Stuffing the crust..");
        }
    }
}
const buttering = ()=>{
    return {
        buttering : ()=>{
            console.log("Buttering the crust..");
        }
    }
}

const createPizza = (size , crust , sauce)=>{
    const pizza = {
        size : size ,
        crust : crust ,
        sauce : sauce 
    }

    return {
            pizza,
        ...prepare(),
        ...bake(),
        ...ready(),
    }
}

const createSalad = (size,dressing)=>{
    return {
        size : size ,
        dressing : dressing,
        ...prepare(),
        ...toss(),
        ...ready()
    }
}

const createStuffedButterPizzaCrust = (pizza)=>{
        return {
            pizza,
            ...stuff(),
            ...buttering()
        }
}

const myPizza = createPizza("large","wheat","tomato");
const mySalad = createSalad("large","Normal Dressing");
const stuffedPizza = createStuffedButterPizzaCrust(myPizza);


// console.log(myPizza);
// console.log(mySalad);
// console.log(stuffedPizza);

const pizzza = createStuffedButterPizzaCrust(createPizza("Large","Thin","Tomato"));
console.log(pizzza);
pizzza.buttering();
pizzza.stuff();