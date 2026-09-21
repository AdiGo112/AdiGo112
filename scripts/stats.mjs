// Renders assets/stats.svg from the GitHub API.
// The hosted stats-card services are unreliable (the public ones were returning
// 402/503), so this repo draws its own card and refreshes it on a schedule.
//   GITHUB_TOKEN=$(gh auth token) node scripts/stats.mjs
import { writeFileSync, mkdirSync } from 'node:fs';

const USER = process.env.STATS_USER || 'AdiGo112';
const TOKEN = process.env.GITHUB_TOKEN;
if (!TOKEN) throw new Error('GITHUB_TOKEN is required');

const BONE = '#c9c5b8', MUTED = '#9a978c', FAINT = '#56544e', RUST = '#b0764f', VOID = '#0c0e10';
const MONO = 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace';

const QUERY = `query($login:String!){
  user(login:$login){
    repositories(first:100, ownerAffiliations:OWNER, isFork:false, privacy:PUBLIC, orderBy:{field:PUSHED_AT,direction:DESC}){
      totalCount
      nodes{

        languages(first:10, orderBy:{field:SIZE,direction:DESC}){ edges{ size node{ name color } } }
      }
    }
    contributionsCollection{
      totalCommitContributions
      totalPullRequestContributions
      totalIssueContributions
      contributionCalendar{ totalContributions }
    }
  }
}`;

const res = await fetch('https://api.github.com/graphql', {
  method: 'POST',
  headers: { Authorization: `bearer ${TOKEN}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: QUERY, variables: { login: USER } }),
});
const json = await res.json();
if (json.errors) throw new Error(JSON.stringify(json.errors));
const u = json.data.user;

const c = u.contributionsCollection;

const bytes = new Map();
for (const repo of u.repositories.nodes) {
  for (const e of repo.languages.edges) {
    const k = e.node.name;
    if (!bytes.has(k)) bytes.set(k, { size: 0, color: e.node.color || '#6b6960' });
    bytes.get(k).size += e.size;
  }
}
const total = [...bytes.values()].reduce((n, v) => n + v.size, 0) || 1;
const langs = [...bytes.entries()]
  .sort((a, b) => b[1].size - a[1].size)
  .slice(0, 6)
  .map(([name, v]) => ({ name, color: v.color, pct: (v.size / total) * 100 }));

const W = 1200, H = 268, MID = 470;
const rows = [
  ['public repositories', u.repositories.totalCount],
  ['commits (past year)', c.totalCommitContributions],
  ['pull requests', c.totalPullRequestContributions],
  ['issues opened', c.totalIssueContributions],
  ['contributions (past year)', c.contributionCalendar.totalContributions],
];

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

let left = '';
rows.forEach(([label, value], i) => {
  const y = 96 + i * 27;
  left += `<text x="56" y="${y}" font-family="${MONO}" font-size="15" fill="${MUTED}">${label}</text>`;
  left += `<text x="404" y="${y}" text-anchor="end" font-family="${MONO}" font-size="15" fill="${BONE}">${value}</text>`;
  left += `<rect x="56" y="${y + 8}" width="348" height="1" fill="${BONE}" opacity="0.07"/>`;
});

let right = '';
const barW = 620;
langs.forEach((l, i) => {
  const y = 88 + i * 27;
  right += `<text x="${MID + 56}" y="${y}" font-family="${MONO}" font-size="14" fill="${MUTED}">${esc(l.name)}</text>`;
  right += `<text x="${MID + 676}" y="${y}" text-anchor="end" font-family="${MONO}" font-size="13" fill="${FAINT}">${l.pct.toFixed(1)}%</text>`;
  right += `<rect x="${MID + 56}" y="${y + 6}" width="${barW}" height="4" rx="2" fill="${BONE}" opacity="0.07"/>`;
  right += `<rect x="${MID + 56}" y="${y + 6}" width="${Math.max(3, (l.pct / langs[0].pct) * barW)}" height="4" rx="2" fill="${l.color}" opacity="0.85"/>`;
});

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="GitHub statistics for ${USER}">
  <rect width="${W}" height="${H}" rx="6" fill="${VOID}"/>
  <rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="6" fill="none" stroke="${BONE}" stroke-opacity="0.1"/>
  <rect x="56" y="42" width="3" height="18" fill="${RUST}"/>
  <text x="72" y="57" font-family="${MONO}" font-size="15" letter-spacing="3" fill="${BONE}">ACTIVITY</text>
  <rect x="${MID + 56}" y="42" width="3" height="18" fill="${RUST}"/>
  <text x="${MID + 72}" y="57" font-family="${MONO}" font-size="15" letter-spacing="3" fill="${BONE}">MOST USED</text>
  <rect x="${MID - 26}" y="42" width="1" height="${H - 84}" fill="${BONE}" opacity="0.08"/>
  ${left}${right}
  <text x="56" y="${H - 22}" font-family="${MONO}" font-size="11" fill="${FAINT}">generated ${new Date().toISOString().slice(0, 10)} from the GitHub API</text>
</svg>
`;

mkdirSync('assets', { recursive: true });
writeFileSync('assets/stats.svg', svg);
console.log(`stats.svg written — ${u.repositories.totalCount} public repos, ${langs.length} languages`);
