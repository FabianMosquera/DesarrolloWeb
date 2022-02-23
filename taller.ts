//Taller preparatoria para comprobar conociemientos.
/*
class Cuenta {

    private _titular: string;
    private _cantidad: number;
    //Cuando colocamos ?: el valor que recibimos puede ser nulo o undifined.
    constructor(titular: string, cantidad?:number) {
        this._titular= titular;
        if (!!cantidad) {
            this._cantidad = cantidad;
        } else {
            this._cantidad= 0;
        }
    }

    get titular(): string {
        return this._titular;
    }

    set titular(newTitular: string) {
        this._titular = newTitular;
    }

    get cantidad(): number {
        return this._cantidad;
    }
    set cantidad(newCantidad: number) {
        this._cantidad = newCantidad;
    }

    ingresar(cantidad:number): void {
        if (cantidad > 0) {
            this._cantidad += cantidad;
        }
    }

    retirar(cantidad:number): void {
        if (cantidad>this._cantidad) {
            this._cantidad -= cantidad;
        }
    }
}

let _cuenta: Cuenta = new Cuenta('Jaimito', 12);
console.log(_cuenta.cantidad);
*/

class Persona {
    private _nombre: string;
    private _edad: number;
    private _dni: string;
    private _peso: number;
    private _altura: number;

    constructor(nombre:string, edad:number, dni:string, peso:number, altura:number) {
        this._nombre = nombre;
        this._edad = edad;
        this._dni = dni;
        this._peso = peso;
        this._altura = altura;
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(newNombre: string) {
        this._nombre = newNombre;
    }

    get edad(): number {
        return this._edad;
    }
    set edad(newEdad: number) {
        this._edad = newEdad;
    }

    get dni(): string {
        return this._dni;
    }

    set dni(newDni: string) {
        this._dni = newDni;
    }

    get peso(): number {
        return this._peso;
    }
    set peso(newPeso: number) {
        this._peso = newPeso;
    }

    get altura(): number {
        return this._altura;
    }

    set altura(newAltura: string) {
        this._altura = newAltura;
    }

    esMayorDeEdad(edad:number): boolean {
        if (edad>18) {
            return true;
        }else{
            return false;
        }
    }

    comprobarSexo()
}
