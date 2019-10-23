var nbCasesLargeur = 3
var canvasSize = 360

var cells = []
var playerTurn = 0
var gameState = "live_no_winner"

function setup() {
  createCanvas(canvasSize, canvasSize)
  dessinerLeQuadrillage()
  initCells()
}

function draw() {
  
}

function initCells() {
  this.cells = []
 for (let i = 0; i < nbCasesLargeur * nbCasesLargeur ; i++)
 {
      this.cells.push(-1)
 }
}

function dessinerLeQuadrillage()
{
  background(255)
  square(0,0,canvasSize)
  line(canvasSize / 3, 0, canvasSize / 3, canvasSize)
  line(2 * canvasSize / 3, 0, 2 * canvasSize / 3, canvasSize)
  line(0, canvasSize / 3, canvasSize, canvasSize / 3)
  line(0, 2 * canvasSize / 3, canvasSize, 2 * canvasSize / 3)
}

function mousePressed()
{
  print(gameState)
  if (gameState === 'live_no_winner')
  {
    var quelleCase = disMoiSurQuelleCaseJaiClique(mouseX, mouseY)
  //dessineUnCarre(quelleCase)
    print(cells)
  if (cells[quelleCase] === -1)
  {
    // Alors la case est libre
    if (playerTurn == 0)
    {
        dessineUnCarre(quelleCase) 
        cells[quelleCase] = 1
        playerTurn = 1
    }
    else
    {
        dessineUnRond(quelleCase)
        playerTurn = 0
        cells[quelleCase] = 2
    }
    metAJourLEtatDeLaPartie()
    metAJourLaVue()
  }
  }
  else
  {
    background(255)
    stroke(0)
    strokeWeight(1)
    gameState = 'live_no_winner'
    playerTurn = 0
    dessinerLeQuadrillage()
    initCells()
  }
  
}

function disMoiSurQuelleCaseJaiClique(x,y)
{
  if (mouseX > 0 && mouseX < canvasSize
      && mouseY > 0 && mouseY < canvasSize)
  {
    var nb_x = Math.floor(mouseX / (canvasSize / 3))
    var nb_y = Math.floor(mouseY / (canvasSize / 3))
  
    return nb_x + nb_y * 3
  }
  else
  {
    return -1
  }
}

function dessineUnCarre(quelleCase)
{
  var caseX = quelleCase % 3
  var caseY = Math.floor(quelleCase / 3)
  fill(255, 255, 255)
  stroke(0,255,0)
  strokeWeight(4)
  square(caseX * canvasSize / 3 + canvasSize / 12,
         caseY * canvasSize / 3 + canvasSize / 12,
         canvasSize / 6)

}

function dessineUnRond(quelleCase)
{
  var caseX = quelleCase % 3
  var caseY = Math.floor(quelleCase / 3)
  fill(255, 255, 255)
  stroke(0,0,255)
  strokeWeight(4)
  square(caseX * canvasSize / 3 + canvasSize / 12,
         caseY * canvasSize / 3 + canvasSize / 12,
         canvasSize / 6, canvasSize / 12)
}

function metAJourLEtatDeLaPartie()
{
  if (cells[0] === cells[1] && cells[0] === cells[2])
  {
    if (cells[0] === 1)
    {
      gameState = 'joueur_1_gagne'
    }
    else if (cells[0] === 2)
    {
      gameState = 'joueur_2_gagne'
    }
  }
  
  if (cells[3] === cells[4] && cells[3] === cells[5])
  {
    if (cells[3] === 1)
    {
      gameState = 'joueur_1_gagne'
    }
    else if (cells[3] === 2)
    {
      gameState = 'joueur_2_gagne'
    }
  }
  
  if (cells[6] === cells[7] && cells[6] === cells[8])
  {
    if (cells[6] === 1)
    {
      gameState = 'joueur_1_gagne'
    }
    else if (cells[6] === 2)
    {
      gameState = 'joueur_2_gagne'
    }
  }
  
  if (cells[0] === cells[3] && cells[0] === cells[6])
  {
    if (cells[0] === 1)
    {
      gameState = 'joueur_1_gagne'
    }
    else if (cells[0] === 2)
    {
      gameState = 'joueur_2_gagne'
    }
  }
  
  if (cells[1] === cells[4] && cells[1] === cells[7])
  {
    if (cells[1] === 1)
    {
      gameState = 'joueur_1_gagne'
    }
    else if (cells[1] === 2)
    {
      gameState = 'joueur_2_gagne'
    }
  }
  
  if (cells[2] === cells[5] && cells[2] === cells[8])
  {
    if (cells[2] === 1)
    {
      gameState = 'joueur_1_gagne'
    }
    else if (cells[2] === 2)
    {
      gameState = 'joueur_2_gagne'
    }
  }
  
  if (cells[0] === cells[4] && cells[0] === cells[8])
  {
    if (cells[0] === 1)
    {
      gameState = 'joueur_1_gagne'
    }
    else if (cells[0] === 2)
    {
      gameState = 'joueur_2_gagne'
    }
  }
  
  if (cells[2] === cells[4] && cells[2] === cells[6])
  {
    if (cells[4] === 1)
    {
      gameState = 'joueur_1_gagne'
    }
    else if (cells[4] === 2)
    {
      gameState = 'joueur_2_gagne'
    }
  }
  
  if (gameState === 'live_no_winner')
  {
     var nombreDeMoins1 = 0
     for (var i = 0 ; i < cells.length ; i++)
     {
        if (cells[i] === - 1)
        {
          nombreDeMoins1 = nombreDeMoins1 + 1
        }
     }
       
    if (nombreDeMoins1 === 0)
    {
      gameState = 'match_nul'
    }
  }
}
  
function metAJourLaVue()
{
  if (gameState === 'match_nul')
  {
    background(200)
    noStroke()
    textSize(32);
    text('Match nul', 10, 30);
  }
  if (gameState === 'joueur_1_gagne')
  {
    background(200)
  
    noStroke()
    textSize(32);
    text('Joueur 1 gagne', 10, 30);
  }
  if (gameState === 'joueur_2_gagne')
  {
    background(200)
    
    noStroke()
    textSize(32);
    text('Joueur 2 gagne', 10, 30);
  }
  
}
