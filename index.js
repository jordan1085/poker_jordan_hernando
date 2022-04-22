const TestCase = require('./src/testCase');

class Poker extends TestCase {

    testAlgorithm(){
        const results1 = this.isStraight([2, 3, 4, 5, 6]);
        console.log(this.assertEquals(results1, "2, 3, 4, 5, 6"));

        const results2 = this.isStraight([14, 5, 4, 2, 3]);
        console.log(this.assertEquals(results2, "14, 5, 4, 2, 3"));

        const results3 = this.isStraight([7, 7, 12, 11, 3, 4, 14]);
        console.log(this.assertEquals(results3, "7, 7, 12, 11, 3, 4, 14"));

        const results4 = this.isStraight([7, 3, 2]);
        console.log(this.assertEquals(results4, "7, 3, 2"));
    }

    assertEquals(youCardPlay, pokerCards){
        if (youCardPlay) {
            const response = `escalera: ${this.formatPokerCards(pokerCards)}`;
            return response;
        }else{
            const response = `no es escalera: ${this.formatPokerCards(pokerCards)}`;
            return response;
        }
    }

    formatPokerCards(pokerCards){
        let porkerCardsFormated = pokerCards.replace(/, /g, '-');
        return porkerCardsFormated;
    }
}
const pokerGame = new Poker();
console.log(pokerGame.testAlgorithm());