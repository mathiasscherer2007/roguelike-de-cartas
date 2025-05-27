class Enemy{
    static counter = 0;

    constructor(name, damage, health, image, ability, type, isBoss){
        this.id = Enemy.counter;                            // Enemy's ID, similar to an autoincrement value, I guess?
        this.name = name;                                   // Enemy's name, displayed on top of the card.
        this.damage = damage;                               // Enemy's base damage.
        this.health = health;                               // Enemy's base health.
        this.image = image;                                 // Enemy's image.
        this.ability = ability === "" ? "none" : ability;   // Enemy's ability, if they one.
        this.type = type;                                   // Enemy's type. Check dictionary bellow for more info.
        this.isBoss = isBoss;                               // Wether the enemy is a boss or not. Bosses are treated differently.

        Enemy.counter++;
    }
}

/*

    Enemy type dictionary:

    index 0 = goblin;
    index 1 = human;
    index 2 = animal;
    index 3 = demon;
    index 4 = misc;

    Maybe there'll be more in the future.
    Depends wether Mr. Paxota will want to draw more for me.
*/

const garcia = new Enemy("Hermano Pera", 3, 5, "Images/Enemies/pera.png", "", 4, false);
const goblin = new Enemy("Goblin", 1, 1, "Images/Enemies/goblin.png", "", 0, false);
const blackKnight = new Enemy("Black Knight", 5, 10, "Images/Enemies/black_knight.png", "", 1, true);

const enemyList =  [goblin, garcia, blackKnight]

export {enemyList};