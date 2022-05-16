import { strictEquals } from "./helper.js";

console.log("Debe dar `true` y da " + strictEquals(1, 1));
console.log("Debe dar `false` y da " + strictEquals(NaN, NaN));
console.log("Debe dar `true` y da " + strictEquals(0, -0));
console.log("Debe dar `true` y da " + strictEquals(-0, 0));
console.log("Debe dar `false` y da " + strictEquals(1, "1"));
console.log("Debe dar `false` y da " + strictEquals(true, false));
console.log("Debe dar `true` y da " + strictEquals(false, false));
console.log("Debe dar `false` y da " + strictEquals("Water", "oil"));
