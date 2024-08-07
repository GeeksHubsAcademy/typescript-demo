"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Porsche_model;
class Porsche {
    constructor(color, model, year) {
        _Porsche_model.set(this, void 0);
        this.color = color;
        __classPrivateFieldSet(this, _Porsche_model, model, "f");
        this.year = year;
    }
    // constructor( public color: string, public model: string, public year: number) {
    // }
    getModel() {
        return __classPrivateFieldGet(this, _Porsche_model, "f");
    }
}
_Porsche_model = new WeakMap();
const _911 = new Porsche('red', '911', 2020);
const num = 2;
const tuple = ['hola', 2, true];
function sum(a, b) {
    return a ? a : b;
}
const x = sum(1, '2');
const fn = function (a, b) { return a + b; };
const t = { a: 2 };
const shape = {
    name: 'circle',
    color: 'red',
    metadata: {
        x: 2,
        y: 3,
        z: 4,
        [Symbol()]: "symbol",
    }
};
