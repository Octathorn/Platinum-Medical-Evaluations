import svgPaths from "./svg-ldq1bfo2x6";
import imgImage2 from "./bf1db4bcf5e317c4e0d7f17be8a1acc8b2645c59.png";
import imgImage3 from "./a6871329f486a08ff42f724214ce189917f81dd8.png";
import { SITE_CONTACT } from "../../app/content/siteContact";

function Frame() {
  return (
    <div className="content-stretch flex font-['Helvetica:Regular',sans-serif] gap-[72px] items-center leading-[normal] not-italic relative shrink-0 text-[16px] whitespace-nowrap">
      <p className="relative shrink-0 text-[#222]">Home</p>
      <p className="relative shrink-0 text-[#222]">Services</p>
      <p className="relative shrink-0 text-[#306abc]">Privacy Policy</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#306abc] content-stretch flex h-[41px] items-center justify-center p-[10px] relative rounded-[9876543px] shrink-0 w-[130px]">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Contact Us</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[72px] items-center relative shrink-0">
      <Frame />
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="h-[40.829px] relative shrink-0 w-[197px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <Frame1 />
    </div>
  );
}

function ProiconsHome() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="proicons:home">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="proicons:home">
          <path d={svgPaths.p13712600} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeOpacity="0.36" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0">
      <ProiconsHome />
      <p className="font-['Helvetica:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.36)] whitespace-nowrap">Home</p>
    </div>
  );
}

function GrommetIconsNext() {
  return (
    <div className="relative shrink-0 size-[9px]" data-name="grommet-icons:next">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
        <g id="grommet-icons:next">
          <path d={svgPaths.p3bf22390} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.36" />
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <GrommetIconsNext />
      <p className="font-['Helvetica:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Privacy Policy</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[53px] items-start relative shrink-0 w-[466px]">
      <div className="h-[40.829px] relative shrink-0 w-[197px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
      <p className="font-['Helvetica:Regular',sans-serif] leading-[35px] min-w-full not-italic relative shrink-0 text-[20px] text-white w-[min-content]">Professional , in person disability evaluations delivered with accuracy , experience , and integrity.</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col font-['Helvetica:Regular',sans-serif] gap-[18px] items-start not-italic relative shrink-0 text-white w-[113px]">
      <p className="leading-[normal] min-w-full relative shrink-0 text-[20px] w-[min-content]">Quick Links</p>
      <div className="leading-[0] relative shrink-0 text-[16px] whitespace-nowrap">
        <p className="leading-[32px] mb-0">Home</p>
        <p className="leading-[32px] mb-0">Services</p>
        <p className="leading-[32px] mb-0">Privacy Policy</p>
        <p className="leading-[32px]">Contact Us</p>
      </div>
    </div>
  );
}

function TdesignLocationFilled() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="tdesign:location-filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="tdesign:location-filled">
          <path d={svgPaths.p171300} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[18px] items-start relative shrink-0 max-w-[min(100vw-48px,420px)] w-full">
      <TdesignLocationFilled />
      <p className="font-['Helvetica:Regular',sans-serif] leading-[26px] not-italic relative text-[17px] text-white">
        {SITE_CONTACT.address}
      </p>
    </div>
  );
}

function IcBaselineEmail() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic:baseline-email">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic:baseline-email">
          <path d={svgPaths.p33218b70} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[18px] items-center relative shrink-0 w-full max-w-[min(100vw-48px,420px)]">
      <IcBaselineEmail />
      <a
        href={`mailto:${SITE_CONTACT.email}`}
        className="font-['Helvetica:Regular',sans-serif] leading-[28px] not-italic relative text-[17px] text-white underline break-all"
      >
        {SITE_CONTACT.email}
      </a>
    </div>
  );
}

function IcRoundPhone() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic:round-phone">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic:round-phone">
          <path d={svgPaths.p212f3d80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[18px] items-center relative shrink-0 w-full">
      <IcRoundPhone />
      <a
        href={`tel:${SITE_CONTACT.phoneTel}`}
        className="font-['Helvetica:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[18px] text-white underline"
      >
        {SITE_CONTACT.phoneDisplay}
      </a>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
      <Frame6 />
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 max-w-[min(100vw-48px,420px)]">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-white w-full">Contact info</p>
      <Frame9 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[96px] items-center relative shrink-0 w-[337px]">
      <Frame5 />
      <Frame10 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[611px] items-center justify-center relative shrink-0 w-full">
      <Frame12 />
      <Frame11 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[84px] h-[300px] items-center relative shrink-0 w-[1472px]">
      <Frame13 />
      <p className="font-['Helvetica:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[18px] text-center text-white w-full">2026 Platinum Medical Evaluations. All rights reserved</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#306abc] h-[387px] relative rounded-[18px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[71px] py-[62px] relative size-full">
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[33px] h-[2845px] items-start relative shrink-0 w-[1658px]">
      <Frame4 />
      <Frame18 />
      <div className="font-['Helvetica:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[0px] text-black w-[min-content]">
        <p className="font-['Helvetica:Bold',sans-serif] leading-[28px] mb-0 text-[#306abc] text-[36px] whitespace-pre-wrap">Privacy Policy</p>
        <p className="leading-[28px] mb-0 text-[36px] whitespace-pre-wrap">​</p>
        <p className="font-['Helvetica:Bold',sans-serif] leading-[28px] mb-0 text-[#306abc] text-[16px] whitespace-pre-wrap">TERMS OF USE</p>
        <p className="leading-[28px] mb-0 text-[14px] whitespace-pre-wrap">HouseCall MD (“we,” “us,” or “our”) provides this website (“Site”) to you conditioned on your acceptance without modification of the terms, conditions, and notices contained herein. Your use of this Site constitutes your agreement to all such terms, conditions, and notices.</p>
        <p className="font-['Helvetica:Bold',sans-serif] leading-[28px] mb-0 text-[#306abc] text-[16px] whitespace-pre-wrap">MODIFICATIONS OF THESE TERMS OF USE</p>
        <p className="leading-[28px] mb-0 text-[14px] whitespace-pre-wrap">We reserve the right to change the terms, conditions, and notices under which this Site is offered, including but not limited to the charges associated with the use of this Site.</p>
        <p className="font-['Helvetica:Bold',sans-serif] leading-[28px] mb-0 text-[#306abc] text-[16px] whitespace-pre-wrap">LINKS TO THIRD PARTY SITES</p>
        <p className="leading-[28px] mb-0 text-[14px] whitespace-pre-wrap">This Site may contain links to other websites (“Linked Sites”). The Linked Sites are not under our control, and we are not responsible for the contents of any Linked Site, including without limitation any link contained in a Linked Site, or any changes or updates to a Linked Site. We are not responsible for webcasting, or any other form of transmission received from any Linked Site. We are providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by us of the site or any association with its operators.</p>
        <p className="font-['Helvetica:Bold',sans-serif] leading-[28px] mb-0 text-[#306abc] text-[16px] whitespace-pre-wrap">NO UNLAWFUL OR PROHIBITED USE</p>
        <p className="leading-[28px] mb-0 text-[14px] whitespace-pre-wrap">As a condition of your use of this Site, you warrant to us that you will not use this Site for any purpose that is unlawful or prohibited by these terms, conditions, and notices. You may not use this Site in any manner which could damage, disable, overburden, or impair this Site or interfere with any other party’s use and enjoyment of this Site. You may not obtain or attempt to obtain any materials or information through any means not intentionally made available or provided for through this Site.</p>
        <p className="font-['Helvetica:Bold',sans-serif] leading-[28px] mb-0 text-[#306abc] text-[16px] whitespace-pre-wrap">CONTENT YOU SUBMIT</p>
        <p className="leading-[28px] mb-0 text-[14px] whitespace-pre-wrap">When using this Site, you may have the opportunity to submit reviews or feedback regarding your experiences with us, and to participate in bulletin boards, chat areas, news groups, forums, communities, personal web pages, calendars, and/or other message or communication features designed to enable you to communicate with the public at large or with a group (collectively, “Communication Services”). You agree to use the Communication Services only to post, send, and receive messages and material that are proper and related to the particular Communication Service.</p>
        <p className="leading-[28px] mb-0 text-[14px] whitespace-pre-wrap">By way of example, and not as a limitation, you agree that when using a Communication Service, you will not post content that contains:</p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[28px] text-[14px]">Personal and confidential information, including phone numbers, addresses, and health information.</span>
          </li>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[28px] text-[14px]">Vulgar content, including offensive, derogatory, obscene, profane, or inflammatory language or content.</span>
          </li>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[28px] text-[14px]">Threats or personal attacks on others; Discriminatory content or hate speech, including content that advocates against groups of people based on their race, ethnic origin, religion, disability, gender, gender identity, sexual orientation, age, or veteran status.</span>
          </li>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[28px] text-[14px]">Misrepresentations, including content submitted fraudulently on behalf of others or that misrepresents your identity or connection with us or our practice.</span>
          </li>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[28px] text-[14px]">Non-applicable content, including posts that are not specific to us or our practice.</span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[28px] text-[14px]">Advertising or solicitations; Illegal content; or References to or information about ongoing legal matters or proceedings.</span>
          </li>
        </ul>
        <p className="leading-[28px] mb-0 text-[14px] whitespace-pre-wrap">You further agree that you will not:</p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[28px] text-[14px]">Upload files that contain software or other material protected by intellectual property laws (or by rights of privacy of publicity) unless you own or control the rights thereto or have received all necessary consents.</span>
          </li>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[28px] text-[14px]">Upload files that contain viruses, corrupt files, or any other similar software or programs that may damage the operation of another’s computer.</span>
          </li>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[28px] text-[14px]">Conduct or forward surveys, contests, pyramid schemes or chain letters.</span>
          </li>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[28px] text-[14px]">Download any file posted by another user of a Communication Service that you know, or reasonably should know, cannot be legally distributed in such manner.</span>
          </li>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[28px] text-[14px]">Falsify or delete any legal or other proper notices or proprietary designations or labels of the origin or source of software or other material contained in a file that is uploaded.</span>
          </li>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[28px] text-[14px]">Restrict or inhibit any other user from using and enjoying the Communication Services.</span>
          </li>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[28px] text-[14px]">Violate any code of conduct or other guidelines which may be applicable for any particular Communication Service.</span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[28px] text-[14px]">Harvest or otherwise collect information about others, including e-mail addresses, without their consent.</span>
          </li>
        </ul>
        <p className="leading-[28px] mb-0 text-[14px] whitespace-pre-wrap">We have no obligation to monitor the Communication Services. However, we reserve the right to review materials posted to a Communication Service and to remove any content that does not comply with these terms or any publicly posted content that includes personal and confidential information. We reserve the right to terminate your access to any or all of the Communication Services at any time without notice for any reason whatsoever. Content uploaded to a Communication Service may be subject to posted limitations on usage, reproduction, and/or dissemination. You are responsible for adhering to such limitations if you download the content. If you would like to remove your own review from this Site, please contact us.</p>
        <p className="font-['Helvetica:Bold',sans-serif] leading-[28px] mb-0 text-[#306abc] text-[16px] whitespace-pre-wrap">LIABILITY DISCLAIMER</p>
        <p className="leading-[28px] mb-0 text-[14px] whitespace-pre-wrap">THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THIS SITE MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE INFORMATION HEREIN. WE AND/OR OUR SUPPLIERS MAY MAKE IMPROVEMENTS AND/OR CHANGES IN THIS SITE AT ANY TIME. ADVICE RECEIVED VIA THIS SITE SHOULD NOT BE RELIED UPON FOR PERSONAL, MEDICAL, LEGAL OR FINANCIAL DECISIONS AND YOU SHOULD CONSULT AN APPROPRIATE PROFESSIONAL FOR SPECIFIC ADVICE TAILORED TO YOUR SITUATION. WE AND/OR OUR SUPPLIERS MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, AND ACCURACY OF THE INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS CONTAINED ON THIS SITE FOR ANY PURPOSE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL SUCH INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS ARE PROVIDED “AS IS” WITHOUT WARRANTY OR CONDITION OF ANY KIND. WE AND/OR OUR SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH REGARD TO THIS INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS, INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT.TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL WE AND/OR OUR SUPPLIERS BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OR PERFORMANCE OF THIS SITE, WITH THE DELAY OR INABILITY TO USE THIS SITE OR RELATED SERVICES, THE PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR FOR ANY INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS OBTAINED THROUGH THIS SITE, OR OTHERWISE ARISING OUT OF THE USE OF THIS SITE, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF WE OR ANY OF OUR SUPPLIERS HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES. BECAUSE SOME STATES/JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO YOU. IF YOU ARE DISSATISFIED WITH ANY PORTION OF THIS SITE, OR WITH ANY OF THESE TERMS OF USE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THIS SITE.</p>
        <p className="font-['Helvetica:Bold',sans-serif] leading-[28px] mb-0 text-[#306abc] text-[16px] whitespace-pre-wrap">COPYRIGHT AND TRADEMARK NOTICES</p>
        <p className="leading-[28px] mb-0 text-[14px] whitespace-pre-wrap">All contents of this website are Copyright © 2025Platinum Medical Evaluations. All Rights Reserved. All logos are trademarks and service marks ofPlatinum Medical Evaluations. All other trademarks, service marks and logos used in this Site are the property of their respective owners.</p>
        <p className="font-['Helvetica:Bold',sans-serif] leading-[28px] mb-0 text-[#306abc] text-[16px] whitespace-pre-wrap">TRADEMARKS</p>
        <p className="leading-[28px] mb-0 text-[14px] whitespace-pre-wrap">The names of actual companies and products mentioned herein may be the trademarks of their respective owners. The example companies, organizations, products, people and events depicted herein are fictitious. No association with any real company, organization, product, person, or event is intended or should be inferred. Any rights not expressly granted herein are reserved.</p>
        <p className="font-['Helvetica:Bold',sans-serif] leading-[28px] mb-0 text-[#306abc] text-[16px] whitespace-pre-wrap">NOTICES</p>
        <p className="leading-[28px] mb-0 text-[14px] whitespace-pre-wrap">Please contact us by phone at 626-765-4321, by email at info@platinummedicalevaluations.com, or write to us at 1494 S. Robertson Blvd, Suite 200, Los Angeles, CA 90035.</p>
        <p className="font-['Helvetica:Bold',sans-serif] leading-[28px] mb-0 text-[#306abc] text-[16px] whitespace-pre-wrap">PRIVACY POLICY STATEMENT</p>
        <p className="leading-[28px] mb-0 text-[14px] whitespace-pre-wrap">We are committed to protecting your privacy and providing a safe online experience. This Privacy Statement applies to our Practice’s website and governs our data collection and usage practices. By using this website, you consent to the data practices described in this Privacy Statement.</p>
        <p className="font-['Helvetica:Bold',sans-serif] leading-[28px] mb-0 text-[#306abc] text-[16px] whitespace-pre-wrap">Collection of your Personal Information</p>
        <p className="leading-[28px] mb-0 text-[14px] whitespace-pre-wrap">This Practice collects personally identifiable information provided by you, such as your e-mail address, name, home or work address or telephone number. This Practice also collects anonymous demographic information, which is not unique to you, such as your ZIP code, age, gender, preferences, interests and favorites. There is also information about your computer hardware and software that is automatically collected by this website. This information can include: your IP address, browser type, domain names, access times and referring to website addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of this website. Please keep in mind that if you directly disclose personally identifiable information or personally sensitive data through public message boards, this information may be collected and used by others. This Practice encourages you to review the privacy statements of websites you choose to link to from the website so that you can understand how those websites collect, use and share your information. This Practice is not responsible for the privacy statements or other content on any other websites.</p>
        <p className="font-['Helvetica:Bold',sans-serif] leading-[28px] mb-0 text-[#306abc] text-[16px] whitespace-pre-wrap">Use of your Personal Information</p>
        <p className="leading-[28px] mb-0 text-[14px] whitespace-pre-wrap">This Practice collects and uses your personal information to operate the website and deliver the services you have requested. This Practice also uses your personally identifiable information to inform you of other products or services available from this Practice and its affiliates. This Practice may also contact you via surveys to conduct research about your opinion of current services or of potential new services that may be offered. This Practice does not sell, rent or lease its customer lists to third parties. This Practice may share data with trusted partners to help us perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services and they are required to maintain the confidentiality of your information. This Practice does not use or disclose sensitive personal information, such as race, religion, or political affiliations, without your explicit consent. This Practice will disclose your personal information, without notice, only if required to do so by law.</p>
        <p className="font-['Helvetica:Bold',sans-serif] leading-[28px] mb-0 text-[#306abc] text-[16px] whitespace-pre-wrap">Use of Cookies</p>
        <p className="leading-[28px] mb-0 text-[14px] whitespace-pre-wrap">The website uses “cookies” to help this Practice personalize your online experience. A cookie is a text file that is placed on your hard disk by a webpage server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you and can only be read by a web server in the domain that issued the cookie to you.</p>
        <p className="font-['Helvetica:Bold',sans-serif] leading-[28px] mb-0 text-[#306abc] text-[16px] whitespace-pre-wrap">Security of your Personal Information</p>
        <p className="leading-[28px] mb-0 text-[14px] whitespace-pre-wrap">This Practice secures your personal information from unauthorized access, use or disclosure. This Practice secures the personally identifiable information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use or disclosure. When personal information (such as a credit card number) is transmitted to other websites, it is protected through the use of encryption, such as the Secure Socket Layer (SSL) protocol.</p>
        <p className="font-['Helvetica:Bold',sans-serif] leading-[28px] mb-0 text-[#306abc] text-[16px] whitespace-pre-wrap">Changes to this Statement</p>
        <p className="leading-[28px] mb-0 text-[14px] whitespace-pre-wrap">This Practice will occasionally update this Privacy Statement to reflect company and customer feedback. We encourage you to periodically review this Privacy Statement to be informed of how this Practice is protecting your information.</p>
        <p className="font-['Helvetica:Bold',sans-serif] leading-[28px] mb-0 text-[#306abc] text-[16px] whitespace-pre-wrap">Contact Information</p>
        <p className="leading-[28px] text-[14px] whitespace-pre-wrap">Please contact us by phone at 626-765-4321, by email at info@platinummedicalevaluations.com, or write to us at 1494 S. Robertson Blvd, Suite 200, Los Angeles, CA 90035.</p>
      </div>
      <Frame15 />
    </div>
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[35px] relative size-full" data-name="privacy policy">
      <Frame3 />
    </div>
  );
}