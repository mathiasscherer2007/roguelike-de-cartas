import { enemyList } from "./enemies.js";
import { weaponsList } from "./weapons.js";

const divTOTEM = document.querySelector(".totem")
const divBOARD = document.querySelector(".board")
const divENEMIES = document.querySelector(".events")
const divPLACEMENT = document.querySelector(".placement")
const divHAND = document.querySelector(".player")
const divWEAPONS = document.querySelector(".weapons")
const divBACKPACK = document.querySelector(".backpack")
const divHEALTH = document.querySelector(".health")

let manoJohn = document.createElement("div");
manoJohn.classList.add("card");
manoJohn.innerHTML = enemyList[0].generateCard();

divPLACEMENT.appendChild(manoJohn);

let arma = document.createElement("div");
arma.classList.add("card", "cardWeapon");
arma.innerHTML = weaponsList[0].generateCard();
let arma2 = document.createElement("div");
arma2.classList.add("card");
arma2.innerHTML = weaponsList[0].generateCard();

divWEAPONS.appendChild(arma);
divWEAPONS.appendChild(arma2);