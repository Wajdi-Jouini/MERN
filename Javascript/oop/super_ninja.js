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


class Sensei extends Ninja {
    constructor(name, health, speed, strength, wisdom) {
        super (name);
        this.health = health || 200;
        this.speed = speed || 10;
        this.strength = strength || 10;
        this.wisdom = wisdom || 10;
    }
speakWisdom() {
    super.drinkSake();
}
}
// const sensei1 = new Sensei('senseiAymen') ;
// sensei1.speakWisdom();
// sensei1.showstats();

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showstats();
