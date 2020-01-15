const { Player, Coach, Team, Trainer, Game } = require('../database/models');

const trainers = require('../data/trainers'); // 2 trainers;
const games = require('../data/games'); // 6 games;

const populatePlayersTable = async (players) => {
  let tylerrelph10 = await Trainer.create(trainers[0]); // Tyler Relph;
  let jlawbball = await Trainer.create(trainers[1]); // Jordan Lawley;

  for (let i = 0; i < players.length; i++) {
    let currentPlayer = players[i];
    let builtPlayer = await Player.build(currentPlayer);
    // console.log(Object.keys(builtPlayer.__proto__));

    if (i < 11) {
      builtPlayer.teamId = 1;
      await builtPlayer.save();
      await builtPlayer.addTrainer(tylerrelph10); // Players trained solely by Tyler Relph;
    }
    else if (i >= 11 && i < 22) {
      builtPlayer.teamId = 2;
      await builtPlayer.save();
      await builtPlayer.addTrainer(jlawbball); // Players trained solely by Jordan Lawley;
    }
    else if (i >= 22 && i < 33) {
      builtPlayer.teamId = 3;
      await builtPlayer.save();
      await builtPlayer.addTrainer(tylerrelph10); // Players trained by both Tyler Relph...;
      await builtPlayer.addTrainer(jlawbball); // ...and by Jordan Lawley, too;
    }
  }
}

const seedDatabase = async () => {
  try {
    await populateGamesTable(games);
    console.log("Successfully seeded!");
    process.exit(0);
  }
  catch (err) {
    console.log(err);
    process.exit(1);
  }
}

seedDatabase();
