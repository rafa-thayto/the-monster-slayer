new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function() {
            this.monsterHealth -= this.calculateDamange(3, 10);
            if (this.checkWin()) {
                return;
            }
            this.monsterAttacks();
        },
        specialAttack: function() {
            this.monsterHealth -= this.calculateDamange(10, 20);
            if(this.checkWin()) {
                return;
            }
            this.monsterAttacks();
        },
        heal: function() {

        },
        giveUp: function() {

        },
        monsterAttacks: function() {
            this.playerHealth -= this.calculateDamange(5, 12);
            this.checkWin();
        },
        calculateDamange: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function() {
            if (this.monsterHealth <= 0) {
                if (confirm('You won! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if(confirm('You lost! New Game?')) {
                    this.startGame();
                } else {
                     this.gameIsRunning = false;
                }
            }

            return false;
        }
    }
})
