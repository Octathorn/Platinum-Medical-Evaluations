import { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'motion/react';
import { SITE_CONTACT } from '../content/siteContact';
import imgImage2 from '../../imports/Home/bf1db4bcf5e317c4e0d7f17be8a1acc8b2645c59.png';
import imgFrame1984078542 from '../../imports/Home/8318127962c13312e4d81df2fbe03351c4742920.png';
import imgImage3 from '../../imports/Home/a6871329f486a08ff42f724214ce189917f81dd8.png';

function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="h-[40.829px] relative shrink-0 w-[197px]">
        <img alt="Logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <div className="content-stretch flex gap-[72px] items-center relative shrink-0">
        <div className="content-stretch flex font-['Helvetica:Regular',sans-serif] gap-[72px] items-center leading-[normal] not-italic relative shrink-0 text-[16px] whitespace-nowrap">
          <button onClick={() => scrollToSection('home')} className="relative shrink-0 text-[#306abc] cursor-pointer transition-all hover:brightness-110">Home</button>
          <button onClick={() => scrollToSection('services')} className="relative shrink-0 text-[#222] cursor-pointer transition-all hover:text-[#306abc]">Services</button>
          <a href="#/privacy-policy" className="relative shrink-0 text-[#222] cursor-pointer transition-all hover:text-[#306abc]">Privacy Policy</a>
        </div>
        <button onClick={() => scrollToSection('contact')} className="bg-[#306abc] content-stretch flex h-[41px] items-center justify-center p-[10px] relative rounded-[9876543px] shrink-0 w-[130px] cursor-pointer transition-all hover:brightness-110">
          <p className="font-['Helvetica:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Contact Us</p>
        </button>
      </div>
    </div>
  );
}

function Counter({ end, suffix = '', label, number }: { end: number; suffix?: string; label: string; number: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const duration = 1500;
            const steps = 60;
            const increment = end / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(Math.floor(current));
              }
            }, duration / steps);

            return () => clearInterval(timer);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [end, hasAnimated]);

  const displayValue = end === 100 ? `${count}%` : end === 99 ? `${count}%` : end === 25 ? `${count}M` : `${count}${suffix}`;

  return (
    <div ref={counterRef} className="content-stretch flex flex-col font-['Helvetica:Regular',sans-serif] gap-[19px] items-start leading-[normal] not-italic relative shrink-0 w-[258px]">
      <p className="relative shrink-0 text-[48px] text-black w-full">{displayValue}</p>
      <div className="content-stretch flex gap-[36px] items-center relative shrink-0 text-[20px] w-full whitespace-nowrap">
        <p className="relative shrink-0 text-black">{label}</p>
        <p className="relative shrink-0 text-[rgba(0,0,0,0.38)]">{number}</p>
      </div>
    </div>
  );
}

function HeroSection() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 content-stretch flex flex-col h-[731px] items-start ml-0 mt-0 px-[367px] py-[150px] relative rounded-[18px] row-1 w-[1658px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[18px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[18px] size-full" src={imgFrame1984078542} />
          <div className="absolute bg-[rgba(48,106,188,0.88)] inset-0 rounded-[18px]" />
        </div>
        <div className="content-stretch flex flex-col gap-[72px] items-center relative shrink-0 w-[924px]">
          <p className="font-['Helvetica:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[60px] text-center text-white uppercase w-[675px]">Precision Care for Veterans</p>
          <p className="font-['Helvetica:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[32px] text-center text-white w-[min-content]">Board-certified physicians delivering reliable, in-person disability evaluations with speed, accuracy, and integrity.</p>
          <div className="content-stretch flex gap-[21px] items-center relative shrink-0">
            <button onClick={scrollToServices} className="content-stretch flex h-[57px] items-center justify-center p-[10px] relative rounded-[9876543px] shrink-0 w-[188px] cursor-pointer transition-all hover:brightness-110">
              <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[9876543px]" />
              <p className="font-['Helvetica:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">Our Services</p>
            </button>
            <button onClick={scrollToServices} className="content-stretch flex h-[57px] items-center justify-center p-[10px] relative rounded-[9876543px] shrink-0 w-[171px] cursor-pointer transition-all hover:brightness-110">
              <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[9876543px]" />
              <p className="font-['Helvetica:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">Get Started</p>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#fafbfc] col-1 content-stretch drop-shadow-[0px_4px_10px_rgba(0,0,0,0.18)] flex flex-col h-[215px] items-start ml-[155px] mt-[624px] pl-[63px] pr-[62px] py-[55px] relative rounded-[24px] row-1 w-[1248px]">
        <div className="content-stretch flex gap-[28px] items-start relative shrink-0">
          <div className="content-stretch flex gap-[18px] items-center relative shrink-0">
            <div className="content-stretch flex gap-[37px] items-center relative shrink-0">
              <div className="bg-[#306abc] content-stretch flex items-start pb-[18px] pl-[19px] pr-[18px] pt-[19px] relative rounded-[41px] shrink-0 size-[82px]">
                <Icon icon="si:shield-line" width="45" height="45" style={{ color: 'white', strokeWidth: '2.8125' }} />
              </div>
              <Counter end={100} label="Our Doctors Certified" number="001" />
            </div>
            <div className="h-[105px] relative shrink-0 w-0">
              <div className="absolute inset-[0_-0.4px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.8 105">
                  <path d="M0.4 0V105" stroke="black" strokeOpacity="0.08" strokeWidth="0.8" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[18px] items-center relative shrink-0">
            <div className="content-stretch flex gap-[37px] items-center relative shrink-0">
              <div className="bg-[#306abc] content-stretch flex items-start pb-[18px] pl-[19px] pr-[18px] pt-[19px] relative rounded-[41px] shrink-0 size-[82px]">
                <Icon icon="formkit:people" width="42.19" height="42.19" style={{ color: 'white' }} />
              </div>
              <Counter end={25} suffix="M" label="Happy Global Users" number="002" />
            </div>
            <div className="h-[105px] relative shrink-0 w-0">
              <div className="absolute inset-[0_-0.4px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.8 105">
                  <path d="M0.4 0V105" stroke="black" strokeOpacity="0.08" strokeWidth="0.8" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0">
            <div className="content-stretch flex gap-[37px] items-center relative shrink-0">
              <div className="bg-[#306abc] content-stretch flex items-center justify-center relative rounded-[41px] shrink-0 size-[82px]">
                <Icon icon="mdi:heart-pulse" width="45" height="45" style={{ color: 'white' }} />
              </div>
              <Counter end={99} label="Satisfying Treatment" number="003" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServicesSection() {
  return (
    <div id="services" className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-[1352px]">
      <div className="content-stretch flex flex-col font-['Helvetica:Regular',sans-serif] gap-[32px] items-center leading-[normal] not-italic relative shrink-0 text-center w-[788px]">
        <p className="relative shrink-0 text-[#306abc] text-[20px] whitespace-nowrap">SERVICES</p>
        <p className="min-w-full relative shrink-0 text-[#222] text-[36px] w-[min-content]">Excellence in Evaluations, Every Step of the Way</p>
        <p className="relative shrink-0 text-[#222] text-[20px] w-[666px]">Professional, in-person disability evaluations delivered with accuracy, experience, and integrity.</p>
      </div>
      <div className="content-stretch flex gap-[28px] items-center relative shrink-0 w-[1198px]">
        <div className="bg-[#f5f7fb] content-stretch drop-shadow-[0px_4px_3.5px_rgba(0,0,0,0.2)] flex flex-col h-[387px] items-center justify-center p-[55px] relative rounded-[16px] shrink-0 w-[583px] transition-all hover:translate-y-[-4px] hover:drop-shadow-[0px_8px_6px_rgba(0,0,0,0.25)]">
          <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
          <div className="content-stretch flex flex-col gap-[36px] h-[260px] items-start relative shrink-0 w-[441px]">
            <div className="bg-[rgba(39,99,192,0.2)] content-stretch flex items-center justify-center p-[11px] relative rounded-[25px] shrink-0 size-[39px]">
              <Icon icon="qlementine-icons:certified-16" width="20" height="20" style={{ color: '#306ABC' }} />
            </div>
            <p className="font-['Helvetica:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#222] text-[32px] w-[min-content]">In-Person Evaluations</p>
            <p className="font-['Helvetica:Regular',sans-serif] leading-[35px] min-w-full not-italic relative shrink-0 text-[20px] text-[rgba(34,34,34,0.65)] w-[min-content]">Face-to-face disability evaluations conducted by board-certified physicians in a professional setting.</p>
          </div>
        </div>
        <div className="bg-[#f5f7fb] content-stretch drop-shadow-[0px_4px_3.5px_rgba(0,0,0,0.2)] flex flex-col h-[387px] items-center justify-center px-[41px] py-[66px] relative rounded-[16px] shrink-0 w-[583px] transition-all hover:translate-y-[-4px] hover:drop-shadow-[0px_8px_6px_rgba(0,0,0,0.25)]">
          <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
          <div className="content-stretch flex flex-col gap-[36px] h-[253px] items-start relative shrink-0 w-[441px]">
            <div className="bg-[rgba(39,99,192,0.2)] content-stretch flex items-center justify-center p-[11px] relative rounded-[25px] shrink-0 size-[39px]">
              <Icon icon="qlementine-icons:certified-16" width="20" height="20" style={{ color: '#306ABC' }} />
            </div>
            <p className="font-['Helvetica:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#222] text-[32px] text-center whitespace-nowrap">Accurate Assessments</p>
            <p className="font-['Helvetica:Regular',sans-serif] leading-[35px] not-italic relative shrink-0 text-[20px] text-[rgba(34,34,34,0.65)] w-[350px]">Reliable and precise medical evaluations ensuring compliant disability benefit documentation.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div id="contact" className="bg-gradient-to-b content-stretch flex flex-col from-[#f1f5fc] h-[1337px] items-center justify-center pb-[72px] pl-[52px] pr-[62px] pt-[130px] relative rounded-[48px] shrink-0 to-[#fefefe] w-[1728px]">
      <div className="content-stretch flex flex-col gap-[106px] items-center relative shrink-0 w-[1614px]">
        <div className="content-stretch flex gap-[127px] items-center relative shrink-0">
          <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-[466px]">
            <div className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-[325px]">
              <p className="font-['Helvetica:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#306abc] text-[20px] w-[min-content]">CONTACT US</p>
              <p className="font-['Helvetica:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#222] text-[48px] w-[min-content]">We are glad to hear from you!</p>
              <div className="bg-[#306abc] h-[7px] relative shrink-0 w-[111px]" />
            </div>
            <p className="font-['Helvetica:Regular',sans-serif] leading-[35px] min-w-full not-italic relative shrink-0 text-[20px] text-[rgba(34,34,34,0.65)] w-[min-content]">We are glad to hear from you .Tell us what you need , and we'll help you with quick, clear guidance on anything.</p>
            <div className="bg-[#e9effb] h-[194px] relative rounded-[18px] shrink-0 w-full">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center pl-[19px] pr-[18px] py-[31px] relative size-full">
                  <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-[401px]">
                    <div className="content-stretch flex gap-[18px] items-center relative shrink-0 w-full">
                      <Icon icon="lucide:shield" width="44" height="44" style={{ color: '#306ABC', strokeWidth: '5' }} />
                      <p className="font-['Helvetica:Regular',sans-serif] leading-[35px] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">Your information is safe with us.</p>
                    </div>
                    <p className="font-['Helvetica:Regular',sans-serif] leading-[35px] not-italic relative shrink-0 text-[#828282] text-[18px] w-[332px]">We respect your privacy and will never share your detail.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-[803px]">
            <div className="content-stretch flex gap-[10px] h-[70px] items-center px-[23px] py-[22px] relative rounded-[24px] shrink-0 w-[803px]">
              <div className="absolute bg-white border border-[#eee] border-solid h-[70px] left-0 rounded-[18px] top-0 w-[803px]" />
              <input type="text" placeholder="Your Name" className="font-['Public_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#cbcbcb] text-[16px] whitespace-nowrap bg-transparent border-none outline-none w-full" />
            </div>
            <div className="content-stretch flex gap-[10px] h-[70px] items-center px-[23px] py-[22px] relative rounded-[24px] shrink-0 w-[803px]">
              <div className="absolute bg-white border border-[#eee] border-solid h-[70px] left-0 rounded-[18px] top-0 w-[803px]" />
              <input type="email" placeholder="Your Email" className="font-['Public_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#cbcbcb] text-[16px] whitespace-nowrap bg-transparent border-none outline-none w-full" />
            </div>
            <div className="content-stretch flex gap-[10px] h-[70px] items-center px-[23px] py-[22px] relative rounded-[12px] shrink-0 w-[803px]">
              <div className="absolute bg-white border border-[#eee] border-solid h-[70px] left-0 rounded-[18px] top-0 w-[803px]" />
              <input type="text" placeholder="Subject" className="font-['Public_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#cbcbcb] text-[16px] whitespace-nowrap bg-transparent border-none outline-none w-full" />
            </div>
            <div className="content-stretch flex gap-[10px] h-[329px] items-start px-[23px] py-[22px] relative rounded-[24px] shrink-0 w-[803px]">
              <div className="absolute bg-white border border-[#eee] border-solid h-[329px] left-0 rounded-[18px] top-0 w-[803px]" />
              <textarea placeholder="Your message here..." className="font-['Public_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#cbcbcb] text-[16px] bg-transparent border-none outline-none w-full h-full resize-none" />
            </div>
            <button className="h-[76px] relative shrink-0 w-full transition-all hover:brightness-110">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[10px] items-center justify-center px-[23px] py-[22px] relative size-full">
                  <div className="absolute bg-[#306abc] h-[76px] left-0 rounded-[18px] top-0 w-[803px]" />
                  <p className="font-['Public_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[20px] text-white whitespace-nowrap">Submit</p>
                </div>
              </div>
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-[#306abc] h-[387px] relative rounded-[18px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[71px] py-[62px] relative size-full">
          <div className="content-stretch flex flex-col gap-[84px] h-[300px] items-center relative shrink-0 w-[1472px]">
            <div className="content-stretch flex gap-[611px] items-center justify-center relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[53px] items-start relative shrink-0 w-[466px]">
                <div className="h-[40.829px] relative shrink-0 w-[197px]">
                  <img alt="Logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
                </div>
                <p className="font-['Helvetica:Regular',sans-serif] leading-[35px] min-w-full not-italic relative shrink-0 text-[20px] text-white w-[min-content]">Professional , in person disability evaluations delivered with accuracy , experience , and integrity.</p>
              </div>
              <div className="content-stretch flex gap-[96px] items-center relative shrink-0 w-[337px]">
                <div className="content-stretch flex flex-col font-['Helvetica:Regular',sans-serif] gap-[18px] items-start not-italic relative shrink-0 text-white w-[113px]">
                  <p className="leading-[normal] min-w-full relative shrink-0 text-[20px] w-[min-content]">Quick Links</p>
                  <div className="leading-[0] relative shrink-0 text-[16px] whitespace-nowrap">
                    <button onClick={() => scrollToSection('home')} className="block leading-[32px] cursor-pointer hover:brightness-110 transition-all">Home</button>
                    <button onClick={() => scrollToSection('services')} className="block leading-[32px] cursor-pointer hover:brightness-110 transition-all">Services</button>
                    <a href="#/privacy-policy" className="block leading-[32px] cursor-pointer hover:brightness-110 transition-all">Privacy Policy</a>
                    <button onClick={() => scrollToSection('contact')} className="block leading-[32px] cursor-pointer hover:brightness-110 transition-all">Contact Us</button>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 min-w-0 max-w-[420px] flex-1">
                  <p className="font-['Helvetica:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-white w-full">Contact info</p>
                  <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[18px] items-start relative shrink-0 w-full">
                      <Icon icon="tdesign:location-filled" width="24" height="24" className="shrink-0 mt-0.5" style={{ color: 'white' }} />
                      <p className="font-['Helvetica:Regular',sans-serif] leading-[28px] not-italic relative text-[18px] text-white">{SITE_CONTACT.address}</p>
                    </div>
                    <div className="content-stretch flex gap-[18px] items-center relative shrink-0 w-full">
                      <Icon icon="ic:baseline-email" width="24" height="24" style={{ color: 'white' }} />
                      <a href={`mailto:${SITE_CONTACT.email}`} className="font-['Helvetica:Regular',sans-serif] leading-[32px] not-italic relative text-[18px] text-white underline break-all hover:opacity-90">
                        {SITE_CONTACT.email}
                      </a>
                    </div>
                    <div className="content-stretch flex gap-[18px] items-center relative shrink-0 w-full">
                      <Icon icon="ic:round-phone" width="24" height="24" style={{ color: 'white' }} />
                      <a href={`tel:${SITE_CONTACT.phoneTel}`} className="font-['Helvetica:Regular',sans-serif] leading-[32px] not-italic relative text-[18px] text-white underline hover:opacity-90">
                        {SITE_CONTACT.phoneDisplay}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-['Helvetica:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[18px] text-center text-white w-full">2026 Platinum Medical Evaluations. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-white content-stretch flex items-center justify-center p-[35px] relative size-full"
    >
      <div id="home" className="content-stretch flex flex-col gap-[33px] h-[2967px] items-start relative shrink-0 w-[1658px]">
        <Navbar />
        <div className="content-stretch flex flex-col gap-[119px] h-[2967px] items-center relative shrink-0 w-full">
          <HeroSection />
          <ServicesSection />
          <ContactSection />
        </div>
      </div>
    </motion.div>
  );
}
