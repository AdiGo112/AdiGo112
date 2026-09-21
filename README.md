<img src="assets/header.svg" width="100%" alt="Aditya Gorane — backend, real-time, systems">

Backend engineer and competitive programmer in Pune. I build APIs, real-time
infrastructure and the data layers underneath, and I care most about how a system
behaves a year after it ships — which is usually decided in the first week.

Right now: **WChess** and **CP Insight**, plus a software engineering internship
at **ConstroIQ**.

### Stack

![C++](https://img.shields.io/badge/C++-0c0e10?style=flat-square&logo=cplusplus&logoColor=c9c5b8)
![TypeScript](https://img.shields.io/badge/TypeScript-0c0e10?style=flat-square&logo=typescript&logoColor=c9c5b8)
![JavaScript](https://img.shields.io/badge/JavaScript-0c0e10?style=flat-square&logo=javascript&logoColor=c9c5b8)
![Python](https://img.shields.io/badge/Python-0c0e10?style=flat-square&logo=python&logoColor=c9c5b8)

![Node.js](https://img.shields.io/badge/Node.js-0c0e10?style=flat-square&logo=nodedotjs&logoColor=9aa47a)
![NestJS](https://img.shields.io/badge/NestJS-0c0e10?style=flat-square&logo=nestjs&logoColor=9aa47a)
![Express](https://img.shields.io/badge/Express-0c0e10?style=flat-square&logo=express&logoColor=9aa47a)
![FastAPI](https://img.shields.io/badge/FastAPI-0c0e10?style=flat-square&logo=fastapi&logoColor=9aa47a)

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-0c0e10?style=flat-square&logo=postgresql&logoColor=b0764f)
![Redis](https://img.shields.io/badge/Redis-0c0e10?style=flat-square&logo=redis&logoColor=b0764f)
![MongoDB](https://img.shields.io/badge/MongoDB-0c0e10?style=flat-square&logo=mongodb&logoColor=b0764f)
![Prisma](https://img.shields.io/badge/Prisma-0c0e10?style=flat-square&logo=prisma&logoColor=b0764f)

![React](https://img.shields.io/badge/React-0c0e10?style=flat-square&logo=react&logoColor=9a978c)
![Next.js](https://img.shields.io/badge/Next.js-0c0e10?style=flat-square&logo=nextdotjs&logoColor=9a978c)
![Tailwind](https://img.shields.io/badge/Tailwind-0c0e10?style=flat-square&logo=tailwindcss&logoColor=9a978c)
![Docker](https://img.shields.io/badge/Docker-0c0e10?style=flat-square&logo=docker&logoColor=9a978c)
![Linux](https://img.shields.io/badge/Linux-0c0e10?style=flat-square&logo=linux&logoColor=9a978c)
![GCP](https://img.shields.io/badge/GCP-0c0e10?style=flat-square&logo=googlecloud&logoColor=9a978c)

### Building

<table>
<tr>
<td width="104" align="center"><img src="assets/pearl-hi.gif" width="70" alt=""></td>
<td>

**[WChess](https://github.com/AdiGo112/Wchess)** — real-time chess where the server is the only one telling the truth

The client is a renderer, not a referee. Clocks are one Redis sorted set of
deadlines swept every second, because a browser tab that lost focus can't be
trusted with time. Concurrent moves resolve by compare-and-set in Lua. A game row
and both rating updates land in one transaction or not at all.

`TypeScript` `NestJS` `PostgreSQL` `Redis` `Socket.io` `Stockfish WASM`

</td>
</tr>
<tr>
<td width="104" align="center"><img src="assets/pearl-drone.gif" width="70" alt=""></td>
<td>

**[mini-tools](https://github.com/AdiGo112/mini-tools)** — the pieces, built from scratch to see how they work

A header-only Bloom filter, and a load balancer implementing seven strategies
side by side: round robin, weighted round robin, least connections, least
response time, consistent hashing, IP hash, power-of-two-choices.

`C++`

</td>
</tr>
<tr>
<td width="104" align="center"><img src="assets/pearl-abstract.gif" width="70" alt=""></td>
<td>

**[CP Insight](https://github.com/AdiGo112/CP_Insight)** — reality, not vanity

A Codeforces dashboard that reads the journey at the problem level instead of
counting submissions: which ratings actually break you, which tags you quietly
avoid, what a contest really cost.

`React` `Vite` `Node.js`

</td>
</tr>
<tr>
<td width="104" align="center"><img src="assets/pearl-wora.gif" width="70" alt=""></td>
<td>

**[adityagorane.dev](https://adityagorane.vercel.app)** — portfolio as an engineering artifact

Case studies, a scroll-linked journey, a command palette, live stats served from
a public API. There is a door hidden in the footer.

`Next.js` `TypeScript` `Tailwind` `Framer Motion`

</td>
</tr>
</table>

<details>
<summary><b>More in the repo list</b></summary>

<br>

| | what it is | built with |
|---|---|---|
| **[BatchWise](https://github.com/AdiGo112/BatchWise)** | Campus discussion and placement platform. No backend — all state in Context, persisted to `localStorage`, with tests that render every route. | `React` `React Router` |
| **[QuickDual](https://github.com/AdiGo112/QuickDual)** | Two games at once: a bird through pipes on the keyboard while a ball stays alive on the mouse. Scores survival and accuracy. | `JavaScript` `Canvas` |
| **[Curricular](https://github.com/AdiGo112/Curricular)** | AI lab work written to be read: DFS/BFS, A\*, greedy shortest path, N-Queens by branch-and-bound and backtracking. | `Python` `C++` |
| **[EasyEMI](https://github.com/AdiGo112/EasyEMI)** | Loan EMI calculator and amortisation breakdown, server-rendered. A team build. | `Express` `EJS` |
| **[ChessWeb](https://github.com/AdiGo112/ChessWeb)** | Where WChess started — a browser board, before any of the hard parts had names. | `HTML` `JavaScript` |
| **[CP](https://github.com/AdiGo112/CP)** | Every Codeforces solution, kept as written during the contest. | `C++` |

</details>

### GitHub

<img src="assets/stats.svg" width="100%" alt="Public repositories, commits, pull requests and most-used languages">

<img src="https://ghchart.rshah.org/b0764f/AdiGo112" width="100%" alt="Contribution heatmap">

### Competitive programming

<img src="assets/karma.png" width="100%" alt="Codeforces rank ladder — specialist now, expert at peak">

[![rating](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fcodeforces.com%2Fapi%2Fuser.info%3Fhandles%3DAdiGo112&query=%24.result%5B0%5D.rating&label=codeforces&labelColor=0c0e10&color=2b2f33&style=flat-square)](https://codeforces.com/profile/AdiGo112)
[![rank](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fcodeforces.com%2Fapi%2Fuser.info%3Fhandles%3DAdiGo112&query=%24.result%5B0%5D.rank&label=rank&labelColor=0c0e10&color=2b2f33&style=flat-square)](https://codeforces.com/profile/AdiGo112)
[![peak](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fcodeforces.com%2Fapi%2Fuser.info%3Fhandles%3DAdiGo112&query=%24.result%5B0%5D.maxRating&label=peak&labelColor=0c0e10&color=2b2f33&style=flat-square)](https://codeforces.com/profile/AdiGo112)
[![leetcode](https://img.shields.io/badge/leetcode-knight-2b2f33?labelColor=0c0e10&style=flat-square)](https://leetcode.com/u/AdiGo_112/)

456 problems across both platforms. Contests taught me abstraction, optimization
and debugging under pressure — most of what production asks for anyway. The first
three badges read live from the Codeforces API: no cron, no bot, no commit.

### Elsewhere

[![Portfolio](https://img.shields.io/badge/Portfolio-0c0e10?style=flat-square&logo=vercel&logoColor=c9c5b8)](https://adityagorane.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0c0e10?style=flat-square&logo=linkedin&logoColor=c9c5b8)](https://linkedin.com/in/adityagorane)
[![Codeforces](https://img.shields.io/badge/Codeforces-0c0e10?style=flat-square&logo=codeforces&logoColor=c9c5b8)](https://codeforces.com/profile/AdiGo112)
[![LeetCode](https://img.shields.io/badge/LeetCode-0c0e10?style=flat-square&logo=leetcode&logoColor=c9c5b8)](https://leetcode.com/u/AdiGo_112/)
[![Email](https://img.shields.io/badge/Email-0c0e10?style=flat-square&logo=gmail&logoColor=c9c5b8)](mailto:adigorane136@gmail.com)

<sub>Rank glyphs and project markers are sprites from *Rain World* © Videocult /
Akupara Games, used as fan art and not endorsed by them.</sub>
