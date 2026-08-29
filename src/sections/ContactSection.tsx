import React, { useState } from 'react';
import { Copy, Check, FileText, Download, Send, MessageSquare, Linkedin, Github, Phone, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    setFormStatus('sending');

    emailjs.send(
      'service_97p1urp', 
      'template_4b0uy2a', 
      {
        name: formState.name,
        email: formState.email,
        subject: formState.subject,
        message: formState.message
      }, 
      'Ax-LJlB6PUfFjHKe7'
    )
    .then((result) => {
        setFormStatus('success');
        setFormState({ name: '', email: '', subject: '', message: '' }); // Clear form
        setTimeout(() => setFormStatus('idle'), 5000);
    }, (error) => {
        console.error('EmailJS Error:', error);
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 4000);
        // Fallback to mailto if API fails
        const mailtoSubject = encodeURIComponent(formState.subject || `Inquiry from ${formState.name}`);
        const mailtoBody = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
        window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    });
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 sm:px-10 lg:px-14 border-b border-[#E2DDD2] dark:border-[#27272A]"
    >
      {/* Section Header (Matching Image 9) */}
      <div className="flex flex-wrap items-baseline justify-between gap-4 pb-8 border-b border-[#E2DDD2] dark:border-[#27272A]">
        <div className="flex items-baseline gap-3">
          <span className="text-sm font-mono text-[#D94E28] dark:text-[#FF5A2A] font-bold">§06</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#141413] dark:text-[#FAFAFA] font-display">
            Contact & Connect
          </h2>
        </div>
        <span className="text-xs font-mono uppercase tracking-widest text-[#6E6A61] dark:text-[#A1A1AA] flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-[#D94E28] dark:text-[#FF5A2A]" />
          <span>CURRENTLY IN DONDAICHA, IN</span>
        </span>
      </div>

      {/* Main High-Impact Lead (Matching Image 9) */}
      <div className="py-8 max-w-3xl space-y-4">
        <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-[#141413] dark:text-[#FAFAFA] leading-tight">
          Building something impactful, or need a full-stack engineer who understands the complete stack?
        </h3>
        <p className="text-sm sm:text-base text-[#5E5B54] dark:text-[#A1A1AA] leading-relaxed">
          Have an open software engineering role, startup project, or opportunity? I'm actively open for Full-Stack, MERN Stack, and Software Engineering positions.
        </p>
      </div>

      {/* Interactive Email Bar with COPY button (Matching Image 9) */}
      <div className="pt-2 pb-8">
        <div className="flex flex-col sm:flex-row sm:inline-flex items-center w-full sm:w-auto gap-2 sm:gap-0 rounded-xl bg-[#141413] dark:bg-[#FAFAFA] text-[#FAF7F2] dark:text-[#121212] p-1.5 border border-[#2C2B29] dark:border-[#D4D4D8] shadow-sm">
          <div className="w-full sm:w-auto px-4 py-2 font-mono text-xs sm:text-sm text-[#DCD6C8] dark:text-[#333333] break-all text-center">
            {PERSONAL_INFO.email}
          </div>
          <button
            id="copy-email-btn"
            onClick={handleCopyEmail}
            className="w-full sm:w-auto justify-center flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#2C2B29] dark:bg-[#D4D4D8] hover:bg-[#D94E28] dark:hover:bg-[#FF5A2A] text-white dark:text-black text-xs font-mono font-semibold transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#98C379] dark:text-[#4ADE80]" />
                <span>COPIED</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>COPY</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Résumé Download Cards (Matching Image 9) */}
      <div className="space-y-3 pt-4 pb-10 border-b border-[#E2DDD2] dark:border-[#27272A]">
        <span className="text-xs font-mono font-bold tracking-widest text-[#6E6A61] dark:text-[#A1A1AA] uppercase">
          RÉSUMÉ
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            id="download-resume-mern"
            href={PERSONAL_INFO.resumeUrl}
            download="Kasim_Shah_MERN_Resume.pdf"
            className="p-3 sm:p-4 rounded-xl border border-[#DCD6C8] dark:border-[#333333] hover:bg-[#EFEBE1] dark:hover:bg-[#1A1A1A] flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#EAE5DA] dark:bg-[#1E1E1E] border border-[#D6CEBF] dark:border-[#3F3F46] text-[#141413] dark:text-[#FAFAFA]">
                <FileText className="w-5 h-5 text-[#D94E28] dark:text-[#FF5A2A]" />
              </div>
              <div>
                <div className="text-sm font-bold font-display text-[#141413] dark:text-[#FAFAFA] group-hover:text-[#D94E28] dark:group-hover:text-[#FF5A2A] transition-colors">
                  MERN Stack Developer résumé
                </div>
                <div className="text-[11px] font-mono text-[#6E6A61] dark:text-[#A1A1AA]">
                  PDF • DOWNLOAD
                </div>
              </div>
            </div>
            <Download className="w-4 h-4 text-[#6E6A61] dark:text-[#A1A1AA] group-hover:text-[#141413] dark:group-hover:text-[#FAFAFA] transition-colors" />
          </a>

          <a
            id="download-resume-se"
            href={PERSONAL_INFO.resumeUrl}
            download="Kasim_Shah_Software_Engineer_Resume.pdf"
            className="p-3 sm:p-4 rounded-xl border border-[#DCD6C8] dark:border-[#333333] hover:bg-[#EFEBE1] dark:hover:bg-[#1A1A1A] flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#EAE5DA] dark:bg-[#1E1E1E] border border-[#D6CEBF] dark:border-[#3F3F46] text-[#141413] dark:text-[#FAFAFA]">
                <FileText className="w-5 h-5 text-[#D94E28] dark:text-[#FF5A2A]" />
              </div>
              <div>
                <div className="text-sm font-bold font-display text-[#141413] dark:text-[#FAFAFA] group-hover:text-[#D94E28] dark:group-hover:text-[#FF5A2A] transition-colors">
                  Software Engineer résumé
                </div>
                <div className="text-[11px] font-mono text-[#6E6A61] dark:text-[#A1A1AA]">
                  PDF • DOWNLOAD
                </div>
              </div>
            </div>
            <Download className="w-4 h-4 text-[#6E6A61] dark:text-[#A1A1AA] group-hover:text-[#141413] dark:group-hover:text-[#FAFAFA] transition-colors" />
          </a>
        </div>
      </div>

      {/* Interactive Communication Channels & Direct Message Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-10">
        {/* Left: Quick Connect Links */}
        <div className="lg:col-span-5 space-y-4">
          <h4 className="text-base font-bold font-display text-[#141413] dark:text-[#FAFAFA]">
            Direct Channels
          </h4>

          <div className="space-y-3">
            <a
              id="contact-whatsapp"
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 sm:p-4 rounded-xl border border-[#DCD6C8] dark:border-[#333333] hover:bg-[#EFEBE1] dark:hover:bg-[#1A1A1A] transition-all text-xs font-mono text-[#141413] dark:text-[#FAFAFA] group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#25D366]/10 dark:bg-[#4ADE80]/10 border border-[#25D366]/20 dark:border-[#4ADE80]/20 text-[#25D366] dark:text-[#4ADE80] group-hover:bg-[#25D366]/20 dark:group-hover:bg-[#4ADE80]/20 transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold font-display group-hover:text-[#25D366] dark:group-hover:text-[#4ADE80] transition-colors">WhatsApp Chat</div>
                  <div className="text-[11px] font-mono text-[#6E6A61] dark:text-[#A1A1AA]">{PERSONAL_INFO.phone}</div>
                </div>
              </div>
            </a>

            <a
              id="contact-linkedin"
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 sm:p-4 rounded-xl border border-[#DCD6C8] dark:border-[#333333] hover:bg-[#EFEBE1] dark:hover:bg-[#1A1A1A] transition-all text-xs font-mono text-[#141413] dark:text-[#FAFAFA] group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#0077B5]/10 dark:bg-[#38BDF8]/10 border border-[#0077B5]/20 dark:border-[#38BDF8]/20 text-[#0077B5] dark:text-[#38BDF8] group-hover:bg-[#0077B5]/20 dark:group-hover:bg-[#38BDF8]/20 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold font-display group-hover:text-[#0077B5] dark:group-hover:text-[#38BDF8] transition-colors">LinkedIn Profile</div>
                  <div className="text-[11px] font-mono text-[#6E6A61] dark:text-[#A1A1AA]">kasim-shah-176175340</div>
                </div>
              </div>
            </a>

            <a
              id="contact-github"
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 sm:p-4 rounded-xl border border-[#DCD6C8] dark:border-[#333333] hover:bg-[#EFEBE1] dark:hover:bg-[#1A1A1A] transition-all text-xs font-mono text-[#141413] dark:text-[#FAFAFA] group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#141413]/10 dark:bg-[#FAFAFA]/10 border border-[#141413]/20 dark:border-[#FAFAFA]/20 text-[#141413] dark:text-[#FAFAFA] group-hover:bg-[#141413]/20 dark:group-hover:bg-[#FAFAFA]/20 transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold font-display group-hover:text-[#D94E28] dark:group-hover:text-[#FF5A2A] transition-colors">GitHub Repositories</div>
                  <div className="text-[11px] font-mono text-[#6E6A61] dark:text-[#A1A1AA]">github.com/kasimshah19</div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Right: Message Form */}
        <div className="lg:col-span-7">
          <h4 className="text-base font-bold font-display text-[#141413] dark:text-[#FAFAFA] mb-4">
            Send a Direct Message
          </h4>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-mono text-[#6E6A61] dark:text-[#A1A1AA]">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#EFEBE1] dark:bg-[#1A1A1A] border border-[#DCD6C8] dark:border-[#333333] text-xs font-mono text-[#141413] dark:text-[#FAFAFA] focus:outline-hidden focus:border-[#D94E28] dark:focus:border-[#FF5A2A]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-[#6E6A61] dark:text-[#A1A1AA]">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. recruiter@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#EFEBE1] dark:bg-[#1A1A1A] border border-[#DCD6C8] dark:border-[#333333] text-xs font-mono text-[#141413] dark:text-[#FAFAFA] focus:outline-hidden focus:border-[#D94E28] dark:focus:border-[#FF5A2A]"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-[#6E6A61] dark:text-[#A1A1AA]">Subject / Role Opportunity</label>
              <input
                type="text"
                placeholder="e.g. Software Engineer Role / Freelance Inquiry"
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#EFEBE1] dark:bg-[#1A1A1A] border border-[#DCD6C8] dark:border-[#333333] text-xs font-mono text-[#141413] dark:text-[#FAFAFA] focus:outline-hidden focus:border-[#D94E28] dark:focus:border-[#FF5A2A]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-[#6E6A61] dark:text-[#A1A1AA]">Message</label>
              <textarea
                rows={4}
                required
                placeholder="Write your note or project description..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#EFEBE1] dark:bg-[#1A1A1A] border border-[#DCD6C8] dark:border-[#333333] text-xs font-mono text-[#141413] dark:text-[#FAFAFA] focus:outline-hidden focus:border-[#D94E28] dark:focus:border-[#FF5A2A]"
              />
            </div>

            <button
              id="send-message-submit-btn"
              type="submit"
              disabled={formStatus === 'sending' || formStatus === 'success'}
              className="w-full py-3 rounded-lg bg-[#141413] dark:bg-[#FAFAFA] text-[#FAF7F2] dark:text-[#121212] hover:bg-[#2C2B29] dark:hover:bg-[#D4D4D8] disabled:opacity-70 text-xs font-mono font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-all"
            >
              <Send className="w-3.5 h-3.5 text-[#D94E28] dark:text-[#FF5A2A]" />
              <span>
                {formStatus === 'sending' && 'Sending Message...'}
                {formStatus === 'success' && 'Message Sent Successfully!'}
                {formStatus === 'error' && 'Failed. Opening Mail Client...'}
                {formStatus === 'idle' && 'Send Message'}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
