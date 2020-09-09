//size of game
var Cols = 15;
var Rows = 15;
var BombPct = 1; // % of spaces that are bombs
var GameOver = 0;
var Score = 0;

class Block {
    constructor(cid, bid, r, c, col) {
        var elem = document.createElement("div");
        elem.style.width = "20px";
        elem.style.height = "20px";
        elem.style.backgroundImage = GetAColor(col);
        elem.style.borderStyle = "outset";
        elem.id = bid;
        elem.row = r;
        elem.col = c;
        elem.bomb = Math.floor(Math.random() * 300);
        elem.count = 0;
        elem.onclick = function () {
            BlockClick(this);
        };
        document.getElementById(cid).appendChild(elem);
    }
}

function BlockClick(box) {
    if (GameOver == 0) {
        if (box.bomb > Rows * Cols - Math.floor(Rows * Cols * (BombPct / 100))) {
            // It's a bomb - cycle through and display all bombs
            GameOver = 1;
            document.getElementById("divScore").innerHTML =
                "Game Over! Final Score: " + Score;
            for (var r = 0; r < Rows; r++) {
                for (var c = 0; c < Cols; c++) {
                    // Get Block
                    var block = GetBox(r, c);
                    if (
                        block.bomb >
                        Rows * Cols - Math.floor(Rows * Cols * (BombPct / 100))
                    ) {
                        block.style.backgroundImage = GetAColor(3);
                        box.style.borderStyle = "inset";
                        block.innerHTML = "💣";
                    }
                }
            }
        } else if (box.count > 0) {
            // This is not a 0 or a bomb - just clear and show the count
            box.style.backgroundImage = GetAColor(1);
            box.style.textAlign = "center";
            box.innerHTML = box.count;
            box.style.borderStyle = "inset";
            Score++;
            document.getElementById("divScore").innerHTML = "Score: " + Score;
        } else {
            // this is a 0 - look for adjacent 0's and clear all of them

            /*
                this should be changed to add items to an array and keep
                spiralling outward to get all 0's connected in one shot, 
                instead of this quick 9 block check.          
            */
            box.style.backgroundImage = GetAColor(1);
            box.style.borderStyle = "inset";
            Score++;
            var c = box.col;
            var r = box.row;
            if (r - 1 >= 0 && c - 1 >= 0) {
                var b1 = GetBox(r - 1, c - 1);
                if (b1.count == 0) {
                    b1.style.backgroundImage = GetAColor(1);
                    b1.style.borderStyle = "inset";
                    Score++;
                }
            }
            if (r - 1 >= 0) {
                var b2 = GetBox(r - 1, c);
                if (b2.count == 0) {
                    b2.style.backgroundImage = GetAColor(1);
                    b2.style.borderStyle = "inset";
                    Score++;
                }
            }
            if (r - 1 >= 0 && c + 1 < Cols) {
                var b3 = GetBox(r - 1, c + 1);
                if (b3.count == 0) {
                    b3.style.backgroundImage = GetAColor(1);
                    b3.style.borderStyle = "inset";
                    Score++;
                }
            }
            if (c - 1 >= 0) {
                var b4 = GetBox(r, c - 1);
                if (b4.count == 0) {
                    b4.style.backgroundImage = GetAColor(1);
                    b4.style.borderStyle = "inset";
                    Score++;
                }
            }
            if (c + 1 < Cols) {
                var b5 = GetBox(r, c + 1);
                if (b5.count == 0) {
                    b5.style.backgroundImage = GetAColor(1);
                    b5.style.borderStyle = "inset";
                    Score++;
                }
            }
            if (r + 1 < Rows && c - 1 >= 0) {
                var b6 = GetBox(r + 1, c - 1);
                if (b6.count == 0) {
                    b6.style.backgroundImage = GetAColor(1);
                    b6.style.borderStyle = "inset";
                    Score++;
                }
            }
            if (r + 1 < Rows) {
                var b7 = GetBox(r + 1, c);
                if (b7.count == 0) {
                    b7.style.backgroundImage = GetAColor(1);
                    b7.style.borderStyle = "inset";
                    Score++;
                }
            }
            if (r + 1 < Rows && c + 1 < Cols) {
                var b8 = GetBox(r + 1, c + 1);
                if (b8.count == 0) {
                    b8.style.backgroundImage = GetAColor(1);
                    b8.style.borderStyle = "inset";
                    Score++;
                }
            }

            document.getElementById("divScore").innerHTML = "Score: " + Score;
        }
    }
}

function SetupBoard() {
    var table = document.getElementById("tableGame");
    table.innerHTML = "";
    GameOver = 0;
    Score = 0;
    document.getElementById("divScore").innerHTML = "Score: " + Score;

    // Build table using the dimensions above
    for (var r = 0; r < Rows; r++) {
        var row = table.insertRow(-1);
        for (var c = 0; c < Cols; c++) {
            var cell = row.insertCell(-1);
            cell.setAttribute("id", "r" + r + "c" + c);
            new Block(cell.id, "b" + cell.id, r, c, 5);
        }
    }
    // Loop through and update counts
    for (var r = 0; r < Rows; r++) {
        for (var c = 0; c < Cols; c++) {
            // Get Block
            var block = GetBox(r, c);
            // Get Adjacent
            var ctr = 0;
            if (r - 1 >= 0 && c - 1 >= 0) {
                var b1 = GetBox(r - 1, c - 1);
                if (b1.bomb > Rows * Cols - Math.floor(Rows * Cols * (BombPct / 100))) {
                    ctr++;
                }
            }
            if (r - 1 >= 0) {
                var b2 = GetBox(r - 1, c);
                if (b2.bomb > Rows * Cols - Math.floor(Rows * Cols * (BombPct / 100))) {
                    ctr++;
                }
            }
            if (r - 1 >= 0 && c + 1 < Cols) {
                var b3 = GetBox(r - 1, c + 1);
                if (b3.bomb > Rows * Cols - Math.floor(Rows * Cols * (BombPct / 100))) {
                    ctr++;
                }
            }
            if (c - 1 >= 0) {
                var b4 = GetBox(r, c - 1);
                if (b4.bomb > Rows * Cols - Math.floor(Rows * Cols * (BombPct / 100))) {
                    ctr++;
                }
            }
            if (c + 1 < Cols) {
                var b5 = GetBox(r, c + 1);
                if (b5.bomb > Rows * Cols - Math.floor(Rows * Cols * (BombPct / 100))) {
                    ctr++;
                }
            }
            if (r + 1 < Rows && c - 1 >= 0) {
                var b6 = GetBox(r + 1, c - 1);
                if (b6.bomb > Rows * Cols - Math.floor(Rows * Cols * (BombPct / 100))) {
                    ctr++;
                }
            }
            if (r + 1 < Rows) {
                var b7 = GetBox(r + 1, c);
                if (b7.bomb > Rows * Cols - Math.floor(Rows * Cols * (BombPct / 100))) {
                    ctr++;
                }
            }
            if (r + 1 < Rows && c + 1 < Cols) {
                var b8 = GetBox(r + 1, c + 1);
                if (b8.bomb > Rows * Cols - Math.floor(Rows * Cols * (BombPct / 100))) {
                    ctr++;
                }
            }
            block.count = ctr;
            /*
              if (block.bomb > (Rows*Cols)-(Math.floor((Rows*Cols)*(BombPct/100)))) {
                block.style.backgroundImage = GetAColor(3);
                block.innerHTML = "💣";
              } else {
                  block.innerHTML = ctr;        
                }
              */
        }
    }
}

function GetAColor(r) {
    // Return a string for gradients
    var grad = "";
    switch (r) {
        case 1:
            grad = "linear-gradient(lightblue, blue)";
            break;
        case 2:
            grad = "linear-gradient(blue, lightblue)";
            break;
        case 3:
            grad = "linear-gradient(red, orangered)";
            break;
        case 4:
            grad = "linear-gradient(midnightblue, lightblue)";
            break;
        case 5:
            grad = "linear-gradient(gainsboro, lightgrey)";
            break;
        case 6:
            grad = "linear-gradient(transparent, transparent)";
            break;
    }
    return grad;
}

function GetBox(row, col) {
    var table = document.getElementById("tableGame");
    if (row < Rows && col < Cols) {
        return table.rows[row].cells[col].firstChild;
    } else {
        return null;
    }
}

SetupBoard();