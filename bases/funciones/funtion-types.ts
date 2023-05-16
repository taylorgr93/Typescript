(() => {
    const addNumbers = (a: number, b : number) => a + b;
    const greet = (name: string) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado!`;

    let myFunction: any;

    myFunction = 10;
    console.log(myFunction)

    // let myFunction: (y: number, x: number) => number;
    myFunction = addNumbers;
    console.log(myFunction(1,2))

    myFunction = greet;
    console.log(greet(`Fernando`))

    myFunction = saveTheWorld;
    console.log(myFunction())
})()