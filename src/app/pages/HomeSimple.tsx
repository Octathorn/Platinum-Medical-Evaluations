import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'motion/react';
import { SITE_CONTACT } from '../content/siteContact';
import imgImage2 from '../../imports/Home/bf1db4bcf5e317c4e0d7f17be8a1acc8b2645c59.png';
import imgFrame1984078542 from '../../imports/Home/8318127962c13312e4d81df2fbe03351c4742920.png';
import imgImage3 from '../../imports/Home/a6871329f486a08ff42f724214ce189917f81dd8.png';

export default function Home() {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactFormError, setContactFormError] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.includes('#services')) {
      setTimeout(() => scrollToSection('services'), 100);
    } else if (hash.includes('#contact')) {
      setTimeout(() => scrollToSection('contact'), 100);
    }
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactFormError(null);
    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) {
      setContactSuccess(false);
      setContactFormError('Please enter your name, email, and message.');
      return;
    }
    setContactSuccess(false);
    setContactSubmitting(true);
    window.setTimeout(() => {
      setContactSubmitting(false);
      setContactSuccess(true);
      setContactName('');
      setContactEmail('');
      setContactSubject('');
      setContactMessage('');
    }, 900);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-white min-h-screen w-full"
    >
      {/* Navbar */}
      <div id="home" className="flex flex-col md:flex-row items-center justify-between mb-2 px-4 md:px-[50px] py-4 md:py-8 gap-4 md:gap-0">
        <img alt="Logo" className="h-[40.829px] w-[197px] object-cover" src={imgImage2} />
        <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-center w-full md:w-auto">
          <div className="flex flex-col md:flex-row gap-4 md:gap-16 text-base text-center">
            <button onClick={() => scrollToSection('home')} className="text-[#306abc] hover:opacity-80 transition-all cursor-pointer">Home</button>
            <button onClick={() => scrollToSection('services')} className="text-[#222] hover:text-[#306abc] transition-all cursor-pointer">Services</button>
            <a href="#/about" className="text-[#222] hover:text-[#306abc] transition-all">About</a>
            <a href="#/privacy-policy" className="text-[#222] hover:text-[#306abc] transition-all">Privacy Policy</a>
          </div>
          <button onClick={() => scrollToSection('contact')} className="bg-[#306abc] text-white px-5 py-2 rounded-full text-base hover:opacity-90 transition-all cursor-pointer w-full md:w-auto">
            Contact Us
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full mb-8 md:mb-16">
        <div className="relative h-[400px] md:h-[731px] overflow-hidden flex items-center justify-center px-4 md:px-16 py-12 md:py-24">
          {/* Background Image with Overlay */}
          <img
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover"
            src={imgFrame1984078542}
          />
          <div className="absolute inset-0 bg-[rgba(48,106,188,0.88)]" />

          {/* Hero Content */}
          <div className="relative z-10 text-center max-w-[924px] px-4">
            <h1 className="text-white text-[32px] md:text-[60px] font-bold uppercase mb-8 md:mb-16 leading-normal">
              Precision Care for Veterans
            </h1>
            <p className="text-white text-[18px] md:text-[32px] mb-8 md:mb-16 leading-normal">
              Board-certified physicians delivering reliable, in-person disability evaluations with speed, accuracy, and integrity.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-5 justify-center">
              <button
                onClick={() => scrollToSection('services')}
                className="border-2 border-white text-white text-lg md:text-2xl px-6 md:px-10 py-3 rounded-full min-w-[180px] md:min-w-[210px] hover:bg-white hover:text-[#306abc] transition-all cursor-pointer"
              >
                Our Services
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="border-2 border-white text-white text-lg md:text-2xl px-6 md:px-10 py-3 rounded-full min-w-[180px] md:min-w-[200px] hover:bg-white hover:text-[#306abc] transition-all cursor-pointer"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Statistics Card */}
        <div className="bg-[#fafbfc] rounded-3xl shadow-lg p-6 md:p-14 flex flex-col md:flex-row gap-6 md:gap-7 items-center justify-center mt-[-50px] md:mt-[-100px] relative z-20 mx-4 md:mx-auto max-w-[1200px]">
          {/* Stat 1 */}
          <div className="flex gap-6 md:gap-9 items-center">
            <div className="bg-[#306abc] rounded-full p-4 md:p-5 w-[60px] h-[60px] md:w-[82px] md:h-[82px] flex items-center justify-center">
              <Icon icon="si:shield-line" width="35" height="35" className="md:w-[45px] md:h-[45px]" style={{ color: 'white' }} />
            </div>
            <div>
              <p className="text-[32px] md:text-[48px] text-black font-normal">100%</p>
              <p className="text-base md:text-xl text-black">Our Doctors Certified</p>
            </div>
          </div>

          <div className="hidden md:block h-[105px] w-px bg-black opacity-10" />

          {/* Stat 2 */}
          <div className="flex gap-6 md:gap-9 items-center">
            <div className="bg-[#306abc] rounded-full p-4 md:p-5 w-[60px] h-[60px] md:w-[82px] md:h-[82px] flex items-center justify-center">
              <Icon icon="formkit:people" width="32" height="32" className="md:w-[42px] md:h-[42px]" style={{ color: 'white' }} />
            </div>
            <div>
              <p className="text-[32px] md:text-[48px] text-black font-normal">25M</p>
              <p className="text-base md:text-xl text-black">Happy Global Users</p>
            </div>
          </div>

          <div className="hidden md:block h-[105px] w-px bg-black opacity-10" />

          {/* Stat 3 */}
          <div className="flex gap-6 md:gap-9 items-center">
            <div className="bg-[#306abc] rounded-full p-4 md:p-5 w-[60px] h-[60px] md:w-[82px] md:h-[82px] flex items-center justify-center">
              <Icon icon="mdi:heart-pulse" width="35" height="35" className="md:w-[45px] md:h-[45px]" style={{ color: 'white' }} />
            </div>
            <div>
              <p className="text-[32px] md:text-[48px] text-black font-normal">99%</p>
              <p className="text-base md:text-xl text-black">Satisfying Treatment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="max-w-[1352px] mx-auto text-center mb-12 md:mb-24 mt-16 md:mt-32 px-4 md:px-[50px]">
        <p className="text-[#306abc] text-lg md:text-xl mb-6 md:mb-8">SERVICES</p>
        <h2 className="text-[#222] text-2xl md:text-4xl mb-6 md:mb-8">Excellence in Evaluations, Every Step of the Way</h2>
        <p className="text-[#222] text-base md:text-xl mb-8 md:mb-12 max-w-[666px] mx-auto px-4">
          Professional, in-person disability evaluations delivered with accuracy, experience, and integrity.
        </p>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center">
          {/* Service Card 1 */}
          <div className="bg-[#f5f7fb] border border-[#f0f0f0] rounded-2xl p-8 md:p-16 w-full md:w-[583px] max-w-[583px] hover:-translate-y-1 transition-transform flex flex-col items-center">
            <div className="bg-[rgba(39,99,192,0.2)] rounded-3xl w-[39px] h-[39px] flex items-center justify-center mb-8 md:mb-10">
              <Icon icon="qlementine-icons:certified-16" width="20" height="20" style={{ color: '#306ABC' }} />
            </div>
            <h3 className="text-[#222] text-[24px] md:text-[32px] mb-8 md:mb-10 leading-normal text-center">In-Person Evaluations</h3>
            <p className="text-[rgba(34,34,34,0.65)] text-base md:text-xl leading-[30px] md:leading-[35px] text-center line-clamp-2">
              Face-to-face disability evaluations conducted by board-certified physicians in a professional setting.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-[#f5f7fb] border border-[#f0f0f0] rounded-2xl p-8 md:p-16 w-full md:w-[583px] max-w-[583px] hover:-translate-y-1 transition-transform flex flex-col items-center">
            <div className="bg-[rgba(39,99,192,0.2)] rounded-3xl w-[39px] h-[39px] flex items-center justify-center mb-8 md:mb-10">
              <Icon icon="qlementine-icons:certified-16" width="20" height="20" style={{ color: '#306ABC' }} />
            </div>
            <h3 className="text-[#222] text-[24px] md:text-[32px] mb-8 md:mb-10 text-center leading-normal">Accurate Assessments</h3>
            <p className="text-[rgba(34,34,34,0.65)] text-base md:text-xl leading-[30px] md:leading-[35px] text-center line-clamp-2">
              Reliable and precise medical evaluations ensuring compliant disability benefit documentation.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-gradient-to-b from-[#f1f5fc] to-[#fefefe] rounded-[24px] md:rounded-[48px] p-8 md:p-24 mx-4 md:mx-[50px] mb-8 md:mb-16">
        <div className="max-w-[1614px] mx-auto">
          <div className="flex flex-col md:flex-row gap-12 md:gap-32 mb-12 md:mb-24">
            {/* Left Column */}
            <div className="w-full md:w-[466px]">
              <p className="text-[#306abc] text-lg md:text-xl mb-4 md:mb-5">CONTACT US</p>
              <h2 className="text-[#222] text-3xl md:text-5xl mb-4 md:mb-5 leading-normal">We are glad to hear from you!</h2>
              <div className="bg-[#306abc] h-[7px] w-[111px] mb-6 md:mb-9" />
              <p className="text-[rgba(34,34,34,0.65)] text-base md:text-xl leading-[30px] md:leading-[35px] mb-6 md:mb-9">
                We are glad to hear from you. Tell us what you need, and we'll help you with quick, clear guidance on anything.
              </p>

              <div className="space-y-4 md:space-y-5 mb-6 md:mb-9 text-[#222] text-base md:text-lg leading-[28px] md:leading-[32px]">
                <div className="flex gap-4 md:gap-5 items-start">
                  <Icon
                    icon="tdesign:location-filled"
                    width="20"
                    height="20"
                    className="md:w-[24px] md:h-[24px] shrink-0 mt-0.5"
                    style={{ color: '#306ABC' }}
                  />
                  <p>{SITE_CONTACT.address}</p>
                </div>
                <div className="flex gap-4 md:gap-5 items-center">
                  <Icon icon="ic:baseline-email" width="20" height="20" className="md:w-[24px] md:h-[24px] shrink-0" style={{ color: '#306ABC' }} />
                  <a href={`mailto:${SITE_CONTACT.email}`} className="text-[#306abc] hover:underline break-all">
                    {SITE_CONTACT.email}
                  </a>
                </div>
                <div className="flex gap-4 md:gap-5 items-center">
                  <Icon icon="ic:round-phone" width="20" height="20" className="md:w-[24px] md:h-[24px] shrink-0" style={{ color: '#306ABC' }} />
                  <a href={`tel:${SITE_CONTACT.phoneTel}`} className="text-[#306abc] hover:underline">
                    {SITE_CONTACT.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="bg-[#e9effb] rounded-2xl p-6 md:p-8">
                <div className="flex gap-4 md:gap-5 items-center mb-4 md:mb-5">
                  <Icon icon="lucide:shield" width="36" height="36" className="md:w-[44px] md:h-[44px]" style={{ color: '#306ABC' }} />
                  <p className="text-lg md:text-2xl text-black leading-[30px] md:leading-[35px]">Your information is safe with us.</p>
                </div>
                <p className="text-[#828282] text-base md:text-lg leading-[28px] md:leading-[35px]">We respect your privacy and will never share your detail.</p>
              </div>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleContactSubmit}
              className="w-full md:w-[803px] flex flex-col gap-3 md:gap-4"
              noValidate
            >
              {contactSuccess ? (
                <div
                  role="status"
                  className="rounded-2xl border border-[#b8d4a8] bg-[#f0f9ec] px-4 md:px-6 py-4 flex gap-3 items-start"
                >
                  <Icon icon="mdi:check-circle" width={28} height={28} className="shrink-0 text-[#2d7a32] mt-0.5" />
                  <div>
                    <p className="text-[#1a4d1f] font-semibold text-base md:text-lg mb-1">Thank you — message received</p>
                    <p className="text-[#2d5f33] text-sm md:text-base leading-relaxed">
                      This is a demo: your message was not sent to a server yet. In production, we will route this to our team and reply soon.
                    </p>
                  </div>
                </div>
              ) : null}

              {contactFormError ? (
                <p className="text-red-600 text-sm md:text-base px-1">{contactFormError}</p>
              ) : null}

              <input
                type="text"
                name="name"
                autoComplete="name"
                value={contactName}
                onChange={(ev) => {
                  setContactFormError(null);
                  setContactSuccess(false);
                  setContactName(ev.target.value);
                }}
                placeholder="Your Name"
                className="h-[60px] md:h-[70px] bg-white border border-[#eee] rounded-2xl px-4 md:px-6 text-sm md:text-base placeholder:text-[#cbcbcb]"
              />
              <input
                type="email"
                name="email"
                autoComplete="email"
                value={contactEmail}
                onChange={(ev) => {
                  setContactFormError(null);
                  setContactSuccess(false);
                  setContactEmail(ev.target.value);
                }}
                placeholder="Your Email"
                className="h-[60px] md:h-[70px] bg-white border border-[#eee] rounded-2xl px-4 md:px-6 text-sm md:text-base placeholder:text-[#cbcbcb]"
              />
              <input
                type="text"
                name="subject"
                value={contactSubject}
                onChange={(ev) => {
                  setContactFormError(null);
                  setContactSuccess(false);
                  setContactSubject(ev.target.value);
                }}
                placeholder="Subject"
                className="h-[60px] md:h-[70px] bg-white border border-[#eee] rounded-2xl px-4 md:px-6 text-sm md:text-base placeholder:text-[#cbcbcb]"
              />
              <textarea
                name="message"
                value={contactMessage}
                onChange={(ev) => {
                  setContactFormError(null);
                  setContactSuccess(false);
                  setContactMessage(ev.target.value);
                }}
                placeholder="Your message here..."
                className="h-[200px] md:h-[329px] bg-white border border-[#eee] rounded-2xl px-4 md:px-6 py-4 md:py-6 text-sm md:text-base resize-none placeholder:text-[#cbcbcb]"
              />
              <button
                type="submit"
                disabled={contactSubmitting}
                className="h-[60px] md:h-[76px] bg-[#306abc] text-white text-lg md:text-xl font-semibold rounded-2xl hover:opacity-90 transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {contactSubmitting ? 'Sending…' : 'Submit'}
              </button>
            </form>
          </div>

          {/* Footer */}
          <div className="bg-[#306abc] rounded-2xl p-8 md:p-16">
            <div className="flex flex-col md:flex-row justify-between items-start text-white mb-12 md:mb-20 max-w-[1472px] mx-auto gap-8 md:gap-0">
              <div className="w-full md:w-[466px]">
                <img alt="Logo" className="h-[40.829px] w-[197px] object-cover mb-8 md:mb-14" src={imgImage3} />
                <p className="text-base md:text-xl leading-[30px] md:leading-[35px]">
                  Professional, in person disability evaluations delivered with accuracy, experience, and integrity.
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-8 md:gap-24 w-full md:w-auto">
                <div>
                  <p className="text-lg md:text-xl mb-4 md:mb-5">Quick Links</p>
                  <div className="text-sm md:text-base space-y-2">
                    <button onClick={() => scrollToSection('home')} className="block cursor-pointer hover:opacity-80 transition-all text-left">Home</button>
                    <button onClick={() => scrollToSection('services')} className="block cursor-pointer hover:opacity-80 transition-all text-left">Services</button>
                    <a href="#/about" className="block cursor-pointer hover:opacity-80 transition-all">About</a>
                    <a href="#/privacy-policy" className="block cursor-pointer hover:opacity-80 transition-all">Privacy Policy</a>
                    <button onClick={() => scrollToSection('contact')} className="block cursor-pointer hover:opacity-80 transition-all text-left">Contact Us</button>
                  </div>
                </div>

                <div>
                  <p className="text-lg md:text-2xl mb-5 md:mb-7">Contact info</p>
                  <div className="space-y-4 md:space-y-5">
                    <div className="flex gap-4 md:gap-5 items-start">
                      <Icon icon="tdesign:location-filled" width="20" height="20" className="md:w-[24px] md:h-[24px] shrink-0 mt-0.5" />
                      <p className="text-base md:text-lg leading-[28px] md:leading-[32px]">{SITE_CONTACT.address}</p>
                    </div>
                    <div className="flex gap-4 md:gap-5 items-center">
                      <Icon icon="ic:baseline-email" width="20" height="20" className="md:w-[24px] md:h-[24px] shrink-0" />
                      <a href={`mailto:${SITE_CONTACT.email}`} className="text-base md:text-lg leading-[28px] md:leading-[32px] hover:underline break-all">
                        {SITE_CONTACT.email}
                      </a>
                    </div>
                    <div className="flex gap-4 md:gap-5 items-center">
                      <Icon icon="ic:round-phone" width="20" height="20" className="md:w-[24px] md:h-[24px] shrink-0" />
                      <a href={`tel:${SITE_CONTACT.phoneTel}`} className="text-base md:text-lg leading-[28px] md:leading-[32px] hover:underline">
                        {SITE_CONTACT.phoneDisplay}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-sm md:text-lg text-white max-w-[1472px] mx-auto">2026 Platinum Medical Evaluations. All rights reserved</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
