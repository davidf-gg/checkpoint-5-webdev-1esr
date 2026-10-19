"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import axios from "axios";

import Loading from "@/components/Loading";
import Msgerro from "@/components/MsgErro";
import DetalhesCard from "@/components/DetalhesCard";

export default function AgenteDetalhes() {
    const {id} = useParams();

    const [agente, setAgente] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState("");

    useEffect (() => {
        async function carregarDetalhes() {
            try{
                setCarregando(true);
                setErro("");

                const resposta = await axios.get(`https://valorant-api.com/v1/agents/${id}?language=pt-BR`)
                setAgente(resposta.data.data);
            }

            catch(erro){
                setErro("Não foi possivel carregar os detalhes dos agentes")
            }
            finally{
                setCarregando(false);
            }
        }
        carregarDetalhes();
    
    },[id]);
    if (carregando){return <Loading/>;}

    if (erro || !agente){
        return(
        <Msgerro mensagem={erro || "Agente não encontrado"}/>
        );
    }
    return(
        <main>
            <Link href="/">Voltar para lista</Link>

            <DetalhesCard agente={agente}/>
        </main>
    );

}