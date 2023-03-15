class Ninja    {
    constructor(name, health, speed, strength) {
        this.name = name;
        this.health = health;
        this.speed = speed || 3;
        this.strength = strength || 3;
}
sayName() {
    console.log(`${this.name}`);
}
showstats() {
    console.log(`Name: ${this.name} Health: ${this.health} Speed: ${this.speed} Strength: ${this.strength}`);
}
drinkSake() {
    this.health += 10;
    console.log(`What one programmer can do in one month, two programmers can do in two months.`)
}
}
ninja1 = new Ninja('Ninja1',50,100, 3);
ninja1.sayName();
ninja1.showstats();
ninja1.drinkSake();