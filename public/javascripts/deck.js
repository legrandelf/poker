'use strict';

function Deck() {
  this.ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  this.descriptiveColors = ['♠ Spades', '♥ Hearts', '♦ Diamonds', '♣ Clubs'];
  this.colors = ['♠', '♥', '♦', '♣'];
  this.deck = [];

  this.prepare = function() {
    var i, j;

    for (i = 0; i < this.ranks.length; i++) {
      for (j = 0; j < this.colors.length; j++) {
        this.deck.push(this.ranks[i] + '' + this.colors[j]);
      }
    }
  };

  this.shuffle = function() {
    var i,
        randomIndex,
        swapCard,
        iterations = this.deck.length;

    for (i = 0; i < iterations; i++) {
      randomIndex = Math.floor(Math.random() * (iterations - i));
      swapCard = this.deck[randomIndex];

      this.deck.push(swapCard);
      this.deck.splice(randomIndex, 1);
    }
  };

  this.getDeck = function() {
    return this.deck;
  };

  this.prepare();
}