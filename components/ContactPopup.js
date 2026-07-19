'use client'
import { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Input, Select, Option, Textarea, Button, Spinner } from "@material-tailwind/react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import axios from "axios";
import Swal from "sweetalert2";

export default function ContactPopup() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const[loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    program: "",
    qualification: "",
});
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
];
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

  useEffect(() => {

    
      const timer = setTimeout(() => {
        setOpen(true);
      }, 500);

      return () => clearTimeout(timer);
    
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-5">

      {/* Overlay */}
      <div
        onClick={handleClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* Popup */}
      <div className="relative w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-2xl animate-[popup_.35s_ease]">

        {/* Top Banner */}
        <div className="bg-gradient-to-r from-[#0f2740] to-[#164a09] p-8 text-white">

          <button
            onClick={handleClose}
            className="absolute right-5 top-5 rounded-full bg-white/20 p-2 hover:bg-white/30 transition"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>

          <span className="rounded-full bg-white/20 px-4 py-1 text-sm font-medium">
            Welcome 👋
          </span>

          <h2 className="mt-5 text-3xl font-bold">
            Begin Your Global Healthcare Career
          </h2>

          {/* <p className="mt-3 text-white/90 leading-7">
            Join thousands of healthcare professionals preparing for
            international licensing with expert guidance, exam coaching,
            documentation support, and career assistance.
          </p> */}

        </div>

        {/* Body */}
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
            <form onSubmit={handleSubmit} className="space-y-2 p-8">
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

      <style jsx>{`
        @keyframes popup {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(30px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>

    </div>
  );
}