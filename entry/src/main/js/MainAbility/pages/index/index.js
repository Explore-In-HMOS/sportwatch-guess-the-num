// Define the game module
export default {
    // Game state and variables
    data: {
        // Title of the game
        title: 'Guess The Num',
        // Status message shown to the user
        statusText: 'Try to guess the number!',
        // The number displayed on screen (starts as "?")
        numberText: '?',
        // The secret number to guess
        secretNumber: 0,
        // Whether the game is over
        gameOver: false,
        // Tracks if the user has made a guess
        hasGuessed: false,
        // Array of numbers for the buttons
        buttons: []
    },

    // Called when the module initializes
    onInit() {
        // Start a new game
        this.startGame();
    },

    // Start or reset the game
    startGame() {
        // Prevent starting a new game if user hasn't guessed yet
        if (!this.hasGuessed && this.secretNumber !== 0) {
            this.statusText = '👉 Make a guess first!';
            return;
        }

        // Generate numbers 1 through 9
        const allNumbers = Array.from({ length: 9 }, (_, i) => i + 1);
        // Pick 3 random numbers for the buttons
        this.buttons = allNumbers.sort(() => 0.5 - Math.random()).slice(0, 3);
        // Randomly select one of the buttons as the secret number
        this.secretNumber = this.buttons[Math.floor(Math.random() * this.buttons.length)];

        // Reset status text
        this.statusText = 'Try to guess the number!';
        // Reset displayed number
        this.numberText = '?';
        // Reset game over flag
        this.gameOver = false;
        // Reset guess tracker
        this.hasGuessed = false;
    },

    // Handle a user's guess
    guessNumber(num) {
        // Ignore input if the game is already over
        if (this.gameOver) {
            return;
        }

        // Show the secret number
        this.numberText = this.secretNumber;

        // Check if the guess is correct
        if (num === this.secretNumber) {
            this.statusText = '🎉 Correct!';
        } else {
            this.statusText = '❌ Wrong, try again!';
        }

        // Mark game as over
        this.gameOver = true;
        // Track that user has made a guess
        this.hasGuessed = true;
    }
};