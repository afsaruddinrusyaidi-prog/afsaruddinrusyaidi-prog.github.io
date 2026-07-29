import { Fragment, type ReactNode } from "react"
import { Reveal } from "@/components/Reveal"
import type { Block } from "@/data/articles"

/**
 * Renders the article block list. Every block type in `Block` has exactly one
 * case here, so a new block type is a compile error until it gets a look.
 */

/** Inline markup: **bold**, *italic* and [label](url). */
const INLINE = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g

function RichText({ text }: { text: string }) {
  const parts = text.split(INLINE).filter(Boolean)

  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-bold text-navy">
              {part.slice(2, -2)}
            </strong>
          )
        }
        if (part.startsWith("*") && part.endsWith("*")) {
          return <em key={i}>{part.slice(1, -1)}</em>
        }
        const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part)
        if (link) {
          return (
            <a
              key={i}
              href={link[2]}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-flame underline decoration-flame/30 underline-offset-4 transition-colors hover:decoration-flame"
            >
              {link[1]}
            </a>
          )
        }
        return <Fragment key={i}>{part}</Fragment>
      })}
    </>
  )
}

function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <Reveal className={className}>{children}</Reveal>
}

export function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="max-w-[68ch]">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "lead":
            return (
              <Section key={i}>
                <p className="mt-8 font-display text-xl font-medium leading-[1.55] text-navy sm:text-[1.4rem]">
                  <RichText text={block.text} />
                </p>
              </Section>
            )

          case "p":
            return (
              <Section key={i}>
                <p className="mt-6 text-[1.0625rem] leading-[1.75] text-navy/80">
                  <RichText text={block.text} />
                </p>
              </Section>
            )

          case "h2":
            return (
              <Section key={i}>
                <h2
                  id={block.id}
                  className="mt-16 scroll-mt-28 border-t border-border pt-8 font-display text-[1.75rem] font-extrabold leading-[1.2] tracking-tight text-navy sm:text-[2rem]"
                >
                  {block.text}
                </h2>
              </Section>
            )

          case "h3":
            return (
              <Section key={i}>
                <h3 className="mt-11 font-display text-xl font-bold leading-snug tracking-tight text-navy">
                  {block.text}
                </h3>
              </Section>
            )

          case "stats":
            return (
              <Section key={i}>
                <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
                  {block.items.map((item) => (
                    <div key={item.label} className="bg-white p-5">
                      <p className="font-display text-2xl font-extrabold tracking-tight text-flame">
                        {item.value}
                      </p>
                      <p className="mt-2 text-[13px] leading-snug text-navy/70">{item.label}</p>
                      {item.source && (
                        <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                          {item.source}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </Section>
            )

          case "table":
            return (
              <Section key={i}>
                <figure className="mt-10">
                  {/* Wide reference tables scroll inside their own frame so the
                      page body never scrolls horizontally on mobile. */}
                  <div className="overflow-x-auto rounded-2xl border border-border bg-white">
                    <table className="w-full min-w-[720px] border-collapse text-left text-[13px]">
                      <thead>
                        <tr className="bg-cream-deep">
                          {block.head.map((cell) => (
                            <th
                              key={cell}
                              scope="col"
                              className="border-b border-border px-4 py-3.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-navy"
                            >
                              {cell}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {block.rows.map((row, r) => (
                          <tr key={r} className="border-b border-border/70 last:border-0">
                            {row.map((cell, c) => (
                              <td
                                key={c}
                                className={
                                  c === 0
                                    ? "px-4 py-3.5 align-top font-bold text-navy"
                                    : "px-4 py-3.5 align-top leading-relaxed text-navy/70"
                                }
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {block.caption && (
                    <figcaption className="mt-3 text-xs text-muted-foreground">
                      {block.caption}
                    </figcaption>
                  )}
                </figure>
              </Section>
            )

          case "quote":
            return (
              <Section key={i}>
                <blockquote className="mt-11 border-l-2 border-flame pl-6">
                  <p className="font-display text-xl font-bold leading-[1.4] tracking-tight text-navy sm:text-[1.4rem]">
                    {block.text}
                  </p>
                  {block.cite && (
                    <cite className="mt-3 block text-xs font-semibold not-italic uppercase tracking-[0.16em] text-muted-foreground">
                      {block.cite}
                    </cite>
                  )}
                </blockquote>
              </Section>
            )

          case "flow":
            return (
              <Section key={i}>
                <figure className="mt-10 rounded-2xl border border-border bg-white p-6 sm:p-7">
                  <figcaption className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-flame">
                    {block.title}
                  </figcaption>
                  <ol className="mt-5">
                    {block.steps.map((step, s) => (
                      <li key={s} className="relative flex gap-4 pb-6 last:pb-0">
                        {/* Connector rail, stopped short on the final step. */}
                        {s < block.steps.length - 1 && (
                          <span
                            aria-hidden
                            className="absolute left-[13px] top-7 h-[calc(100%-1.75rem)] w-px bg-border"
                          />
                        )}
                        <span className="relative z-10 grid size-7 shrink-0 place-items-center rounded-full bg-navy text-[11px] font-extrabold text-cream">
                          {s + 1}
                        </span>
                        <span className="pt-1 text-sm leading-relaxed text-navy/80">{step}</span>
                      </li>
                    ))}
                  </ol>
                </figure>
              </Section>
            )

          case "cases":
            return (
              <Section key={i}>
                <div className="mt-10 flex flex-col">
                  {block.items.map((item) => (
                    <article key={item.name} className="border-t border-border py-6 last:pb-0">
                      <h3 className="font-display text-lg font-bold tracking-tight text-navy">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.16em] text-flame">
                        {item.role}
                      </p>
                      <p className="mt-3 text-[15px] leading-relaxed text-navy/75">{item.text}</p>
                    </article>
                  ))}
                </div>
              </Section>
            )

          case "list":
            return (
              <Section key={i}>
                <ul className="mt-6 flex flex-col gap-3">
                  {block.items.map((item, li) => (
                    <li key={li} className="flex gap-3.5 text-[1.0625rem] leading-[1.7] text-navy/80">
                      <span aria-hidden className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-flame" />
                      <span>
                        <RichText text={item} />
                      </span>
                    </li>
                  ))}
                </ul>
              </Section>
            )

          case "note":
            return (
              <Section key={i}>
                <aside className="mt-10 rounded-2xl border border-amber/40 bg-amber-soft/35 p-6">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-navy">
                    {block.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-navy/75">
                    <RichText text={block.text} />
                  </p>
                </aside>
              </Section>
            )
        }
      })}
    </div>
  )
}
