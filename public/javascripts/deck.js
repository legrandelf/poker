'use strict';

function Deck() {
  this.ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  //this.colors = ['♠ Spades', '♥ Hearts', '♦ Diamonds', '♣ Clubs'];
  this.colors = ['♠', '♥', '♦', '♣'];
  this.defaultDeck = [];

  this.prepare = function() {
    var i, j;

    for (i = 0; i < this.ranks.length; i++) {
      for (j = 0; j < this.colors.length; j++) {
        this.defaultDeck.push(this.ranks[i] + '' + this.colors[j]);
      }
    }
  };

  this.shuffle = function() {
    var i,
        randomIndex,
        swapCard,
        iterations = this.defaultDeck.length;

    for (i = 0; i < iterations; i++) {
      randomIndex = Math.floor(Math.random() * (iterations - i));
      swapCard = this.defaultDeck[randomIndex];

      this.defaultDeck.push(swapCard);
      this.defaultDeck.splice(randomIndex, 1);
    }

    return this.defaultDeck;
  };
}

var pokerDeck = new Deck();
pokerDeck.prepare();