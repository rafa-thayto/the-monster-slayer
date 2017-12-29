new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function() {
            let damange = this.calculateDamange(3, 10);
            this.monsterHealth -= damange
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damange 
            });
            if (this.checkWin()) {
                return;
            }
            this.monsterAttacks();
        },
        specialAttack: function() {
            let damange = this.calculateDamange(10, 20);
            this.monsterHealth -= damange;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster hard for ' + damange 
            });
            if (this.checkWin()) {
                return;
            }
            this.monsterAttacks();
        },
        heal: function() {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heal for 10 hp'
            });
            this.monsterAttacks();
        },
        giveUp: function() {
            this.gameIsRunning = false;
        },
        monsterAttacks: function() {
            let damange = this.calculateDamange(5, 12);
            this.playerHealth -= damange;
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damange 
            });
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
                if (confirm('You lost! New Game?')) {
                    this.startGame();
                } else {
                     this.gameIsRunning = false;
                }
            }
            return false;
        }
    }
})
