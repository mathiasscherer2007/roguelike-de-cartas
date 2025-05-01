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

export {Card};