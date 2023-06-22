(() => {
  let a = "Fernando";
  console.log(a);

  const nombre: string = "Taylor";

  const heroe = {
    a: 1,
    b: 2,
  };

  heroe.b = 100;

  const getName = (): void => {
    console.log(`viejo getName`);
  };

  //   getName = () => {
  //     console.log(`nuevo getName`);
  //   };
  //   getName();
})();
