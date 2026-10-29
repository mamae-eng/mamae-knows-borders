const guides = [
    {
        id: "ph-passport",
        badge: "Travel & Identity",
        lastUpdated: "October 27, 2026",
        title: "Philippine Passport Application Guide",
        image: "pasaporte.jpeg",
        shortDesc: "Complete step-by-step instructions for first-time adult applications, renewals, supporting documents, and appointment rules.",
        quickBadges: [
            "Validity: 10 Years (Adults 18+) | 5 Years (Minors)",
            "PH Fees: ₱950 Regular | ₱1,200 Expedited",
            "US / NY Fee: $60 USD"
        ],
        steps: [
            "<strong>Prepare Civil Records & IDs:</strong> Order your official birth certificate via <a href=\"https://www.psaserbilis.com.ph/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-blue-600 underline font-semibold\">PSA Serbilis</a> or <a href=\"https://psahelpline.ph/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-blue-600 underline font-semibold\">PSAHelpline.ph</a>. Prepare 1 valid primary government ID (e.g., PhilID, Driver's License, UMID, SSS). Make sure your first name, surname, and birth date match identically across all documents before booking.",
            "<strong>Book Official Appointment & Pay:</strong> Book exclusively on the official <a href=\"https://www.passport.gov.ph/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-blue-600 underline font-semibold\">DFA Passport Appointment System</a> (in the Philippines) or your designated consular portal abroad. Complete payment through authorized channels. Appointment slots are completely free; fees strictly cover passport processing and booklet production and are non-refundable.",
            "<strong>Personal Appearance & Biometrics:</strong> Arrive 15–30 minutes early with your printed appointment packet (on A4 paper), original documents, and photocopies. Wear collared/modest attire (no colored contact lenses, facial piercings, or heavy jewelry) for live digital photo capture and fingerprint enrollment.",
            "<strong>Encoder Check & Claiming:</strong> Review the encoder’s screen letter-by-letter before confirming. Track your delivery or pickup status online. Never book non-refundable flights until the physical passport booklet is safely in your hands."
        ],
        tip: "Wag na wag magpapaloko sa Facebook appointment fixers! Walang VIP express slots—libre ang official appointment system. Kung kailangan mo ng slot, mag-check sa <a href=\"https://www.passport.gov.ph/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-amber-900 underline font-bold\">DFA Passport Portal</a> tuwing madaling araw o off-peak hours. At laging i-double check na tugma ang spelling ng pangalan mo sa PSA at ID bago magbayad!",
        categories: [
            {
                name: "1. First-Time Adult",
                tip: "Kung unreadable, kupas, o malabo ang PSA Birth Certificate mo, wag mo nang ipilit sa counter—irereject lang yan! Pumunta agad sa Local Civil Registrar (LCR) kung saan ka ipinanganak at kumuha ng certified true copy (Form 1A) para isabay sa PSA copy mo.",
                content: `
                    <h4 class='text-lg font-bold text-slate-900 mb-2'>Core Requirements for First-Time Adult Applicants (18+)</h4>
                    <ul class='list-disc pl-5 space-y-2 text-slate-700 mb-4'>
                        <li>Confirmed appointment packet & completed form</li>
                        <li>Original PSA-issued Certificate of Live Birth on Security Paper + 1 clear photocopy (Order online via <a href='https://www.psaserbilis.com.ph/' target='_blank' rel='noopener noreferrer' class='text-blue-600 underline font-semibold'>PSA Serbilis</a> or <a href='https://psahelpline.ph/' target='_blank' rel='noopener noreferrer' class='text-blue-600 underline font-semibold'>PSAHelpline.ph</a>)</li>
                        <li>1 Accepted Primary Government ID + 1 clear photocopy</li>
                        <li>For married women adopting husband’s surname: Original PSA Marriage Certificate or Report of Marriage + 1 photocopy</li>
                    </ul>
                    <h5 class='font-bold text-slate-800 mt-4 mb-2'>Accepted Primary IDs:</h5>
                    <ul class='list-disc pl-5 space-y-1.5 text-slate-700 mb-4'>
                        <li><strong>PhilID / ePhilID / Digital National ID:</strong> Must be printed and verified live via <a href='https://national-id.gov.ph' target='_blank' rel='noopener noreferrer' class='text-blue-600 underline font-semibold'>National ID Portal</a> or <a href='https://www.gov.ph/' target='_blank' rel='noopener noreferrer' class='text-blue-600 underline font-semibold'>eGovPH App</a></li>
                        <li>LTO Driver’s License</li>
                        <li>UMID / SSS Card</li>
                        <li>PRC ID / OWWA E-Card / Senior Citizen ID</li>
                        <li><strong>Students:</strong> Valid School ID + Certificate of Registration (COR)</li>
                        <li><span class='text-red-600 font-bold'>⚠️ Not Accepted as Primary IDs:</span> Company ID, Barangay Clearance, Police Clearance, PhilHealth ID, Postal ID, or NBI Clearance alone.</li>
                    </ul>
                `
            },
            {
                name: "2. Booking & Appointment",
                tip: "Gamitin ang personal email na ikaw mismo ang may hawak ng password! Huwag gamitin ang email ng kapitbahay o internet shop dahil doon ipadadala ang PDF confirmation at barcode na kailangan mong iprint.",
                content: `
                    <h4 class='text-lg font-bold text-slate-900 mb-2'>Official Appointment Workflow & Rules</h4>
                    <ol class='list-decimal pl-5 space-y-3 text-slate-700 mb-4'>
                        <li><strong>Official Portal Only:</strong> Book exclusively through the <a href='https://www.passport.gov.ph/' target='_blank' rel='noopener noreferrer' class='text-blue-600 underline font-semibold'>DFA Passport Appointment System</a>.</li>
                        <li><strong>Prepare Details in Advance:</strong> Have your PSA documents, contact details, valid email address, and old passport number (if renewal) ready before opening the booking portal.</li>
                        <li><strong>Review Letter-by-Letter:</strong> Verify names, birth date, birthplace, and parents' details before submitting. You cannot edit these online once booked.</li>
                        <li><strong>Strict Payment Window:</strong> Pay within the reference deadline using authorized payment channels. Appointments are strictly non-refundable, non-transferable, and non-reusable if you miss your schedule.</li>
                        <li><strong>Courtesy Lane (No Online Slot Needed in PH):</strong> Available for seniors (60+), PWDs, pregnant women, solo parents, OFWs, and children 7 years old and below (with immediate parents).</li>
                    </ol>
                `
            },
            {
                name: "3. Processing & Claiming",
                tip: "Wag munang bumili ng plane ticket habang wala pa sa kamay mo ang physical passport booklet! Maski expedited pa yan, pwedeng magka-delay sa printing o courier delivery.",
                content: `
                    <h4 class='text-lg font-bold text-slate-900 mb-2'>Processing Day, Biometrics & Passport Release</h4>
                    <ul class='list-disc pl-5 space-y-3 text-slate-700 mb-4'>
                        <li><strong>Folder Setup:</strong> Organize documents before arriving: printed appointment packet & payment receipt on top, followed by original documents, and photocopies neatly grouped.</li>
                        <li><strong>Arrival & Dress Code:</strong> Arrive 15–30 minutes ahead of your slot. Collared or smart-casual shirt is recommended. Eyeglasses, earrings, necklaces, and colored contact lenses must be removed during biometric capture.</li>
                        <li><strong>Encoder Review (Critical):</strong> Before stepping away from the photo booth, the encoder will ask you to review your data on screen. Check every single letter of your name, birthplace, and birth date. Once printed, corrections require a brand new application and fee!</li>
                        <li><strong>Claiming & Tracking:</strong> Keep your Claim Stub and Official Receipt safe. For courier deliveries, ensure an authorized adult is at home with your valid ID and authorization letter.</li>
                    </ul>
                `
            },
            {
                name: "4. Renewals & Name Changes",
                tip: "Expired na ba ang passport mo nang ilang taon? No problem! Walang penalty ang late renewal. Kahit 5 taon nang expired ang ePassport mo, standard renewal process pa rin basta walang physical damage at may chip icon.",
                content: `
                    <h4 class='text-lg font-bold text-slate-900 mb-2'>ePassport Renewals & Surname Guidelines</h4>
                    <ul class='list-disc pl-5 space-y-3 text-slate-700 mb-4'>
                        <li><strong>Standard ePassport Renewal:</strong> If your current passport has the electronic chip icon on the cover, you only need:
                            <ul class='list-disc pl-5 mt-1 space-y-1'>
                                <li>Printed appointment confirmation packet</li>
                                <li>Original current ePassport</li>
                                <li>Clear photocopy of the passport data (biographical) page</li>
                            </ul>
                        </li>
                        <li><strong>Older Passports (Brown, Green, or Non-Chip Machine-Readable):</strong> Treated as First-Time Applications; you must bring your PSA Birth Certificate and primary ID alongside the old booklet.</li>
                        <li><strong>Adopting Husband’s Surname:</strong> A married woman is not legally required to take her husband’s surname. If you choose to adopt it, present your original PSA Marriage Certificate or Report of Marriage.</li>
                        <li><strong>Reverting to Maiden Name:</strong> Permitted under RA 11983 due to death of spouse (submit PSA Death Certificate), annulment/divorce (submit annotated PSA Marriage Certificate), or through a one-time notarized affidavit requesting reversion.</li>
                    </ul>
                `
            },
            {
                name: "5. Minors (Below 18)",
                tip: "Iba ang passport application sa DSWD Travel Clearance! Ang passport ay identity document lang. Kung bibiyahe ang bata abroad nang walang kasamang magulang (halimbawa, kasama si lola o tita), kailangan kumuha ng hiwalay na <a href='https://www.dswd.gov.ph/' target='_blank' rel='noopener noreferrer' class='text-amber-900 underline font-bold'>DSWD Minors Traveling Abroad Clearance</a> bago ang flight.",
                content: `
                    <h4 class='text-lg font-bold text-slate-900 mb-2'>Minor Applications & Legal Accompaniment</h4>
                    <p class='text-slate-700 mb-2'><strong>Key Rule:</strong> All minors (including newborn babies) require personal appearance and a confirmed appointment. Passports for minors are valid for 5 years only.</p>
                    <h5 class='font-bold text-slate-800 mt-3 mb-1'>Required Core Documents:</h5>
                    <ul class='list-disc pl-5 space-y-1 text-slate-700 mb-3'>
                        <li>PSA Certificate of Live Birth or Report of Birth</li>
                        <li>Valid School ID (for school-age children) or Certificate of Enrollment with photo</li>
                        <li>Original valid passport (if renewal) + data page photocopy</li>
                    </ul>
                `
            },
            {
                name: "6. Special Cases & Problems",
                tip: "Nabasâ o napunit ba ang passport mo? Huwag mong subukang idikit ng tape o plantsahin! Considered mutilated passport na yan at posibleng harangin ka ng airline sa airport. I-declare agad as damaged at kumuha ng replacement bago mag-book ng trip.",
                content: `
                    <h4 class='text-lg font-bold text-slate-900 mb-2'>Lost, Damaged, or Inconsistent Records</h4>
                    <ul class='list-disc pl-5 space-y-2 text-slate-700 mb-4'>
                        <li><strong>Lost Valid ePassport:</strong> Submit a Notarized Affidavit of Loss, Police Report, and clear copies of the lost passport (if available). There is a 15-day clearing/verification period and an additional clearing fee of ₱350.</li>
                        <li><strong>Lost Expired Passport:</strong> Requires a Notarized Affidavit of Loss; treated as a first-time application requiring a PSA birth certificate.</li>
                        <li><strong>Mutilated or Damaged Passport:</strong> Present the damaged passport booklet and submit a notarized Affidavit of Explanation. Do not attempt DIY repairs (no tape, glue, or re-stapling).</li>
                    </ul>
                `
            },
            {
                name: "7. Abroad & New York",
                tip: "Kung sa <a href='https://newyorkpcg.org/pcgny/' target='_blank' rel='noopener noreferrer' class='text-amber-900 underline font-bold'>PCG New York</a> ka mag-aapply, dumaan muna sa US Post Office bago pumunta sa Fifth Avenue! Bilhin ang USPS Priority Mail Flat Rate envelope na may tracking number at postage stamp.",
                content: `
                    <h4 class='text-lg font-bold text-slate-900 mb-2'>Overseas Processing & PCG New York Procedures</h4>
                    <ul class='list-disc pl-5 space-y-2 text-slate-700 mb-4'>
                        <li><strong>Consulate Location:</strong> Philippine Consulate General in New York at <strong>556 Fifth Avenue, New York, NY 10036</strong>.</li>
                        <li><strong>Appointment Booking:</strong> Book via the official <a href='https://newyorkpcg.org/' target='_blank' rel='noopener noreferrer' class='text-blue-600 underline font-semibold'>PCG New York Online Appointment Portal</a>.</li>
                        <li><strong>Passport Mailing Return Requirements:</strong> Applicants must bring their own self-addressed, stamped USPS Priority Mail or Priority Mail Express Flat Rate envelope with tracking number.</li>
                    </ul>
                `
            },
            {
                name: "8. Fees & Timeline",
                tip: "Tandaan ang 6-Month Passport Validity Rule ng mga airline at immigration!",
                content: `
                    <h4 class='text-lg font-bold text-slate-900 mb-2'>Costs, Planning Timeline & Validity</h4>
                    <div class='w-full overflow-x-auto mb-4 rounded-xl border border-slate-300'>
                        <table class='w-full min-w-[460px] border-collapse text-xs sm:text-sm'>
                            <tr class='bg-slate-100'><th class='border-b border-r border-slate-300 p-2.5 text-left'>Application Location / Type</th><th class='border-b border-r border-slate-300 p-2.5 text-left'>Official Fee</th><th class='border-b border-slate-300 p-2.5 text-left'>Processing Estimate</th></tr>
                            <tr><td class='border-b border-r border-slate-300 p-2.5'>Philippines — Regular</td><td class='border-b border-r border-slate-300 p-2.5 font-semibold'>₱950</td><td class='border-b border-slate-300 p-2.5'>10–12 working days</td></tr>
                            <tr><td class='border-b border-r border-slate-300 p-2.5'>Philippines — Expedited</td><td class='border-b border-r border-slate-300 p-2.5 font-semibold'>₱1,200</td><td class='border-b border-slate-300 p-2.5'>5–7 working days</td></tr>
                            <tr><td class='border-b border-r border-slate-300 p-2.5'>PCG New York / US Consulates</td><td class='border-b border-r border-slate-300 p-2.5 font-semibold'>$60 USD</td><td class='border-b border-slate-300 p-2.5'>4–6 weeks</td></tr>
                        </table>
                    </div>
                `
            }
        ]
    },
    {
        id: "japan-tourist-visa",
        badge: "Japan Travel",
        lastUpdated: "October 2026",
        title: "Japan Tourist Visa Guide for Filipinos",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
        shortDesc: "Complete walkthrough for Japanese Temporary Visitor visas, core documents, financial proof, JVAC submission, and approval tips.",
        quickBadges: [
            "🇯🇵 Visa Type: Temporary Visitor (Tourism)",
            "💵 Visa Fee: FREE",
            "📍 Submission: Via JVAC (VFS Global) or Accredited Agencies"
        ],
        steps: [
            { title: "Prepare Core Requirements", body: "Gather your valid signed passport, completed Japan visa application form, photo, and PSA certificates." },
            { title: "Proof of Financial Capacity", body: "Secure an original Bank Certificate (with ADB) and your latest Income Tax Return (ITR)." }
        ],
        tip: "Huwag gumamit ng friction pen o pambura sa Japan visa application form!",
        categories: [
            {
                name: "1. Core Requirements",
                tip: "Huwag gumamit ng friction pen o pambura sa Japan visa application form!",
                content: `<h4 class='text-lg font-bold text-slate-900 mb-2'>Essential Application Documents</h4><p>Valid PH Passport, visa application form, photo, and PSA documents.</p>`
            },
            {
                name: "2. Financial Proof",
                tip: "Ang Average Daily Balance (ADB) ang tinitignan ng Embassy.",
                content: `<h4 class='text-lg font-bold text-slate-900 mb-2'>Financial Capability</h4><p>Bank certificate with ADB and latest ITR.</p>`
            }
        ]
    },
    {
        id: "visa-free-asean",
        badge: "Visa-Free Travel",
        lastUpdated: "October 2026",
        title: "ASEAN Visa-Free Checklist for Filipinos",
        image: "https://images.unsplash.com/photo-1508248467877-aec1b08de376?auto=format&fit=crop&w=800&q=80",
        shortDesc: "Easy checklist for traveling visa-free to Singapore, Thailand, Malaysia, Vietnam, and Hong Kong.",
        steps: [
            "<strong>1. Passport Expiry Check:</strong> Must be valid for at least 6 months.",
            "<strong>2. Onward & Return Travel:</strong> Have confirmed return tickets ready."
        ],
        tip: "Kahit visa-free, hinding-hindi ibig sabihin na automatic ang entry!"
    },
    {
        id: "taiwan-visafree",
        badge: "Taiwan Travel",
        lastUpdated: "October 2026",
        title: "Taiwan Visa-Free Entry Guide",
        image: "https://images.unsplash.com/photo-1508873696983-2df5c920ac9c?auto=format&fit=crop&w=800&q=80",
        shortDesc: "Simple steps for Philippine passport holders visiting Taiwan visa-free for up to 14 days.",
        steps: [
            { title: "Passport Check", body: "Valid for at least 6 months." },
            { title: "Online Arrival Card", body: "Fill out the ROC Travel Authorization Certificate online." }
        ],
        tip: "Libre ang pagkuha ng ROC Travel Authorization Certificate online."
    },
    {
        id: "south-america-visafree",
        badge: "Latin America Travel",
        lastUpdated: "October 2026",
        title: "South America Travel Guide for Filipino Travelers",
        image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80",
        shortDesc: "Comprehensive guide for PH passport holders visiting visa-free nations, consular visa requirements, and US/Schengen transit rules.",
        steps: [
            { title: "Check Country Visa Requirements", body: "Know which nations are visa-free (Brazil, Colombia, Peru, Bolivia)." }
        ],
        tip: "Maganda sa Brazil, Colombia, Peru, at Bolivia dahil visa-free tayo!"
    },
    {
        id: "us-b1b2",
        badge: "U.S. Tourist Visa",
        lastUpdated: "October 2026",
        title: "U.S. B1/B2 Tourist Visa Walkthrough",
        image: "IMG_4170.jpeg",
        shortDesc: "A friendly breakdown of filling out the DS-160, paying fees, and preparing for your interview in Manila.",
        steps: [
            { title: "Complete DS-160 Online", body: "Fill out the online DS-160 Application Form carefully and truthfully." }
        ],
        tip: "Ang DS-160 ang pinakamahalagang dokumento sa buong application mo."
    },
    {
        id: "american-dream",
        badge: "U.S. Pathways",
        lastUpdated: "October 2026",
        title: "Pathway to the American Dream (US Immigration)",
        image: "IMG_6797.jpeg",
        shortDesc: "Exploring legitimate legal pathways to U.S. permanent residency: family sponsorship, Form I-130 Complete Guide, and employment petitions.",
        steps: [
            { title: "Determine Eligibility & Gather Documents", body: "Verify qualifying family relationship and assemble supporting records." }
        ],
        tip: "Walang shortcut sa U.S. immigration!"
    }
];
