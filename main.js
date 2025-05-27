import { enemyList } from "./enemies.js";
import { weaponsList } from "./weapons.js";
import { Card, CardEnemy, CardWeapon, isCardSelected, weaponsInHand} from "./cards.js";

const divTOTEM = document.querySelector(".totem");
const divBOARD = document.querySelector(".board");
const divEVENTS = document.querySelector(".events");
const divPLACEMENT = document.querySelector(".placement");
const divHAND = document.querySelector(".player");
const divWEAPONS = document.querySelector(".weapons");
const divBACKPACK = document.querySelector(".backpack");
const divHEALTH = document.querySelector(".health");

let eventCounter = 0; // Number of events the player has passed.
let turnCounter = 0;

// // let manoJohn = new CardEnemy(enemyList[0].name, enemyList[0].damage, enemyList[0].health, enemyList[0].image, enemyList[0].ability);
// // divPLACEMENT.appendChild(manoJohn.element);
let enemy2 = new CardEnemy(enemyList[2].name, enemyList[2].damage, enemyList[2].health, enemyList[2].image, "");
divPLACEMENT.appendChild(enemy2.element);
let enemy3 = new CardEnemy(enemyList[2].name, enemyList[2].damage, enemyList[2].health, enemyList[2].image, "");
divPLACEMENT.appendChild(enemy3.element);
let enemy4 = new CardEnemy(enemyList[2].name, enemyList[2].damage, enemyList[2].health, enemyList[2].image, "");
divPLACEMENT.appendChild(enemy4.element);

let arma = new CardWeapon(weaponsList[0].name, 4, weaponsList[0].health, weaponsList[0].image, weaponsList[0].ability, weaponsList[0].type);
divWEAPONS.appendChild(arma.element);
weaponsInHand.push(arma);
let arma2 = new CardWeapon(weaponsList[2].name, weaponsList[2].damage, weaponsList[2].health, weaponsList[2].image, weaponsList[2].ability, weaponsList[2].type);
divWEAPONS.appendChild(arma2.element);
weaponsInHand.push(arma2);

generateEvent(eventCounter);

function generateEvent(eventCounter){
    let eventType = "";

    if (eventCounter%2 === 0) {
        eventType = "battle";

        let hordeType = Math.floor(Math.random() * enemyList.length);

        switch (hordeType){
            case 0:                         // goblins
                console.log("goblins");

                const selectedEnemyList = enemyList[hordeType];
                

                break;
            case 1:                         // humans
                console.log("humans");
                break;
            case 2:                         // animals
                console.log("animals");
                break;
            case 3:                         // demons
                console.log("demons");
                break;
            case 4:                         // misc
                console.log("misc");
                break;
            case 5:                         // everyone
                console.log("whoopsie daisy! everyone is here!");
                break;
            default:
                console.log(hordeType);
                break
        }

    } else {
        eventType = "shop";
    }

    console.log(eventType);
}