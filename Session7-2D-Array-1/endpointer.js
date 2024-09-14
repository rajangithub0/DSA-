function exitpoint(arr) {
    var i = 0;
    var j = 0;
    var dir = 'R';
    while (i >= 0 && i < arr.length && j >= 0 && j < arr.length) {
        if (arr[i][j] == 1) {
            arr[i][j] = 0;
            //change direction
            if (dir == "R")
                dir = "D";
            else if (dir == "D")
                dir = "L";
            else if (dir == "L")
                dir = "U";
            else if (dir == "U")
                dir = "R";
        }
        else {
            if (dir == "R")
                j++;
            else if (dir == "D")
                i++;
            else if (dir == "L")
                j--;
            else if (dir == "U")
                i--;
        }
    }
}
