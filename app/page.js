"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import AgenteList from "@/components/Agentelist";
import Buscaagentes from "@/components/Buscaagentes";

export default function Home(){
  const [agentes, setAgentes] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState("")
  const [busca, setBusca] = useState("")

  useEffect(() => {
    async function carregarAgentes() {
      try{
        const resposta = await axios.get("https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=pt-BR&utm_source=chatgpt.com");
        setAgentes(resposta.data.data);
      }
      catch(erro){
        setErro("Erro ao carregar os agentes, Tente novamente.")
      }finally{
        setCarregando(false)
      }
      
    }
    carregarAgentes();
  },[]);

  const agentesfiltrados = agentes.filter((agente) => agente.displayName.toLowerCase().includes(busca.toLowerCase()));

  return(
    <main>
      <h1>Agentes do valorant</h1>

      <Buscaagentes busca={busca} setBusca={setBusca}/>

      {carregando && <p>carregando agentes...</p>}
      {erro && <p>{erro}</p>}
      
      {!carregando && !erro && (<AgenteList agentes={agentesfiltrados}/>)}
    </main>
  )
  
}
