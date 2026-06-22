# Atividade 3 — Suíte Maestro E2E · CineFav

App **CineFav** (filmes) já implementado e funcionando. **Você não mexe no app** — sua entrega são os **flows Maestro** em `flows/`.

É o **mesmo app** da A1 (unit) e A2 (integração), agora com **login, busca e favoritos** — a pirâmide de testes fecha no mesmo app, agora no nível **E2E**.

> Dados **mockados** (sem token TMDB, sem rede) → os flows são determinísticos.

---

## Comece aqui

👉 **Setup:** [`../COMECE-AQUI.md`](../COMECE-AQUI.md) — instalar adb, app e Maestro (por SO).
📄 **Enunciado + rubrica:** [`../enunciado.md`](../enunciado.md)

```bash
# com emulator/device + app instalado:
maestro test flows/01-launch.yaml   # modelo resolvido — deve passar
maestro test flows/                  # todos
maestro studio                       # editor visual (localhost:9999)
```

---

## Os flows (sua entrega)

| Arquivo | O que testa | Status |
|---|---|---|
| `flows/01-launch.yaml` | login + lista de filmes | ✅ modelo resolvido |
| `flows/02-search.yaml` | busca (usa `env:`) | 🧑‍💻 você completa |
| `flows/03-favorite.yaml` | favoritar → Favoritos | 🧑‍💻 você completa |
| `flows/04-detail.yaml` | detalhe + favoritar | 🧑‍💻 você completa |
| `flows/05-js-dynamic.yaml` | busca via JS (`runScript`) | 🧑‍💻 você completa |

Cada flow tem comentários `# TODO` guiando. **Bônus:** extraia `flows/_fragments/login.yaml` e chame com `runFlow:`.

Os testIDs do app estão no `enunciado.md` (tabela completa) e em `src/utils/testIDs.ts`.

---

## Entrega

PR no seu fork com os 5 flows completos. O bot (J.A.R.V.I.S.) comenta a nota a cada commit.
