import Link from "next/link";

export default function AgenteCard({ agente }) {
    return(
       <Link href={`/detalhes/${agente.uuid}`}>
            <article>
                <h2>{agente.displayName}</h2>

                <img src={agente.displayIcon} alt={agente.displayName} width = "120"></img>
            </article>
        </Link>
    );
}