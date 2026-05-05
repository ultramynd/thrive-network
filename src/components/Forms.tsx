"use client";

import { useState } from "react";
import { CheckCircle2, ShieldAlert } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

async function submitEnquiry(form: HTMLFormElement, type: string) {
  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());

  const response = await fetch("/api/enquiries", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type, payload }),
  });

  if (!response.ok) {
    throw new Error("Submission failed");
  }
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  children,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-[var(--ink)]">
      {label}
      {children ?? (
        <input
          className="form-field"
          name={name}
          type={type}
          required={required}
          autoComplete={type === "email" ? "email" : "on"}
        />
      )}
    </label>
  );
}

function useFormSubmission(type: string) {
  const [state, setState] = useState<FormState>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    try {
      await submitEnquiry(event.currentTarget, type);
      event.currentTarget.reset();
      setState("success");
    } catch {
      setState("error");
    }
  }

  return { state, onSubmit };
}

export function ContactForm({ type = "contact" }: { type?: string }) {
  const { state, onSubmit } = useFormSubmission(type);

  return (
    <form onSubmit={onSubmit} className="form-card">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full Name" name="name" required />
        <Field label="Email Address" name="email" type="email" required />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Phone Number" name="phone" />
        <Field label="Organisation / Church Name" name="organisation" />
      </div>
      <Field label="What would you like to discuss?" name="topic">
        <select className="form-field" name="topic" required defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          <option>Men Empowerment</option>
          <option>Safeguarding Training</option>
          <option>Leadership Development</option>
          <option>Mentoring & Coaching</option>
          <option>Bespoke Training & Research</option>
          <option>Thrive Creatives</option>
          <option>General enquiry</option>
        </select>
      </Field>
      <Field label="Additional Notes" name="message">
        <textarea className="form-field min-h-36" name="message" />
      </Field>
      <Consent />
      <SubmitState state={state} label="Send Enquiry" />
    </form>
  );
}

export function SafeguardingBookingForm() {
  const { state, onSubmit } = useFormSubmission("safeguarding-booking");

  return (
    <form id="safeguarding-form" onSubmit={onSubmit} className="form-card">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full Name" name="name" required />
        <Field label="Organisation / Church Name" name="organisation" required />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Email Address" name="email" type="email" required />
        <Field label="Phone Number (optional)" name="phone" />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Training Package" name="package">
          <select className="form-field" name="package" required defaultValue="">
            <option value="" disabled>
              Select a package
            </option>
            <option>Half-day safeguarding training</option>
            <option>Full-day safeguarding training</option>
            <option>Bespoke safeguarding programme</option>
            <option>Safeguarding consultancy</option>
          </select>
        </Field>
        <Field label="Preferred Delivery Format" name="delivery">
          <select className="form-field" name="delivery" required defaultValue="">
            <option value="" disabled>
              Select a format
            </option>
            <option>Face-to-face</option>
            <option>Virtual</option>
            <option>Workshop</option>
          </select>
        </Field>
      </div>
      <Field label="Additional Notes (optional)" name="message">
        <textarea className="form-field min-h-32" name="message" />
      </Field>
      <Consent />
      <SubmitState state={state} label="Book Safeguarding Training" />
    </form>
  );
}

export function AssessmentForm() {
  const { state, onSubmit } = useFormSubmission("assessment-request");

  return (
    <form onSubmit={onSubmit} className="form-card">
      <div className="rounded-xl border border-[var(--gold)]/40 bg-[var(--gold)]/12 p-5">
        <div className="flex gap-3">
          <ShieldAlert aria-hidden="true" className="mt-1 text-[var(--ink)]" />
          <div>
            <h2 className="text-base font-bold text-[var(--ink)]">
              Safety first
            </h2>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              If you are in immediate danger, call emergency services now. This
              form is not an emergency response service and does not collect a
              detailed abuse history online.
            </p>
          </div>
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full Name" name="name" required />
        <Field label="Email Address" name="email" type="email" required />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Safe Phone Number" name="phone" />
        <Field label="Preferred Contact Method" name="contactMethod">
          <select className="form-field" name="contactMethod" required defaultValue="">
            <option value="" disabled>
              Select a method
            </option>
            <option>Email</option>
            <option>Phone</option>
          </select>
        </Field>
      </div>
      <Field label="What kind of support are you looking for?" name="supportType">
        <select className="form-field" name="supportType" required defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          <option>Initial consultation</option>
          <option>Assessment</option>
          <option>Group sessions</option>
          <option>Therapeutic services</option>
          <option>Professional signposting</option>
        </select>
      </Field>
      <label className="flex items-start gap-3 text-sm leading-6 text-[var(--muted)]">
        <input
          className="mt-1 h-4 w-4 accent-[var(--violet)]"
          type="checkbox"
          name="sensitiveConsent"
          required
        />
        <span>
          I understand that Thrive should avoid collecting detailed sensitive
          information through this form and consent to being contacted about the
          support request I have submitted.
        </span>
      </label>
      <SubmitState state={state} label="Request Support" />
    </form>
  );
}

export function NewsletterForm() {
  const { state, onSubmit } = useFormSubmission("newsletter");

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        className="min-h-12 flex-1 rounded-lg border border-white/20 bg-white/10 px-4 text-sm text-white outline-none placeholder:text-white/50 focus:border-white"
        name="email"
        type="email"
        required
        placeholder="Email address"
      />
      <button className="min-h-12 rounded-lg bg-[var(--gold)] px-5 text-sm font-bold text-[var(--ink)]">
        Subscribe
      </button>
      <span className="sr-only">{state}</span>
    </form>
  );
}

function Consent() {
  return (
    <label className="flex items-start gap-3 text-sm leading-6 text-[var(--muted)]">
      <input
        className="mt-1 h-4 w-4 accent-[var(--violet)]"
        type="checkbox"
        name="privacyConsent"
        required
      />
      <span>
        I consent to Thrive Network using this information to respond to my
        enquiry and understand the privacy policy applies.
      </span>
    </label>
  );
}

function SubmitState({ state, label }: { state: FormState; label: string }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <button
        className="min-h-12 rounded-lg bg-[var(--violet)] px-6 text-sm font-bold text-white transition hover:bg-[var(--violet-dark)] disabled:opacity-60"
        disabled={state === "submitting"}
      >
        {state === "submitting" ? "Sending..." : label}
      </button>
      {state === "success" ? (
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
          <CheckCircle2 aria-hidden="true" size={18} /> Thank you. Your enquiry
          has been received.
        </p>
      ) : null}
      {state === "error" ? (
        <p className="text-sm font-semibold text-red-700">
          Something went wrong. Please try again.
        </p>
      ) : null}
    </div>
  );
}
