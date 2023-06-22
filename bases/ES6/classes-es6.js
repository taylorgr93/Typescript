(() => {
  class Avenger {
    constructor(name = "No name", power = 0) {
      this.name = name;
      this.power = name;
    }
  }

  class FlyingAvenger extends Avenger {
    constructor(name, power) {
      super(name, power);
      this.flying = true;
    }
  }

  const hulk = new Avenger("Hulk", 9001);
  const falcon = new FlyingAvenger("Falcon", 50);
  console.log(hulk);
  console.log(falcon);
})();
