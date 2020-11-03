
const readline = require('readline');
const userData = {};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What is your name? ', (answer) => {
  userData.name = answer;
  rl.question ('What is your favorite thing to do? ', (answer) => {
    userData.hobby = answer;
    rl.question ('What kind of music/podcasts do you like? ', (answer) => {
      userData.music = answer;
      rl.question ('What is your favorite food? ', (answer) => {
        userData.food = answer;
        rl.question ('What is your favorite sport? ', (answer) => {
          userData.sport = answer;


    console.log(`Hi! My name is ${userData.name}. I like to do ${userData.hobby} and listen to ${userData.music}. My absolute favorite food is ${userData.food} and my favorite sport is ${userData.sport}!`)
    rl.close();
        });
      });
    });        
  });
});


