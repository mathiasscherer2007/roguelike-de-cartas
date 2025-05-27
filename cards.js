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

    animationRandomizer(animationList){
        const SIZE = animationList.length;
        
    }
}

class CardWeapon extends Card{
    constructor(name, damage, health, image, ability, type){
        super(name, damage, health, image, ability);
        this.type = type;
        this.selected = false;
        this.element.classList.add("cardWeapon");

        this.element.addEventListener("mouseenter", () => {
            this.element.classList.add("cardWeaponHover");
        })

        this.element.addEventListener("mouseleave", () => {
            this.element.classList.remove("cardWeaponHover");
        })

        this.element.addEventListener("click", () => {
            if (this.selected){
                this.selected = false;
                isCardSelected = false;
                this.element.classList.remove("cardWeaponSelected");
            } else {
                for (let i = 0; i < weaponsInHand.length; i++) {
                    const weapon = weaponsInHand[i];
                    if (weapon.selected) {
                        weapon.selected = false;
                        weapon.element.classList.remove("cardWeaponSelected");
                        weapon.element.classList.add("cardWeaponHover");
                        setTimeout(() => {
                            weapon.element.classList.remove("cardWeaponHover");
                        }, 120);
                    }
                }
                this.selected = true;
                isCardSelected = true;
                this.element.classList.add("cardWeaponSelected");
            }
        })
    }
}

class CardEnemy extends Card{
    constructor(name, damage, health, image, ability){
        super(name, damage, health, image, ability);
        this.maxHealth = this.health;
        this.element.classList.add("cardEnemy");
        this.pos = enemiesInField.length;

        this.animationHandlerDeath = this.animationHandlerDeath.bind(this);
        this.animationHandlerDamage = this.animationHandlerDamage.bind(this);

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
                        this.checkState(item);
                    }
                }
                this.element.innerHTML = this.generateCard();
                this.element.style.boxShadow = "";
            }
        })
    }

    checkState(item){
        if (this.health <= 0) {
            this.element.removeEventListener("animationend", this.animationHandlerDamage);
            this.element.addEventListener("animationend", this.animationHandlerDeath);
            this.element.classList.add("heavyDamage");
            this.element.style.textShadow = "none";
            this.image = "";
            this.health = 0;
            this.element.style.backgroundColor = "rgba(25, 25, 20, 1)";
            this.name = "";
            this.generateCard();
            setTimeout(() => {
                this.element.classList.add("death");
            }, 100);
        } else {
            this.element.addEventListener("animationend", this.animationHandlerDamage)
            // bloc of code for the animation
            if (item.damage * 100 / this.maxHealth <= 20) {
                this.element.classList.add("lightFlinch");
            } else if (item.damage * 100 / this.maxHealth <= 60) {
                this.element.classList.add("mediumFlinch");
            } else {
                this.element.classList.add("heavyFlinch");
            }

            // bloc of code for the fissure image to be applied
            if (this.health * 100 / this.maxHealth <= 10) {
                this.element.classList.add("heavyDamage");
            } else if (this.health * 100 / this.maxHealth <= 40) {
                this.element.classList.add("mediumDamage");
            } else if (this.health * 100 / this.maxHealth <= 80) {
                this.element.classList.add("lightDamage");
            }
        }
    }

    animationHandlerDeath(event){
        enemiesInField.splice(this.pos, 1);
        this.element.remove();
    }

    animationHandlerDamage(event){
        console.log(event.animationName)
        this.element.classList.remove(event.animationName);
    }
}

export {Card, CardWeapon, CardEnemy, isCardSelected, weaponsInHand, enemiesInField};