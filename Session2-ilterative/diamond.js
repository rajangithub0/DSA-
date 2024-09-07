function diamond(n) {
    var starcount = 1;
    var spacescount = Math.floor(n / 2);
    for (var i = 1; i <= n; i++) {
        var s = "";
        for (var j = 1; j <= spacescount; j++)
            s += " ";
        for (var j = 1; j <= starcount; j++)
            s += "*";
        console.log(s);
        if (i < n / 2) { //first half
            starcount += 2;
            spacescount -= 1;
        }
        else { //second half
            starcount -= 2;
            spacescount += 1;
        }
    }
}
diamond(5);
