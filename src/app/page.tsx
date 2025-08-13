import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="p-10 space-y-6">
      <h1 className="text-4xl font-bold text-brand-violet">
        Hello, Petnovio 🐾
      </h1>

      <p className="text-gray-600">
        If this headline is violet, Tailwind + brand colors work.
      </p>

      {/* Brand preview card */}
      <section className="max-w-md rounded-2xl border border-brand-violet/20 p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-brand-violet">Brand colors</h2>

        <ul className="mt-4 space-y-3">
          {[
            { name: "Violet", className: "bg-brand-violet" },
            { name: "Peach", className: "bg-brand-peach" },
            { name: "Aqua", className: "bg-brand-aqua" },
            { name: "Lime", className: "bg-brand-lime" },
            { name: "Coral", className: "bg-brand-coral" },
          ].map((c) => (
            <li key={c.name} className="flex items-center gap-3">
              <span className={`inline-block h-5 w-5 rounded-full ${c.className}`} />
              <span className="text-sm text-gray-700">{c.name}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* shadcn/ui sanity-check button */}
      <Button className="bg-brand-aqua text-black hover:bg-brand-aqua/80">
        Test Button
      </Button>
    </main>
  );
}

