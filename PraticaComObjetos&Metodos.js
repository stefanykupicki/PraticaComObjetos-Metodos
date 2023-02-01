// 1. Compare duas pessoas e demonstre quem é mais velho.

class Pessoa{ 
    nome;
    idade;
    anoDeNascimento;

    constructor (nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() { 
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`);
    }
}

function compararPessoas(p1, p2){ 
    if(p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    }else if(p1.idade < p2.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    }else { 
        console.log(`${p1.nome} tem a mesma idade que ${p2.nome}`);
    }
}

const reti = new Pessoa('Reti', 2)
const aria = new Pessoa('Aria', 1)

compararPessoas(reti, aria);


/*      2. Crie uma classe para representar carros.
        Os carros possuem uma marca, uma cor e um gasto médio de combustivel por KM rodado (Considere um carro que faz 10KM/L)
        Crie um método que, dado a quantidade de KM (considere 70KM) e o preço do combustivel (considere 5 reais), 
        nos dê o valor gasto em reais para realizar esse percurso. 

        Informações fornecidas:
        => Carro faz 10km por litro (ou 1km para 0.1L)
        => Viagem de 70KM
        => Combustível a 5 reais 

        Conferência do cálculo a ser realizado: 
        70 - x L 
        10km - L 
        L = 7L * 5 = 
        35 reais 
*/

class Carro{ 
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm){
        this.marca = marca; //this quando vai se referenciar a um atributo!!
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGasto(distanciaEmKm, precoCombustivel) { 
        return 'O valor gasto para realizar esse percurso é de ' + 
        ((distanciaEmKm * this.gastoMedioPorKm) * precoCombustivel) + ' reais';
    }
}

const jac = new Carro('JAC', 'laranja', 0.1)
console.log(jac.calcularGasto(70, 5));

const palio = new Carro('Fiat', 'Branco', 0.12)
console.log(palio.calcularGasto(70, 5));


/*
     3. Crie uma classe para representar pessoas.
        Para cada pessoa teremos os atributos: nome, peso e altura.
        As pessoas devem ter a capacidade de dizer o valor do seu IMC; 
        Instancie uma pessoa chamada José que tenha 70kg de peso e 1.75 de altura, e diga o valor deo seu IMC;
        Além disso, classifique José conforme a tabela abaixo: 
            Abaixo de 18.5  = Abaixo do Peso;
            Entre 18.5 e 25 = Peso Normal;
            Entre 25 e 30 = Acima do peso;
            Entre 30 e 40 = Obesidade; 
            Acima de 40 = Obesidade Grave;
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return (this.peso / (this.altura * this.altura));
    }

    classificarImc(){
        const imc = this.calcularImc();
        if (imc < 18.5){
            return 'Abaixo do Peso';
        }else if (imc >= 18.5 && imc < 25){
            return 'Peso Normal';
        }else if (imc >= 25 && imc < 30 ){
            return 'Acima do peso';
        }else if(imc >= 30 && imc < 40){
            return 'Obesidade';
        }else {
            return 'Obesidade Grave';
        }
    }
}


const jose = new Pessoa('José', 70, 1.75);
console.log(jose.calcularImc().toFixed(3));
console.log(jose.classificarImc());



