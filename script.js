/* ==========================================
   1. COMPLIANCE TRACKING INITIALIZATION (TRUSTEDFORM & JORNAYA)
   ========================================== */

// --- TrustedForm Snippet ---
(function() {
  var tf = document.createElement('script');
  tf.type = 'text/javascript';
  tf.async = true;
  tf.src = ("https:" == document.location.protocol ? 'https' : 'http') +
    '://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&use_tagged_consent=true&l=' +
    new Date().getTime() + Math.random();
  var s = document.getElementsByTagName('script')[0]; 
  s.parentNode.insertBefore(tf, s);
})();

// --- Jornaya LeadiD Snippet ---
(function() {
    var field = 'leadid_token'; // Points to the ID of your hidden input field
    var provide = 'https://createid.jornaya.com';
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    
    // REMINDER: Replace 'YOUR_CAMPAIGN_KEY' with your production key when ActiveProspect provisions it
    script.src = provide + '/script.js?app_key=YOUR_CAMPAIGN_KEY&field=' + field;
    
    var s = document.getElementsByTagName('script')[0];
    if (s) {
        s.parentNode.insertBefore(script, s);
    } else {
        document.head.appendChild(script);
    }
})();

/* ==========================================
   2. LEGAL DATA
   ========================================== */
const legalData = {
    privacy: `
        <h2>Privacy Policy</h2>
        <p><strong>Last Updated: April 30, 2026</strong></p>
        <p>Your privacy is important to us. This Privacy Policy explains how Secure Drive Insurance ("we," "us," or "our") collects, uses, shares, and protects your information when you use our website and services. By using this website, you agree to the practices described in this Privacy Policy. If you do not agree, please do not use the site.</p>

        <h3>1. Who We Are</h3>
        <p>Secure Drive Insurance is an <strong>advertising and affiliate marketing website</strong> that connects users with third-party licensed insurance providers. We are <strong>not an insurance carrier</strong> and do not issue or underwrite insurance policies.</p>

        <h3>2. Information We Collect</h3>
        <p>We collect personal information you voluntarily provide when you fill out a form or otherwise interact with our site. This may include:</p>
        <ul>
            <li>Full name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Zip code</li>
            <li>Vehicle-related or insurance-related information</li>
            <li>IP address and geolocation</li>
            <li>Device, browser, and usage data</li>
        </ul>
        <p>We may also use cookies and tracking technologies for analytics and retargeting purposes.</p>

        <h3>3. Consent and Verification Technologies</h3>
        <p>We use <strong>Jornaya</strong> and <strong>TrustedForm</strong> to capture and verify consumer consent. These tools record your interaction with our website to ensure compliance with <strong>TCPA (Telephone Consumer Protection Act)</strong> regulations. These recordings and tokens help confirm when and how you provided consent to be contacted.</p>

        <h3>4. How We Use or Share Your Information</h3>
        <p>We use the information we collect to:</p>
        <ul>
            <li>Connect you with third-party insurance providers or partners</li>
            <li>Send quotes or contact you with relevant services</li>
            <li>Improve website performance and user experience</li>
            <li>Ensure legal compliance and verify consent</li>
            <li>Communicate with you via phone, text, or email</li>
        </ul>
        <p>We may share your information with:</p>
        <ul>
            <li>Licensed insurance providers and agents</li>
            <li>Affiliate marketing partners</li>
            <li>Service providers who support our operations (e.g., hosting, analytics)</li>
            <li>Legal authorities if required by law</li>
        </ul>
        <p>We <strong>do not sell</strong> your personal data to unrelated third parties for unrelated marketing purposes.</p>

        <h3>5. Your Choices and Rights</h3>
        <p>You have the right to:</p>
        <ul>
            <li>Opt-out of marketing communications</li>
            <li>Request access to the personal data we hold about you</li>
            <li>Request correction or deletion of your data (as permitted by law)</li>
        </ul>
        <p>To exercise any of these rights, please use our <a href="#optout">Opt-Out Form</a> or contact us at <a href="mailto:info@securedrive-insurance.com">info@securedrive-insurance.com</a>.</p>

        <h3>6. Cookies and Tracking Technologies</h3>
        <p>We use cookies and other tracking technologies to monitor site performance, analyze user behavior, and customize advertising campaigns. You can control cookie preferences through your browser settings.</p>

        <h3>7. Data Security</h3>
        <p>We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, or misuse. However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.</p>

        <h3>8. Third-Party Websites</h3>
        <p>Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of those sites. Please review their policies before submitting personal information.</p>

        <h3>9. Children's Privacy</h3>
        <p>Our services are not intended for individuals under the age of 18. We do not knowingly collect information from children.</p>

        <h3>10. California Residents</h3>
        <p>If you are a California resident, additional rights apply to you under the CCPA. See our <a href="#ccpa">CCPA Notice</a> for details.</p>

        <h3>11. Policy Updates</h3>
        <p>We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated effective date. Your continued use of the site constitutes acceptance of those changes.</p>

        <h3>12. Contact Us</h3>
        <p>If you have any questions or concerns regarding this Privacy Policy, please contact us at <a href="mailto:info@securedrive-insurance.com">info@securedrive-insurance.com</a>.</p>
    `,
    terms: `
        <h2>Terms of Use</h2>
        <p><strong>Effective Date: April 30, 2026</strong></p>
        <p>Welcome to <strong>Secure Drive Insurance</strong>. By accessing or using our website, you agree to be bound by these Terms of Use. If you do not agree to these terms, please discontinue use of the site immediately.</p>

        <h3>1. Description of Service</h3>
        <p>Secure Drive Insurance provides a platform that connects consumers with third-party insurance agents, brokers, and carriers. We are an administrative and marketing entity and:</p>
        <ul>
            <li>Do not provide insurance quotes directly</li>
            <li>Do not underwrite or issue insurance policies</li>
            <li>Do not guarantee that any partner will provide a specific quote</li>
        </ul>

        <h3>2. TCPA Consent &amp; Communication</h3>
        <p>By submitting your phone number and information, you provide express written consent to be contacted via telephone, automated dialing systems, artificial/pre-recorded messages, or text messages by <strong>Secure Drive Insurance</strong> and <strong>our partners</strong>.</p>
        <ul>
            <li>Consent is not a condition of purchase</li>
            <li>Message and data rates may apply</li>
            <li>You may opt-out at any time using our <a href="#optout">Opt-Out Form</a> or by replying "STOP" to text messages</li>
        </ul>

        <h3>3. User Eligibility</h3>
        <p>To use this website, you must be at least 18 years of age and a resident of the United States. By using this site, you represent that all information you provide is accurate and belongs to you.</p>

        <h3>4. Intellectual Property</h3>
        <p>All content, logos, designs, and code on this website are the property of <strong>Secure Drive Insurance</strong> and are protected by copyright and trademark laws. You may not copy, redistribute, or use our branding without express written permission.</p>

        <h3>5. Limitation of Liability</h3>
        <p>Secure Drive Insurance is not liable for any damages arising from your use of this site or any services provided by third-party partners. We provide the site "as is" without any warranties of any kind.</p>

        <h3>6. Dispute Resolution</h3>
        <p>Any dispute arising out of or relating to these Terms shall be resolved through binding individual arbitration. You waive the right to participate in class-action lawsuits or class-wide arbitrations.</p>

        <h3>7. Contact Information</h3>
        <p>Questions regarding these Terms of Use should be directed to: <a href="mailto:info@securedrive-insurance.com">info@securedrive-insurance.com</a></p>
    `,
    optout: `
        <h2>Opt-Out Request</h2>
        <p>You are always in control of how we and our partners contact you. Use the form below to revoke consent and stop future marketing communications from Secure Drive Insurance.</p>
        <div class="optout-intro">
            <strong>Please note:</strong> Requests are typically processed within 10 business days. You may also opt out at any time by calling us at <strong>(740) 301-9588</strong> or replying "STOP" to any text message you've received from us.
        </div>
        <form id="optOutForm" class="optout-form">
            <div class="input-group">
                <label for="optout-name">Full Name</label>
                <input type="text" id="optout-name" placeholder="John Doe" required />
            </div>
            <div class="input-group">
                <label for="optout-email">Email Address</label>
                <input type="email" id="optout-email" placeholder="john@example.com" required />
            </div>
            <div class="input-group">
                <label for="optout-phone">Phone Number</label>
                <input type="tel" id="optout-phone" placeholder="5551234567" pattern="\\d{10}" minlength="10" maxlength="10" title="Please enter exactly 10 digits" required />
            </div>
            <button type="submit" class="optout-submit-btn">Submit Opt-Out Request</button>
            <div id="optOutConfirmation" class="optout-confirmation">
                Your opt-out request has been received. Please allow up to 10 business days for processing.
            </div>
        </form>
    `,
    ccpa: `
        <div class="ccpa-badge">California Residents</div>
        <h2>CCPA Notice</h2>
        <p><strong>Last Updated: April 30, 2026</strong></p>
        <p>This notice supplements our <a href="privacy.html">Privacy Policy</a> and applies solely to California residents under the California Consumer Privacy Act ("CCPA") and the California Privacy Rights Act ("CPRA").</p>

        <h3>Categories of Information We Collect</h3>
        <ul>
            <li>Identifiers (name, phone number, email, ZIP code)</li>
            <li>Internet and network activity (IP address, browser, device, and usage data)</li>
            <li>Inferences drawn from the categories above, used to match you with relevant insurance offers</li>
        </ul>

        <h3>Your Rights as a California Resident</h3>
        <ul>
            <li><strong>Right to Know</strong> — what personal information we collect, use, and share</li>
            <li><strong>Right to Delete</strong> — request deletion of personal information we've collected</li>
            <li><strong>Right to Correct</strong> — request correction of inaccurate personal information</li>
            <li><strong>Right to Opt-Out</strong> — of the sale or sharing of your personal information</li>
            <li><strong>Right to Non-Discrimination</strong> — for exercising any of your CCPA rights</li>
        </ul>

        <h3>How to Exercise Your Rights</h3>
        <p>To submit a request, email <a href="mailto:info@securedrive-insurance.com">info@securedrive-insurance.com</a> with the subject line "CCPA Request," or call us at <strong>(740) 301-9588</strong>. We will verify your identity before processing any request.</p>

        <h3>Do Not Sell or Share My Information</h3>
        <p>California residents may opt out of the sale or sharing of personal information at any time using our <a href="#optout">Opt-Out Form</a>.</p>
    `
};

/* ==========================================
   3. STATE MAPPING
   ========================================== */
const stateMapping = {
    Alabama: "AL", Alaska: "AK", Arizona: "AZ", Arkansas: "AR",
    California: "CA", Colorado: "CO", Connecticut: "CT", Delaware: "DE",
    Florida: "FL", Georgia: "GA", Hawaii: "HI", Idaho: "ID",
    Illinois: "IL", Indiana: "IN", Iowa: "IA", Kansas: "KS",
    Kentucky: "KY", Louisiana: "LA", Maine: "ME", Maryland: "MD",
    Massachusetts: "MA", Michigan: "MI", Minnesota: "MN", Mississippi: "MS",
    Missouri: "MO", Montana: "MT", Nebraska: "NE", Nevada: "NV",
    "New Hampshire": "NH", "New Jersey": "NJ", "New Mexico": "NM",
    "New York": "NY", "North Carolina": "NC", "North Dakota": "ND",
    Ohio: "OH", Oklahoma: "OK", Oregon: "OR", Pennsylvania: "PA",
    "Rhode Island": "RI", "South Carolina": "SC", "South Dakota": "SD",
    Tennessee: "TN", Texas: "TX", Utah: "UT", Vermont: "VT",
    Virginia: "VA", Washington: "WA", "West Virginia": "WV",
    Wisconsin: "WI", Wyoming: "WY",
};

/* ==========================================
   4. CORE DOM LOGIC
   ========================================== */
document.addEventListener("DOMContentLoaded", () => {
    const leadForm    = document.getElementById("leadForm");
    const stateSelect = document.getElementById("state");
    const modal       = document.getElementById("legalModal");
    const modalBody   = document.getElementById("modalBody");
    const closeBtn    = document.querySelector(".close-btn");
    const scriptURL   = "https://script.google.com/macros/s/AKfycbxkjTB8kbypn64nssb-Of8OpcXQ08mrvr7FWWLxc7q5rF0mMVk5_9xBiFi4pR5rJW8Tpw/exec";

    // --- Populate States ---
    if (stateSelect) {
        for (const [fullName, abbr] of Object.entries(stateMapping)) {
            const option = document.createElement("option");
            option.value = abbr;
            option.textContent = fullName;
            stateSelect.appendChild(option);
        }
    }

    // --- Modal ---
    // Privacy, Terms, Opt-Out, and CCPA all open through this exact same function —
    // same overlay, same panel styling, same open/close behavior.
    const openModal  = (type) => {
        modalBody.innerHTML = legalData[type];
        modal.classList.add("active");
        document.body.classList.add("modal-open");

        // Re-bind links rendered *inside* the modal body (e.g. "Opt-Out Form" link
        // inside the Privacy Policy) so they open the correct modal too.
        modalBody.querySelectorAll('a[href="privacy.html"], a[href="terms.html"], a[href="#optout"], a[href="#ccpa"]').forEach((link) => {
            link.addEventListener("click", handleLegalLinkClick);
        });

        // Attach the opt-out form handler fresh each time it's rendered
        if (type === "optout") {
            const optOutForm = document.getElementById("optOutForm");
            if (optOutForm) {
                optOutForm.addEventListener("submit", handleOptOutSubmit);
            }
        }
    };

    const closeModal = () => {
        modal.classList.remove("active");
        document.body.classList.remove("modal-open");
    };

    const handleLegalLinkClick = (e) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute("href");
        if (href.includes("privacy")) openModal("privacy");
        else if (href.includes("terms")) openModal("terms");
        else if (href.includes("optout")) openModal("optout");
        else if (href.includes("ccpa")) openModal("ccpa");
    };

    document.querySelectorAll('a[href="privacy.html"], a[href="terms.html"], a[href="#optout"], a[href="#ccpa"]').forEach((link) => {
        link.addEventListener("click", handleLegalLinkClick);
    });

    if (closeBtn) closeBtn.onclick = closeModal;
    window.onclick = (e) => { if (e.target === modal) closeModal(); };

    /* ==========================================
       5. OPT-OUT FORM SUBMISSION
       ========================================== */
    async function handleOptOutSubmit(e) {
        e.preventDefault();

        const form         = e.target;
        const btn          = form.querySelector(".optout-submit-btn");
        const confirmation = document.getElementById("optOutConfirmation");
        const originalText = btn.innerText;

        btn.innerText = "SUBMITTING...";
        btn.disabled  = true;
        btn.style.opacity = "0.7";

        let userIp = "Unknown";
        try {
            const res  = await fetch("https://api.ipify.org?format=json");
            const data = await res.json();
            userIp = data.ip;
        } catch (err) {
            console.error("IP Fetch failed:", err);
        }

        const optOutData = {
            submissionType: "OPT_OUT_REQUEST",
            name:      document.getElementById("optout-name").value,
            email:     document.getElementById("optout-email").value,
            phone:     document.getElementById("optout-phone").value,
            ipAddress: userIp,
        };

        try {
            await fetch(scriptURL, {
                method: "POST",
                mode: "no-cors",
                body: JSON.stringify(optOutData),
            });
            form.reset();
            confirmation.classList.add("active");
            btn.style.display = "none";
        } catch (err) {
            console.error("Opt-out submission error:", err);
            alert("There was an issue submitting your opt-out request. Please call us at (740) 301-9588 instead.");
        } finally {
            btn.innerText = originalText;
            btn.disabled  = false;
            btn.style.opacity = "1";
        }
    }

    /* ==========================================
       6. LEAD FORM SUBMISSION
       ========================================== */
    if (leadForm) {
        leadForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const btn          = leadForm.querySelector(".submit-btn");
            const btnText      = btn.querySelector(".btn-text");
            const originalText = btnText.innerText;
            btnText.innerText  = "PROCESSING...";
            btn.disabled       = true;
            btn.style.opacity  = "0.7";

            // Fetch IP Address
            let userIp = "Unknown";
            try {
                const res  = await fetch("https://api.ipify.org?format=json");
                const data = await res.json();
                userIp = data.ip;
            } catch (err) {
                console.error("IP Fetch failed:", err);
            }

            const formData = {
                name:                 document.getElementById("name").value,
                phone:                document.getElementById("phone").value,
                state:                document.getElementById("state").value,
                zip:                  document.getElementById("zip").value,
                ipAddress:            userIp,
                xxTrustedFormUrl:     document.querySelector('input[name="xxTrustedFormCertUrl"]')?.value || "",
                xxTrustedFormPingUrl: document.querySelector('input[name="xxTrustedFormPingUrl"]')?.value || "",
                xxTrustedFormToken:   (document.querySelector('input[name="xxTrustedFormCertUrl"]')?.value || "").split('/').pop(),
                
                // --- CAPTURE JORNAYA ID FIELD VALUE ---
                jornayaLeadId:        document.getElementById("leadid_token")?.value || ""
            };

            console.log("Submitting to SecureDrive:", formData);

            try {
                await fetch(scriptURL, {
                    method: "POST",
                    mode: "no-cors",
                    body: JSON.stringify(formData),
                });
                alert("Success! Your quote request has been received.");
                leadForm.reset();
            } catch (err) {
                console.error("Submission error:", err);
                alert("There was an issue submitting your request. Please try again.");
            } finally {
                btnText.innerText = originalText;
                btn.disabled      = false;
                btn.style.opacity = "1";
            }
        });
    }
});
