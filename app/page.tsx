export default function Home() {
  const sections = [
    { id: "intro", name: "Intro / Hero" },
    { id: "projecten", name: "Projecten" },
    { id: "ervaring", name: "Werkervaring en opleiding" },
    { id: "over-mij", name: "Over mij en hoe ik werk" },
    { id: "technieken", name: "Talen en technieken" },
    { id: "contact", name: "Contact" },
    { id: "footer", name: "Footer" },
  ];

  return (
    <main className="bg-zinc-950 text-zinc-100">
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="flex h-[50vh] items-center justify-center border-b border-zinc-800"
        >
          <h2 className="text-center text-3xl font-bold">
            {section.name}
          </h2>
        </section>
      ))}
    </main>
  );
}