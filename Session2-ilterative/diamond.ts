function diamond(n: number) {
    let starcount = 1;
    let spacescount = Math.floor(n / 2);

    for (let i = 1; i <= n; i++) {
        let s: string = "";
        for (let j = 1; j <= spacescount; j++) s += " ";
        for (let j = 1; j <= starcount; j++) s += "*";
        console.log(s);
        if (i < n / 2) {//first half
            starcount += 2;
            spacescount -= 1;
        } else {//second half
            starcount -= 2;
            spacescount += 1;
        }
    }
}

diamond(5);