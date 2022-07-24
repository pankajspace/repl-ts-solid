// LSP: Objects should be replacable with instances of their subclasses without altering the behaviour


// Violating LSP
// class Bird {
//   fly() { }
// }
// class Eagle extends Bird {
//   dive() { }
// }
// const bird = new Bird();
// bird.fly();
// // bird object can be replaced by eagle object as follows hence it looks like working with Eagle class
// const eagle = new Eagle();
// eagle.fly();
// // But when we add Penguin class its failing
// class Penguin extends Bird {
//   walks() { }
// }
// const penguin = new Penguin();
// penguin.fly();  // The problem here is that Penguins can't fly


// Following LSP
// To solve above problem we should have a separate parent class for flying birds
class Bird {
}
class FlyingBird {
  fly() { }
}
class Eagle extends FlyingBird {
  fly() { }
}
const flyingBird = new FlyingBird();
flyingBird.fly(); //This will work as expected
const eagle = new Eagle();
eagle.fly();  //This will work as expected
class Penguin extends Bird {
  walks() { }
}
const penguin = new Penguin();
// In this case we can't write penguin.fly() as penguin is subclass of Birds where there is no fly() method.