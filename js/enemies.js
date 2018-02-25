//Number on Enemies on n stage
var maxe = [2, 0];

var enemies = [];

for (var i = 0; i < maxe.length; i++) {
  enemies[i] = [];
  for (var j = 0; j <= maxe[i]; j++) {
    enemies[i][j] = [];
  }
}

//Enemies[][*]
//0-Current x-pos
//1-y pos
//2-Min x-pos
//3-Max x-pos
//4-Direction
//**false left <---
//**true right --->
//5-Type of enemy
//6-Time to shot

enemies[0][0][0] = 650;
enemies[0][0][1] = 380;
enemies[0][0][2] = 650;
enemies[0][0][3] = 810;
enemies[0][0][4] = true;
enemies[0][0][5] = 0;
enemies[0][0][6] = -1;
enemies[0][0][7] = 3;

enemies[0][1][0] = 4690;
enemies[0][1][1] = 280;
enemies[0][1][2] = 4690;
enemies[0][1][3] = 4810;
enemies[0][1][4] = true;
enemies[0][1][5] = 1;
enemies[0][1][6] = 0;
enemies[0][1][7] = 2;

