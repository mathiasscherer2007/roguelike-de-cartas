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

const mace = new Weapon(1, "Mace", 5, 5, "Images/Weapons/icon_mace.png", "", "0");
const sword = new Weapon(2, "Sword", 3, 5, "Images/Weapons/icon_sword.png", "", "1");

export const weaponsList = [mace, sword];