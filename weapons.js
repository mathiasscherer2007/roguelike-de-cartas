class Weapon{
    constructor(id, name, damage, health, image, ability, type){
        this.id = id;
        this.name = name;
        this.damage = damage;
        this.health = health;
        this.image = image;
        this.ability = ability;
        this.type = type;
    }
}

/*

    Weapon type dictionary

    0 - no type (misc weapons)
    1 - sharp   (swords, knives)
    2 - blunt   (maces, hammers)
    3 - ranged  (bows, crossbow)
    4 - defense (shields)

*/

const mace = new Weapon(1, "Mace", 5, 5, "Images/Weapons/icon_mace.png", "", "2");
const sword = new Weapon(2, "Sword", 3, 5, "Images/Weapons/icon_sword.png", "", "1");
const stick = new Weapon(3, "Stick", 1, 1, "Images/Weapons/icon_stick.png", "", "0")

export const weaponsList = [mace, sword, stick];