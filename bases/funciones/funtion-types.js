"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado!`;
    let myFunction;
    myFunction = 10;
    console.log(myFunction);
    // let myFunction: (y: number, x: number) => number;
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(greet(`Fernando`));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
