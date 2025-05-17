'use client';
import { useState } from "react";
import estilos from "./page.module.css";
import Card from "../../componentes/Card"
import calcularImc from "./servicos/app.js";

export default function Home() {
// declaração das variáveis de estado  para guardar os parametros  das entradas do input do usuário, guardar o resultado, calculo, status e as mensa
const [peso, setPeso] =useState("");
const [altura, setAltura] = useState("");
const [resultado, setResultado] = useState(null);
const [status, setStatus] = useState("")
const [erro, setErro] = useState("");

//Função que chama a api e atualiza os estados
const handleCalcular = async () => {
  //verifica se os campos estão preenchidos
    setErro(""); // limpa a mensagem de erro
    setResultado(null); // limpa o resultado anterior
    setStatus(''); // limpa o status anterior
  // chama a api e calcula o imc
    const data = await calcularImc(peso, altura);
  //verifica se a api retornou um erro
    if(data.error){
      setErro(data.error);
      return; // sai da função
    }

   // atualiza os estados
    setResultado(data.imc);
    setStatus(data.status);
  }

  return (
    <main className={estilos.main}>
      {/* Passa os estados e funções para o componente Card */}
      <Card
      peso={peso}
      altura={altura}
      resultado = {resultado}
      status = {status}      
      onPesoChange = {e => setPeso(e.target.value) } 
      onAlturaChange = {e => setAltura(e.target.value)} 
      onCalcular={handleCalcular} 
      erro = {erro}
      />
     

    </main>
  );
}
