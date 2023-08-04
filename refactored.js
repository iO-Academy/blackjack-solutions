// Get a deck of cards

function deckBuilder() {
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

    return deck
}

function dealHands(deck) {
    const hands = [
        [
            deck.pop(),
            deck.pop()
        ],
        [
            deck.pop(),
            deck.pop()
        ]
    ]
    
    return hands
}


function calculateWinner(player1score, player2score) {
    if (player1score == player2score) {
        console.log('Its a draw!')
    } else if (player1score > player2score && player1score < 22) {
        console.log('Player 1 wins')
    } else if (player2score > player1score && player2score < 22) {
        console.log('Player 2 wins')
    }
}

const deck = deckBuilder()

// Shuffle the deck of cards

let shuffledDeck = shuffle(deck)

const hands = dealHands(shuffledDeck)


const player1score = hands[0][0].score + hands[0][1].score
const player2score = hands[1][0].score + hands[1][1].score


calculateWinner(player1score, player2score)


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
