"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function Home(){
  const [agentes, setAgentes] = useState([])

  useEffect(() => {
    async function carregarAgentes() {
      try{
        const resposta = await axios.get("https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=pt-BR&utm_source=chatgpt.com");
        setAgentes(resposta.data.data);
      }
      catch(erro){
        console.error("Erro ao carregar agentes", erro);
      }
      
    }
    carregarAgentes();
  },[]);

  return(
    <main>
      <h1>Agentes do valorant</h1>

      {agentes.map((agente) => (
      <div key={agente.uuid}>
        <h2>{agente.displayName}</h2>

        <img src={agente.displayIcon} alt={agente.displayName} width="120"></img>
      </div>  
      ))}
    </main>
  )
  
}
