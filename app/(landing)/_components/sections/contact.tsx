"use client";

import { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import type { ReactElement } from "react";
import emailjs from "@emailjs/browser";
import TitleHeader from "../secondary/title-header";
import Spline from "@splinetool/react-spline";

// Components
// const TitleHeader = dynamic(() => import("../components/TitleHeader"), {
//   ssr: true,
// });
// const ContactExperience = dynamic(
//   () => import("../components/models/contact/ContactExperience"),
//   { ssr: false },
// );

// Type definitions
interface FormState {
  name: string;
  email: string;
  message: string;
}

type FormField = keyof FormState;

const Contact = (): ReactElement => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name as FormField]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    if (!mounted || !formRef.current) return;

    setLoading(true);

    try {
      const serviceId = process.env.NEXT_PUBLIC_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_APP_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS environment variables not configured");
      }

      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) return <div />;

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch | Let's Connect"
          sub="💬 Have questions or ideas? Let's talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    className="bg-zinc-900"
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    className="bg-zinc-900"
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    className="bg-zinc-900"
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows={5}
                    required
                  />
                </div>

                <button type="submit" disabled={loading}>
                  <div className="cta-button group bg-zinc-600">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className=" w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              {/* <ContactExperience /> */}
              <Spline scene="https://prod.spline.design/Ff-NOhTt9cMG3I-g/scene.splinecode" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
