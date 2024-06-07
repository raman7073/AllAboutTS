/*
  Getter and Setter methods are used to get and set the values of the properties.
  They are known as Accessor methods.
*/

class Care {
    private _brand: string;
    private _model: string;
    private _year: number;

    constructor(brand: string, model: string, year: number) {
        this._brand = brand;
        this._model = model;
        this._year = year;
    }

    // Getter methods
    get brand(): string {
        return this._brand;
    }

    get model(): string {
        return this._model;
    }

    get year(): number {
        return this._year;
    }

    // Setter methods,we can add validation logic here
    set brand(brand: string) {
        this._brand = brand;
    }

    set model(model: string) {
        this._model = model;
    }

    set year(year: number) {
        this._year = year;
    }
}
let care = new Care('Toyota', 'Camry', 2020);
console.log(care.brand);
//care.brand = 'Honda';
//console.log(care.brand);