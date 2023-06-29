// Exportación de la función "printObject"
export const printObject = (argument: any) => {
  console.log(argument);
};

// Declaración de una función genérica "genericFunction"
export function genericFunction<T>(argument: T): T {
  return argument;
}

// Exportación de una función genérica "genericFunctionArrow" en forma de función flecha
export const genericFunctionArrow = <T>(argument: T) => argument;
