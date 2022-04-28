// 
class Jogador{
    constructor(nome, posicao, dataNasc, nacionalidade, altura, peso){
        this.nome = nome;
        this.posicao = posicao;
        this.dataNasc = dataNasc;
        this.nacionalidade = nacionalidade;
        this.altura = altura;
        this.peso = peso;
    }

    imprimirDados(){
        return (`Nome: ${this.nome}
        Posição: ${this.posicao}
        Data de nascimento: ${this.dataNasc}
        Nacionalidade: ${this.nacionalidade}
        Altura: ${this.altura}
        Peso: ${this.peso}`)
    }

    calcularIdade(ano){
        let idade = ano - this.dataNasc
        return(`Idade: ${idade}`)
    }

    aposentadoria(ano){
        let idadeAposentadoria = 0
        let idade = ano - this.dataNasc
        if (this.posicao == "defesa"){
            idadeAposentadoria = 40 - idade
            return (`O jogador se aposentará com 40 anos, faltam ${idadeAposentadoria} anos`)
        } else if (this.posicao == "meio-campo"){
            idadeAposentadoria = 38 - idade
            return (`O jogador se aposentará com 38 anos, faltam ${idadeAposentadoria} anos`)
        } else {
            idadeAposentadoria = 35 - idade
            return (`O jogador se aposentará com 35 anos, faltam ${idadeAposentadoria} anos`)
        }
    }
}

const jogador = new Jogador("Cassio", "defesa", "1998", "Brasil", "1.70", "90kg")
console.log(jogador.imprimirDados())
console.log(jogador.calcularIdade(2022))
console.log(jogador.aposentadoria(2030))
