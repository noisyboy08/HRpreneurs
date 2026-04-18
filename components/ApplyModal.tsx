"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRightIcon, ArrowUpRight, Star } from "./decor";

export type Position = {
  title: string;
  type: string;
  loc: string;
  exp: string;
  skills: string[];
};

type Props = { position: Position | null; onClose: () => void };

const steps = [
  { id: 1, label: "About you"    },
  { id: 2, label: "Experience"   },
  { id: 3, label: "Fit & Intent" },
  { id: 4, label: "Attachments"  },
];

type FormData = {
  fullName: string; email: string; phone: string; location: string; linkedin: string;
  currentRole: string; currentCompany: string; yearsExp: string;
  currentCtc: string; expectedCtc: string; noticePeriod: string; startDate: string;
  skills: string[]; availableForWork: string;
  source: string; coverLetter: string; whyHRpreneurs: string;
  resumeLink: string; portfolioLink: string;
  consent: boolean;
};

const empty: FormData = {
  fullName: "", email: "", phone: "", location: "", linkedin: "",
  currentRole: "", currentCompany: "", yearsExp: "",
  currentCtc: "", expectedCtc: "", noticePeriod: "", startDate: "",
  skills: [], availableForWork: "Full-time",
  source: "", coverLetter: "", whyHRpreneurs: "",
  resumeLink: "", portfolioLink: "",
  consent: false,
};

export default function ApplyModal({ position, onClose }: Props) {
  const [step, setStep]         = useState(1);
  const [form, setForm]         = useState<FormData>(empty);
  const [submitting, setSubmit] = useState(false);
  const [done, setDone]         = useState(false);
  const open = !!position;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (position) {
      setStep(1); setForm({ ...empty, skills: position.skills.slice(0, 3) });
      setDone(false); setSubmit(false);
    }
  }, [position]);

  useEffect(() => {
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (open) window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open, onClose]);

  if (!position) return null;

  const setField = <K extends keyof FormData>(k: K, v: FormData[K]) =>
    setForm(f => ({ ...f, [k]: v }));

  const toggleSkill = (s: string) =>
    setForm(f => ({ ...f, skills: f.skills.includes(s) ? f.skills.filter(x => x !== s) : [...f.skills, s] }));

  const canNext =
    (step === 1 && form.fullName && form.email && form.phone) ||
    (step === 2 && form.currentRole && form.yearsExp) ||
    (step === 3 && form.whyHRpreneurs) ||
    (step === 4 && form.consent);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmit(true);
    await new Promise(r => setTimeout(r, 1200));
    setSubmit(false); setDone(true);
  };

  const allSkills = [
    ...position.skills,
    "Stakeholder Management", "Team Leadership", "Data Analytics",
    "Process Design", "Change Management", "Employee Relations",
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          style={{ position: "fixed", inset: 0, zIndex: 1800, background: "color-mix(in srgb, var(--fg) 60%, transparent)", backdropFilter: "blur(6px)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ y: "5%", opacity: 0, scale: 0.97 }}
            animate={{ y: 0,    opacity: 1, scale: 1 }}
            exit={{    y: "5%", opacity: 0, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            onClick={e => e.stopPropagation()}
            className="apply-modal"
            style={{
              position: "absolute", inset: "3vh 0 0",
              maxWidth: 1100, margin: "0 auto",
              height: "97vh",
              background: "var(--bg-card)", color: "var(--fg)",
              borderTopLeftRadius: "clamp(1.5rem, 3vw, 2.5rem)",
              borderTopRightRadius: "clamp(1.5rem, 3vw, 2.5rem)",
              boxShadow: "0 -20px 80px rgba(0,0,0,0.3)",
              display: "grid",
              gridTemplateRows: "auto 1fr auto",
              overflow: "hidden",
            }}
          >
            {/* ── header ── */}
            <div style={{
              padding: "1.5rem clamp(1.5rem, 4vw, 3rem)",
              borderBottom: "1px solid var(--border)",
              display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem",
              background: "var(--bg-alt)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", minWidth: 0 }}>
                <motion.span
                  initial={{ rotate: -20, scale: 0 }} animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.15 }}
                  style={{
                    width: 48, height: 48, borderRadius: "50%",
                    background: "var(--accent)", color: "var(--on-accent)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, border: "1.5px solid var(--fg)",
                  }}>
                  <Star color="var(--on-accent)" size={22} />
                </motion.span>
                <div style={{ minWidth: 0 }}>
                  <p className="eyebrow" style={{ fontSize: "0.65rem", color: "var(--accent)" }}>Applying for</p>
                  <h3 className="h4" style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)", lineHeight: 1.2, marginTop: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{position.title}</h3>
                  <p style={{ fontSize: "0.78rem", color: "var(--fg-2)", marginTop: 2 }}>
                    {position.type} · {position.loc} · {position.exp}
                  </p>
                </div>
              </div>
              <button onClick={onClose} aria-label="Close" className="apply-close">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
              </button>
            </div>

            {/* ── body ── */}
            <div style={{ overflow: "auto", padding: "clamp(1.25rem, 3vw, 2.5rem) clamp(1.5rem, 4vw, 3rem) 1rem" }}>
              {/* Step bar */}
              {!done && (
                <div className="apply-steps" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.5rem", marginBottom: "2rem" }}>
                  {steps.map(s => {
                    const active = s.id === step, passed = s.id < step;
                    return (
                      <div key={s.id} style={{
                        padding: "0.75rem 0.25rem",
                        borderTop: `3px solid ${passed || active ? "var(--accent)" : "var(--border)"}`,
                        transition: "border-color 0.35s",
                      }}>
                        <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: active ? "var(--accent)" : "var(--fg-3)" }}>
                          0{s.id} / 04
                        </p>
                        <p style={{ fontSize: "0.8rem", fontWeight: 700, color: active || passed ? "var(--fg)" : "var(--fg-3)", marginTop: 4 }}>
                          {s.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}

              <AnimatePresence mode="wait">
                {done ? (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    style={{ textAlign: "center", padding: "3rem 1rem" }}
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      style={{
                        width: 120, height: 120, borderRadius: "50%",
                        background: "var(--accent)", color: "var(--on-accent)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        margin: "0 auto 2rem",
                        border: "3px solid var(--fg)",
                      }}>
                      <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6"/></svg>
                    </motion.div>
                    <h3 className="h2" style={{ marginBottom: "1rem" }}>
                      Application <span className="highlight">received.</span>
                    </h3>
                    <p className="body-lg text-dim" style={{ maxWidth: 520, margin: "0 auto 2.5rem" }}>
                      Thanks, <strong>{form.fullName.split(" ")[0] || "candidate"}</strong> — we&apos;ve got it. Our team will review your submission and reach out within <strong>5 working days</strong>.
                    </p>
                    <div style={{ display: "inline-flex", padding: "1rem 1.5rem", borderRadius: 12, background: "var(--bg-alt)", border: "1px solid var(--border)", fontSize: "0.85rem", color: "var(--fg-2)" }}>
                      Reference ID: <strong style={{ marginLeft: 8, color: "var(--fg)" }}>HRP-{Date.now().toString().slice(-6)}</strong>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key={step}
                    onSubmit={onSubmit}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{    opacity: 0, x: -18 }}
                    transition={{ duration: 0.3 }}
                    id="apply-form"
                    style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
                  >
                    {step === 1 && (
                      <>
                        <FieldRow>
                          <Field label="Full name *" value={form.fullName} onChange={v => setField("fullName", v)} placeholder="Priya Sharma" required />
                          <Field label="Email *"     value={form.email}    onChange={v => setField("email", v)}    type="email" placeholder="you@company.com" required />
                        </FieldRow>
                        <FieldRow>
                          <Field label="Phone *"     value={form.phone}    onChange={v => setField("phone", v)}    type="tel" placeholder="+91 98 xxxx xxxx" required />
                          <Field label="Location"    value={form.location} onChange={v => setField("location", v)} placeholder="Mumbai, India" />
                        </FieldRow>
                        <Field label="LinkedIn profile" value={form.linkedin} onChange={v => setField("linkedin", v)} placeholder="https://linkedin.com/in/…" />
                        <Select label="Employment interest" value={form.availableForWork} onChange={v => setField("availableForWork", v)}
                          options={["Full-time","Internship","Contract","Consulting"]} />
                      </>
                    )}

                    {step === 2 && (
                      <>
                        <FieldRow>
                          <Field label="Current role *"   value={form.currentRole}    onChange={v => setField("currentRole", v)}    placeholder="HR Business Partner" required />
                          <Field label="Current company"  value={form.currentCompany} onChange={v => setField("currentCompany", v)} placeholder="Acme Corp" />
                        </FieldRow>
                        <FieldRow>
                          <Field label="Years of experience *" value={form.yearsExp} onChange={v => setField("yearsExp", v)} placeholder="5" type="number" required />
                          <Field label="Notice period"         value={form.noticePeriod} onChange={v => setField("noticePeriod", v)} placeholder="30 / 60 / 90 days" />
                        </FieldRow>
                        <FieldRow>
                          <Field label="Current CTC (LPA)"  value={form.currentCtc}  onChange={v => setField("currentCtc", v)}  placeholder="e.g. 18" />
                          <Field label="Expected CTC (LPA)" value={form.expectedCtc} onChange={v => setField("expectedCtc", v)} placeholder="e.g. 25" />
                        </FieldRow>
                        <div>
                          <label className="apply-label">Core skills <span style={{ color: "var(--fg-3)", fontWeight: 400 }}>(pick all that apply)</span></label>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.5rem" }}>
                            {allSkills.map(s => {
                              const on = form.skills.includes(s);
                              return (
                                <button type="button" key={s} onClick={() => toggleSkill(s)}
                                  className="skill-pill" data-on={on}>
                                  {on && <span style={{ fontSize: "0.7rem" }}>✓</span>} {s}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </>
                    )}

                    {step === 3 && (
                      <>
                        <TextArea label="Why HRpreneurs? *"
                          value={form.whyHRpreneurs} onChange={v => setField("whyHRpreneurs", v)}
                          placeholder="What excites you about this role and about HRpreneurs specifically?"
                          rows={5} required />
                        <TextArea label="What will you bring to the team?"
                          value={form.coverLetter} onChange={v => setField("coverLetter", v)}
                          placeholder="A couple of achievements or projects you're proud of."
                          rows={5} />
                        <FieldRow>
                          <Field label="Earliest start date" value={form.startDate} onChange={v => setField("startDate", v)} placeholder="YYYY-MM-DD" type="date" />
                          <Select label="How did you hear about us?" value={form.source} onChange={v => setField("source", v)}
                            options={["Select one","LinkedIn","Referral","Company website","Job board","Event / Conference","Other"]} />
                        </FieldRow>
                      </>
                    )}

                    {step === 4 && (
                      <>
                        <Field label="Resume URL (Drive / Dropbox / personal site)"
                          value={form.resumeLink} onChange={v => setField("resumeLink", v)}
                          placeholder="https://…" />
                        <Field label="Portfolio / work samples"
                          value={form.portfolioLink} onChange={v => setField("portfolioLink", v)}
                          placeholder="https://…" />

                        <div style={{ padding: "1.25rem", borderRadius: 14, background: "var(--bg-alt)", border: "1px solid var(--border)" }}>
                          <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-3)", marginBottom: "1rem" }}>Review summary</p>
                          <ReviewRow l="Role"     v={position.title} />
                          <ReviewRow l="Name"     v={form.fullName || "—"} />
                          <ReviewRow l="Contact"  v={[form.email, form.phone].filter(Boolean).join(" · ") || "—"} />
                          <ReviewRow l="Now"      v={[form.currentRole, form.currentCompany].filter(Boolean).join(" @ ") || "—"} />
                          <ReviewRow l="Skills"   v={form.skills.join(", ") || "—"} />
                          <ReviewRow l="Notice"   v={form.noticePeriod || "—"} />
                        </div>

                        <label style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.85rem", color: "var(--fg-2)", cursor: "pointer" }}>
                          <input type="checkbox" checked={form.consent} onChange={e => setField("consent", e.target.checked)} style={{ marginTop: 3, width: 18, height: 18, accentColor: "var(--accent)" }} />
                          <span>I confirm the information above is accurate and consent to HRpreneurs processing my data for the purpose of this application.</span>
                        </label>
                      </>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* ── footer / actions ── */}
            {!done && (
              <div style={{
                padding: "1rem clamp(1.5rem, 4vw, 3rem)",
                borderTop: "1px solid var(--border)",
                display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap",
                background: "var(--bg-alt)",
              }}>
                <button type="button" onClick={() => step === 1 ? onClose() : setStep(s => s - 1)}
                  className="btn btn-outline" style={{ padding: "0.75rem 1.25rem", fontSize: "0.85rem" }}>
                  {step === 1 ? "Cancel" : "← Back"}
                </button>
                {step < 4 ? (
                  <button type="button" onClick={() => canNext && setStep(s => s + 1)}
                    disabled={!canNext}
                    className="btn btn-primary"
                    style={{ padding: "0.75rem 0.75rem 0.75rem 1.5rem", fontSize: "0.85rem", opacity: canNext ? 1 : 0.5 }}>
                    Continue <span className="btn-icon"><ArrowRightIcon size={12}/></span>
                  </button>
                ) : (
                  <button type="submit" form="apply-form"
                    onClick={onSubmit}
                    disabled={!form.consent || submitting}
                    className="btn btn-accent"
                    style={{ padding: "0.75rem 0.75rem 0.75rem 1.5rem", fontSize: "0.85rem", opacity: (form.consent && !submitting) ? 1 : 0.5 }}>
                    {submitting ? "Sending…" : "Submit application"}
                    <span className="btn-icon"><ArrowUpRight size={12}/></span>
                  </button>
                )}
              </div>
            )}

            {done && (
              <div style={{ padding: "1rem clamp(1.5rem, 4vw, 3rem)", borderTop: "1px solid var(--border)", background: "var(--bg-alt)", display: "flex", justifyContent: "flex-end" }}>
                <button onClick={onClose} className="btn btn-primary" style={{ padding: "0.75rem 1.25rem", fontSize: "0.85rem" }}>
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}

      <style jsx global>{`
        .apply-close {
          width: 40px; height: 40px; border-radius: 50%;
          background: var(--bg-card); color: var(--fg);
          border: 1.5px solid var(--border);
          display: inline-flex; align-items: center; justify-content: center;
          transition: transform 0.2s, background 0.2s, color 0.2s, border-color 0.2s;
          flex-shrink: 0;
        }
        .apply-close:hover { background: var(--fg); color: var(--bg); border-color: var(--fg); transform: rotate(90deg); }

        .apply-label {
          display: block;
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--fg-2);
          margin-bottom: 0.4rem;
        }
        .apply-input, .apply-textarea, .apply-select {
          width: 100%;
          padding: 0.85rem 1rem;
          background: var(--bg-card);
          border: 1.5px solid var(--border);
          border-radius: 12px;
          font-size: 0.95rem;
          color: var(--fg);
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
          font-family: inherit;
        }
        .apply-input:focus, .apply-textarea:focus, .apply-select:focus {
          outline: none;
          border-color: var(--accent);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 20%, transparent);
        }
        .apply-textarea { resize: vertical; min-height: 96px; line-height: 1.55; }

        .skill-pill {
          padding: 0.5rem 0.95rem; border-radius: 9999px;
          border: 1.5px solid var(--border);
          font-size: 0.78rem; font-weight: 600;
          color: var(--fg-2); background: var(--bg-card);
          display: inline-flex; align-items: center; gap: 0.4rem;
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .skill-pill:hover     { border-color: var(--fg); color: var(--fg); }
        .skill-pill[data-on="true"] {
          background: var(--accent); color: var(--on-accent);
          border-color: var(--fg);
        }

        @media (max-width: 720px) {
          .apply-modal { inset: 0 !important; height: 100vh !important; border-radius: 0 !important; }
          .apply-steps { grid-template-columns: repeat(2, 1fr) !important; gap: 0.4rem !important; }
        }
      `}</style>
    </AnimatePresence>
  );
}

function Field({ label, value, onChange, placeholder, type = "text", required }:
  { label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string; required?: boolean }) {
  return (
    <div style={{ flex: 1 }}>
      <label className="apply-label">{label}</label>
      <input type={type} value={value} onChange={e => onChange(e.target.value)}
        placeholder={placeholder} required={required} className="apply-input" />
    </div>
  );
}

function TextArea({ label, value, onChange, placeholder, rows = 4, required }:
  { label: string; value: string; onChange: (v: string) => void; placeholder?: string; rows?: number; required?: boolean }) {
  return (
    <div>
      <label className="apply-label">{label}</label>
      <textarea value={value} onChange={e => onChange(e.target.value)}
        placeholder={placeholder} rows={rows} required={required} className="apply-textarea" />
    </div>
  );
}

function Select({ label, value, onChange, options }:
  { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <div style={{ flex: 1 }}>
      <label className="apply-label">{label}</label>
      <select value={value} onChange={e => onChange(e.target.value)} className="apply-select">
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

function FieldRow({ children }: { children: React.ReactNode }) {
  return <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="apply-fmrow">{children}</div>;
}

function ReviewRow({ l, v }: { l: string; v: string }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "0.75rem", padding: "0.35rem 0", fontSize: "0.85rem" }}>
      <span style={{ color: "var(--fg-3)", fontWeight: 600 }}>{l}</span>
      <span style={{ color: "var(--fg)" }}>{v}</span>
    </div>
  );
}
