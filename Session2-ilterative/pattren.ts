function pattren1(n: number) {
    for (let i = n; i >= 1; i--) {
        let s: string = "";
        for (let j = 1; j <= i; j++) {
            s += '*'
        }
        console.log(s);
    }
}

pattren1(5);