// Get a deck of cards
const suits = ['Diamonds', 'Hearts', 'Spades', 'Clubs']
const cards = [
    {
        name: "ace",
        score: 11
    },
    {
        name: "two",
        score: 2
    },
    {
        name: "three",
        score: 3
    },
    {
        name: "four",
        score: 4
    },
    {
        name: "five",
        score: 5
    },
    {
        name: "six",
        score: 6
    },
    {
        name: "seven",
        score: 7
    },
    {
        name: "eight",
        score: 8
    },
    {
        name: "nine",
        score: 9
    },
    {
        name: "ten",
        score: 10
    },
    {
        name: "jack",
        score: 10
    },
    {
        name: "queen",
        score: 10
    },
    {
        name: "king",
        score: 10
    },
]

let deck = []

suits.forEach((suit) => {
    cards.forEach((card) => {
        deck.push({
            name: card.name + " of " + suit,
            score: card.score
        })
    })
})


// Shuffle the deck of cards

let shuffledDeck = shuffle(deck)


// Give 2 cards to the first player
const player1hand = [
    shuffledDeck.pop(),
    shuffledDeck.pop()
]

// Give 2 cards to the second player
const player2hand = [
    shuffledDeck.pop(),
    shuffledDeck.pop()
]

// Check the scores

const player1score = player1hand[0].score + player1hand[1].score
const player2score = player2hand[0].score + player2hand[1].score


// If both players have the same score, they draw
// If player 1 has a higher score than player 2 (and isn't bust), player 1 wins
// If player 2 has a higher score than player 1 (and isn't bust), player 2 wins
if (player1score == player2score) {
    console.log('Its a draw!')
} else if (player1score > player2score && player1score < 22) {
    console.log('Player 1 wins')
} else if (player2score > player1score && player2score < 22) {
    console.log('Player 2 wins')
}






function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
