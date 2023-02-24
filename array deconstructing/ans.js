//
// @ts-nocheck

/**
 * Get the first card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the first card in the deck
 */
export function getFirstCard(deck) {
    console.log(deck)
    const [red, yellow, green, blue] = deck
      return red 
    }
    
    /**
     * Get the second card in the given deck
     *
     * @param {Card[]} deck
     *
     * @returns {Card} the second card in the deck
     */
    export function getSecondCard(deck) {
     const [red, yellow, green, blue] = deck
      return yellow
    }
    
    
    /**
     * Switch the position of the first two cards in the given deck
     *
     * @param {Card[]} deck
     *
     * @returns {Card[]} new deck with reordered cards
     */
    export function swapTopTwoCards(deck) {
     const [red, yellow, ...rest] = deck;
      deck= [yellow,red, ...rest];
    
      return deck
    }
    
    /**
     * Put the top card of the given deck into a separate discard pile
     *
     * @param {Card[]} deck
     *
     * @returns {[Card, Card[]]} the top card of the given
     * deck and a new deck containing all the other cards
     */
    export function discardTopCard(deck) {
    const [a,...rest]=deck
      deck = [a, [...rest]];
    return deck
    }
    
    /** @type Card[] **/
    const FACE_CARDS = ['jack', 'queen', 'king'];
    
    /**
     * Insert face cards into the given deck
     *
     * @param {Card[]} deck
     *
     * @returns {Card[]} new deck where the second,
     * third, and fourth cards are the face cards
     */
    export function insertFaceCards([before,...after]) {
     return [before, ...FACE_CARDS,...after]
    
    
    }
    