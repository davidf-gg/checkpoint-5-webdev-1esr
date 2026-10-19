export default function Buscaagentes ({busca, setBusca}) {
    return(
        <input type="text" placeholder="Buscar agente" value={busca} onChange={(event) => setBusca(event.target.value)}/>
    )
}