  let userHand;
  console.log("userHand = ''")

  let computerHand;
  console.log("computerHand = ''")

  let computerHandValue;

  function computerHandPicker() {
    
    computerHandValue = Math.random();

    if (computerHandValue < 0.33) {
      computerHand = 'piedra'} 
    else if (computerHandValue < 0.66) {
      computerHand = 'papel'}
    else {
      computerHand = 'tijeras'};
      console.log(computerHand)
  }

  const userHandDisplay = document.querySelector('#user-hand-display');
  const computerHandDisplay = document.querySelector('#computer-hand-display');
  const finalResultDisplay = document.querySelector('#final-result');

  const piedraBtn = document.querySelector('#piedra-btn');
  const papelBtn = document.querySelector('#papel-btn');
  const tijerasBtn = document.querySelector('#tijeras-btn');

  piedraBtn.addEventListener('click', function (e) {
    userHand = 'piedra';
    computerHandPicker();
    computerVsHuman();
  })
  papelBtn.addEventListener('click', function (e) {
    userHand = 'papel';
    computerHandPicker();
    computerVsHuman();
  })
  tijerasBtn.addEventListener('click', function (e) {
    userHand = 'tijeras';
    computerHandPicker();
    computerVsHuman();
  })

  function computerVsHuman() {

    computerHandDisplay.style.textDecoration = 'none';
    computerHandDisplay.style.textDecoration = 'none';

    if (userHand == computerHand) {
      userHandDisplay.textContent = `tu elejiste: ${userHand}`;
      computerHandDisplay.textContent = `la computadora eligió: ${computerHand}`;
      finalResultDisplay.textContent = `hmm, empate`;
    }
    else if (userHand == 'piedra' && computerHand == 'papel') {
      userHandDisplay.textContent = `tu elejiste: ${userHand}`;
      computerHandDisplay.textContent = `la computadora eligió: ${computerHand}`;
      finalResultDisplay.textContent = `muajajajajaja perdiiisteee! era obvio`;
    }
    else if (userHand == 'piedra' && computerHand == 'tijeras') {
      userHandDisplay.textContent = `tu elejiste: ${userHand}`;
      computerHandDisplay.textContent = `la computadora eligió: ${computerHand}`;
      finalResultDisplay.textContent = `ugh, ganaste... pura suerte`;
    
    }
    else if (userHand == 'papel' && computerHand == 'tijeras') {
      userHandDisplay.textContent = `tu elejiste: ${userHand}`;
      computerHandDisplay.textContent = `la computadora eligió: ${computerHand}`;
      finalResultDisplay.textContent = `muajajajajaja perdiiisteee! era obvio`;
    }
    else if (userHand == 'papel' && computerHand == 'piedra') {
      userHandDisplay.textContent = `tu elejiste: ${userHand}`;
      computerHandDisplay.textContent = `la computadora eligió: ${computerHand}`;
      finalResultDisplay.textContent = `ugh, ganaste... pura suerte`;
    }
    else if (userHand == 'tijeras' && computerHand == 'piedra') {
      userHandDisplay.textContent = `tu elejiste: ${userHand}`;
      computerHandDisplay.textContent = `la computadora eligió: ${computerHand}`;
      finalResultDisplay.textContent = `muajajajajaja perdiiisteee! era obvio`;
    }
    else if (userHand == 'tijeras' && computerHand == 'papel') {
      userHandDisplay.textContent = `tu elejiste: ${userHand}`;
      computerHandDisplay.textContent = `la computadora eligió: ${computerHand}`;
      finalResultDisplay.textContent = `ugh, ganaste... pura suerte`;
    }
  }


  