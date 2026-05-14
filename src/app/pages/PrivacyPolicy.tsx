import { Icon } from '@iconify/react';
import { motion } from 'motion/react';
import imgImage2 from '../../imports/Home/bf1db4bcf5e317c4e0d7f17be8a1acc8b2645c59.png';
import imgImage3 from '../../imports/Home/a6871329f486a08ff42f724214ce189917f81dd8.png';
import { SITE_CONTACT } from '../content/siteContact';

export default function PrivacyPolicy() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-white min-h-screen w-full"
    >
      {/* Navbar */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-2 px-4 md:px-[50px] py-4 md:py-8 gap-4 md:gap-0">
        <img alt="Logo" className="h-[40.829px] w-[197px] object-cover" src={imgImage2} />
        <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-center w-full md:w-auto">
          <div className="flex flex-col md:flex-row gap-4 md:gap-16 text-base text-center">
            <a href="#/" className="text-[#222] hover:text-[#306abc] transition-all">Home</a>
            <a href="#/#services" className="text-[#222] hover:text-[#306abc] transition-all">Services</a>
            <a href="#/about" className="text-[#222] hover:text-[#306abc] transition-all">About</a>
            <a href="#/privacy-policy" className="text-[#306abc]">Privacy Policy</a>
          </div>
          <a href="#/#contact" className="bg-[#306abc] text-white px-5 py-2 rounded-full text-base hover:opacity-90 transition-all w-full md:w-auto text-center">
            Contact Us
          </a>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="px-4 md:px-[50px] mb-6 md:mb-8 flex gap-3 items-center">
        <div className="flex gap-3 items-center">
          <Icon icon="proicons:home" width="18" height="18" style={{ color: 'rgba(0,0,0,0.36)' }} />
          <a href="#/" className="text-[rgba(0,0,0,0.36)] text-base hover:text-[#306abc] transition-all">Home</a>
        </div>
        <Icon icon="grommet-icons:next" width="9" height="9" style={{ color: 'rgba(0,0,0,0.36)' }} />
        <p className="text-black text-base">Privacy Policy</p>
      </div>

      {/* Privacy Policy Content */}
      <div className="px-4 md:px-[50px] mb-8 md:mb-16">
        <div className="font-['Helvetica:Regular',sans-serif] leading-[24px] md:leading-[28px] text-[12px] md:text-[14px] text-black">
          <p className="font-['Helvetica:Bold',sans-serif] text-[#306abc] text-[24px] md:text-[36px] mb-3 md:mb-4">Privacy Policy</p>
          <p className="mb-4">&nbsp;</p>

          <p className="font-['Helvetica:Bold',sans-serif] text-[#306abc] text-[16px] mb-2">TERMS OF USE</p>
          <p className="mb-4">HouseCall MD ("we," "us," or "our") provides this website ("Site") to you conditioned on your acceptance without modification of the terms, conditions, and notices contained herein. Your use of this Site constitutes your agreement to all such terms, conditions, and notices.</p>

          <p className="font-['Helvetica:Bold',sans-serif] text-[#306abc] text-[16px] mb-2">MODIFICATIONS OF THESE TERMS OF USE</p>
          <p className="mb-4">We reserve the right to change the terms, conditions, and notices under which this Site is offered, including but not limited to the charges associated with the use of this Site.</p>

          <p className="font-['Helvetica:Bold',sans-serif] text-[#306abc] text-[16px] mb-2">LINKS TO THIRD PARTY SITES</p>
          <p className="mb-4">This Site may contain links to other websites ("Linked Sites"). The Linked Sites are not under our control, and we are not responsible for the contents of any Linked Site, including without limitation any link contained in a Linked Site, or any changes or updates to a Linked Site. We are not responsible for webcasting, or any other form of transmission received from any Linked Site. We are providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by us of the site or any association with its operators.</p>

          <p className="font-['Helvetica:Bold',sans-serif] text-[#306abc] text-[16px] mb-2">NO UNLAWFUL OR PROHIBITED USE</p>
          <p className="mb-4">As a condition of your use of this Site, you warrant to us that you will not use this Site for any purpose that is unlawful or prohibited by these terms, conditions, and notices. You may not use this Site in any manner which could damage, disable, overburden, or impair this Site or interfere with any other party's use and enjoyment of this Site. You may not obtain or attempt to obtain any materials or information through any means not intentionally made available or provided for through this Site.</p>

          <p className="font-['Helvetica:Bold',sans-serif] text-[#306abc] text-[16px] mb-2">CONTENT YOU SUBMIT</p>
          <p className="mb-4">When using this Site, you may have the opportunity to submit reviews or feedback regarding your experiences with us, and to participate in bulletin boards, chat areas, news groups, forums, communities, personal web pages, calendars, and/or other message or communication features designed to enable you to communicate with the public at large or with a group (collectively, "Communication Services"). You agree to use the Communication Services only to post, send, and receive messages and material that are proper and related to the particular Communication Service.</p>

          <p className="mb-2">By way of example, and not as a limitation, you agree that when using a Communication Service, you will not post content that contains:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Personal and confidential information, including phone numbers, addresses, and health information.</li>
            <li>Vulgar content, including offensive, derogatory, obscene, profane, or inflammatory language or content.</li>
            <li>Threats or personal attacks on others; Discriminatory content or hate speech, including content that advocates against groups of people based on their race, ethnic origin, religion, disability, gender, gender identity, sexual orientation, age, or veteran status.</li>
            <li>Misrepresentations, including content submitted fraudulently on behalf of others or that misrepresents your identity or connection with us or our practice.</li>
            <li>Non-applicable content, including posts that are not specific to us or our practice.</li>
            <li>Advertising or solicitations; Illegal content; or References to or information about ongoing legal matters or proceedings.</li>
          </ul>

          <p className="mb-2">You further agree that you will not:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Upload files that contain software or other material protected by intellectual property laws (or by rights of privacy of publicity) unless you own or control the rights thereto or have received all necessary consents.</li>
            <li>Upload files that contain viruses, corrupt files, or any other similar software or programs that may damage the operation of another's computer.</li>
            <li>Conduct or forward surveys, contests, pyramid schemes or chain letters.</li>
            <li>Download any file posted by another user of a Communication Service that you know, or reasonably should know, cannot be legally distributed in such manner.</li>
            <li>Falsify or delete any legal or other proper notices or proprietary designations or labels of the origin or source of software or other material contained in a file that is uploaded.</li>
            <li>Restrict or inhibit any other user from using and enjoying the Communication Services.</li>
            <li>Violate any code of conduct or other guidelines which may be applicable for any particular Communication Service.</li>
            <li>Harvest or otherwise collect information about others, including e-mail addresses, without their consent.</li>
          </ul>

          <p className="mb-4">We have no obligation to monitor the Communication Services. However, we reserve the right to review materials posted to a Communication Service and to remove any content that does not comply with these terms or any publicly posted content that includes personal and confidential information. We reserve the right to terminate your access to any or all of the Communication Services at any time without notice for any reason whatsoever. Content uploaded to a Communication Service may be subject to posted limitations on usage, reproduction, and/or dissemination. You are responsible for adhering to such limitations if you download the content. If you would like to remove your own review from this Site, please contact us.</p>

          <p className="font-['Helvetica:Bold',sans-serif] text-[#306abc] text-[16px] mb-2">LIABILITY DISCLAIMER</p>
          <p className="mb-4">THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THIS SITE MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE INFORMATION HEREIN. WE AND/OR OUR SUPPLIERS MAY MAKE IMPROVEMENTS AND/OR CHANGES IN THIS SITE AT ANY TIME. ADVICE RECEIVED VIA THIS SITE SHOULD NOT BE RELIED UPON FOR PERSONAL, MEDICAL, LEGAL OR FINANCIAL DECISIONS AND YOU SHOULD CONSULT AN APPROPRIATE PROFESSIONAL FOR SPECIFIC ADVICE TAILORED TO YOUR SITUATION. WE AND/OR OUR SUPPLIERS MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, AND ACCURACY OF THE INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS CONTAINED ON THIS SITE FOR ANY PURPOSE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL SUCH INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS ARE PROVIDED "AS IS" WITHOUT WARRANTY OR CONDITION OF ANY KIND. WE AND/OR OUR SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH REGARD TO THIS INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS, INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT.TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL WE AND/OR OUR SUPPLIERS BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OR PERFORMANCE OF THIS SITE, WITH THE DELAY OR INABILITY TO USE THIS SITE OR RELATED SERVICES, THE PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR FOR ANY INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS OBTAINED THROUGH THIS SITE, OR OTHERWISE ARISING OUT OF THE USE OF THIS SITE, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF WE OR ANY OF OUR SUPPLIERS HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES. BECAUSE SOME STATES/JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO YOU. IF YOU ARE DISSATISFIED WITH ANY PORTION OF THIS SITE, OR WITH ANY OF THESE TERMS OF USE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THIS SITE.</p>

          <p className="font-['Helvetica:Bold',sans-serif] text-[#306abc] text-[16px] mb-2">COPYRIGHT AND TRADEMARK NOTICES</p>
          <p className="mb-4">All contents of this website are Copyright © 2025Platinum Medical Evaluations. All Rights Reserved. All logos are trademarks and service marks ofPlatinum Medical Evaluations. All other trademarks, service marks and logos used in this Site are the property of their respective owners.</p>

          <p className="font-['Helvetica:Bold',sans-serif] text-[#306abc] text-[16px] mb-2">TRADEMARKS</p>
          <p className="mb-4">The names of actual companies and products mentioned herein may be the trademarks of their respective owners. The example companies, organizations, products, people and events depicted herein are fictitious. No association with any real company, organization, product, person, or event is intended or should be inferred. Any rights not expressly granted herein are reserved.</p>

          <p className="font-['Helvetica:Bold',sans-serif] text-[#306abc] text-[16px] mb-2">NOTICES</p>
          <p className="mb-4">
            Please contact us by phone at {SITE_CONTACT.phoneDisplay}, by email at{' '}
            <a href={`mailto:${SITE_CONTACT.email}`} className="text-[#306abc] underline">{SITE_CONTACT.email}</a>, or write to us at {SITE_CONTACT.address}.
          </p>

          <p className="font-['Helvetica:Bold',sans-serif] text-[#306abc] text-[16px] mb-2">PRIVACY POLICY STATEMENT</p>
          <p className="mb-4">We are committed to protecting your privacy and providing a safe online experience. This Privacy Statement applies to our Practice's website and governs our data collection and usage practices. By using this website, you consent to the data practices described in this Privacy Statement.</p>

          <p className="font-['Helvetica:Bold',sans-serif] text-[#306abc] text-[16px] mb-2">Collection of your Personal Information</p>
          <p className="mb-4">This Practice collects personally identifiable information provided by you, such as your e-mail address, name, home or work address or telephone number. This Practice also collects anonymous demographic information, which is not unique to you, such as your ZIP code, age, gender, preferences, interests and favorites. There is also information about your computer hardware and software that is automatically collected by this website. This information can include: your IP address, browser type, domain names, access times and referring to website addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of this website. Please keep in mind that if you directly disclose personally identifiable information or personally sensitive data through public message boards, this information may be collected and used by others. This Practice encourages you to review the privacy statements of websites you choose to link to from the website so that you can understand how those websites collect, use and share your information. This Practice is not responsible for the privacy statements or other content on any other websites.</p>

          <p className="font-['Helvetica:Bold',sans-serif] text-[#306abc] text-[16px] mb-2">Use of your Personal Information</p>
          <p className="mb-4">This Practice collects and uses your personal information to operate the website and deliver the services you have requested. This Practice also uses your personally identifiable information to inform you of other products or services available from this Practice and its affiliates. This Practice may also contact you via surveys to conduct research about your opinion of current services or of potential new services that may be offered. This Practice does not sell, rent or lease its customer lists to third parties. This Practice may share data with trusted partners to help us perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services and they are required to maintain the confidentiality of your information. This Practice does not use or disclose sensitive personal information, such as race, religion, or political affiliations, without your explicit consent. This Practice will disclose your personal information, without notice, only if required to do so by law.</p>

          <p className="font-['Helvetica:Bold',sans-serif] text-[#306abc] text-[16px] mb-2">Use of Cookies</p>
          <p className="mb-4">The website uses "cookies" to help this Practice personalize your online experience. A cookie is a text file that is placed on your hard disk by a webpage server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you and can only be read by a web server in the domain that issued the cookie to you.</p>

          <p className="font-['Helvetica:Bold',sans-serif] text-[#306abc] text-[16px] mb-2">Security of your Personal Information</p>
          <p className="mb-4">This Practice secures your personal information from unauthorized access, use or disclosure. This Practice secures the personally identifiable information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use or disclosure. When personal information (such as a credit card number) is transmitted to other websites, it is protected through the use of encryption, such as the Secure Socket Layer (SSL) protocol.</p>

          <p className="font-['Helvetica:Bold',sans-serif] text-[#306abc] text-[16px] mb-2">Changes to this Statement</p>
          <p className="mb-4">This Practice will occasionally update this Privacy Statement to reflect company and customer feedback. We encourage you to periodically review this Privacy Statement to be informed of how this Practice is protecting your information.</p>

          <p className="font-['Helvetica:Bold',sans-serif] text-[#306abc] text-[16px] mb-2">Contact Information</p>
          <p className="mb-4">
            Please contact us by phone at {SITE_CONTACT.phoneDisplay}, by email at{' '}
            <a href={`mailto:${SITE_CONTACT.email}`} className="text-[#306abc] underline">{SITE_CONTACT.email}</a>, or write to us at {SITE_CONTACT.address}.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-b from-[#f1f5fc] to-[#fefefe] rounded-[24px] md:rounded-[48px] p-8 md:p-16 mx-4 md:mx-[50px]">
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
                  <a href="#/" className="block cursor-pointer hover:opacity-80 transition-all">Home</a>
                  <a href="#/#services" className="block cursor-pointer hover:opacity-80 transition-all">Services</a>
                  <a href="#/privacy-policy" className="block cursor-pointer hover:opacity-80 transition-all">Privacy Policy</a>
                  <a href="#/#contact" className="block cursor-pointer hover:opacity-80 transition-all">Contact Us</a>
                </div>
              </div>

              <div>
                <p className="text-lg md:text-2xl mb-5 md:mb-7">Contact info</p>
                <div className="space-y-4 md:space-y-5">
                  <div className="flex gap-4 md:gap-5 items-start">
                    <Icon icon="tdesign:location-filled" width="20" height="20" className="md:w-[24px] md:h-[24px] shrink-0 mt-0.5" />
                    <p className="text-base md:text-lg">{SITE_CONTACT.address}</p>
                  </div>
                  <div className="flex gap-4 md:gap-5 items-center">
                    <Icon icon="ic:baseline-email" width="20" height="20" className="md:w-[24px] md:h-[24px] shrink-0" />
                    <a href={`mailto:${SITE_CONTACT.email}`} className="text-base md:text-lg hover:underline break-all">
                      {SITE_CONTACT.email}
                    </a>
                  </div>
                  <div className="flex gap-4 md:gap-5 items-center">
                    <Icon icon="ic:round-phone" width="20" height="20" className="md:w-[24px] md:h-[24px] shrink-0" />
                    <a href={`tel:${SITE_CONTACT.phoneTel}`} className="text-base md:text-lg hover:underline">
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
    </motion.div>
  );
}
