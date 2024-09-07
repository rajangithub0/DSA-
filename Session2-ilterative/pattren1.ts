function star(n: number) {
    for (let i = n; i >= 1; i--) {
        let starcount: number = i;
        let spacescount: number = n - i;

        let s: string = '';
        for (let j = 1; j <= spacescount; j++) {
            s += ' ';
        }
        for (let j = 1; j <= starcount; j++) {
            s += '*';
        }
        console.log(s);

    }
}

star(5);