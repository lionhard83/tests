"use strict";
const user1 = { name: "Carlo", id: "9827332" };
const user2 = { name: "Carlo", id: "9827332" };
const sum = (a, b) => {
    return a + (b || 0);
};
sum(2);
sum(2, 4);
const x = 0 || 2;
const y = 0 || 0 || 0;
// l'or si sposta a destra nel frattempo che trova falsy, 
// fino a prendersi l'ultimo che trova
const random = Math.random() > 0.5 ? 1 : 0;
const z = random && 4; // 1 && 4 o 0 && 4
// l'and si sposta a destra nel frattempo che trova truthy, 
// fino a prendersi l'ultimo che trova
// c'è un or tra 2 valori, se il primo è falsy viene considerato il secondo
// se l'ultimo è falsy, gli assegna cmq l'ultimo
console.log(x);
const test1 = () => (Math.random() > 0.5 ? 1 : 0);
const test2 = () => (Math.random() > 0.5 ? 1 : 0);
const test3 = () => (Math.random() > 0.5 ? 1 : 0);
test1() && test2() && test3();
