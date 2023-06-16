const GAME_STATES = {
  RUNNING: 0,
  WIN: 1,
  LOOSE: 2,
  DRAW: 3,
};

const app = Vue.createApp({
  data() {
    return {
      player: {
        health: 100,
      },
      monster: {
        health: 100,
      },
      game: {
        currentRound: 1,
        state: GAME_STATES.RUNNING,
        log: [],
      },
    };
  },
  computed: {
    monsterHealthBar() {
      if (this.monster.health < 0) {
        return { width: "0%" };
      }
      return { width: this.monster.health + "%" };
    },
    playerHealthBar() {
      if (this.player.health < 0) {
        return { width: "0%" };
      }
      return { width: this.player.health + "%" };
    },
    monsterHealthColor() {
      if (this.monster.health < 67 && this.monster.health > 34) {
        return { backgroundColor: "orange", borderColor: "orange" };
      } else if (this.monster.health <= 34) {
        return { backgroundColor: "red", borderColor: "red" };
      } else {
        return { backgroundColor: "green", borderColor: "green" };
      }
    },
    playerHealthColor() {
      if (this.player.health < 67 && this.player.health > 34) {
        return { backgroundColor: "orange", borderColor: "orange" };
      } else if (this.player.health <= 34) {
        return { backgroundColor: "red", borderColor: "red" };
      } else {
        return { backgroundColor: "green", borderColor: "green" };
      }
    },
    disableSpecialAttack() {
      return this.game.currentRound % 3 !== 0;
    },
    showGameOver() {
      return this.game.state !== GAME_STATES.RUNNING;
    },
    gameOverMessage() {
      switch (this.game.state) {
        case GAME_STATES.DRAW:
          return "It is a draw";
        case GAME_STATES.WIN:
          return "You won !";
        case GAME_STATES.LOOSE:
          return "You loose!";
        default:
          return "";
      }
    },
  },
  watch: {
    "player.health"(newValue, oldValue) {
      if (newValue <= 0 && this.monster.health <= 0) {
        this.game.state = GAME_STATES.DRAW;
      } else if (newValue <= 0) {
        this.game.state = GAME_STATES.LOOSE;
      }
    },
    "monster.health"(newValue, oldValue) {
      if (newValue <= 0 && this.player.health <= 0) {
        this.game.state = GAME_STATES.DRAW;
      } else if (newValue <= 0) {
        this.game.state = GAME_STATES.WIN;
      }
    },
  },
  methods: {
    attackMonster() {
      this.game.currentRound++;
      const damage = this.generateNumber(5, 12);
      this.monster.health -= damage;
      this.addLogMessage("player", "attack", damage);
      this.attackPlayer();
    },

    attackPlayer() {
      const damage = this.generateNumber(8, 15);
      this.player.health -= damage;
      this.addLogMessage("monster", "attack", damage);
    },

    specialAttackMonster() {
      this.game.currentRound++;
      const damage = this.generateNumber(10, 25);
      this.monster.health -= damage;
      this.addLogMessage("player", "special attack", damage);
      this.attackPlayer();
    },

    healPlayer() {
      this.game.currentRound++;
      const healValue = this.generateNumber(8, 20);
      if (this.player.heatlh + healValue > 100) {
        this.player.heatlh = 100;
      } else {
        this.player.health += healValue;
      }
      this.addLogMessage("player", "heal", healValue);
      this.attackPlayer();
    },

    startNewGame() {
      this.player.health = 100;
      this.monster.health = 100;
      this.game.state = GAME_STATES.RUNNING;
      this.game.currentRound = 1;
      this.game.log = [];
    },

    surrender() {
      this.game.state = GAME_STATES.LOOSE;
    },

    addLogMessage(who, what, value) {
      this.game.log.unshift({
        actionBy: who,
        actionWhat: what,
        actionValue: value,
      });
    },

    generateNumber(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
  },
});
app.mount("#game");
