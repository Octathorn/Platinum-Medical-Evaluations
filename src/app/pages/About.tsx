import { Icon } from '@iconify/react';
import { motion } from 'motion/react';
import { SITE_CONTACT } from '../content/siteContact';
import imgLogo from '../../imports/Home/bf1db4bcf5e317c4e0d7f17be8a1acc8b2645c59.png';
import imgHeroBg from '../../imports/Home/8318127962c13312e4d81df2fbe03351c4742920.png';
import imgFooterLogo from '../../imports/Home/a6871329f486a08ff42f724214ce189917f81dd8.png';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-white min-h-screen w-full"
    >
      <div className="flex flex-col md:flex-row items-center justify-between mb-2 px-4 md:px-[50px] py-4 md:py-8 gap-4 md:gap-0">
        <a href="#/">
          <img alt="Logo" className="h-[40.829px] w-[197px] object-cover" src={imgLogo} />
        </a>
        <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-center w-full md:w-auto">
          <div className="flex flex-col md:flex-row gap-4 md:gap-16 text-base text-center">
            <a href="#/" className="text-[#222] hover:text-[#306abc] transition-all">
              Home
            </a>
            <a href="#/#services" className="text-[#222] hover:text-[#306abc] transition-all">
              Services
            </a>
            <a href="#/about" className="text-[#306abc]">
              About
            </a>
            <a href="#/privacy-policy" className="text-[#222] hover:text-[#306abc] transition-all">
              Privacy Policy
            </a>
          </div>
          <a
            href="#/#contact"
            className="bg-[#306abc] text-white px-5 py-2 rounded-full text-base hover:opacity-90 transition-all w-full md:w-auto text-center"
          >
            Contact Us
          </a>
        </div>
      </div>

      <div className="px-4 md:px-[50px] mb-6 md:mb-8 flex gap-3 items-center">
        <div className="flex gap-3 items-center">
          <Icon icon="proicons:home" width="18" height="18" style={{ color: 'rgba(0,0,0,0.36)' }} />
          <a href="#/" className="text-[rgba(0,0,0,0.36)] text-base hover:text-[#306abc] transition-all">
            Home
          </a>
        </div>
        <Icon icon="grommet-icons:next" width="9" height="9" style={{ color: 'rgba(0,0,0,0.36)' }} />
        <p className="text-black text-base">About</p>
      </div>

      <section id="about" className="relative w-full mb-24 md:mb-32 pb-12 md:pb-20 px-4 md:px-[50px]">
        <div className="relative rounded-b-3xl md:rounded-b-[48px] overflow-hidden min-h-[560px] md:min-h-[640px]">
          <img
            alt=""
            className="absolute inset-0 w-full h-full object-cover blur-[3px] scale-105 opacity-35"
            src={imgHeroBg}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1858a8] via-[#1e63b8] to-[#3d8ad4]" />

          <div className="relative z-10 px-4 md:px-12 lg:px-20 pt-12 md:pt-20 pb-40 md:pb-48 mx-auto max-w-[1024px] text-center">
            <h1 className="text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold uppercase mb-8 md:mb-10 tracking-tight leading-snug font-sans">
              Platinum Medical Evaluations
            </h1>
            <p className="text-white/95 text-base md:text-lg lg:text-xl leading-relaxed md:leading-[34px] font-sans">
              Platinum Medical Evaluations is a medical group focused on helping veterans who have sustained injuries during
              their military service. We coordinate for veterans with an existing disability to access experienced,
              board-certified physicians around the United States who can provide medical Disability Benefit Evaluations
              resulting in a completed Disability Benefit Questionnaire (DBQ). We have clinics in multiple states to perform
              these evaluations face to face. Our highly qualified physicians are trained and credentialed to evaluate veterans
              with integrity. Our doctors demonstrate extensive knowledge which is important in performing the exams. Platinum
              Medical Evaluations has grown over the years, continuously adding physicians, staff, and offices to better serve
              veterans.
            </p>
          </div>
        </div>

        <div className="relative z-20 max-w-[1100px] mx-auto -mt-24 md:-mt-32 px-2 md:px-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-[0_18px_50px_-12px_rgba(48,106,188,0.25)] px-8 py-10 md:px-10 md:py-12 flex flex-col items-center text-center border border-black/[0.04]">
            <div className="text-[#306abc] mb-6 md:mb-8 [&>svg]:w-16 [&>svg]:h-16 md:[&>svg]:w-[72px] md:[&>svg]:h-[72px]">
              <Icon icon="healthicons:doctor-male" width={72} height={72} />
            </div>
            <h2 className="text-[#0f172a] text-xl md:text-2xl font-bold mb-4 md:mb-5 font-sans">In-Person</h2>
            <p className="text-[#475569] text-base md:text-lg leading-relaxed md:leading-[30px] font-sans">
              Platinum Medical Evaluations is conducting in-person testing to assist veterans with a board-certified physician
              in a personal setting to perform their disability medical evaluation.
            </p>
          </div>

          <div className="bg-white rounded-2xl md:rounded-3xl shadow-[0_18px_50px_-12px_rgba(48,106,188,0.25)] px-8 py-10 md:px-10 md:py-12 flex flex-col items-center text-center border border-black/[0.04]">
            <div className="text-[#306abc] mb-6 md:mb-8 [&>svg]:w-16 [&>svg]:h-16 md:[&>svg]:w-[72px] md:[&>svg]:h-[72px]">
              <Icon icon="fa6-solid:hand-holding-medical" width={72} height={72} />
            </div>
            <h2 className="text-[#0f172a] text-xl md:text-2xl font-bold mb-4 md:mb-5 font-sans">Accurate</h2>
            <p className="text-[#475569] text-base md:text-lg leading-relaxed md:leading-[30px] font-sans">
              Platinum Medical Evaluations is bringing reliable, accurate, and quick service for veterans seeking face to face
              evaluations for their disability benefits questionnaires. We aim to be the preferred medical group for conducting
              exams for disability benefits questionnaires.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-4 md:mx-[50px] mb-8 md:mb-16">
        <div className="bg-[#306abc] rounded-2xl p-8 md:p-16">
          <div className="flex flex-col md:flex-row justify-between items-start text-white mb-12 md:mb-20 max-w-[1472px] mx-auto gap-8 md:gap-0">
            <div className="w-full md:w-[466px]">
              <img alt="Logo" className="h-[40.829px] w-[197px] object-cover mb-8 md:mb-14" src={imgFooterLogo} />
              <p className="text-base md:text-xl leading-[30px] md:leading-[35px]">
                Professional, in person disability evaluations delivered with accuracy, experience, and integrity.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-24 w-full md:w-auto">
              <div>
                <p className="text-lg md:text-xl mb-4 md:mb-5">Quick Links</p>
                <div className="text-sm md:text-base space-y-2">
                  <a href="#/" className="block cursor-pointer hover:opacity-80 transition-all">
                    Home
                  </a>
                  <a href="#/#services" className="block cursor-pointer hover:opacity-80 transition-all">
                    Services
                  </a>
                  <a href="#/about" className="block cursor-pointer hover:opacity-80 transition-all">
                    About
                  </a>
                  <a href="#/privacy-policy" className="block cursor-pointer hover:opacity-80 transition-all">
                    Privacy Policy
                  </a>
                  <a href="#/#contact" className="block cursor-pointer hover:opacity-80 transition-all">
                    Contact Us
                  </a>
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

          <p className="text-center text-sm md:text-lg text-white max-w-[1472px] mx-auto">
            2026 Platinum Medical Evaluations. All rights reserved
          </p>
        </div>
      </div>
    </motion.div>
  );
}
