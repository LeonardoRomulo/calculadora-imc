import axios from 'axios';
import { useEffect }  from  'react';

useEffect(() =>{
async function calcularImc(peso,altura) {
    try {
        const endPoint = `http://localhost:8080/?peso=${peso}&altura=${altura}`
        const data = (await axios.get(endPoint, {timeout:10000})).data;
        return data;
    } catch (erro) {
        return {error:`Dados inválidos: ${erro.message}`}
    }
}

}, altura, peso);

export default calcularImc;