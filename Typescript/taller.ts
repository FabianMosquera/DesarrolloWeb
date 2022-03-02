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

// enum sexo {
//     Hombre = 'H',
//     Mujer = 'M'
// };

// class Persona {
//     private _nombre: string;
//     private _edad: number;
//     private _dni: string;
//     private _peso: number;
//     private _altura: number;
//     private _sexo: sexo;

//     constructor(nombre:string, edad:number, dni:string, peso:number, altura:number, sexo:sexo) {
//         this._nombre = nombre;
//         this._edad = edad;
//         this._dni = dni;
//         this._peso = peso;
//         this._altura = altura;
//         this._sexo = sexo;
//     }

//     get nombre(): string {
//         return this._nombre;
//     }

//     set nombre(newNombre: string) {
//         this._nombre = newNombre;
//     }

//     get edad(): number {
//         return this._edad;
//     }
//     set edad(newEdad: number) {
//         this._edad = newEdad;
//     }

//     get dni(): string {
//         return this._dni;
//     }

//     get peso(): number {
//         return this._peso;
//     }
//     set peso(newPeso: number) {
//         this._peso = newPeso;
//     }

//     get altura(): number {
//         return this._altura;
//     }

//     set altura(newAltura: number) {
//         this._altura = newAltura;
//     }

//     get sexo(): sexo {
//         return this._sexo;
//     }
//     set sexo(newSexo: sexo) {
//         this._sexo = newSexo;
//     }

//     esMayorDeEdad(edad:number): boolean {
//         if (edad>18) {
//             return true;
//         }else{
//             return false;
//         }
//     }

//     comprobarSexo(sexo:sexo): sexo {
//         if (sexo===this._sexo) {
//             return this._sexo[sexo];
//         }else {
//             return this._sexo['Hombre'];
//         }
//     }
    
//     toString(): string {
//         return `nombre=${this._nombre} edad=${this._edad} dni=${this._dni} peso=${this._peso} altura=${this._altura} sexo=${this._sexo}`;
//     }

//     static generarCedula(): number {
//         return Math.floor(Math.random() * (99999999 - 10000000)) + 10000000
//     }

// }
// let _persona: Persona = new Persona('Juan',10,'15236541',160,1.78,sexo['Hombre']);
// console.log(_persona.sexo);
// console.log(_persona.toString());

class Password {

    private _longitud: number;
    
    private _contraseña: string;
    
    constructor(contraseña:string, longitud:number = 8) {
        if (contraseña.length < longitud) {
            console.error('Haga eso bien sapo hpta');
        }
        this._contraseña = contraseña;
        this._longitud = longitud;
    }
    get longitud(): number {
        return this._longitud;
    }
    set longitud(newLongitud: number) {
        this._longitud = newLongitud;
    }
    get contraseña(): string {
        return this._contraseña;
    }
    set contraseña(newContraseña: string) {
        this._contraseña = newContraseña;
    }

    esFuerte(): boolean {
        let checkContraseña = /([A-Z]{3,})([a-z]{2,})([0-9]{5,})/;
        if (checkContraseña.test(this._contraseña)) {
            return true;
        }else {
            return false;
        }
    }
    
}
const _pass: Password = new Password('Aasd123456');
console.log(_pass.esFuerte());
console.log()