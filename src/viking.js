class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }
    
    receiveDamage(damage){
        this.health -= damage;
    }
}

class Viking extends Soldier{
    constructor(name,health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        }
        return `${this.name} has died in act of combat`;
    }

    battleCry() {
        return `Odin Owns You All!`
    }
}

class Saxon extends Soldier{
    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        return `A Saxon has died in combat`;
    }
}

class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    };

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    };

    vikingAttack() {
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

        const randomViking = this.vikingArmy[randomVikingIndex];
        const randomSaxon = this.saxonArmy[randomSaxonIndex];

        const result = randomSaxon.receiveDamage(randomViking.strength);

        if (randomSaxon.health <= 0) {
        this.saxonArmy.splice(randomSaxonIndex, 1);
        };

        return result;
    }

    saxonAttack() {
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

        const randomViking = this.vikingArmy[randomVikingIndex];
        const randomSaxon = this.saxonArmy[randomSaxonIndex];

        const result = randomViking.receiveDamage(randomSaxon.strength);

        if (randomViking.health <= 0) {
        this.vikingArmy.splice(randomVikingIndex, 1);
        };

        return result;
    };

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`;
        } else if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`
        } else if (this.vikingArmy.length === 0 && this.saxonArmy.length === 0) {
            return `Cats grew a fifth finger,  learned to fight with axes and took over the world by destroying both armies`
        }
        return `Vikings and Saxons are still in the thick of battle.`;
    };
}
