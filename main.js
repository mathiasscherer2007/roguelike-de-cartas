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

// let manoJohn = new CardEnemy(enemyList[0].name, enemyList[0].damage, enemyList[0].health, enemyList[0].image, enemyList[0].ability);
// divPLACEMENT.appendChild(manoJohn.element);
let goblin = new CardEnemy(enemyList[1].name, enemyList[1].damage, enemyList[1].health, enemyList[1].image, enemyList[1].ability);
divPLACEMENT.appendChild(goblin.element);
let goblin1 = new CardEnemy(enemyList[1].name, enemyList[1].damage, enemyList[1].health, enemyList[1].image, enemyList[1].ability);
divPLACEMENT.appendChild(goblin1.element);
let goblin2 = new CardEnemy(enemyList[1].name, enemyList[1].damage, enemyList[1].health, enemyList[1].image, enemyList[1].ability);
divPLACEMENT.appendChild(goblin2.element);
let goblin3 = new CardEnemy(enemyList[1].name, enemyList[1].damage, enemyList[1].health, enemyList[1].image, enemyList[1].ability);
divPLACEMENT.appendChild(goblin3.element);

let arma = new CardWeapon(weaponsList[0].name, 4, weaponsList[0].health, weaponsList[0].image, weaponsList[0].ability, weaponsList[0].type);
divWEAPONS.appendChild(arma.element);
weaponsInHand.push(arma);
let arma2 = new CardWeapon(weaponsList[2].name, weaponsList[2].damage, weaponsList[2].health, weaponsList[2].image, weaponsList[2].ability, weaponsList[2].type);
divWEAPONS.appendChild(arma2.element);
weaponsInHand.push(arma2);
