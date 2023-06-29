// import { Hero } from "./classes/Hero";
// import { Hero as SuperHero } from "./classes/Hero";
// import * as HeroClasses from "./classes/Hero";
define(["require", "exports", "./generics/generics"], function (require, exports, generics_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // const ironman = new HeroClasses.Hero("Ironman", 1, 55);
    // const ironman = new Hero("Ironman", 10, 55);
    // console.log(ironman.power);
    // printObject(123);
    // printObject(new Date());
    // printObject({ a: 1, b: 2, c: 3 });
    // printObject([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    // printObject("Hola Mundo!");
    console.log((0, generics_1.genericFunction)(3.141618).toFixed(2));
    console.log((0, generics_1.genericFunction)("Hola Mundo!").toFixed(2));
});
