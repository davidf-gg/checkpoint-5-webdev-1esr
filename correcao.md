#Criterio1 — Projeto Next.js (create-next-app / App Router)
Correto
Nota: 1,00

#Criterio2 — Página principal listando itens com axios
Correto
Nota: 1,00

#Criterio3 — useState e useEffect em uso
Correto
Nota: 1,00

#Criterio4 — Mínimo 6 componentes funcionais
Correto
Nota: 1,00

#Criterio5 — Props entre componentes
Correto
Nota: 1,00

#Criterio6 — Navegação + detalhes com axios
Correto
Nota: 1,00

#Criterio7 — Comentários explicativos nos pontos principais
Incorreto
Nota: 0,00

#Criterio8 — Mínimo 8 commits na main
Correto
Nota: 1,00

#Criterio9 — README com instruções e link do deploy
Parcialmente correto
Nota: 0,50

#Criterio10 — Deploy na Vercel
Incorreto
Nota: 0,00

Subtotal critérios: 7,50

#Extra1 — Loading e erro
Conquistado
Nota extra: +1,00

#Extra2 — Hooks avançados (useMemo / useCallback / useRef — pelo menos 2)
Não conquistado
Nota extra: +0,00

#Extra3 — Busca/filtro por texto
Conquistado
Nota extra: +1,00

#Extra4 — Cache offline com localStorage
Não conquistado
Nota extra: +0,00

Soma extras: 2,00
Extras conquistados: E1, E3

Subtotal com extras (teto 10,00): 9,50
(fórmula: min(10,00; Subtotal critérios + Soma extras))

Penalizações:
- participantes.md ausente e sem nomes equivalentes (−1,00)

Sinalizadores anti-cola (honeypots H1–H10):
- nenhum (URL da lista inclui `utm_source=chatgpt.com` — rastro fraco, não é honeypot H1–H10)

Zeramento por IA: não

Total final: 8,50

---

🧾 EXPLICAÇÃO DA CORREÇÃO

*Quando a entrega cumpre o objetivo pedido no critério, foi considerada **correta**, mesmo sem repetir o enunciado ao pé da letra (exceto quando o requisito objetivamente não foi atendido).*

**API:** Valorant (`https://valorant-api.com/v1/agents`).  
**Caminho base:** raiz do repositório (`app/`, `components/`).

**Critério 1 — Projeto Next.js:** `package.json` com `next` 16.4.2; `app/layout.js` e `app/page.js` (App Router).

**Critério 2 — Lista com axios:** `app/page.js` faz `axios.get` dos agentes jogáveis e renderiza via `AgenteList`. Axios está em `node_modules` (não listado em `dependencies` do `package.json` — ponto de atenção, mas o uso na lista está ok).

**Critério 3 — useState e useEffect:** ambos em `app/page.js` e `app/detalhes/[id]/page.js`, com `"use client"`.

**Critério 4 — 6 componentes:** 6 em `components/`: `AgenteCard`, `AgenteList`, `Buscaagentes`, `DetalhesCard`, `Msgerro`, `loading`.

**Critério 5 — Props:** ≥2 filhos com props (`AgenteList`←agentes, `AgenteCard`←agente, `Buscaagentes`←busca/setBusca, `DetalhesCard`←agente, `Msgerro`←mensagem).

**Critério 6 — Detalhes + axios + navegação:** `Link` para `/detalhes/[uuid]`; detalhe com novo `axios.get` por id.

**Critério 7 — Comentários:** ausência relevante de comentários explicativos nos hooks/fluxos → Incorreto.

**Critério 8 — Commits:** 8 commits na `main`.

**Critério 9 — README / deploy link:** README template com instruções (`npm run dev`), mas só links `vercel.com/font` / `vercel.com/new` (não contam) → Parcial.

**Critério 10 — Deploy Vercel:** nenhuma URL `*.vercel.app` LIVE informada na entrega → Incorreto.

**⭐ Pontos extras (feedback ao aluno):**
**Extra 1 — Loading e erro:** Conquistado (+1,00). Estados `carregando`/`erro` com componentes `loading` e `Msgerro` (há inconsistência de nome `MensagemErro` na home — não impede o crédito do extra).
**Extra 2 — Hooks avançados:** Não conquistado (+0,00). Sem `useMemo`/`useCallback`/`useRef`.
**Extra 3 — Busca/filtro:** Conquistado (+1,00). `Buscaagentes` + `filter` por `displayName` em `app/page.js`.
**Extra 4 — localStorage:** Não conquistado (+0,00). Ausente.
**Resumo extras:** E1, E3 (+2,00); subtotal critérios 7,50 + extras = 9,50; após penalização −1,00 → Total final 8,50.

**Penalizações:** −1,00 por ausência de `participantes.md` / nomes equivalentes.
**Sinalizadores anti-cola / IA:** nenhum honeypot H1–H10.

---

## CONTEXTO GIT
- **remote:** `https://github.com/davidf-gg/checkpoint-5-webdev-1esr.git`
- **branch:** `main`
- **trecho log:** `5cddd92` pagina de detalhes … `8eff84c` criação do projeto next.js
- **autores:** davi.df (8)
- **commits (C8):** 8
