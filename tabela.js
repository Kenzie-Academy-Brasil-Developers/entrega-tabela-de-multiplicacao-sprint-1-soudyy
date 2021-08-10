function TabelaMultiply(n) {
    let resul = []

    for (let i = 0; i <= n; i++) {
        resul[i] = [];

        for (let j = 0; j <= n; j++) {
            resul[i][j] = i*j;
            
        }
    } console.table(resul)
} console.table(TabelaMultiply(10))
