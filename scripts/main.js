const MOVES = ['Rock', 'Scissors', 'Paper'];
const RoundResult = Object.freeze({'WIN': 1, 'LOSS': 2, 'TIE': 3});

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function computerPlay() {
  const selection = Math.floor(Math.random() * MOVES.length);
  return MOVES[selection];
}

function isWinningMove(first, second) {
  return first == 'Rock' && second == 'Scissors' ||
      first == 'Paper' && second == 'Rock' ||
      first == 'Scissors' && second == 'Paper';
}

function playRound(playerSelection, computerSelection) {
  playerSelection = capitalize(playerSelection);
  computerSelection = capitalize(computerSelection);

  if (isWinningMove(playerSelection, computerSelection)) {
    return RoundResult.WIN;
  } else if (isWinningMove(computerSelection, playerSelection)) {
    return RoundResult.LOSS;
  }
  return RoundResult.TIE;
}

function getPlayerSelection() {
  const playerSelection =
      capitalize(prompt('Choose rock, paper, or scissors.'));
  // TODO: Re-prompt if the selection is invalid.
  if (MOVES.indexOf(playerSelection) < 0) {
    throw `Invalid selection: ${playerSelection}`
  }
  return playerSelection;
}

function game() {
  let playerWins = 0;
  let computerWins = 0;

  for (let round = 0; round < 5; round++) {
    let playerSelection = getPlayerSelection();
    let computerSelection = computerPlay();
    let roundResult = playRound(playerSelection, computerSelection);
    if (roundResult === RoundResult.WIN) {
      playerWins++;
      console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    } else if (roundResult === RoundResult.LOSS) {
      computerWins++;
      console.log(`You lose! ${playerSelection} loses to ${computerSelection}`);
    } else {
      console.log(`You tied. Both picked ${playerSelection}`);
    }
  }

  console.log(`Player Wins: ${playerWins}, Computer Wins: ${computerWins}`);
}

game();