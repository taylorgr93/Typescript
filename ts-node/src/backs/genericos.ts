// import { Hero } from "./classes/Hero";
// import { Hero as SuperHero } from "./classes/Hero";
// import * as HeroClasses from "./classes/Hero";

// const ironman = new HeroClasses.Hero("Ironman", 1, 55);
// const ironman = new Hero("Ironman", 10, 55);
// console.log(ironman.power);

// printObject(123);
// printObject(new Date());
// printObject({ a: 1, b: 2, c: 3 });
// printObject([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// printObject("Hola Mundo!");

// --------------------------------------------------------
import {
  printObject,
  genericFunction,
  genericFunctionArrow,
} from "../generics/generics";
import { Hero, Villain } from "../interfaces";

// const name: string = "Fernando";

// console.log(genericFunctionArrow(3.141618).toFixed(2));
// console.log(genericFunction(name).toUpperCase());
// console.log(genericFunction(new Date()).getDate());

// -----------------------------------------------------------

const deadpool = {
  name: "Deadpool",
  realName: "Wade Winston Wilson",
  dangerLevel: 130,
};

console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel);
