//Declaring of global variable
var wordBank = [
    'Black', 'Jumps', 'Frown', 'Quads', 'Glove', 'Dwarf', 'Boxy', 'Cramp', 'Stung', 'Whisk',
    'Mirth', 'Chunk', 'Glint', 'Jumbo', 'Fable', 'Spunk', 'Brush', 'Torch', 'Plume', 'Grasp',
    'Chime', 'Lusty', 'Drown', 'Froze', 'Blend', 'Quirk', 'Swamp', 'Chirp', 'Mothy', 'Javel',
    'Squid', 'Bland', 'Prong', 'Thumb', 'Clamp', 'Vexil', 'Drift', 'Lumpy', 'Chalk', 'Spine',
    'Blond', 'Mange', 'Wimpy', 'Dingo', 'Hovel', 'Crush', 'Faint', 'Tweak', 'Badge', 'Mourn'];            
var health = 5; 
var resultMessages = [];
var scoreTrack = 0;
var correctLetter = 0;
var randomIndex = Math.floor(Math.random() * wordBank.length);
var wordToguess = wordBank[randomIndex].toLowerCase();
var wordSplit = wordToguess.split('');


function checkGuess() {

   
    let input = prompt("Enter a 5-letter word: ").toLowerCase();
    
    if (input.length !== 5) {
        alert('Please enter a valid 5-letter word.');
        return;
    }

   
    const Inputsplit = input.split('');

    
    if (wordSplit[0] == Inputsplit[0]) {

       
        document.getElementById("r-" + scoreTrack+"-0").style.backgroundColor = 'green'; 
        document.getElementById("r-" + scoreTrack+"-0").innerText = Inputsplit[0];
        correctLetter++;
        
    } else if (wordSplit.indexOf(Inputsplit[0]) !== -1) {
       
        document.getElementById("r-" + scoreTrack+"-0").style.backgroundColor = 'yellow'; 
        document.getElementById("r-" + scoreTrack+"-0").innerText = Inputsplit[0];
        
    } else {

        document.getElementById("r-" + scoreTrack+"-0").style.backgroundColor = 'red'; 
        document.getElementById("r-" + scoreTrack+"-0").innerText = Inputsplit[0]; 
    }

    if (wordSplit[1] == Inputsplit[1]) {
       
        
        document.getElementById("r-" + scoreTrack+"-1").style.backgroundColor = 'green'; 
        document.getElementById("r-" + scoreTrack+"-1").innerText = Inputsplit[1];
        correctLetter++;
         
    } else if (wordSplit.indexOf(Inputsplit[1]) !== -1) {
       
        
        document.getElementById("r-" + scoreTrack+"-1").style.backgroundColor = 'yellow'; 
        document.getElementById("r-" + scoreTrack+"-1").innerText = Inputsplit[1];
       
    } else {
        document.getElementById("r-" + scoreTrack+"-1").style.backgroundColor = 'red'; 
        document.getElementById("r-" + scoreTrack+"-1").innerText = Inputsplit[1];
        
    }

    if (wordSplit[2] == Inputsplit[2]) {
        document.getElementById("r-" + scoreTrack+"-2").style.backgroundColor = 'green'; 
        document.getElementById("r-" + scoreTrack+"-2").innerText = Inputsplit[2];
        correctLetter++;
         
    } else if (wordSplit.indexOf(Inputsplit[2]) !== -1) {
        document.getElementById("r-" + scoreTrack+"-2").style.backgroundColor = 'yellow'; 
        document.getElementById("r-" + scoreTrack+"-2").innerText = Inputsplit[2];
        
    } else {
        document.getElementById("r-" + scoreTrack+"-2").style.backgroundColor = 'red'; 
        document.getElementById("r-" + scoreTrack+"-2").innerText = Inputsplit[2];
        
    }

    if (wordSplit[3] == Inputsplit[3]) {
        document.getElementById("r-" + scoreTrack+"-3").style.backgroundColor = 'green'; 
        document.getElementById("r-" + scoreTrack+"-3").innerText = Inputsplit[3];
        correctLetter++;
         
    } else if (wordSplit.indexOf(Inputsplit[3]) !== -1) {
        document.getElementById("r-" + scoreTrack+"-3").style.backgroundColor = 'yellow'; 
        document.getElementById("r-" + scoreTrack+"-3").innerText = Inputsplit[3];
        
    } else {
        document.getElementById("r-" + scoreTrack+"-3").style.backgroundColor = 'red'; 
        document.getElementById("r-" + scoreTrack+"-3").innerText = Inputsplit[3];
        
    }

    if (wordSplit[4] == Inputsplit[4]) {
        document.getElementById("r-" + scoreTrack+"-4").style.backgroundColor = 'green'; 
        document.getElementById("r-" + scoreTrack+"-4").innerText = Inputsplit[4];
        correctLetter++;
         
    } else if (wordSplit.indexOf(Inputsplit[4]) !== -1) {
        document.getElementById("r-" + scoreTrack+"-4").style.backgroundColor = 'yellow'; 
        document.getElementById("r-" + scoreTrack+"-4").innerText = Inputsplit[4];
        
    } else {
        document.getElementById("r-" + scoreTrack+"-4").style.backgroundColor = 'red'; 
        document.getElementById("r-" + scoreTrack+"-4").innerText = Inputsplit[4];
    
    }

    if (correctLetter == 5){
        alert('You have guessed the word! Restart the game.')
        return;
    }

    health--;

    if (health == 0) {
        alert("You have lost. The word is " + wordToguess+ ". Please restart the game.");
        return;
    }

    scoreTrack++;
   
    
    
}