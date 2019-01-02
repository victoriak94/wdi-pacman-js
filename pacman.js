// Setup initial game stats
let score = 0;
let lives = 2;


// Define your ghosts here
const inky = {
  menu_option: '1',
  name: 'Inky',
  colour: 'Red',
  character: 'Shadow',
  edible: false
};

const blinky = {
  menu_option: '2',
  name: 'Blinky',
  colour: 'Cyan',
  character: 'Speedy',
  edible: false
};

const pinky = {
  menu_option: '3',
  name: 'Pinky',
  colour: 'Pink',
  character: 'Bashful',
  edible: false
};

const clyde = {
  menu_option: '4',
  name: 'Clyde',
  colour: 'Orange',
  character: 'Pokey',
  edible: false
};

let ghosts = [inky, blinky, pinky, clyde];

// Draw the screen functionality
function drawScreen() {
  clearScreen();
  setTimeout(() => {
    displayStats();
    displayMenu();
    displayPrompt();
  }, 10);
}

function clearScreen() {
  console.log('\x1Bc');
}

function displayStats() {
  console.log(`Score: ${score}     Lives: ${lives}`);
}

function displayMenu() {
  console.log('\n\nSelect Option:\n');  // each \n creates a new line
  console.log('(d) Eat Dot');
  console.log('(1) Eat Inky');
  console.log('(2) Eat Blinky');
  console.log('(3) Eat Pinky');
  console.log('(4) Eat Clyde');
  console.log('(q) Quit');
}

function displayPrompt() {
  // process.stdout.write is similar to console.log except it doesn't add a new line after the text
  process.stdout.write('\nWaka Waka :v '); // :v is the Pac-Man emoji.
}


// Menu Options
function eatDot() {
  console.log('\nChomp!');
  score += 10;


function eatGhost(ghost) {
  if(ghost.edible === false) {
    lives --;
    console.log (`\n${ghost.name} eats Pacman. The ghost's colour is ${ghost.colour} if you were wondering.`);
  } else {
    console.log (`\nYou ate ${ghost.name}! Their character was very ${ghost.character}.`);
    ghostsEaten ++;
    if (ghostsEaten === 1) {
      score += 200;
    } else if (ghostsEaten === 2) {
      score += 400;
    } else if (ghostsEaten === 3) {
      score += 800;
    } else if (ghostsEaten > 3) {
      score += 1600;
      ghostsEaten = 0;
    }
    ghost.edible = false;
  }
  if (lives < 0) {
    console.log("Game Over")
    process.exist();
  }
}


// Process Player's Input
function processInput(key) {
  switch(key) {
    case '\u0003': // This makes it so CTRL-C will quit the program
    case 'q':
      process.exit();
      break;
    case 'd':
      eatDot();
      break;
    default:
      console.log('\nInvalid Command!');
  }
}


//
// YOU PROBABLY DON'T WANT TO CHANGE CODE BELOW THIS LINE
//

// Setup Input and Output to work nicely in our Terminal
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

// Draw screen when game first starts
drawScreen();

// Process input and draw screen each time player enters a key
stdin.on('data', (key) => {
  process.stdout.write(key);
  processInput(key);
  setTimeout(drawScreen, 300); // The command prompt will flash a message for 300 milliseoncds before it re-draws the screen. You can adjust the 300 number to increase this.
});

// Player Quits
process.on('exit', () => {
  console.log('\n\nGame Over!\n');
});
