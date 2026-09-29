function Plate({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  const fill =
    {
      merlimuse: "#e8e8e8",
      "digital-concierge": "#f3f3f3",
      "stb-attraction-pass": "#dcdcdc",
      "bill-splitter": "#ebebeb",
      "save-the-date": "#f6f6f6",
      chope: "#e3e3e3",
    }[slug] ?? "#ececec";

  return (
    <svg
      viewBox="0 0 640 360"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <rect width="640" height="360" fill={fill} />
      {children}
    </svg>
  );
}

export default function ProjectCover({ slug }: { slug: string }) {
  return (
    <div className="aspect-video overflow-hidden bg-[#ececec]">
      <div className="h-full w-full transition-opacity duration-300 group-hover:opacity-80 group-focus-visible:opacity-80">
        {slug === "merlimuse" && (
          <Plate slug={slug}>
            {[48, 92, 136, 180, 224, 268, 312].map((y, i) => (
              <rect
                key={y}
                x="56"
                y={y}
                height={i === 2 ? 14 : 8}
                width={[460, 520, 300, 410, 490, 360, 250][i]}
                fill="#121212"
                opacity={i === 2 ? 1 : 0.16}
              />
            ))}
          </Plate>
        )}
        {slug === "digital-concierge" && (
          <Plate slug={slug}>
            <circle cx="70" cy="180" r="78" fill="none" stroke="#121212" strokeWidth="12" />
            <circle cx="70" cy="180" r="142" fill="none" stroke="#121212" strokeWidth="12" opacity="0.4" />
            <circle cx="70" cy="180" r="206" fill="none" stroke="#121212" strokeWidth="12" opacity="0.16" />
          </Plate>
        )}
        {slug === "stb-attraction-pass" && (
          <Plate slug={slug}>
            <rect x="128" y="78" width="384" height="204" fill="#f7f7f7" />
            <circle cx="128" cy="180" r="26" fill="#dcdcdc" />
            <rect x="196" y="132" width="210" height="14" fill="#121212" />
            <rect x="196" y="164" width="140" height="8" fill="#121212" opacity="0.35" />
            <rect x="196" y="188" width="96" height="8" fill="#121212" opacity="0.2" />
          </Plate>
        )}
        {slug === "bill-splitter" && (
          <Plate slug={slug}>
            <circle cx="430" cy="210" r="168" fill="none" stroke="#121212" strokeWidth="12" />
            <path d="M430 210 L430 42 A168 168 0 0 1 578 292 Z" fill="#121212" />
          </Plate>
        )}
        {slug === "save-the-date" && (
          <Plate slug={slug}>
            <circle cx="268" cy="180" r="108" fill="none" stroke="#121212" strokeWidth="10" />
            <circle cx="392" cy="180" r="108" fill="none" stroke="#121212" strokeWidth="10" />
          </Plate>
        )}
        {slug === "chope" && (
          <Plate slug={slug}>
            <rect x="168" y="48" width="304" height="264" fill="#121212" />
            <rect x="168" y="48" width="78" height="78" fill="#e3e3e3" />
          </Plate>
        )}
        {![
          "merlimuse",
          "digital-concierge",
          "stb-attraction-pass",
          "bill-splitter",
          "save-the-date",
          "chope",
        ].includes(slug) && <Plate slug={slug}>{null}</Plate>}
      </div>
    </div>
  );
}
