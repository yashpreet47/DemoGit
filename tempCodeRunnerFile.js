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
        ...prepare(),
        ...bake(),
        ...ready(),
        pizza
    }
}