'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Loader2, CheckCircle2, AlertCircle, RotateCcw } from 'lucide-react';
import {
  COUNTRY_CODES,
  HOTEL_CATEGORIES,
  validateEnquiry,
  type EnquiryInput,
  type FieldErrors,
} from '@/lib/validation';
import { destinations } from '@/data/destinations';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function BookingForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const presetDestination = searchParams.get('destination');

  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState<FieldErrors>({});

  const [form, setForm] = useState<EnquiryInput>({
    fullName: '',
    countryCode: '+91',
    contactNumber: '',
    email: '',
    dateOfTravel: '',
    numberOfPeople: 1,
    hotelCategory: '',
    numberOfChildren: 0,
  });

  const today = new Date().toISOString().split('T')[0];

  const update = <K extends keyof EnquiryInput>(
    key: K,
    value: EnquiryInput[K]
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key as keyof FieldErrors]) {
      setErrors((prev) => ({ ...prev, [key as keyof FieldErrors]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;

    const fieldErrors = validateEnquiry(form);
    setErrors(fieldErrors);

    if (Object.keys(fieldErrors).length > 0) {
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        return;
      }

      setStatus('error');
      setErrorMessage(
        data.message ||
          'Something went wrong while submitting your enquiry. Please try again.'
      );
    } catch {
      setStatus('error');
      setErrorMessage(
        'Something went wrong while submitting your enquiry. Please try again.'
      );
    }
  };

  const reset = () => {
    setStatus('idle');
    setErrorMessage('');
    setErrors({});
    setForm({
      fullName: '',
      countryCode: '+91',
      contactNumber: '',
      email: '',
      dateOfTravel: '',
      numberOfPeople: 1,
      hotelCategory: '',
      numberOfChildren: 0,
    });
    router.push('/contact');
  };

  if (status === 'success') {
    return (
      <div className="animate-scale-in rounded-2xl border border-border bg-card p-8 text-center shadow-sm sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 text-accent">
          <CheckCircle2 className="h-9 w-9" />
        </div>
        <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">
          Enquiry submitted successfully
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Thank you! Our travel expert will contact you within 24 hours to
          start crafting your journey.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03] active:scale-95"
        >
          <RotateCcw className="h-4 w-4" />
          Plan another trip
        </button>
      </div>
    );
  }

  const presetDest = destinations.find((d) => d.id === presetDestination);

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5"
      aria-label="Trip enquiry form"
    >
      {presetDest && (
        <div className="rounded-xl border border-primary/30 bg-primary/5 px-4 py-3 text-sm text-foreground">
          Enquiring about <span className="font-semibold">{presetDest.name}</span> —
          starting from ₹{presetDest.price.toLocaleString('en-IN')}
        </div>
      )}

      {status === 'error' && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive"
        >
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
          <p>{errorMessage}</p>
        </div>
      )}

      <Field
        id="fullName"
        label="Full Name"
        error={errors.fullName}
        required
      >
        <input
          id="fullName"
          type="text"
          value={form.fullName}
          onChange={(e) => update('fullName', e.target.value)}
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? 'fullName-error' : undefined}
          className={inputClass(!!errors.fullName)}
          placeholder="e.g. Arjun Mehta"
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-[1fr_2fr]">
        <Field
          id="countryCode"
          label="Country Code"
          error={errors.countryCode}
          required
        >
          <select
            id="countryCode"
            value={form.countryCode}
            onChange={(e) => update('countryCode', e.target.value)}
            aria-invalid={!!errors.countryCode}
            className={inputClass(!!errors.countryCode)}
          >
            {COUNTRY_CODES.map((c) => (
              <option key={c.code} value={c.code}>
                {c.label}
              </option>
            ))}
          </select>
        </Field>

        <Field
          id="contactNumber"
          label="Contact Number"
          error={errors.contactNumber}
          required
        >
          <input
            id="contactNumber"
            type="tel"
            value={form.contactNumber}
            onChange={(e) => update('contactNumber', e.target.value)}
            aria-invalid={!!errors.contactNumber}
            aria-describedby={errors.contactNumber ? 'contactNumber-error' : undefined}
            className={inputClass(!!errors.contactNumber)}
            placeholder="e.g. 9876543210"
          />
        </Field>
      </div>

      <Field id="email" label="Email" error={errors.email} required>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => update('email', e.target.value)}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={inputClass(!!errors.email)}
          placeholder="you@example.com"
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="dateOfTravel"
          label="Date of Travel"
          error={errors.dateOfTravel}
          required
        >
          <input
            id="dateOfTravel"
            type="date"
            value={form.dateOfTravel}
            min={today}
            onChange={(e) => update('dateOfTravel', e.target.value)}
            aria-invalid={!!errors.dateOfTravel}
            aria-describedby={errors.dateOfTravel ? 'dateOfTravel-error' : undefined}
            className={inputClass(!!errors.dateOfTravel)}
          />
        </Field>

        <Field
          id="numberOfPeople"
          label="Number of People"
          error={errors.numberOfPeople}
          required
        >
          <input
            id="numberOfPeople"
            type="number"
            min={1}
            value={form.numberOfPeople}
            onChange={(e) => update('numberOfPeople', e.target.value)}
            aria-invalid={!!errors.numberOfPeople}
            aria-describedby={errors.numberOfPeople ? 'numberOfPeople-error' : undefined}
            className={inputClass(!!errors.numberOfPeople)}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="hotelCategory"
          label="Hotel Category"
          error={errors.hotelCategory}
          required
        >
          <select
            id="hotelCategory"
            value={form.hotelCategory}
            onChange={(e) => update('hotelCategory', e.target.value)}
            aria-invalid={!!errors.hotelCategory}
            className={inputClass(!!errors.hotelCategory)}
          >
            <option value="">Select category</option>
            {HOTEL_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </Field>

        <Field
          id="numberOfChildren"
          label="Number of Children"
          error={errors.numberOfChildren}
          hint="Optional"
        >
          <input
            id="numberOfChildren"
            type="number"
            min={0}
            value={form.numberOfChildren}
            onChange={(e) => update('numberOfChildren', e.target.value)}
            aria-invalid={!!errors.numberOfChildren}
            className={inputClass(!!errors.numberOfChildren)}
            placeholder="0"
          />
        </Field>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground transition-transform hover:scale-[1.01] active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Submitting…
          </>
        ) : (
          'Submit Enquiry'
        )}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  hint,
  required,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 flex items-center justify-between text-sm font-medium text-foreground"
      >
        <span>
          {label}
          {required && <span className="ml-0.5 text-primary">*</span>}
        </span>
        {hint && <span className="text-xs font-normal text-muted-foreground">{hint}</span>}
      </label>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-1.5 text-sm text-destructive"
        >
          {error}
        </p>
      )}
    </div>
  );
}

function inputClass(hasError: boolean): string {
  return [
    'w-full rounded-xl border bg-background px-4 py-2.5 text-sm text-foreground transition-colors',
    'placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0',
    hasError
      ? 'border-destructive focus:ring-destructive'
      : 'border-input focus:border-primary',
  ].join(' ');
}
