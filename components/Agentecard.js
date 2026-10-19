export default function AgenteCard({ agente }) {
    return(
        <article>
            <h2>{agente.displayName}</h2>

            <img src={agente.displayIcon} alt={agente.displayName} width = "120"></img>
        </article>
    );
}