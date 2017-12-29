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
            let max = 10;
            let min = 3;
            let damange = Math.max(Math.floor(Math.random() * max) + 1, min);
            this.monsterHealth -= damange;

            if(this.monsterHealth <= 0) {
                alert('You won!');
                this.gameIsRunning = false;
                return;
            }
            
            max = 12;
            min = 5;
            damange = Math.max(Math.floor(Math.random() * max) + 1, min);
            this.playerHealth -= damange;

            if(this.playerHealth <= 0) {
                alert('You lost!');
                this.gameIsRunning = false;
            }
        },
        specialAttack: function() {

        },
        heal: function() {

        },
        giveUp: function() {

        }
    }
})
