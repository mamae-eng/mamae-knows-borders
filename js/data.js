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
            "<strong>Prepare Civil Records & IDs:</strong> Order your official birth certificate via <a href=\"https://www.psaserbilis.com.ph/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-blue-600 underline font-semibold\">PSA Serbilis</a> or <a href=\"https://psahelpline.ph/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-blue-600 underline font-semibold\">PSAHelpline.ph</a>. Prepare 1 valid primary government ID (e.g., PhilID, Driver's License, UMID, SSS).",
            "<strong>Book Official Appointment & Pay:</strong> Book exclusively on the official <a href=\"https://www.passport.gov.ph/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-blue-600 underline font-semibold\">DFA Passport Appointment System</a>.",
            "<strong>Personal Appearance & Biometrics:</strong> Arrive 15–30 minutes early with your printed appointment packet.",
            "<strong>Encoder Check & Claiming:</strong> Review the encoder’s screen letter-by-letter before confirming."
        ],
        tip: "Wag na wag magpapaloko sa Facebook appointment fixers! Walang VIP express slots—libre ang official appointment system.",
        categories: [
            {
                name: "1. First-Time Adult",
                tip: "Kung unreadable, kupas, o malabo ang PSA Birth Certificate mo, wag mo nang ipilit sa counter—irereject lang yan!",
                content: `<h4 class='text-lg font-bold text-slate-900 mb-2'>Core Requirements for First-Time Adult Applicants (18+)</h4><p>Confirmed appointment packet & completed form, original PSA birth certificate, and 1 accepted primary government ID.</p>`
            },
            {
                name: "2. Booking & Appointment",
                tip: "Gamitin ang personal email na ikaw mismo ang may hawak ng password!",
                content: `<h4 class='text-lg font-bold text-slate-900 mb-2'>Official Appointment Workflow</h4><p>Book exclusively through the official DFA portal. Pay within the deadline.</p>`
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
