class Card   {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
}
}
class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        this.power -= 1;
}

}
class Effect_Cards extends Card{
    constructor(name, cost, magnitud) {
        super(name, cost);
        this.magnitud = magnitud;
    }
    Hard_Alogrithm(target) {
        target.res += 3;
        target.magnitud += 3;
        console.log(`The call of this function will increase ${this.res} and ${this.magnitud} by 3`);
}
Unhandled_Promise_Rejection (target) {
        target.res -= 2;
        target.magnitud -= 2;
        console.log(`The call of this function will reduce ${this.res} and ${this.magnitud} by 2`);
}
Pair_Programming (target) {
    target.res += 2;
    target.power += 2;
    console.log(`The call of this function will increase ${this.res} and ${this.magnitud} by 2`);
}
}
const Red_Bult_Ninja= new Unit("Red Bult Ninja", 3, 3, 4);
const Hard_Alogrithm= new Effect_Cards("Hard Alogrithm", 2, 3);
const effect1= new Effect_Cards("hard Alogrithm", 2, 3);
const effect2= new Effect_Cards("Unhandled Promise Rejection", 1, 3);
const effect3= new Effect_Cards("Pair Programming", 3, 3);