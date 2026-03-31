# EPISTO AI Sport Prediction Swarm

*50 AI agents debate every game. The swarm decides.*

## Overview

EPISTO is an AI-powered sports prediction platform built on Polymarket. A swarm of 50 specialized agent personas independently analyzes each upcoming game, then a consensus engine aggregates all votes into a single actionable signal.

```
Scan upcoming games (Polymarket Gamma API)
  └── For each new game: spawn 50 agents via Gemini 2.0 Flash
        └── Consensus engine: weighted vote by confidence
              └── Edge = swarm probability − market price
                    └── Assign signal → save to Supabase
```

## Features

- ✅ 50 AI agent personas per game analysis
- ✅ 11 sports: NBA, NHL, UFC, EPL, La Liga, UCL, LoL, CS2, Dota 2, ATP, WTA
- ✅ Kelly Criterion bet sizing (strong_buy=$30, lean=$12, hold=$6)
- ✅ Auto-scan every 10 minutes, auto-resolve every 60 seconds
- ✅ Real-time dashboard — force-dynamic, no cache
- ✅ D3.js agent consensus graph (hex force layout)
- ✅ Phantom wallet integration (Solana mainnet RPC)
- ✅ Token-gated tiers: Bronze → Silver → Gold → Diamond
- ✅ Referral system with on-chain wallet linking

## Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Framework  | Next.js 15, App Router, React 18    |
| Styling    | TailwindCSS + shadcn/ui             |
| LLM        | Google Gemini 2.0 Flash             |
| Database   | Supabase (PostgreSQL, self-hosted)  |
| Wallet     | Phantom — window.solana API         |
| Charts     | D3.js (agent graph), Recharts (analytics) |
| Deployment | Coolify, Nixpacks                   |

## Quick Start

### Clone
```bash
git clone https://github.com/episto-dev/episto-dashboard.git
cd episto-dashboard
```

### Install
```bash
pnpm install
```

### Configure
```bash
cp .env.example .env.local
```

Edit `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
GEMINI_API_KEY=your-gemini-api-key
CRON_SECRET=your-cron-secret
```

### Run
```bash
pnpm dev
```

## API Endpoints

| Method | Endpoint          | Description |
|--------|-------------------|-------------|
| GET    | `/api/cron/scan`  | Scan games + run swarm analysis (requires `Authorization: Bearer <CRON_SECRET>`) |
| GET    | `/api/cron/resolve` | Resolve settled trades + update PnL (requires `Authorization: Bearer <CRON_SECRET>`) |

Both endpoints are protected by `CRON_SECRET` and called automatically in-process. To trigger manually:

```bash
curl -H "Authorization: Bearer your-secret" http://localhost:3000/api/cron/scan
curl -H "Authorization: Bearer your-secret" http://localhost:3000/api/cron/resolve
```

## Signal Logic

| Condition | Signal | Bet Size |
|-----------|--------|----------|
| edge ≥ 8% AND confidence ≥ 5.5 | STRONG BUY | $30 |
| edge ≥ 3% AND confidence ≥ 4.5 | LEAN | $12 |
| edge ≥ 1% | HOLD | $6 |
| edge ≥ -2% | HOLD | $6 |
| edge < -2% | FADE | $0 |
| entry > 95¢ OR confidence < 5 | SKIP | $0 |

**Resolution:** Market settled when any outcome price >= 0.99 on Polymarket.

## Database Schema

Schema: `episto` — hosted on Supabase self-hosted via Coolify.

### `episto.signals`

```sql
id              TEXT PRIMARY KEY   -- {sport}_{slug}_live
sport           TEXT               -- nba | nhl | ufc | epl | ...
home            TEXT
away            TEXT
pick            TEXT               -- swarm predicted winner
signal          TEXT               -- strong_buy | lean | hold | fade
edge            NUMERIC            -- swarm_prob - market_price
confidence      NUMERIC            -- avg confidence 1-10
entry_price     NUMERIC            -- market price at signal time
swarm_prob      NUMERIC
outcome         TEXT               -- win | loss | pending
pnl             NUMERIC
slug            TEXT               -- polymarket event slug
created_at      TIMESTAMPTZ
```

### `episto.users`

```sql
wallet_address  TEXT UNIQUE
sol_balance     NUMERIC
episto_balance  NUMERIC
tier            TEXT               -- bronze | silver | gold | diamond
referral_code   TEXT UNIQUE
referral_count  INT
created_at      TIMESTAMPTZ
```

## Deployment

### Coolify — Nixpacks build

```bash
pnpm install --no-frozen-lockfile
pnpm build
pnpm start
```

| Key     | Value          |
|---------|----------------|
| Domain  | app.episto.xyz |
| Port    | 3000           |
| Node    | 22+            |

## Links

- **Dashboard** — [app.episto.xyz](https://app.episto.xyz)
- **Landing** — [episto.xyz](https://episto.xyz)
- **Docs** — [episto.xyz/docs](https://episto.xyz/docs)
- **API Reference** — [episto.xyz/api-reference](https://episto.xyz/api-reference)
- **Twitter/X** — [@epistoagent](https://twitter.com/epistoagent)

---

All rights reserved © 2026 EPISTO.
