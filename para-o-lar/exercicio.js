let rna1 = []

class ConverterDna{
    constructor(filamentoDna){
        this.filamentoDna = filamentoDna
    }

    transcrever(dna) {
        let fitaDna = dna.split("") 
        
        for (let molecula of fitaDna ){
            if (molecula == "C"){

                molecula = "G"
                rna1.push(molecula)

            } else if (molecula == "G") {

                molecula = "C"
                rna1.push(molecula)

            } else if (molecula == "T"){

                molecula = "A"
                rna1.push(molecula)

            } else if (molecula == "A"){

                molecula = "U"
                rna1.push(molecula)

            } else {
                console.log(`Essa molécula não existe, acrescente uma nova sequência`)
            }
        }
        
        let rnaM = rna1.join("")
        return rnaM
        
    }

}

const converterRna = new ConverterDna("ATGCCGAAATTTGCG")
console.log(`Conversão finalizada, a sequência de RNA gerada é ${converterRna.transcrever(converterRna.filamentoDna)}`)