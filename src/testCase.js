class TestCase {
    // Defino las reglas del juego.
    constructor () {
        this.minCards = 5;
        this.maxCards = 7;
        this.asNumber = 14;
    }

    isStraight(pokerCards) {
        // Ordeno mi baraja de cardas de menor a mayor.
        let sortCards = pokerCards.sort();
        let sortCardsWithAs = [...sortCards];

        // Establesco un contador de cartas consecutivas para 2 posibles jugadas.
        let sortCardsAcc = 1;
        let sortCardsWithAsAcc = 1;
    
        // Evaluo y armo una posible jugada con la carta AS.
        if (sortCardsWithAs.includes(14)){
            sortCardsWithAs = sortCardsWithAs.filter((card) => card !== this.asNumber);
            sortCardsWithAs.unshift(1);
        }
    
        // Si no tengo un AS bajo la manga juego mi mano.
        if(sortCards.length >= this.minCards && sortCards.length <= this.maxCards ){
            sortCards.forEach((element, index) => {
                if(sortCards[index + 1] === element + 1){
                    sortCardsAcc += 1;
                }
            });
        }

        // Si tengo un AS bajo la manga juego mi mano con ese AS como comodin.
        if(sortCardsWithAs.length >= this.minCards && sortCardsWithAs.length <= this.maxCards ){
            sortCardsWithAs.forEach((element, index) => {
                if(sortCardsWithAs[index + 1] === element + 1){
                    sortCardsWithAsAcc += 1;
                }
            });
        }
    
        // Tenga o no un AS, evaluo si mi jugada es ganadora y tengo 5 o más cartas consecutivas en la mano.
        if(sortCardsAcc >= this.minCards || sortCardsWithAsAcc >= this.minCards){
            return true;
        }else{
            return false
        }
    }
}

module.exports = TestCase;
