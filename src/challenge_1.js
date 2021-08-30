// Challenge 1 solution
// Can be tested with `node ./src/challenge_1.js`

function getMinScore(database = {}) {
  return Object.keys(database).map(item => database[item].score).sort()[0];
}

function getMaxScore(database = {}) {
  return Object.keys(database).map(item => database[item].score).sort().reverse()[0];
}

function callFriend(database = [], useMaxScore = false) {
  const scoreMatch = useMaxScore ? getMaxScore(database) : getMinScore(database);
  const matches = Object.keys(database).filter(item => database[item].score === scoreMatch);

  if (matches.length === 1) {
    return matches[0];
  }

  const notSpoken = matches.find(item => database[item].called === false);
  return notSpoken || matches[0];
}

function updateDataBase(database, friendCalled) {
  database[friendCalled].called = true;
  database[friendCalled].calledTimes += 1;

  Object.keys(database).forEach(item => {
    if (item !== friendCalled) {
      database[item].score += 1;
    }
  });

  const min = Object.keys(database).filter(item => item !== friendCalled).map(item => database[item].score).sort()[0];

  database[friendCalled].score = min;
}

function tobiesFriends(n, scores = 0) {
  const database = {};
  scores.forEach((score, index) => {
    database[`friend-${index}`] = {
      score,
      called: false,
      initialScore: score,
      calledTimes: 0,
    };
  });

  let calledTimes = 0;
  let active = true;
  while(active) {
    const friendCalled = callFriend(database, calledTimes === 0);
    updateDataBase(database, friendCalled);
    calledTimes += 1;

    // Prevent an infinite loop
    if (
      Object.keys(database).filter(item => database[item].called).length === n ||
      calledTimes === 5000
    ) {
      active = false;
    }
  }

  console.log({
    calledTimes,
    calledAlready: Object.keys(database).filter(item => database[item].called).length,
    n,
    database,
  });

  return calledTimes;
}

module.exports = tobiesFriends;

const test = 10;
const sampleScores = Array.from({ length: test }, () => Math.floor(Math.random() * test));
const calls = tobiesFriends(test, sampleScores);
console.log(`Took ${calls} calls.`);
