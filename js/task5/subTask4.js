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
const applyDamageBySpaceShip = applyDamage.bind(praxisDamage);
applyDamageBySpaceShip(100);
console.log(SpaceShip);

applyDamage.call(praxisDamage, 200);
console.log(SpaceShip);

applyDamage.apply(praxisDamage, [300]);
console.log(SpaceShip);
