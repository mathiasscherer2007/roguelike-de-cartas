class Enemy{
    constructor(id, name, damage, health, image, ability){
        this.id = id;
        this.name = name;
        this.damage = damage;
        this.health = health;
        this.image = image;
        this.ability = ability === "" ? "none" : ability;
    }
}

const garcia = new Enemy(1, "Hermano Pera", 3, 5, "Images/Enemies/pera.png", "");
const goblin = new Enemy(2, "Goblin", 1, 1, "Images/Enemies/goblin.png", "");


export const enemyList = [garcia, goblin];