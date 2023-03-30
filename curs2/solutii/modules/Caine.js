import {Animal} from './Animal.js';
class Caine extends Animal{
    constructor(greutate,nrPicioare,nume){
        super(greutate,nrPicioare);
        this.nume=nume;
    
    }

}
export {Animal,Caine};