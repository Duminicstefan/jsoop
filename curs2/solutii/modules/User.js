export class User{
     _varsta; //protected
     #email; //private
    constructor(id,nume,email, varsta){
        //setam proprietatile
        this.id = id;
        this.nume = nume;
        this.email = email;
        this.varsta = varsta;
    }
    get email(){
        console.log('sunt in getter email')
        return this.#email
       
    }
    set email(newEmail){
        console.log('sunt in setter email')
        if(newEmail == 'dan@dan.com'){

        this.#email = newEmail;
        }
        else{
            throw 'error invalid data'
        }

    }
    get myAge(){
        return this._varsta;
    }
    set myAge(varstaNoua){
        if(this.varstaNoua >0){
            this._varsta = varstaNoua
        }
        else{
            throw 'error invalid data'
            // console.error('Error')
        }

    }
    mananca (calorii){
        console.log(`Mananca ${calorii}  calorii pe zi.`);
    }
    doarme(ore){
        console.log(`Doarme ${ore}  ore pe zi`);
    }
}
// export {User}
