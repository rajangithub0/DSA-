function pattren(n: number) {
    for (let i = 1; i <= n; i++) {
        let s: string = "";
        for (let j = 1; j <= i; j++) {
            s += '*'
        }
        console.log(s);
    }
}

pattren(5);