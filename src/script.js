"use strict";

const randomDamage = () => Math.floor(Math.random() * 10 + 1);

const chooseOption = (opt1, opt2) => {
  const randNum = Math.floor(Math.random() * 2);
  return randNum === 0 ? opt1 : opt2;
  //   return ranNumb ? opt2 : opt1;
};

const attackPlayer = function (health) {
  return health - randomDamage();
};

const logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
};
const logDeath = (winner, losers) => {
  console.log(`${winner} defeated ${losers}`);
};

const isDead = (health) => {
  return health <= 0;
};

function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    const attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health)) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health)) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}
fight("emily", "mitch", 100, 100);

const getGrade = (score) => {
  if (score >= 90) {
    return "A";
  } else if (score <= 89 && score >= 80) {
    return "B";
  } else if (score <= 79 && score >= 70) {
    return "C";
  } else if (score <= 69 && score >= 60) {
    return "D";
  } else if (score < 60) {
    return "F";
  }
};
console.log(getGrade(82));

// const prioritize = (urgent, important) => {
//   if (urgent && important) {
//     return 1;
//   } else if ((!urgent, important)) {
//     return 2;
//   } else if ((urgent, !important)) {
//     return 3;
//   } else if ((!urgent, !important)) {
//     return 4;
//   }
// };
// console.log(prioritize(!urgent, important));

const getAreaOfCircle = (radius) => {
  return Math.PI * radius * radius;
};
console.log(getAreaOfCircle(3));

const getCircumferenceOfCircle = (radius) => {};
