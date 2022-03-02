//Ricky Fabian Mosquera Quintero 

/**
 * Crear la clase Matemáticas, la cual permita con sus métodos  sumar,restar, multiplicar y dividir dos números. 
 * Ojo los dos números sobre los cuales se harán estas operaciones matemáticas serán ingresados por parámetro de 
 * sus métodos y no por medio del constructor. 
 */
 class Matematicas {

    private _valor1: number;
    private _valor2: number;
    

    constructor(valor1:number = 0,valor2:number = 0) {
        this._valor1 = valor1;
        this._valor2 = valor2;
    }

    get valor1(): number {
        return this._valor1;
    }
    set valor1(newValor1: number) {
        this._valor1 = newValor1;
    }

    get valor2(): number {
        return this._valor2;
    }
    set valor2(value: number) {
        this._valor2 = value;
    }

    sumar(valor1:number, valor2:number): number {
        let resultado:number;
        return resultado = valor1 + valor2;
    }

    restar(valor1:number, valor2:number): number {
        let resultado:number;
        return resultado = valor1 - valor2;
    }

    multiplicar(valor1:number, valor2:number): number {
        let resultado:number;
        return resultado = valor1 * valor2;
    }

    dividir(valor1:number, valor2:number): number {
        let resultado:number;
        return resultado = valor1 / valor2;
    }

}
const _matematicas:Matematicas = new Matematicas();
console.log(_matematicas.sumar(1,2));
console.log(_matematicas.restar(1,2));
console.log(_matematicas.multiplicar(1,2));
console.log(_matematicas.dividir(1,2));

/**
 * Crear una Clase Persona la cual tendrá como atributos el nombre , apellido y la cédula. 
 * Crear sus respectivos Setters y Getters.
 */

class Persona {

    private _nombre: string;
    
    private _apellido: string;
    
    private _cedula: string;
    

    constructor(nombre:string, apellido:string, cedula:string) {

        this._nombre = nombre;
        this._apellido = apellido;
        this._cedula = cedula;
    }

    get nombre(): string {
        return this._nombre;
    }
    set nombre(newNombre: string) {
        this._nombre = newNombre;
    }

    get apellido(): string {
        return this._apellido;
    }
    set apellido(newApellido: string) {
        this._apellido = newApellido;
    }

    get cedula(): string {
        return this._cedula;
    }
    set cedula(newCedula: string) {
        this._cedula = newCedula;
    }

}

/**
 * Crear la clase Empleado que herede de persona y además tenga como atributo, seguroMedico, 
 * cargo y salario. Además de esto deberá tener un método que indique si el salario que tiene 
 * es mayor o no al salario integral. El salario integral en estos momentos es de 13 '000.000.
 */

class Empleado extends Persona {

    _seguroMedico:string;
    _cargo:string;
    _salario:number;

    constructor(nombre:string, apellido:string, cedula:string, seguroMedico:string, cargo:string, salario:number) {
        super(nombre, apellido, cedula);
        this._seguroMedico = seguroMedico;
        this._cargo = cargo;
        this._salario = salario;
    }

    salarioMayor(): void {

        if(this._salario < 13000000){
            console.log("Salario menor al salario integral");
        }else{
            console.log("Salario Mayor al salario integral");
        }
    }
}

const _empleado:Empleado = new Empleado('Juan', 'jaimito', '12121213', 'Si','JEFE',15000000);
console.log(_empleado.salarioMayor());