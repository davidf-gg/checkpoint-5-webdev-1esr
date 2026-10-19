import AgenteCard from "./Agentecard";

export default function AgenteList ({ agentes }){
    return(
        <div>
            {agentes.map((agente) => (
                <div key={agente.uuid}>
                    <AgenteCard agente={agente}/>
                </div>
            ))}
        </div>
    );
}   
