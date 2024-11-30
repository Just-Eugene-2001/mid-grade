const SpaceShip = {
  name: "Praxis",
  shield: 2000,
};

function applyDamage(points) {
  this.shield = this.shield - points;
  console.log(`[${this.name}]: Taking fire at ${points}. Need assistance.`);
}

const praxisDamage = SpaceShip;
console.log(SpaceShip);
