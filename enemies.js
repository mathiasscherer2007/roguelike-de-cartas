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

/*

    Enemies are separated by type as well,
    but this separation occurs in the list itself.

    index 0 = goblin;
    index 1 = human;
    index 2 = animal;
    index 3 = demon;
    index 4 = misc;
    index 5 = everyone;

    Inside these lists, index 0 represents a list of bosses.
    Stupid ass way of organizing this,
    but whatever, maybe some day I'll change it.

    enemyList = [type1[[boss, boss], enemy1, enemy2], 
                 type2[[boss, boss], enemy1, enemy2], 
                 type3[[boss, boss], enemy1, enemy2]]

*/

const enemyList =  [[[], goblin],
                    [[], ],
                    [[], ],
                    [[], ],
                    [[], garcia],
                    [[], goblin, garcia]];


export {enemyList};