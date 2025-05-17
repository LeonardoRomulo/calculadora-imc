// importação do express e do cors
const express = require('express');
const cors = require('cors');
//Instanciamento do express
const app = express();

//Instanciamento do cors e restingido para que a api só aceite requisições do dominio abaixo    
app.use(cors());

//importação da função que calcula o ims
const calcularIMC = require('./calculadoraIMC');

app.get('/', (req,res) => {
    // Recebe os parâmetros peso e altura da query string e converte para número
    let peso = Number(req.query.peso);
    let altura = Number(req.query.altura);

    // Calcula o IMC usando a função importada e formata para 2 casas decimais
    if(calcularIMC.validaParametro(req.query.peso) && calcularIMC.validaParametro(req.query.altura))
    {
        let imc = calcularIMC.calculadoraIMC(peso, altura).toFixed(2);
        let status = calcularIMC.retornaStatus(imc);
    
        let json = {imc: imc, status: status};
        // Retorna o resultado em formato JSON
        res.json(json);
    }
    else 
    {
        res.status(400).json({'Erro': 'Peso ou altura inválidos.' });
    }


});

// Inicia o servidor na porta 8080 e exibe a data/hora no console
app.listen(8080, () => {
    let data = new Date();
    console.log(`Servidor node iniciado em: ${data}`);
});