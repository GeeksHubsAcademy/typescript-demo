


type CivilStatus = 'soltero' | 'casado' | 'divorciado' | 'viudo' | 'unionLibre' | 'otro'

type Person = {
    nombre: string,
    edad: number,
    estadoCivil: CivilStatus
}


type WorkerPerson = Person & { role: string }

type Coche = {
    color: string,
    model: string,
    year: number,
    getModel(): string,

}


type Formula = Coche & { velocidadMaxima: number }





interface Car {
    color: string;
    model: string;
    year: number;
    // getModel(): string;
    // getModel: () => string;
}

interface FormulaCar extends Car {
    velocidadMaxima: number;
}

class Porsche {
    color: string;
    #model: string;
    year: number;
    constructor(color: string, model: string, year: number) {
        this.color = color;
        this.#model = model;
        this.year = year;
    }
    // constructor( public color: string, public model: string, public year: number) {
    // }
    getModel(): string {
        return this.#model;
    }
}

const _911 = new Porsche('red', '911', 2020);

// console.log(_911.getModel());



type Int = number | string | bigint;

type Float = number | string;


type Num = Int & Float;


const num: number | string = 2;



type Tuple = [string, number, boolean, 4?];


const tuple: Tuple = ['hola', 2, true];

// type List = (string | Int)[] | (string | Float)[] | (Int | Float)[];


type List = Array<string> // string[]



function sum<T, B>(a: T, b: B): T | B {
    return a ? a : b;
}


const x = sum<number, string>(1, '2');



type Func = (a: number, b: number) => number;

const fn: Func = function (a, b) { return a + b };



type test = {
    a: number,
    b?: string,
}

const t: test = { a: 2 };


type Shape = {
    name: 'circle' | 'square' | 'rectangle',
    color: 'red' | 'blue' | 'green',
    metadata: {
        [x: string]: number,
        [y: symbol]: string,
    }
}

const shape: Shape = {
    name: 'circle',
    color: 'red',
    metadata: {
        x: 2,
        y: 3,
        z: 4,
        [Symbol()]: "symbol",
    }
};



type Shape2 = {
    name: 'circle' | 'square' | 'rectangle' ,
    color: 'red' | 'blue' | 'green',
    // [x: string]: number,
}