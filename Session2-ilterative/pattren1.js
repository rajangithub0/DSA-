function star(n) {
    for (var i = n; i >= 1; i--) {
        var starcount = i;
        var spacescount = n - i;
        var s = '';
        for (var j = 1; j <= spacescount; j++) {
            s += ' ';
        }
        for (var j = 1; j <= starcount; j++) {
            s += '*';
        }
        console.log(s);
    }
}
star(5);
