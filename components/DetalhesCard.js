
export default function DetalhesCard({ agente }) {
    return (
        <div>
            <h1>{agente.displayName}</h1>

            <img
                src={agente.displayIcon}
                alt={agente.displayName}
                width="150"
            />

            <p>{agente.description}</p>

            {agente.role && (<p>Função: {agente.role.displayName}</p>)}

            <h2>Habilidades</h2>

            {agente.abilities.map((habilidade, index) => (
                <article key={`${habilidade.slot}-${index}`}>
                    <h3>{habilidade.displayName}</h3>

                    {habilidade.displayIcon && (
                        <img src={habilidade.displayIcon} alt={habilidade.displayName} width="80"/>
                    )}

                    <p>{habilidade.description}</p>
                    
                </article>
            ))}
        </div>
    );
}
