let highscore=0;
let score;
let secretNumber

// Fonction pour initialiser le jeu
const initGame = () => {
    secretNumber = Math.floor(Math.random() * 20) + 1;score = 20; 

      // Mettre à jour le score affiché
      document.querySelector('.score').textContent = score; 

      // Réinitialiser le message
      let messages=document.querySelector('.message')
      messages.textContent = 'Start guessing...'; 

     //Réinitialiser le nombre affiché
      let numbers=document.querySelector('.number')
      numbers.textContent = '?'; 

     // Réinitialiser le champ de saisie
      let guesss=document.querySelector('.guess')
      guesss.value = ''; 

     // Réinitialiser la couleur de fond
    document.body.style.backgroundColor = '#222';
  };
  
    // Vérifier la valeur devinée
    const checkGuess = () => {
    const guess = Number(document.querySelector('.guess').value); 
  
    // Cas où le champ est vide
    if (!guess) {
      document.querySelector('.message').textContent = '⛔ Aucun numéro entré!';
      return;
    }      document.querySelector('.score')

  
    // Si le guess est correct
    if (guess === secretNumber) {
      document.querySelector('.message').textContent = '🎉 Correct Number!';
      document.querySelector('.number').textContent = secretNumber;
      document.body.style.backgroundColor = '#60b347'; // Ceci pour changer la couleur de fond en vert
  
      // Mettre à jour le highscore si nécessaire
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else {
      // Si le guess est incorrect
      if (score > 1) {
        document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
        score--; // Diminuer le score
        document.querySelector('.score').textContent = score; // Mettre à jour le score affiché
      } else {
        document.querySelector('.message').textContent = '💥 You lost the game!';
        document.querySelector('.score').textContent = 0; // Mettre le score à 0
      }
    }
  };
  
  // Événements
  document.querySelector('.btn.check').addEventListener('click', checkGuess);
  document.querySelector('.btn.again').addEventListener('click', initGame);
  
  // Initialiser le jeu au démarrage
  initGame();