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

let isCardSelected = false;

class CardWeapon extends Card{
    constructor(name, damage, health, image, type){
        super(name, damage, health, image, type);
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
    constructor(name, damage, health, image, ability){
        super(name, damage, health, image, ability);
        this.element.classList.add("cardEnemy");

        this.element.addEventListener("mouseenter", () => {
            if (isCardSelected) {
                this.element.style.boxShadow = "0 0 10px rgb(255, 0, 0)";
            }
        })
        this.element.addEventListener("mouseleave", () => {
            if (isCardSelected) {
                this.element.style.boxShadow = "";
            }
        })
    }
}

export {Card, CardWeapon, CardEnemy, isCardSelected};