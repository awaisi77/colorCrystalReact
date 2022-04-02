import React from 'react';
import { FormattedMessage } from 'react-intl';
import Wrapper from './Wrapper';
import messages from './messages';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { useState } from 'react';
function Footer() {
  let [termModalToggle, setTermModalToggle] = useState(false);
  let [privacyModalToggle, setPrivacyModalToggle] = useState(false);
  let toggleTermModal = () => {
    setTermModalToggle(!termModalToggle);
  };
  let togglePrivacyTermModal = () => {
    setPrivacyModalToggle(!privacyModalToggle);
  };
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <Modal
            isOpen={termModalToggle}
            toggle={toggleTermModal}
            className="modal-lg"
          >
            <ModalHeader toggle={toggleTermModal}>How to play?</ModalHeader>
            <ModalBody>
              <h3>Term & Conditions</h3>
              <ul />
              <p>
                Governing Law and Jurisdiction Information appearing on the
                Website is provided in accordance with and subject to the laws
                of the Republic of Ireland and the laws of the Republic of
                Ireland govern the conduct and operation of the Website. The
                courts of the Republic of Ireland have exclusive jurisdiction
                over all claims or disputes arising in relation to, out of, or
                in connection with these Terms of Use, the information contained
                on the Website, and any use made of that information. Any such
                claims or disputes shall be resolved in accordance with the laws
                of the Republic of Ireland.{' '}
              </p>
              <p>
                Disclaimer as to accuracy of information While The Colour
                Crystal s uses reasonable efforts to include accurate and
                up-to-date information on its website, errors or omissions
                sometimes occur. To the fullest extent permissible under
                applicable law, we make no warranties or representations as to
                the accuracy of the content of this website and under no
                circumstances, including, but not limited to, negligence, shall
                The Colour Crystal or any party involved in creating, producing,
                or delivering the website be liable to you for any direct,
                incidental, consequential, indirect, or punitive damages that
                result from the use of, or the inability to use, the materials
                on this website.
              </p>
              <p>
                {' '}
                The Colour Crystal assumes no responsibility, and shall not be
                liable for, any damages to, or viruses that may infect, your
                computer equipment or other property as a result of your access
                to, use of, or browsing in the website or your downloading of
                any materials, data, text, images, video, or audio from this
                website. The Colour Crystal does not guarantee the accuracy,
                completeness or correctness of any information on its website.
                You agree that use of the site and its contents is entirely at
                your risk and to the extent permitted by law, all warranties or
                conditions that would, but for the terms of this disclaimer, be
                implied by statute or otherwise, are excluded.
              </p>
              <h5>Prohibited Use of the Website </h5>
              <p>
                {' '}
                The information on the Website is not provided and should not be
                used in any state or jurisdiction where accessing or use of such
                information is prohibited, whether in the format in which it is
                presented in the Website or any other format. In addition, you
                agree not to use the Website or cause the Website to be used: •
                in a way which could damage the availability, performance or
                integrity of the Website; • for any commercial purpose,
                including but not limited to any screen-scraping or direct
                marketing activities nor to use the website to participate in or
                cause others to participate in sending unsolicited messages,
                advertising or promotional material; • to harvest information
                about individuals, including e-mail addresses; • to upload or
                transmit any material which contains viruses, trojans, worms, or
                any other harmful or malicious programs; or • contrary to the
                terms and conditions of any Internet Service Provider whose
                services you may use. If you have any doubt about the legality
                of your use of the Website, you should not continue any further
                and immediately exit the Website. We accept no liability arising
                from the use or viewing of the Website which is in contravention
                of the laws of the jurisdiction in which you are resident,
                domiciled or located.
              </p>
              <h5>General Provisions</h5>
              <p>
                You acknowledge that you are solely responsible for the use to
                which you put from the Website and all the results and
                information you obtain from it
              </p>
              <h5>Your responsibilities in relation to the Website: •</h5>
              <p>
                {' '}
                You agree to use the Website for your personal use only;. • We
                may ask you to answer security questions, or to use a password
                or other security credential or a combination of security
                credentials, before allowing you use the Website. • You must
                keep your password or security credentials secret and safe and
                must never share them with anyone. If you know or suspect your
                security credentials are known by someone who should not know
                them, you must tell us straight away. • You must maintain
                suitable equipment to enable you to use the Website, for
                example, a computer with a suitable browser and up-to-date
                security software. Further details are available under
                accessibility section of the Website. • We put reasonable IT
                security measures in place. We cannot, however, guarantee the
                privacy or security of any information that concerns you and
                passes over the internet. This is because of the nature of the
                internet. If you use the Website, you acknowledge and accept
                these risks.{' '}
              </p>
              <h5>Variation of Content/Amendments</h5>
              <p>
                The contents of the Website, including these Terms of Use, any
                information contained in the Website, the Privacy Policy and
                Cookies Policy are subject to change and to being updated
                without notice from time to time. We reserve the right in our
                absolute discretion at any time and without notice to remove,
                amend, alter or vary any of the content which appears on any
                page of the Website, including the Terms of Use. Any changes to
                these Terms of Use will be posted in the Website and by
                continuing to use the Website following any such change you will
                agree to be bound by the revised Terms of Use.
              </p>
              <h5>Hypertext Links</h5>
              <p>
                No third party is permitted to create a link to the Website
                without our prior written consent.
              </p>
              <h5>Right to Information (Copyright and Trade Marks)</h5>
              <p>
                The information and services contained on and/or accessed
                through the Website are, unless otherwise specifically stated,
                the property of The Colour Crystal. All intellectual property
                rights associated with the Website and its contents including
                services are reserved to The Colour Crystal and its licensors.
                This shall also apply, subject to any alterations as necessary,
                to attempted access of the Website and attempted use of
                information. The information and material contained in the
                Website, including the services and/or insurance policies are
                for personal use only and may not be copied, printed, published,
                transmitted, amended or reproduced in any form whatsoever
                without the prior consent of the Colour Crystal.{' '}
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={toggleTermModal}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <Modal
            isOpen={privacyModalToggle}
            toggle={togglePrivacyTermModal}
            className="modal-lg"
          >
            <ModalHeader toggle={togglePrivacyTermModal}>
              Privacy Policy
            </ModalHeader>
            <ModalBody>
              <h3>Privacy Policy</h3>
              <p>
                The Colour Crystal (“us“, “we” or “our“), are committed to
                protecting and respecting your privacy. This Policy explains how
                we collect, use, process, and disclose your information,
                including personal information and how we keep it secure.   If
                you have any questions about our use of your personal data,
                please contact (insert email address)
              </p>
              <h5>Collection and use of personal information</h5>
              <p>
                Information we collect directly from you We collect the
                following information directly from you when you participate in
                our website,, subscribe to our emails or to a postal mailing
                list, or otherwise provide information directly to us.
                <li>Email address</li>
                <p>
                  Other information that you voluntarily provide to us when you
                  contact us Information we automatically collect
                </p>
                <li>
                  When you visit our sites or view our online content the
                  following information is retained about the visit
                </li>
                <li>the IP address of the visitor’s web server;</li>
                <li>
                  the top-level domain name used (for example .ie, .com, .org,
                  .net);
                </li>
                <li>
                  the previous website address from which the visitor reached
                  us, including any search term used;
                </li>
                <li>location based data;</li>
                <li>
                  and Google analytics which shows the traffic or visitors
                  around this website such as pages access and documents
                  downloaded
                </li>
              </p>
              <h5>How we use this information</h5>
              <h6>We may use your information to:  </h6>
              <p>
                send you communications which you have requested and that may be
                of interest to you including to notify you of changes to our
                services or policies; respond to your requests for information
                and other communication or correspondence you may submit to us;
                improve our products and services that we provide to you; carry
                out statistical analysis allow you to participate in interactive
                features of our Site, when you choose to do so; investigate any
                improper use of our products, services or the network; and carry
                out activities necessary to the running of our business, For any
                other purpose that we tell you about specifically when you
                register or provide data about yourself to us.
              </p>
              <p>
                The legal basis on which we process your personal data are that
                this is necessary for:
              </p>
              <p>
                Our legitimate interests in conducting our business in ensuring
                the proper management and functioning of The Colour Crytal.
                Compliance with a legal or regulatory obligation that applies to
                us; and The performance of a contract with you or in order to
                take steps at your request prior to entering into a contract.
              </p>
              <h5>
                We may disclose your personal data to other organisation in
                connection with the above purposes including:
              </h5>
              <p>
                To third parties who we engage to provide services to us, such
                as outsourced service providers, IT services providers,
                professional advisers and auditors. To competent regulatory
                authorities and bodies as requested or required by law; and
                Digital marketing and analytics service providers. To law
                enforcement or other entities that present valid legal process
                or in our discretion, unless otherwise prohibited by law, to
                protect human safety, our rights or the rights of others.
              </p>
              <h5>Retention</h5>
              <p>
                We will not hold your personal data for longer than is
                necessary. We retain your personal data for as long as we need
                it for the purposes described in this Notice, or to comply with
                our obligations under applicable law and, if relevant, to deal
                with any claim or dispute that might arise between you and
                us.Your choicesYou have a choice about whether or not you wish
                to receive information from us. If you do not want to receive
                direct marketing communications from us about our products and
                services, then you can contact us by email (insert email)
              </p>
              <p>
                We endeavour to keep your data accurate, complete and up to
                date. If your information that we hold is inaccurate, you can
                let us know and we will make the necessary amendments, erase or
                block the relevant Data as you request and notify you within one
                month of your request that relevant action has been taken.
              </p>
              <p>
                You may also request copies of your Data held by us as data
                controller. We will provide you with a copy of the Data held by
                us as soon as practicable and in any event not more than one
                month after the request in writing is received by us. We may
                also request proof of identification to verify your access
                request. All access requests should be addressed to (insert
                email)
              </p>
              <h4>Links to other sites and social media</h4>
              <p>
                Our Site may, from time to time, contain links to and from other
                websites and web platforms. In addition, third parties websites
                may also provide links to the Site. If you follow a link to any
                of those websites or web platforms, please note that those
                websites and web platforms have their own privacy policies and
                that we do not accept any responsibility or liability for those
                policies. Please check those policies before you submit any
                personal data to those websites. We do not accept, and we
                disclaim, any responsibility for the privacy statements and
                information protection practices of any third-party website
                (whether or not such website is linked on or to the Site). These
                links are provided to you for convenience purposes only, and you
                access them at your own risk. It is your responsibility to check
                the third-party website’s privacy statements before you submit
                any personal data to their websites.  
              </p>
              <p>
                Our Site may also have “plugins” (such as the Facebook “share”
                or “like” button) to third-party sites or offer login (such as
                log in with Facebook) through a third-party account. Third-party
                plugins and login features, including their loading, operation
                and use, are governed by the privacy policy and terms of the
                third party providing them. We may use a variety of technologies
                to assess how our sites are used, to personalize your experience
                and to deliver online content, tailored to your interests.
              </p>
              <h4>Cookies</h4>
              <p>
                A cookie is a small file placed on your device when you visit a
                site that can be understood by the site that issued the cookie.
                We use the information collected by cookies to remember who you
                are to log you in and your preferences, to provide with offers
                or other content tailored to your interests and to assess how
                our sites are used. You can accept or decline cookies through
                your browser settings. To learn more, please look at the cookie
                settings available in your specific web browser(s).
              </p>
              <h5>Other Technologies</h5>
              <p>
                We use other technologies including web beacons and JavaScript
                that sometimes work together with cookies to uniquely identify
                your device. These other technologies help enable features on
                our websites.
              </p>
              <h4>Changes to this Privacy Policy</h4>
              <p>
                We may occasionally update this policy. We encourage you to
                periodically review this policy for the latest information on
                our privacy practices.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={togglePrivacyTermModal}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
      <Wrapper>
        <section style={{ marginLeft: '30px' }}>
          &copy;2022&nbsp;
          <a href="https://www.akleesample.com/" style={{ color: '#fff' }}>
            <FormattedMessage {...messages.designedMessag} />
          </a>
          &nbsp;
          <a href="https://cjeagency.com/" style={{ color: '#fff' }}>
            <FormattedMessage {...messages.developedBy} />
          </a>
        </section>
        <section>
          |<a onClick={toggleTermModal}>Terms & Condition</a> |{' '}
          <a onClick={togglePrivacyTermModal}>Privacy Policy</a> |
          <a onClick={togglePrivacyTermModal}>Cookie Policy</a>
          &nbsp; &nbsp; &nbsp; &nbsp;
        </section>
      </Wrapper>
    </>
  );
}

export default Footer;
