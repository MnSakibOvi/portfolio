/** Keycap skills grid. Every icon is drawn in one colour: the site accent (teal). */
export type Glyph =
  | "plugin"
  | "card"
  | "truck"
  | "stores"
  | "search"
  | "api"
  | "server"
  | "sync";

export type SkillKey =
  | { label: string; si: string } // Simple Icons slug (one-colour logo)
  | { label: string; dev: string } // Devicon "plain" path, used when Simple Icons has no logo
  | { label: string; mono: string } // text badge (no logo exists)
  | { label: string; glyph: Glyph }; // line icon for concepts

export type SkillGroup = { title: string; note: string; keys: SkillKey[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Commerce Platform",
    note: "What I ship on",
    keys: [
      { label: "nopCommerce", mono: "nop" },
      { label: "Plugins", glyph: "plugin" },
      { label: "Multi-store", glyph: "stores" },
      { label: "Payments", glyph: "card" },
      { label: "Shipping", glyph: "truck" },
      { label: "SEO", glyph: "search" },
    ],
  },
  {
    title: "Backend & Data",
    note: "Where the logic lives",
    keys: [
      { label: "C#", dev: "csharp/csharp-plain" },
      { label: "ASP.NET Core", dev: "dotnetcore/dotnetcore-plain" },
      { label: ".NET", si: "dotnet" },
      { label: "SQL Server", dev: "microsoftsqlserver/microsoftsqlserver-plain" },
      { label: "REST APIs", glyph: "api" },
      { label: "ElasticSearch", si: "elasticsearch" },
    ],
  },
  {
    title: "Frontend",
    note: "What shoppers see and touch",
    keys: [
      { label: "HTML5", si: "html5" },
      { label: "CSS3", si: "css3" },
      { label: "JavaScript", si: "javascript" },
      { label: "jQuery", si: "jquery" },
    ],
  },
  {
    title: "Integrations",
    note: "Systems I connect",
    keys: [
      { label: "Xero", si: "xero" },
      { label: "Stripe", si: "stripe" },
      { label: "PayPal", si: "paypal" },
      { label: "Catalog sync", glyph: "sync" },
    ],
  },
  {
    title: "Tools",
    note: "How I build and ship",
    keys: [
      { label: "Git", si: "git" },
      { label: "GitHub", si: "github" },
      { label: "Bitbucket", si: "bitbucket" },
      { label: "Jira", si: "jira" },
      { label: "Trello", si: "trello" },
      { label: "Visual Studio", dev: "visualstudio/visualstudio-plain" },
      { label: "VS Code", dev: "vscode/vscode-plain" },
      { label: "IIS", glyph: "server" },
    ],
  },
  {
    title: "Problem Solving",
    note: "Where it all started",
    keys: [
      { label: "C++", si: "cplusplus" },
      { label: "Java", dev: "java/java-plain" },
      { label: "Codeforces", si: "codeforces" },
      { label: "LightOJ", mono: "LOJ" },
      { label: "UVa", mono: "UVa" },
      { label: "Vjudge", mono: "VJ" },
    ],
  },
];
