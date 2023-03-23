class Student{
    constructor(id,nume,varsta,nota1,nota2){
        this.id=id;
        this.nume=nume;
        this.varsta=varsta;
        this.nota1=nota1;
        this.nota2=nota2;
    }
    salut(){
        console.log(`salut ${this.nume}`);

    }
    examen(){
        console.log(`nota lui la examen a fost ${this.nota1}iar media elevului este ${this.nota2}`)
    }
   
}