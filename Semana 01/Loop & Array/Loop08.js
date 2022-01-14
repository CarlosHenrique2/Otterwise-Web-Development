/* 
8 - Escreva um programa que tenham como entrada um valor. Este valor é a
quantidade de linhas de saída que serão apresentadas na execução do
programa.


1 para cada linha  
2 salva referencia dos items por linha  
3 para cada coluna  
4 incrementa o items   
5 se for a a coluna na posição 4 adiciona pum   
6 caso contrário adiciona o valor corrente de items  
7 mostra a linha atual  
8 se tiver mais colunas volta para o passo 4  
9 se tiver mais linhas volta para o passo 2  
10 finaliza o código

1 2 3 PUM
5 6 7 PUM
9 10 11 PUM
13 14 15 PUM
17 18 19 PUM
21 22 23 PUM
25 26 27 PUM

*/


let linhas = 8;
let itens = 0;



for (let i = 0; i < linhas; i++) {
    const linha = []     
    for (let j = 0; j < 4; j++) {
        itens++
        if (j === 3) {
            linha[3] = "PUM"
        } else {
            linha[j] = itens; 
        }
    }
    console.log(linha)
}

/* 

bloqueios iniciais 

foi como criar o programa para saber em quebrar linha depois do elemento PUM ser mostrado no console
foi como verificar e acumular 7 mais vezes por exemplo 27 como na saida monstra



utilizado metodo join(" ") para criar espaços 
verificar com professores se pode usar 
*/

