class Weapon{
    constructor(id, name, damage, health, image, type){
        this.id = id;
        this.name = name;
        this.damage = damage;
        this.health = health;
        this.image = image;
        this.type = type;
        this.selected = false;
    }
}

const mace = new Weapon(1, "Mace", 30, 5, "Images/Weapons/icon_mace.png", "");

export const weaponsList = [mace];