const Gila = {
  dps: 600,
  speed: 1200,
  drones: [],
  addDrone: (name) => {
    this.drones.push({ name: name });
  },
};

Gila.addDrone("Vespa");

console.log(Gila);