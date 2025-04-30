class Weapon{
    constructor(id, name, damage, health, image, type){
        this.id = id;
        this.name = name;
        this.damage = damage;
        this.health = health;
        this.image = image;
        this.type = type;
    }

    generateCard(){
        return `
            <div class="cardName">${this.name}</div>
            <div class="cardImage" style="background-image: url(${this.image})"></div>
            <div class="cardStats">
                <div class="cardHealth">${this.health}</div>
                <div class="cardAbility" style="background-image: url(${this.type})"></div>
                <div class="cardDamage">${this.damage}</div>
            </div>
        `
    }
}

const mace = new Weapon(1, "Mace", 30, 5, "Images/Weapons/icon_mace.png", "");

export const weaponsList = [mace];