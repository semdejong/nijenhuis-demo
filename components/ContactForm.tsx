"use client";

import { content } from "@/content";
import { useId, useRef, useState, type FormEvent } from "react";

export default function ContactForm() {
  const { form, contact } = content;
  const [done, setDone] = useState(false);
  const noteRef = useRef<HTMLParagraphElement>(null);
  const base = useId();

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDone(true);
    requestAnimationFrame(() => noteRef.current?.focus());
  }

  return (
    <form onSubmit={onSubmit} noValidate={false} className="border border-hairline bg-card">
      <div className="border-b border-hairline px-4 py-4 sm:px-6">
        <h2 className="text-2xl">{form.title}</h2>
        <p className="mt-2 text-base text-soft">{form.notice}</p>
      </div>
      <div className="grid gap-4 px-4 py-5 sm:px-6">
        <Field id={`${base}-naam`} label="Naam" name="naam" autoComplete="name" required />
        <Field id={`${base}-telefoon`} label="Telefoon" name="telefoon" type="tel" autoComplete="tel" required />
        <Field id={`${base}-email`} label="E-mail" name="email" type="email" autoComplete="email" required />
        <Field id={`${base}-plaats`} label="Plaats" name="plaats" autoComplete="address-level2" required />
        <div>
          <label htmlFor={`${base}-soort`} className="block text-base font-semibold">
            Soort werk
          </label>
          <select
            id={`${base}-soort`}
            name="soort"
            required
            defaultValue=""
            className="mt-1 min-h-11 w-full border border-hairline bg-white px-3 text-[18px]"
          >
            <option value="" disabled>
              Kies het soort werk
            </option>
            {form.kinds.map((kind) => (
              <option key={kind} value={kind}>
                {kind}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={`${base}-toelichting`} className="block text-base font-semibold">
            Toelichting
          </label>
          <textarea
            id={`${base}-toelichting`}
            name="toelichting"
            rows={5}
            className="mt-1 w-full border border-hairline bg-white px-3 py-2 text-[18px] leading-relaxed"
          />
        </div>
        <button type="submit" className="btn btn-accent w-full sm:w-auto" data-cta="offerte">
          Offerte voorleggen
        </button>
        {done ? (
          <p
            ref={noteRef}
            tabIndex={-1}
            role="status"
            className="border-l-[7px] border-brand bg-background px-4 py-3 outline-none"
          >
            {form.after}{" "}
            <a className="text-link" href={contact.phoneHref} data-cta="bellen">
              {contact.phoneDisplay}
            </a>{" "}
            of{" "}
            <a className="text-link" href={contact.offerteHref} data-cta="offerte">
              {contact.email}
            </a>
            .
          </p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  name,
  type = "text",
  autoComplete,
  required,
}: {
  id: string;
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-base font-semibold">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="mt-1 min-h-11 w-full border border-hairline bg-white px-3 text-[18px]"
      />
    </div>
  );
}
