  let userHand;
  console.log("userHand = ''")

  let computerHand;
  console.log("computerHand = ''")

  let computerHandValue;

  function computerHandPicker() {
    
    console.log(computerHandValue = Math.random());

    if (computerHandValue < 0.33) {
      console.log(computerHand = 'piedra')} 
    else if (computerHandValue < 0.66) {
      console.log(computerHand = 'papel')}
    else {
      console.log(computerHand = 'tijeras')};
  }

  function computerVsHuman() {
    if (userHand == computerHand) {
      alert(`hmm, empate\nambos elegimos ${computerHand}`)
    }
    else if (userHand == 'piedra' && computerHand == 'papel') {
      alert(`muajajajajaja perdiiisteee\nera obvio que ibas a elegir ${userHand} y elegí ${computerHand}`)
    }
    else if (userHand == 'piedra' && computerHand == 'tijeras') {
      alert(`humano: ${userHand}\ncomputadora: ${computerHand}\npura suerte`)
    }
    else if (userHand == 'papel' && computerHand == 'tijeras') {
      alert(`muajajajajaja perdiiisteeeeeee\nera obvio que ibas a elegir ${userHand} y elegí ${computerHand}`)
    }
    else if (userHand == 'papel' && computerHand == 'piedra') {
      alert(`humano: ${userHand}\ncomputadora: ${computerHand}\npura suerte`)
    }
    else if (userHand == 'tijeras' && computerHand == 'piedra') {
      alert(`muajajajajaja perdiiisteeeeeee\nera obvio que ibas a elegir ${userHand} y elegí ${computerHand}`)
    }
    else if (userHand == 'tijeras' && computerHand == 'papel') {
      alert(`humano: ${userHand}\ncomputadora: ${computerHand}\npura suerte`)
    }
  }


  // document.getElementById("computer-hand-display").innerHTML = tHe CoMpUtEr AwAiTs YoUr ChOiCe

  // ejercicios del man rre lento que lastimosamente enseña bien

  // let hour = 9;
  // let userName = 'juan';
  // let age = 68;
  // let holiday = 0;

  // if (hour >= 6 && hour < 12) {
  //   console.log(`good morning ${userName}, age: ${age}.`)
  // }
  // else if (hour > 12 && hour <= 18) {
  //   console.log(`good evening ${userName}, age: ${age}.`)
  // }
  // else {
  //   console.log(`good night ${userName}, age: ${age}.`)
  // }

  // holiday ? console.log('today is a holiday') : console.log('today is not a holiday')
  // ahora disque es un theme park



  // if ((age <= 6 || age >= 65) && !holiday) {
  //   console.log('discount')
  // }
  // else {
  //   console.log('no discount')
  // };

  // ahora un coin-toss game. ugh...

  let coinValue = Math.random()
  let result;
  let guess = prompt('guess: heads or tails? type your answer')

  console.log(coinValue)

  coinValue <= 0.5 ?
    result = 'heads':
    result = 'tails';
  

  if (guess === null || guess === '') {
    alert('you chickened out')
  }
  else if (!(guess === 'heads' || guess === 'tails')) {
    alert('that is not a valid guess u dumb dumb\n it\'s either heads or tails\nmaybe you misstyped so reload the page and give it another try')}
  else {

  if (guess === result) {
    alert(`YOU WIN, THE COIN LANDED ${result} AND YOU GUESSED ${guess}!!!!`)
  }

  else {
    alert(`darn, you guessed ${guess} but the coin landed ${result}`)
  }
}

  // otro ejercicio sencillo 

  // let userName2 = prompt('Who goes there?')

  // if (userName2 === 'Admin') {

  //   let pass = prompt('Password:');
  //   if (pass === 'TheMaster') {
  //     alert('Welcome')
  //   } 
  //   else {alert('Wrong password')};
  // }
  // else if (userName2 === '' || userName2 === null) {
  //   alert('Cancelled')
  // }
  // else {
  //   alert('I don\'t know you')
  // }