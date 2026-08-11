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
    var field = 'leadid_token';
    var provide = 'https://createid.jornaya.com';
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    
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
        <p>This notice supplements our <a href="/privacy">Privacy Policy</a> and applies solely to California residents under the California Consumer Privacy Act ("CCPA") and the California Privacy Rights Act ("CPRA").</p>

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
    const openModal  = (type) => {
        modalBody.innerHTML = legalData[type];
        modal.classList.add("active");
        document.body.classList.add("modal-open");
        modalBody.querySelectorAll('a[href="#optout"], a[href="#ccpa"]').forEach((link) => {
            link.addEventListener("click", handleLegalLinkClick);
        });
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
        if (href.includes("optout")) openModal("optout");
        else if (href.includes("ccpa")) openModal("ccpa");
    };
    document.querySelectorAll('a[href="#optout"], a[href="#ccpa"]').forEach((link) => {
        link.addEventListener("click", handleLegalLinkClick);
    });

    if (closeBtn) closeBtn.onclick = closeModal;
    window.onclick = (e) => { if (e.target === modal) closeModal(); };
    if (window.location.hash === "#optout") openModal("optout");
    else if (window.location.hash === "#ccpa") openModal("ccpa");

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
            let userIp = "Unknown";
            try {
                const res  = await fetch("https://api.ipify.org?format=json");
                const data = await res.json();
                userIp = data.ip;
            } catch (err) {
                console.error("IP Fetch failed:", err);
            }
            const userIpField = document.getElementById("user_ip");
            if (userIpField) userIpField.value = userIp;

            const formData = {
                name:                 document.getElementById("name").value,
                phone:                document.getElementById("phone").value,
                state:                document.getElementById("state").value,
                zip:                  document.getElementById("zip").value,
                ipAddress:            userIp,
                xxTrustedFormUrl:     document.querySelector('input[name="xxTrustedFormCertUrl"]')?.value || "",
                xxTrustedFormPingUrl: document.querySelector('input[name="xxTrustedFormPingUrl"]')?.value || "",
                xxTrustedFormToken:   (document.querySelector('input[name="xxTrustedFormCertUrl"]')?.value || "").split('/').pop(),
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

    /* ==========================================
       7. CLICK-TO-CALL TRACKING (quotes page)
       ========================================== */
    const callNowBtn = document.getElementById("callNowBtn");
    if (callNowBtn) {
        callNowBtn.addEventListener("click", () => {
            (async () => {
                let userIp = "Unknown";
                try {
                    const res  = await fetch("https://api.ipify.org?format=json");
                    const data = await res.json();
                    userIp = data.ip;
                } catch (err) {
                    console.error("IP Fetch failed:", err);
                }

                const clickData = {
                    submissionType:       "CLICK_TO_CALL",
                    ipAddress:            userIp,
                    pageUrl:              window.location.href,
                    xxTrustedFormUrl:     document.querySelector('input[name="xxTrustedFormCertUrl"]')?.value || "",
                    xxTrustedFormPingUrl: document.querySelector('input[name="xxTrustedFormPingUrl"]')?.value || "",
                    xxTrustedFormToken:   (document.querySelector('input[name="xxTrustedFormCertUrl"]')?.value || "").split('/').pop(),
                    jornayaLeadId:        document.getElementById("leadid_token")?.value || ""
                };

                try {
                    await fetch(scriptURL, {
                        method: "POST",
                        mode: "no-cors",
                        body: JSON.stringify(clickData),
                    });
                } catch (err) {
                    console.error("Click-to-call log failed:", err);
                }
            })();
        });
    }
});