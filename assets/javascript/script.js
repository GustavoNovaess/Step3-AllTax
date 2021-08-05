// Variavel do grafico
var grafico;

/* Variáveis que contém os dados a serem exibidos ----------------------------------
* C1 = Categoria 1 , C2 = Categoria 2
* P1 = Produto 1, P2 = Produto 2
* M1 = Marca 1 , M2 = Marca 2
*/
let C1P1M1 = {
    header: ["Mes", "Vendas"],
    rows:[
        ["Janeiro", 5000],
        ["Fevereiro", 2700],
        ["Março", 4800],
        ["Abril", 3200]
    ]
}

let C1P1M2 = {
    header: ["Mes", "Vendas"],
    rows:[
        ["Janeiro", 1000],
        ["Fevereiro", 3700],
        ["Março", 1800],
        ["Abril", 2600]
    ]
}

let C1P2M1 = {
    header: ["Mes", "Vendas"],
    rows:[
        ["Janeiro", 6200],
        ["Fevereiro", 4500],
        ["Março", 3200],
        ["Abril", 5000]
    ]
}

let C1P2M2 = {
    header: ["Mes", "Vendas"],
    rows:[
        ["Janeiro", 3600],
        ["Fevereiro", 6000],
        ["Março", 2350],
        ["Abril", 4670]
    ]
}

let C2P1M1 = {
    header: ["Mes", "Vendas"],
    rows:[
        ["Janeiro", 4300],
        ["Fevereiro", 5700],
        ["Março", 1800],
        ["Abril", 3600]
    ]
}

let C2P1M2 = {
    header: ["Mes", "Vendas"],
    rows:[
        ["Janeiro", 2100],
        ["Fevereiro", 6100],
        ["Março", 5400],
        ["Abril", 3600]
    ]
}

let C2P2M1 = {
    header: ["Mes", "Vendas"],
    rows:[
        ["Janeiro", 3600],
        ["Fevereiro", 2500],
        ["Março", 4200],
        ["Abril", 1000]
    ]
}

let C2P2M2 = {
    header: ["Mes", "Vendas"],
    rows:[
        ["Janeiro", 4800],
        ["Fevereiro", 1900],
        ["Março", 1350],
        ["Abril", 3270]
    ]
}
//----------------------------------------------

// Variaveis responsáveis pela atualização do grafico ao mudar o valor do select
let categoria1 = true;
let categoria2 = false;
let produto1 = true;
let produto2 = false;
let marca1 = true;
let marca2 = false;

//Função que gera o gráfico assim que a página se inicia
anychart.onDocumentReady(function() { 

//cria um grafico de colunas
grafico = anychart.column();

// Dados iniciais (Categoria 1, Produto 1, Marca 1)
grafico.data(C1P1M1);

// Nomea o gráfico e seus eixos
grafico.title("Relatório de Vendas")

let labelx = grafico.xAxis();
labelx.title("Meses");
labelx.enabled(true);

let labely = grafico.yAxis();
labely.title("Vendas");
labely.enabled(true);

// Exibe o gráfico
grafico.container("container");
grafico.draw();

})

// Função que atualiza os gráfico
function atualizar() {

    // A função checa a combinação de (categoria,produto,marca)
    if(categoria1) {

        switch(produto1) {
            case true:
                if (marca1 == true) {
                    grafico.data(C1P1M1);
                } else if (marca2 == true) {
                    grafico.data(C1P1M2);
                }
                break;
            default:
                break;
        }

        switch(produto2) {
            case true:
                if (marca1 == true) {
                    grafico.data(C1P2M1);
                } else if (marca2 == true) {
                    grafico.data(C1P2M2);
                }
                break;
            default:
                break;
        }

    } else if (categoria2) {

        switch(produto1) {
            case true:
                if (marca1 == true) {
                    grafico.data(C2P1M1);
                } else if (marca2 == true) {
                    grafico.data(C2P1M2);
                }
                break;
            default:
                break;
        }

        switch(produto2) {
            case true:
                if (marca1 == true) {
                    grafico.data(C2P2M1);
                } else if (marca2 == true) {
                    grafico.data(C2P2M2);
                }
                break;
            default:
                break;
        }
    }

    //Após chegar a combinação atual, o gráfico é "redesenhado"
    grafico.container("container");
    grafico.draw();
}

// Função responsável por monitorar o select de categorias
function categoria() {
    let categoria = document.querySelector("#categoria").value;
    if (categoria == 1) {
        categoria1 = true;
        categoria2 = false;
    } else if (categoria == 2) {
        categoria1 = false;
        categoria2 = true;
    }
    atualizar();
}

// Função responsável por monitorar o select de produtos
function produto() {
    let produto = document.querySelector("#produto").value;
    if (produto == 1) {
        produto1 = true;
        produto2 = false;
    } else if (produto == 2) {
        produto1 = false;
        produto2 = true;
    }
    atualizar();
}

// Função responsável por monitorar o select de marcas
function marca() {
    let marca = document.querySelector("#marca").value;
    if (marca == 1) {
        marca1 = true;
        marca2 = false;
    } else if (marca == 2) {
        marca1 = false;
        marca2 = true;
    }
    atualizar();
}

