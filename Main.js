const prompt = require('prompt-sync')();

function matrix( rows, cols){
    var arr = [];
    for(var i=0; i < rows; i++){
        // Creates an empty line
        arr.push([]);
        // Adds cols to the empty line:
        arr[i].push( new Array(cols));
        for(var j=0; j < cols; j++){
            // Initializes:
            arr[i][j] = '';
        }
    }
    return arr;
}

function rotate (drone,dir){
    if (drone.dir == 'N' && dir == 'L') return 'O';
    else if (drone.dir == 'N' && dir == 'R') return 'E';
    else if (drone.dir == 'S' && dir == 'L') return 'E';
    else if (drone.dir == 'S' && dir == 'R') return 'O';
    else if (drone.dir == 'E' && dir == 'L') return 'N';
    else if (drone.dir == 'E' && dir == 'R') return 'S';
    else if (drone.dir == 'O' && dir == 'L') return 'S';
    else if (drone.dir == 'O' && dir == 'R') return 'N';

}
function advance (drone,field){
    if (drone.dir == 'N' && drone.y + 1 <= cols) drone.y++;
    else if (drone.dir == 'S' && drone.y - 1 >= 0) drone.y--;
    else if (drone.dir == 'O' && drone.x - 1 >= 0) drone.x--;
    else if (drone.dir == 'E' && drone.x + 1 <= rows) drone.x++;

    return drone;

}

var cols = '';
var rows = '';
var drone = Object.create({x: Intl, y: Intl, dir: String});
var field = [];
var move = '';

while (rows = prompt() , cols = prompt()) {
    field = matrix(rows, cols);
    drone.x = prompt();
    drone.y = prompt();
    if (drone.x > rows || drone.y > cols) {
        console.log("Illegal Position");
        process.exit(1);
    }
    drone.dir = prompt();
    if (drone.dir != 'N' && drone.dir != 'E' && drone.dir != 'S' && drone.dir != 'O') {
        console.log("Illegal Direction");
        process.exit(1);
    }

    while (move = prompt()) {
        if (move == 'L' || move == 'R') {
            drone.dir = rotate(drone, move);
        } else if (move == 'M') {
            var drone2 = advance(drone);
        }
    }

    console.log(Object.entries(drone));

}
console.log("END")


