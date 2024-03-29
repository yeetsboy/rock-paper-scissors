const buttons = document.getElementsByClassName('btn');
const playerScoreDisplay = document.getElementById('player-score');
const aiScoreDisplay = document.getElementById('ai-score');
const ro = 'Rock';
const pa = 'Paper';
const sc = 'Scissors';
const playerScreen = document.getElementById('player-screen');
const aiScreen = document.getElementById('ai-screen');
let playerScore = 0;
let aiScore = 0;





/**
 * Gets the winner of the round.
 * @param   {string} playerChoice The button the user clicked.
 * @param   {string} aiChoice     The randomly selected AI choice.
 * @returns {string} string       The winner of the round.
 */
const getWinner = (playerChoice, aiChoice) => {

  // Set a default winner (player, of course!)
  let winner = 'player';

  if (
    (playerChoice == ro && aiChoice == pa) ||
    (playerChoice == pa && aiChoice == sc) ||
    (playerChoice == sc && aiChoice == ro) ||
    (playerChoice == aiChoice)
  ) {
    playerChoice == aiChoice ? winner = 'draw' : winner = 'ai';
  }

  return winner;
}





/**
 * Updates the scores display for the round.
 * @param {string} winner The winner of the round.
 */
const updateScores = winner => {
  let playerScore = parseInt(playerScoreDisplay.textContent);
  let aiScore = parseInt(aiScoreDisplay.textContent);
  switch (winner) {
    case 'player':
      playerScore += 1;
      playerScoreDisplay.innerHTML = playerScore.toString();
      break;
    case 'ai':
      aiScore += 1;
      aiScoreDisplay.innerHTML = aiScore.toString();
      break;
    default:
      break;
  }
}





/**
 * For handling button clicks.
 * @param {string} button The button that the user clicked.
 */
const handleButtonClick = button => {

  if (button != 'Reset') {

    // Update the player screen display
    switch (button) {
      case ro:
        playerScreen.innerHTML = '<i class="fa fa-hand-rock-o fa-5x""></i>';
        break;
      case pa:
        playerScreen.innerHTML = '<i class="far fa-hand-paper fa-5x"></i>';
        break;
      default:
        // console.log(sc);
        playerScreen.innerHTML = '<i class="far fa-hand-scissors fa-5x"></i>';
        break;
    }

    // AI will make its choice
    let aiChoice = 0;
    aiChoice = Math.floor(Math.random() * 100);

    if (aiChoice <= 33) {
      aiChoice = ro;
      aiScreen.innerHTML = '<i class="fa fa-hand-rock-o fa-5x""></i>';
    } else if (aiChoice > 33 && aiChoice <= 66) {
      aiChoice = pa;
      aiScreen.innerHTML = '<i class="fa fa-hand-paper-o fa-5x""></i>';
    } else {
      aiChoice = sc;
      aiScreen.innerHTML = '<i class="fa fa-hand-scissors-o fa-5x""></i>';
    }

    // Get the winner
    const winner = getWinner(button, aiChoice);

    // Update the screen
    updateScores(winner);
  } else {

    // Reset stuff
    playerScore = 0;
    aiScore = 0;
    playerScoreDisplay.textContent = '0';
    aiScoreDisplay.textContent = '0';
    playerScreen.innerHTML = '<i class="fas fa-user-alt fa-5x"></i>';
    aiScreen.innerHTML = '<i class="fas fa-desktop fa-5x"></i>';
  }
  
}





for (button of buttons) {
  button.addEventListener('click', (e) => {
    handleButtonClick(e.target.textContent);
  });
}