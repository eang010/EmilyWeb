const tools: { name: string; src?: string }[] = [
  { name: "Power Apps", src: "/tools/powerapps.svg" },
  { name: "Power Automate", src: "/tools/powerautomate.svg" },
  { name: "Jira", src: "/tools/jira.svg" },
  { name: "Confluence", src: "/tools/confluence.svg" },
  { name: "Figma", src: "/tools/figma.svg" },
  { name: "Notion", src: "/tools/notion.svg" },
  { name: "MSSQL", src: "/tools/mssql.svg" },
  { name: "Claude Code", src: "/tools/claudecode.svg" },
  { name: "Codex", src: "/tools/openai.svg" },
  { name: "Google Stitch", src: "/tools/stitch.png" },
  { name: "Google Flow" },
  { name: "Cursor", src: "/tools/cursor.svg" },
  { name: "VS Code", src: "/tools/vscode.svg" },
  { name: "Visual Studio", src: "/tools/visualstudio.svg" },
  { name: "Google Apps Script", src: "/tools/googleappsscript.svg" },
  { name: "Vercel", src: "/tools/vercel.svg" },
  { name: "Netlify", src: "/tools/netlify.svg" },
  { name: "Cloudflare", src: "/tools/cloudflare.svg" },
  { name: "IFTTT", src: "/tools/ifttt.svg" },
  { name: "ApplySG", src: "/tools/applysg.png" },
  { name: "Airbase" },
  { name: "GovAuth" },
  { name: "Personalise", src: "/tools/personalise.png" },
  { name: "WOGAA", src: "/tools/wogaa.svg" },
  { name: "Postman", src: "/tools/postman.svg" },
  { name: "Plumber" },
  { name: "Opus" },
  { name: "Isomer", src: "/tools/isomer.png" },
  { name: "FormSG", src: "/tools/formsg.png" },
];

function ToolItem({ name, src }: { name: string; src?: string }) {
  return (
    <li className="flex h-10 shrink-0 items-center" title={name}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="" className="tool-logo" />
      ) : (
        <span className="text-[13px] font-medium whitespace-nowrap">{name}</span>
      )}
    </li>
  );
}

export default function ToolsMarquee() {
  const rows = [tools, tools];

  return (
    <div
      className="tool-marquee skeleton-host"
      tabIndex={0}
      aria-busy="true"
      aria-label="Tools. The row scrolls on its own. Focus or hover to pause it."
    >
      <div className="skeleton absolute inset-0 z-10" aria-hidden="true" />
      <p className="sr-only">{tools.map((tool) => tool.name).join(", ")}</p>
      <div className="tool-track" aria-hidden="true">
        {rows.map((row, index) => (
          <ul key={index} className="tool-row">
            {row.map((tool) => (
              <ToolItem key={`${tool.name}-${index}`} name={tool.name} src={tool.src} />
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
