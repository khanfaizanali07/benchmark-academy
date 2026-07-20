"use client";

import { useState } from "react";
import { Input, Select, Option, Textarea, Button, Spinner } from "@material-tailwind/react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import axios from "axios";
import Swal from "sweetalert2";

const PROGRAM_OPTIONS = [
  "DHA / HAAD / MOH (UAE)",
  "Prometric — Saudi / Qatar / Oman / Bahrain / Kuwait",
  "NCLEX-RN (USA & Canada)",
  "PLAB (UK)",
  "USMLE (USA)",
  "ADC (Australia)",
  "NPTE / PCE (Physiotherapy)",
  "DataFlow verification only",
  "Not sure yet",
  "Other"
];

export default function CTAContact() {
  const [submitted, setSubmitted] = useState(false);
  const[loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    program: "",
    qualification: "",
});
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post("/api/contact", form);
      setSubmitted(true);
      setForm({
        fullName: "",
        phone: "",
        email: "",
        program: "",
        qualification: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again later.",
      });
    }
    finally {
      setLoading(false);
    }
    
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
      <div className="grid gap-12 rounded-3xl border border-navy-100 bg-white p-8 shadow-card lg:grid-cols-2 lg:p-12">
        <div>
          <span className="eyebrow text-xs font-bold uppercase text-forest-600">
            Get Started
          </span>
          <h2 className="text-balance mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Talk to a mentor about your route abroad
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/65">
            Share a few details and our team will get back to you with the
            right exam track, timeline and next steps for your profile.
          </p>

          <div className="mt-10">
            <div className="flex items-start gap-3.5">
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">Call or WhatsApp</p>
                <p className="text-sm text-ink/65">+91 98XXX XXXXX</p>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">Email</p>
                <p className="text-sm text-ink/65">benchmarkglobal.academy@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">Office</p>
                <p className="text-sm text-ink/65">
                  office address here
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-forest-50 p-10 text-center">
              <CheckCircle2 className="h-10 w-10 text-forest-700" />
              <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                Thanks — we&apos;ve got your details
              </h3>
              <p className="mt-2 text-sm text-ink/65">
                A mentor from Benchmark Global will reach out shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-1">
                <Input variant="outlined" label="Full name" color="teal" required  containerProps={{className: ""}} value={form.fullName} onChange={(e) => setForm({...form, fullName: e.target.value})}/>
                <Input variant="outlined" label="Phone / WhatsApp" color="teal" required  containerProps={{className: ""}} value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})}/>
              </div>
              <Input variant="outlined" type="email" label="Email address" color="teal" required  containerProps={{className: ""}} value={form.email} onChange={(e) => setForm({...form, email: e.target.value})}/>
              <Select variant="outlined" label="Program you're interested in" color="teal"  containerProps={{className: ""}} required value={form.program} onChange={(value) => setForm({...form, program: value})}>
                {PROGRAM_OPTIONS.map((opt) => (
                  <Option key={opt} value={opt}>
                    {opt}
                  </Option>
                ))}
              </Select>
              <Textarea variant="outlined" label="Tell us about your qualification & experience" color="teal" containerProps={{className: ""}} value={form.qualification} onChange={(e) => setForm({...form, qualification: e.target.value})}/>

              <Button
                type="submit"
                // fullWidth
                className="flex items-center justify-center gap-2 bg-forest-800 shadow-none normal-case font-sans text-base font-semibold hover:bg-forest-700 hover:shadow-lg"
              >
                {loading ? (
                  <Spinner className="h-4 w-4" />
                ) : (
                  <>
                    Send enquiry
                    <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
              <p className="text-center text-xs text-ink/45">
                By submitting, you agree to be contacted by Benchmark Global
                Healthcare Academy regarding your enquiry.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
