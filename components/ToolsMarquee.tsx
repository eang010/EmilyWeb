const skills = [
  "Systems integration",
  "Solution design",
  "Problem-solving",
  "Stakeholder engagement",
  "User-centric design",
  "Service design",
  "Usability testing",
  "Low-code development",
  "Prototyping",
  "Process automation",
  "Process re-engineering",
];

export default function ToolsMarquee() {
  const rows = [skills, skills];

  return (
    <div
      className="tool-marquee"
      aria-label="Skills. The row scrolls on its own. Hover to pause it."
    >
      <p className="sr-only">{skills.join(", ")}</p>
      <div className="tool-track" aria-hidden="true">
        {rows.map((row, index) => (
          <ul key={index} className="tool-row">
            {row.map((skill) => (
              <li key={`${skill}-${index}`} className="skill-label">
                {skill}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
