import type { CurriculumTable } from "@/data/curriculum";
import { tableAnchorId } from "@/lib/slug";

type Props = {
  table: CurriculumTable;
  categoryId: string;
};

export function CurriculumTableBlock({ table, categoryId }: Props) {
  const [c0, c1, ...cRest] = table.columns;
  const secondaryCount = cRest.length;
  const anchor = tableAnchorId(categoryId, table.title);

  return (
    <section className="mb-10 scroll-mt-24 md:scroll-mt-20" aria-labelledby={anchor}>
      <div className="mb-3">
        <h3 id={anchor} className="text-lg font-semibold tracking-tight text-foreground">
          {table.title}
        </h3>
        {table.description ? (
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {table.description}
          </p>
        ) : null}
      </div>
      <div className="overflow-x-auto rounded-xl border border-zinc-200/80 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-zinc-50 text-xs font-semibold uppercase tracking-wide text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
            <tr>
              <th scope="col" className="whitespace-nowrap px-4 py-3 align-bottom">
                {c0}
              </th>
              <th scope="col" className="px-4 py-3 align-bottom">
                {c1}
              </th>
              {cRest.map((c) => (
                <th key={c} scope="col" className="px-4 py-3 align-bottom">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 dark:divide-zinc-900">
            {table.rows.map((row, idx) => {
              const [r0, r1, ...rRest] = row;
              const pad = secondaryCount - rRest.length;
              const fillers = pad > 0 ? Array.from({ length: pad }, () => "") : [];
              const cells = [...rRest, ...fillers];
              return (
                <tr
                  key={`${table.title}-${idx}`}
                  className="odd:bg-white even:bg-zinc-50/60 dark:odd:bg-zinc-950 dark:even:bg-zinc-900/40"
                >
                  <th
                    scope="row"
                    className="whitespace-nowrap px-4 py-3 align-top font-medium text-zinc-900 dark:text-zinc-100"
                  >
                    {r0}
                  </th>
                  <td className="px-4 py-3 align-top text-zinc-700 dark:text-zinc-300">
                    <Cell text={r1} />
                  </td>
                  {cells.map((cell, j) => (
                    <td key={j} className="px-4 py-3 align-top text-zinc-700 dark:text-zinc-300">
                      <Cell text={cell} />
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Cell({ text }: { text: string }) {
  if (/^https?:\/\//i.test(text.trim())) {
    const href = text.trim();
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="break-all font-medium text-indigo-700 underline decoration-indigo-400/30 underline-offset-2 hover:decoration-indigo-600 dark:text-indigo-300"
      >
        {href.replace(/^https?:\/\//i, "")}
      </a>
    );
  }
  return <>{text}</>;
}
