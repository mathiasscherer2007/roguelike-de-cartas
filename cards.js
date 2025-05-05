let isCardSelected = false;
let weaponsInHand = [];
let enemiesInField = [];

class Card{
    constructor(name, damage, health, image, ability){
        this.name = name;
        this.damage = damage;
        this.health = health;
        this.image = image;
        this.ability = ability;

        this.element = document.createElement("div");
        this.element.classList.add("card");
        this.element.innerHTML = this.generateCard();
    }

    generateCard(){
        return `
            <div class="cardName">${this.name}</div>
            <div class="cardImage" style="background-image: url(${this.image})"></div>
            <div class="cardStats">
                <div class="cardHealth">${this.health}</div>
                <div class="cardAbility" style="background-image: url(${this.ability})"></div>
                <div class="cardDamage">${this.damage}</div>
            </div>
        `
    }
}

class CardWeapon extends Card{
    constructor(name, damage, health, image, ability, type){
        super(name, damage, health, image, ability);
        this.type = type;
        this.selected = false;
        this.element.classList.add("cardWeapon");

        this.element.addEventListener("click", () => {
            if (this.selected){
                this.selected = false;
                isCardSelected = false;
                this.element.classList.remove("cardWeaponSelected");
            } else {
                if (!isCardSelected){
                    this.selected = true;
                    isCardSelected = true;
                    this.element.classList.add("cardWeaponSelected");
                }
            }
        })
    }
}

class CardEnemy extends Card{
    constructor(name, damage, health, image, ability, pos){
        super(name, damage, health, image, ability);
        this.element.classList.add("cardEnemy");
        this.pos = enemiesInField.length;

        this.element.addEventListener("mouseenter", () => {
            if (isCardSelected) {
                this.element.style.boxShadow = "0 0 10px rgb(255, 0, 0)";
            } else {
                this.element.style.boxShadow = "";
            }
        })
        this.element.addEventListener("mouseleave", () => {
            this.element.style.boxShadow = "";
        })
        this.element.addEventListener("click", () => {
            if (isCardSelected) {
                for (let i = 0; i < weaponsInHand.length; i++) {
                    const item = weaponsInHand[i];
                    if (item.selected) {
                        this.health -= item.damage;
                        item.element.click();
                    }
                }
                this.checkState();
                this.element.innerHTML = this.generateCard();
                this.element.style.boxShadow = "";
            }
        })
    }

    checkState(){
        if (this.health <= 0) {
            enemiesInField.splice(this.pos, 1);
            this.element.remove();
        } else {
            // pass
        }
    }
}

export {Card, CardWeapon, CardEnemy, isCardSelected, weaponsInHand, enemiesInField};