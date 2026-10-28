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
                            <div class='bg-blue-50/80 border border-blue-200 rounded-2xl p-4 mt-4'>
                                <h5 class='font-bold text-blue-950 text-sm mb-2 flex items-center'><i class='fa-solid fa-file-pdf text-blue-600 mr-2'></i> How to Handle Your Appointment Packet & Form</h5>
                                <ul class='list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700'>
                                    <li>When you book online, DFA emails your Confirmed Appointment Packet PDF (includes checklist, barcoded application form, and 2 e-Receipt copies).</li>
                                    <li><strong>Important:</strong> DO NOT sign or thumbmark the form at home! You must sign it in front of the DFA processing officer during your appointment.</li>
                                    <li><strong>Paper requirement:</strong> Must be printed single-sided on clean A4 bond paper with clear, unsmudged barcodes.</li>
                                </ul>
                            </div>
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
                            <div class='bg-blue-50/80 border border-blue-200 rounded-2xl p-4 mt-4'>
                                <h5 class='font-bold text-blue-950 text-sm mb-2 flex items-center'><i class='fa-solid fa-file-pdf text-blue-600 mr-2'></i> How to Handle Your Appointment Packet & Form</h5>
                                <ul class='list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700'>
                                    <li>When you book online, DFA emails your Confirmed Appointment Packet PDF (includes checklist, barcoded application form, and 2 e-Receipt copies).</li>
                                    <li><strong>Important:</strong> DO NOT sign or thumbmark the form at home! You must sign it in front of the DFA processing officer during your appointment.</li>
                                    <li><strong>Paper requirement:</strong> Must be printed single-sided on clean A4 bond paper with clear, unsmudged barcodes.</li>
                                </ul>
                            </div>
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
                            <h5 class='font-bold text-slate-800 mt-3 mb-1'>Accompaniment Rules:</h5>
                            <ul class='list-disc pl-5 space-y-1 text-slate-700 mb-4'>
                                <li><strong>Married Parents:</strong> Either parent may accompany the child, presenting their valid primary ID + copy of the marriage certificate.</li>
                                <li><strong>Unmarried Parents:</strong> Philippine law grants sole parental authority to the mother. The mother must accompany the child. If someone else accompanies the child, they must present a notarized Special Power of Attorney (SPA) executed by the mother.</li>
                                <li><strong>Authorized Representative:</strong> Requires a notarized SPA, valid government ID of the companion, and copy of parent’s valid ID.</li>
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
                                <li><strong>Late Registered Birth Certificate:</strong> If registered late, DFA may ask for 2 supporting documents (e.g., Form 137 / school records, baptismal certificate, or voter's registration record) to confirm identity.</li>
                                <li><strong>Discrepancies in Name/Birthplace:</strong> Must be resolved through a formal annotated PSA certificate (e.g., clerical error correction under RA 9048/RA 10172) before applying.</li>
                            </ul>
                        `
                    },
                    {
                        name: "7. Abroad & New York",
                        tip: "Kung sa <a href='https://newyorkpcg.org/pcgny/' target='_blank' rel='noopener noreferrer' class='text-amber-900 underline font-bold'>PCG New York</a> ka mag-aapply, dumaan muna sa US Post Office bago pumunta sa Fifth Avenue! Bilhin ang USPS Priority Mail Flat Rate envelope na may tracking number at postage stamp. Hindi nagbebenta ng stamp o sobre sa loob ng konsulado.",
                        content: `
                            <h4 class='text-lg font-bold text-slate-900 mb-2'>Overseas Processing & PCG New York Procedures</h4>
                            <ul class='list-disc pl-5 space-y-2 text-slate-700 mb-4'>
                                <li><strong>Consulate Location:</strong> Philippine Consulate General in New York at <strong>556 Fifth Avenue, New York, NY 10036</strong>.</li>
                                <li><strong>Appointment Booking:</strong> Book via the official <a href='https://newyorkpcg.org/' target='_blank' rel='noopener noreferrer' class='text-blue-600 underline font-semibold'>PCG New York Online Appointment Portal</a>. Arrive 5 to 15 minutes before your scheduled slot.</li>
                                <li><strong>Proof of Philippine Citizenship (Mandatory for Overseas):</strong>
                                    <ul class='list-disc pl-5 mt-1 space-y-1'>
                                        <li>Valid Philippine passport</li>
                                        <li>Green Card / Permanent Resident Card</li>
                                        <li>Valid US Visa or work permit</li>
                                        <li>For Dual Citizens (RA 9225): Original and photocopies of Identification Certificate, Order of Approval, and Oath of Allegiance.</li>
                                    </ul>
                                </li>
                                <li><strong>Passport Mailing Return Requirements:</strong> Applicants must bring their own self-addressed, stamped USPS Priority Mail or Priority Mail Express Flat Rate envelope with tracking number. (Track status later via the PCG New York Passport Tracker).</li>
                                <li><strong>Timeline:</strong> Consular passport applications take 4 to 6 weeks (or 6 to 8 weeks in some posts) because booklets are printed at the central DFA facility in the Philippines and dispatched via diplomatic pouch.</li>
                            </ul>
                        `
                    },
                    {
                        name: "8. Fees & Timeline",
                        tip: "Tandaan ang 6-Month Passport Validity Rule ng mga airline at immigration! Karamihan sa mga bansa ay hindi magpapasakay kung less than 6 months na lang ang natitira sa passport mo. Mag-renew na agad kapag 8 hanggang 10 months na lang ang validity.",
                        content: `
                            <h4 class='text-lg font-bold text-slate-900 mb-2'>Costs, Planning Timeline & Validity</h4>
                            <div class='w-full overflow-x-auto mb-4 rounded-xl border border-slate-300'>
                                <table class='w-full min-w-[460px] border-collapse text-xs sm:text-sm'>
                                    <tr class='bg-slate-100'><th class='border-b border-r border-slate-300 p-2.5 text-left'>Application Location / Type</th><th class='border-b border-r border-slate-300 p-2.5 text-left'>Official Fee</th><th class='border-b border-slate-300 p-2.5 text-left'>Processing Estimate</th></tr>
                                    <tr><td class='border-b border-r border-slate-300 p-2.5'>Philippines — Regular</td><td class='border-b border-r border-slate-300 p-2.5 font-semibold'>₱950</td><td class='border-b border-slate-300 p-2.5'>10–12 working days</td></tr>
                                    <tr><td class='border-b border-r border-slate-300 p-2.5'>Philippines — Expedited</td><td class='border-b border-r border-slate-300 p-2.5 font-semibold'>₱1,200</td><td class='border-b border-slate-300 p-2.5'>5–7 working days</td></tr>
                                    <tr><td class='border-b border-r border-slate-300 p-2.5'>Lost Valid Passport Penalty Fee</td><td class='border-b border-r border-slate-300 p-2.5 font-semibold'>+₱350</td><td class='border-b border-slate-300 p-2.5'>+15 days verification</td></tr>
                                    <tr><td class='border-b border-r border-slate-300 p-2.5'>PCG New York / US Consulates</td><td class='border-b border-r border-slate-300 p-2.5 font-semibold'>$60 USD</td><td class='border-b border-slate-300 p-2.5'>4–6 weeks</td></tr>
                                    <tr><td class='border-r border-slate-300 p-2.5'>Lost Valid Passport Fee (Overseas)</td><td class='border-r border-slate-300 p-2.5 font-semibold'>~$150 USD</td><td class='p-2.5'>Case-by-case clearance</td></tr>
                                </table>
                            </div>
                            <h5 class='font-bold text-slate-800 mt-4 mb-1'>Passport Validity Period:</h5>
                            <ul class='list-disc pl-5 space-y-1 text-slate-700 mb-4'>
                                <li><strong>10 Years:</strong> For all Filipino citizens aged 18 and older at the time of issuance.</li>
                                <li><strong>5 Years:</strong> For all applicants under 18 years of age.</li>
                            </ul>
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
                    "💵 Visa Fee: FREE (Standard service/agency fees apply)",
                    "📍 Submission: Via JVAC (VFS Global) or Accredited Agencies"
                ],
                steps: [
                    { title: "Prepare Core Requirements", body: "Gather your valid signed passport, completed Japan visa application form, 4.5cm x 3.5cm photo, PSA birth/marriage certificates, and schedule of stay." },
                    { title: "Proof of Financial Capacity", body: "Secure an original Bank Certificate (with ADB) and your latest Income Tax Return (ITR / BIR Form 2316)." },
                    { title: "Book Appointment & Submit", body: "Secure an online appointment slot at the Japan Visa Application Centre (JVAC run by VFS Global) or submit through an accredited travel agency." },
                    { title: "Wait for Processing & Collect", body: "Standard processing takes 4 to 5 working days (or longer during peak seasons). Collect your passport once approved." }
                ],
                tip: "Huwag gumamit ng friction pen o pambura sa Japan visa application form! Kailangan pulido at walang bura ang bawat detalye, o ire-reject agad sa counter.",
                categories: [
                    {
                        name: "1. Core Requirements",
                        tip: "Huwag gumamit ng friction pen o pambura sa Japan visa application form! Kailangan pulido at walang bura ang bawat detalye, o ire-reject agad sa counter.",
                        content: `
                            <h4 class='text-lg font-bold text-slate-900 mb-2'>Essential Application Documents</h4>
                            <ul class='list-disc pl-5 space-y-2 text-slate-700 mb-4'>
                                <li><strong>Valid Philippine Passport:</strong> Must have two blank pages and be in good condition.</li>
                                <li><strong>Visa Application Form:</strong> Completely and accurately filled out (typed or handwritten legibly without erasures).</li>
                                <li><strong>Passport Photo:</strong> Recent 4.5cm x 3.5cm photo with white background attached to the form.</li>
                                <li><strong>PSA Civil Documents:</strong> Original PSA Birth Certificate and Marriage Certificate (if applicable).</li>
                                <li><strong>Schedule of Stay:</strong> Day-by-day itinerary of your activities in Japan.</li>
                            </ul>
                        `
                    },
                    {
                        name: "2. Financial & Employment Proof",
                        tip: "Ang Average Daily Balance (ADB) ang tinitignan ng Embassy, hindi lang ang ending balance mo. Siguraduhing may sapat na laman ang bank account mo para sa haba ng biyahe mo.",
                        content: `
                            <h4 class='text-lg font-bold text-slate-900 mb-2'>Demonstrating Financial Capability</h4>
                            <ul class='list-disc pl-5 space-y-2 text-slate-700 mb-4'>
                                <li><strong>Bank Certificate:</strong> Original bank certification reflecting account balance and Average Daily Balance (ADB).</li>
                                <li><strong>Income Tax Return (ITR):</strong> Latest BIR Form 2316 or original ITR document. (If unemployed or sponsored, provide an Affidavit of Support and sponsor's financial documents).</li>
                                <li><strong>Employment Proof:</strong> Certificate of Employment (COE) with salary details and approved leave of absence.</li>
                            </ul>
                        `
                    },
                    {
                        name: "3. JVAC vs. Accredited Agencies",
                        tip: "Unahan sa JVAC appointment slots! Kung gipit ka sa oras o puno ang online calendar, mas mabilis dumaan sa mga accredited travel agencies ng Japan Embassy.",
                        content: `
                            <h4 class='text-lg font-bold text-slate-900 mb-2'>Where and How to Submit Your Application</h4>
                            <p class='text-slate-700 mb-3'>You have two primary submission pathways in the Philippines:</p>
                            <ul class='list-disc pl-5 space-y-2 text-slate-700 mb-4'>
                                <li><strong>JVAC (VFS Global):</strong> Book an online appointment slot at the official Japan Visa Application Centre. Ideal for direct individual applications.</li>
                                <li><strong>Accredited Travel Agencies:</strong> Submit directly through designated travel agencies authorized by the Japanese Embassy. They handle submission and collection for a reasonable service fee.</li>
                            </ul>
                        `
                    },
                    {
                        name: "4. Approval Tips & Pitfalls",
                        tip: "Walang interview para sa tourist visa sa Japan—nakasalalay ang approval mo sa linis, linaw, at kumpletong dokumento na isusumite mo sa agency o JVAC!",
                        content: `
                            <h4 class='text-lg font-bold text-slate-900 mb-2'>Maximizing Your Chances of Approval</h4>
                            <ul class='list-disc pl-5 space-y-2 text-slate-700 mb-4'>
                                <li>Ensure your itinerary is realistic, logical, and matches your financial capability.</li>
                                <li>Never use erasable pens, correction tape, or white-out on official forms.</li>
                                <li>Double-check that all names, dates, and passport numbers match across all submitted documents.</li>
                            </ul>
                        `
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
                    "<strong>1. Passport Expiry Check:</strong> Ensure your passport is valid for at least 6 months before your departure date.",
                    "<strong>2. Onward & Return Travel:</strong> Have confirmed return or onward flight tickets ready for immigration inspection.",
                    "<strong>3. Accommodation Proof:</strong> Print your hotel bookings, Airbnb reservations, or host invitation letters.",
                    "<strong>4. Employment Ties:</strong> Bring your company ID, Certificate of Employment (COE), or approved leave form for smooth NAIA clearance."
                ],
                tip: "Kahit visa-free, hinding-hindi ibig sabihin na automatic ang entry! Respetuhin ang allowed stay days ng bawat bansa at huwag mag-overstay para hindi ma-blacklist sa immigration.",
                categories: [
                    {
                        name: "1. Visa-Free Destinations & Limits",
                        tip: "Kahit visa-free, hinding-hindi ibig sabihin na automatic ang entry! Respetuhin ang allowed stay days ng bawat bansa at huwag mag-overstay para hindi ma-blacklist sa immigration.",
                        content: `
                            <h4 class='text-lg font-bold text-slate-900 mb-2'>Major ASEAN & Regional Destinations & Limits</h4>
                            <p class='text-slate-700 mb-3'>Philippine passport holders enjoy visa-free or simplified entry privileges across several regional neighbors. Always monitor the exact allowable duration:</p>
                            <ul class='list-disc pl-5 space-y-2 text-slate-700 mb-4'>
                                <li><strong>Singapore:</strong> Visa-free up to 30 days</li>
                                <li><strong>Thailand:</strong> Visa-free up to 60 days</li>
                                <li><strong>Malaysia:</strong> Visa-free up to 30 days</li>
                                <li><strong>Vietnam:</strong> Visa-free up to 21 days</li>
                                <li><strong>Hong Kong:</strong> Visa-free up to 14 days</li>
                                <li><strong>Taiwan:</strong> Visa-free program rules (check current promotional periods and complete online authorization certificate prior to flight)</li>
                            </ul>
                        `
                    },
                    {
                        name: "2. Mandatory Documents",
                        tip: "I-print lahat! Huwag umasang papayagan ka ng BI immigration officer kung nakatago lang sa PDF o screenshot sa cellphone ang return ticket at hotel booking mo.",
                        content: `
                            <h4 class='text-lg font-bold text-slate-900 mb-2'>Essential Entry Proofs Required for Inspection</h4>
                            <p class='text-slate-700 mb-3'>Immigration officers abroad check these core documents upon landing:</p>
                            <ul class='list-disc pl-5 space-y-2 text-slate-700 mb-4'>
                                <li><strong>Valid PH Passport:</strong> Minimum 6 months validity from your arrival date.</li>
                                <li><strong>Confirmed Return Ticket:</strong> Strict requirement across all immigration desks.</li>
                                <li><strong>Accommodation Proof:</strong> Printed hotel bookings, Airbnb reservations, or host invitation letters with contact details.</li>
                                <li><strong>Financial Capacity:</strong> Sufficient cash, credit cards, or bank certificates for your duration of stay.</li>
                            </ul>
                        `
                    },
                    {
                        name: "3. Employment & Financial Ties",
                        tip: "Magdala ng solidong patunay na babalik ka ng Pilipinas. Ang company ID at COE ang isa sa pinakamahalagang pananggalang mo sa NAIA counter.",
                        content: `
                            <h4 class='text-lg font-bold text-slate-900 mb-2'>Proving Strong Ties to the Philippines</h4>
                            <p class='text-slate-700 mb-3'>To satisfy Bureau of Immigration requirements before leaving NAIA, prepare proof that you have compelling reasons to return home:</p>
                            <ul class='list-disc pl-5 space-y-2 text-slate-700 mb-4'>
                                <li><strong>Employed:</strong> Company ID, Certificate of Employment (COE) with salary details, and approved leave form.</li>
                                <li><strong>Business Owners / Freelancers:</strong> DTI/SEC registration, business permits, or active client contracts and income proofs.</li>
                                <li><strong>Students:</strong> Valid school ID, enrollment form, and school-endorsements if traveling during the semester.</li>
                            </ul>
                        `
                    },
                    {
                        name: "4. NAIA Immigration Tips",
                        tip: "Maging tapat, kalmado, at direkta sumagot sa tanong ng immigration officer. Huwag mag-overexplain o magbigay ng impormasyon na hindi naman itinanong.",
                        content: `
                            <h4 class='text-lg font-bold text-slate-900 mb-2'>Passing Immigration with Confidence</h4>
                            <p class='text-slate-700 mb-3'>Keep your departure process seamless with these field-tested tips:</p>
                            <ul class='list-disc pl-5 space-y-2 text-slate-700 mb-4'>
                                <li>Answer questions directly, truthfully, and concisely without over-explaining or volunteering unasked details.</li>
                                <li>Keep all paper documents (return ticket, hotel voucher, employment ID) organized neatly in a physical folder.</li>
                                <li>Maintain a calm, respectful demeanor during inspection.</li>
                            </ul>
                        `
                    }
                ]
            },
            {
                id: "taiwan-visafree",
                badge: "Taiwan Travel",
                lastUpdated: "October 2026",
                title: "Taiwan Visa-Free Entry Guide",
                image: "https://images.unsplash.com/photo-1508873696983-2df5c920ac9c?auto=format&fit=crop&w=800&q=80",
                shortDesc: "Simple steps for Philippine passport holders visiting Taiwan visa-free for up to 14 days.",
                quickBadges: [
                    "Stay Limit: Up to 14 Days",
                    "Requirement: ROC Travel Auth Cert",
                    "Passport Validity: 6+ Months"
                ],
                steps: [
                    { title: "Passport Check", body: "Ensure your Philippine passport is valid for at least 6 months upon your planned arrival date." },
                    { title: "Return Air Ticket", body: "Hold a confirmed return flight booking or onward ticket out of Taiwan." },
                    { title: "Online Arrival Card", body: 'Fill out the online ROC Travel Authorization Certificate prior to flying via the <a href="https://niaspeedy.immigration.gov.tw/nia_online/app/index.action" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-semibold">National Immigration Agency Portal</a>.' },
                    { title: "Hotel & Funds", body: "Have your hotel accommodation details, host contact info, and sufficient travel funds ready for inspection." }
                ],
                tip: "Fill out your Taiwan online arrival card a day before your flight so you breeze right through customs!",
                categories: [
                    {
                        name: "1. Entry Conditions & Limit",
                        tip: "I-fill up ang arrival card online bago lumipad para deretso na sa automated customs inspection paglapag sa Taoyuan.",
                        content: `
                            <h4 class='text-lg font-bold text-slate-900 mb-2'>Taiwan Visa-Free Program Rules</h4>
                            <p class='text-slate-700 mb-3'>Philippine passport holders can enter Taiwan visa-free for up to 14 days under specific tourism promotion and trial extension schemes.</p>
                            <ul class='list-disc pl-5 space-y-2 text-slate-700 mb-4'>
                                <li><strong>Allowed Duration:</strong> Maximum of 14 consecutive days of stay. Do not overstay!</li>
                                <li><strong>Passport Requirement:</strong> Must have at least 6 months validity remaining upon entry.</li>
                                <li><strong>Return Ticket:</strong> Confirmed return or onward ticket is strictly required by border officers.</li>
                            </ul>
                        `
                    },
                    {
                        name: "2. Online ROC Certificate",
                        tip: "Libre ang pagkuha ng ROC Travel Authorization Certificate online. Huwag magpapabayad sa mga scam sites na naniningil!",
                        content: `
                            <h4 class='text-lg font-bold text-slate-900 mb-2'>How to Secure Your ROC Travel Authorization</h4>
                            <p class='text-slate-700 mb-3'>Before boarding your flight to Taiwan, you must secure online clearance:</p>
                            <ul class='list-disc pl-5 space-y-2 text-slate-700 mb-4'>
                                <li>Visit the official <a href='https://niaspeedy.immigration.gov.tw/nia_online/app/index.action' target='_blank' rel='noopener noreferrer' class='text-blue-600 underline font-semibold'>National Immigration Agency Portal</a>.</li>
                                <li>Fill out the <abbr title="Republic of China">ROC</abbr> Travel Authorization Certificate form accurately using your passport details.</li>
                                <li>Print out a physical copy of the approved certificate to present at NAIA check-in and Taiwan immigration.</li>
                            </ul>
                        `
                    },
                    {
                        name: "3. Arrival & Customs Tips",
                        tip: "Maging handa sa pagpapakita ng hotel booking at return ticket sa Taoyuan Airport kung sakaling hanapin ng immigration officer.",
                        content: `
                            <h4 class='text-lg font-bold text-slate-900 mb-2'>Smooth Arrival in Taiwan</h4>
                            <p class='text-slate-700 mb-3'>Keep your trip stress-free upon landing:</p>
                            <ul class='list-disc pl-5 space-y-2 text-slate-700 mb-4'>
                                <li>Have your printed ROC certificate, passport, return ticket, and hotel booking ready in a folder.</li>
                                <li>Observe strict customs regulations: do not bring pork products or meat items into Taiwan (heavy fines apply!).</li>
                            </ul>
                        `
                    }
                ]
            },
            {
                id: "south-america-visafree",
                badge: "Latin America Travel",
                lastUpdated: "October 2026",
                title: "South America Travel Guide for Filipino Travelers",
                image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80",
                shortDesc: "Comprehensive guide for PH passport holders visiting visa-free nations, consular visa requirements, and US/Schengen transit rules.",
                quickBadges: [
                    "🇧🇷 Brazil, 🇨🇴 Colombia, 🇵🇪 Peru, 🇧🇴 Bolivia: Visa-Free (Up to 90–183 Days)",
                    "⚠️ Argentina, Chile, Uruguay: Consular Visa Required",
                    "✈️ Critical Warning: US/Schengen Transit Visas Required for Layovers"
                ],
                steps: [
                    { title: "Check Country Visa Requirements", body: "Know which nations are visa-free (Brazil, Colombia, Peru, Bolivia) versus those requiring consular sticker visas before departure (Argentina, Chile, Uruguay)." },
                    { title: "Review Layover & Transit Routes", body: "Make sure your transit airports in the US, Europe, or Canada do not require separate transit visas (even if you stay airside)." },
                    { title: "Prepare Yellow Fever & Health Proof", body: "Secure your International Certificate of Vaccination (ICV) for Yellow Fever from the Bureau of Quarantine if required by your destination." },
                    { title: "Financials & Onward Travel", body: "Bring confirmed roundtrip flight itineraries, hotel bookings, international travel insurance, and proof of financial capacity." }
                ],
                tip: "Maganda sa Brazil, Colombia, Peru, at Bolivia dahil visa-free tayo! Pero tandaan: visa-free ay hindi automatic na entry—dalhin ang buong travel folder mo.",
                categories: [
                    {
                        name: "1. Visa-Free South American Countries",
                        tip: "Maganda sa Brazil, Colombia, Peru, at Bolivia dahil visa-free tayo! Pero tandaan: visa-free ay hindi automatic na entry—dalhin ang buong travel folder mo.",
                        content: `
                            <h4 class='text-lg font-bold text-slate-900 mb-2'>Visa-Free Destinations for Philippine Passport Holders</h4>
                            <p class='text-slate-700 mb-3'>You can enter the following South American nations without a tourist visa for extended holiday stays:</p>
                            <ul class='list-disc pl-5 space-y-2 text-slate-700 mb-4'>
                                <li><strong>Brazil:</strong> Visa-free for up to 90 days.</li>
                                <li><strong>Colombia:</strong> Visa-free for up to 90 days.</li>
                                <li><strong>Peru:</strong> Visa-free for up to 183 days.</li>
                                <li><strong>Bolivia:</strong> Visa-free for up to 90 days.</li>
                            </ul>
                        `
                    },
                    {
                        name: "2. Countries Requiring Consular Visas",
                        tip: "Para sa Argentina, Chile, at Uruguay, kailangan mo munang kumuha ng visa sa embassy bago mag-book ng non-refundable flights. Huwag umasang may visa-on-arrival!",
                        content: `
                            <h4 class='text-lg font-bold text-slate-900 mb-2'>Destinations Requiring Prior Embassy Visas</h4>
                            <p class='text-slate-700 mb-3'>Make sure to secure your visas beforehand for these regional destinations:</p>
                            <ul class='list-disc pl-5 space-y-2 text-slate-700 mb-4'>
                                <li><strong>Argentina:</strong> Tourist visa required ahead of travel. (Note: Holders of valid US B1/B2 visas may be eligible to apply for an electronic travel authorization/eTA).</li>
                                <li><strong>Chile & Uruguay:</strong> Tourist visas required via respective embassies or consulates prior to booking non-refundable flights.</li>
                            </ul>
                        `
                    },
                    {
                        name: "3. US / Schengen Visa Perks & Exemptions",
                        tip: "Malaking tulong ang may valid US o Schengen visa dahil bukod sa nagpapadali ito ng transit sa US o Europe, pinapadali rin nito ang pagpoproseso ng ilang visa applications sa Americas.",
                        content: `
                            <h4 class='text-lg font-bold text-slate-900 mb-2'>The Value of Major Visas for Transatlantic Travel</h4>
                            <p class='text-slate-700 mb-3'>How holding major visas streamlines your journey:</p>
                            <ul class='list-disc pl-5 space-y-2 text-slate-700 mb-4'>
                                <li>While holding a US or Schengen visa does not automatically bypass entry rules for countries requiring a national visa, it completely solves the massive logistical hurdle of transiting through North American or European aviation hubs on your way across the Atlantic.</li>
                            </ul>
                        `
                    },
                    {
                        name: "4. Health & Long-Haul Transit Traps",
                        tip: "Huwag kalimutan ang Yellow Fever card at ang US o Schengen transit visa mo. Kahit 1 hour lang ang layover mo sa US para sa flight patungong South America, hahanapin yan ng airline!",
                        content: `
                            <h4 class='text-lg font-bold text-slate-900 mb-2'>Crucial Health and Flight Connection Rules</h4>
                            <p class='text-slate-700 mb-3'>Pay close attention to these mandatory health and logistical checkpoints:</p>
                            <ul class='list-disc pl-5 space-y-2 text-slate-700 mb-4'>
                                <li><strong>Yellow Fever Certificate (ICV):</strong> Mandatory yellow fever vaccination card from the Bureau of Quarantine when entering or connecting through endemic regions.</li>
                                <li><strong>Transit Visas:</strong> Most flights from Manila to South America transit through the United States (LAX, SFO, MIA) or Europe (MAD). A valid US or Schengen transit/tourist visa is strictly required just to make the plane connection, even if you never leave the airport.</li>
                            </ul>
                        `
                    }
                ]
            },
            {
                id: "us-b1b2",
                badge: "U.S. Tourist Visa",
                lastUpdated: "October 2026",
                title: "U.S. B1/B2 Tourist Visa Walkthrough",
                image: "IMG_4170.jpeg",
                shortDesc: "A friendly breakdown of filling out the DS-160, paying fees, and preparing for your interview in Manila.",
                quickBadges: [
                    "🇺🇸 Visa Type: B1/B2 Tourist & Business",
                    "💵 MRV Fee: $185 USD (Non-refundable)",
                    "📍 Interview Location: U.S. Embassy Manila"
                ],
                steps: [
                    { title: "Complete DS-160 Online", body: "Fill out the online DS-160 Application Form carefully and truthfully. Save your Application ID and security answers immediately." },
                    { title: "Pay MRV Fee & Create Profile", body: "Register on the official USTravelDocs portal, pay the non-refundable $185 USD MRV application fee through authorized channels, and link your receipt." },
                    { title: "Book Your Interview Slot", body: "Access the scheduling system to lock in your consular interview date and time at the U.S. Embassy in Manila." },
                    { title: "Attend the Consular Interview", body: "Appear in person at the U.S. Embassy with your passport, DS-160 confirmation page, and strong proof of economic and family ties to the Philippines." }
                ],
                tip: "Ang DS-160 ang pinakamahalagang dokumento sa buong application mo. Huwag magsinungaling o magtago ng impormasyon dahil nakikita ng consul ang buong history mo.",
                categories: [
                    {
                        name: "1. Mastering Form DS-160",
                        tip: "Ang DS-160 ang pinakamahalagang dokumento sa buong application mo. Huwag magsinungaling o magtago ng impormasyon dahil nakikita ng consul ang buong history mo.",
                        content: `
                            <h4 class='text-lg font-bold text-slate-900 mb-2'>Essential Rules for the Online Application</h4>
                            <ul class='list-disc pl-5 space-y-2 text-slate-700 mb-4'>
                                <li>Every answer on your DS-160 form must be 100% truthful, consistent, and accurate.</li>
                                <li>Save your Application ID, security question answers, and print/save the DS-160 confirmation barcode page.</li>
                                <li>Double-check employment history, travel history (past 5 years), and family details.</li>
                            </ul>
                        `
                    },
                    {
                        name: "2. MRV Fee & Account Setup",
                        tip: "Tandaan na ang $185 MRV fee ay non-refundable at valid lang sa loob ng isang taon para sa pag-book ng interview sa Pilipinas.",
                        content: `
                            <h4 class='text-lg font-bold text-slate-900 mb-2'>Managing Payments and Profile Creation</h4>
                            <ul class='list-disc pl-5 space-y-2 text-slate-700 mb-4'>
                                <li>Create your profile on the official <a href='https://www.ustraveldocs.com/ph/' target='_blank' rel='noopener noreferrer' class='text-blue-600 underline font-semibold'>ustraveldocs.com portal</a>.</li>
                                <li>Pay the $185 USD Machine Readable Visa (MRV) fee via authorized payment partners (e.g., BPI or RCBC online/OTC).</li>
                                <li>Keep your receipt reference number to activate your scheduling account.</li>
                            </ul>
                        `
                    },
                    {
                        name: "3. Booking Your Interview",
                        tip: "Mag-abang ng available slots sa umaga o hapon. Huwag magtiwala sa mga nag-aalok ng 'sure slot' o fixer sa Facebook dahil scam yan!",
                        content: `
                            <h4 class='text-lg font-bold text-slate-900 mb-2'>Securing Your Schedule at Roxas Boulevard</h4>
                            <ul class='list-disc pl-5 space-y-2 text-slate-700 mb-4'>
                                <li>Log back into the scheduling portal once your payment is reflected.</li>
                                <li>Choose an available interview slot at the <a href='https://ph.usembassy.gov/visas/' target='_blank' rel='noopener noreferrer' class='text-blue-600 underline font-semibold'>U.S. Embassy in Manila</a>.</li>
                                <li>Print your Appointment Confirmation Package.</li>
                            </ul>
                        `
                    },
                    {
                        name: "4. Embassy Interview Tips",
                        tip: "Hindi titignan ng consul ang mga folders ng litrato o land titles na dala mo. Ang labanan ay kung paano mo patunayan sa loob ng 2 minuto na babalik ka ng Pilipinas!",
                        content: `
                            <h4 class='text-lg font-bold text-slate-900 mb-2'>Surviving the Window Interview</h4>
                            <ul class='list-disc pl-5 space-y-2 text-slate-700 mb-4'>
                                <li>Consular officers rarely look at heavy folders of documents; they judge your application primarily on your DS-160 and your verbal answers.</li>
                                <li>Prove strong ties to the Philippines (stable job, property, business, immediate family) demonstrating you will return after temporary travel.</li>
                                <li>Be calm, concise, and confident.</li>
                            </ul>
                        `
                    }
                ]
            },
            {
                id: "american-dream",
                badge: "U.S. Pathways",
                lastUpdated: "October 2026",
                title: "Pathway to the American Dream (US Immigration)",
                image: "IMG_6797.jpeg",
                shortDesc: "Exploring legitimate legal pathways to U.S. permanent residency: family sponsorship, Form I-130 Complete Guide, and employment petitions.",
                quickBadges: [
                    "🇺🇸 Goal: U.S. Permanent Residency (Green Card)",
                    "👨‍👩‍👧 Primary Routes: Family & Employment",
                    "⚠️ Warning: Beware of Immigration Scams"
                ],
                steps: [
                    { title: "Determine Eligibility & Gather Documents", body: "Before filling out any paperwork, verify your qualifying family relationship and assemble all necessary supporting records (proof of petitioner status, civil marriage certificate, prior marriage terminations, and bona fide marriage evidence)." },
                    { title: "Download & Fill Official Forms", body: "Complete Form I-130 (Petition for Alien Relative) and Form I-130A (Supplemental Information for Spouse Beneficiary) accurately without erasures." },
                    { title: "Submit Petition & Pay Fees", body: "File your petition online via a secure USCIS account ($625) or by mail to the correct Lockbox facility ($675) with Form G-1145 for electronic updates." },
                    { title: "USCIS Review & Adjudication", body: "Track your case status using your 13-character receipt number (IOE...) from Form I-797C, respond to any RFEs, and await approval." }
                ],
                tip: "Walang shortcut sa U.S. immigration! Magtiwala lamang sa mga lisensyadong immigration attorney o accredited representatives ng DOJ/EOIR.",
                categories: [
                    {
                        name: "1. Family & Employment Petitions",
                        tip: "Walang shortcut sa U.S. immigration! Magtiwala lamang sa mga lisensyadong immigration attorney o accredited representatives ng DOJ/EOIR.",
                        content: `
                            <h4 class='text-lg font-bold text-slate-900 mb-2'>Core Legal Pathways to Permanent Residency</h4>
                            <p class='text-slate-700 mb-3'>Legitimate U.S. immigration is built on two primary sponsorship pillars managed through <a href='https://www.uscis.gov' target='_blank' rel='noopener noreferrer' class='text-blue-600 underline font-semibold'>USCIS</a>:</p>
                            <ul class='list-disc pl-5 space-y-2 text-slate-700 mb-4'>
                                <li><strong>Family-Based Immigration:</strong> Petitions filed by U.S. citizen or Green Card holder immediate relatives (Form I-130).</li>
                                <li><strong>Employment-Based Visas:</strong> Worker petitions sponsored by U.S. employers requiring specialized labor certification or professional skills (EB-2, EB-3).</li>
                            </ul>
                        `
                    },
                    {
                        name: "2. Form I-130 Complete Guide & Checklist",
                        tip: "Accuracy is critical! Minor errors or using outdated form editions can lead to immediate rejections.",
                        content: `
                            <div class="space-y-6">
                                <div class="bg-gradient-to-r from-indigo-800 to-indigo-950 rounded-2xl p-6 text-white shadow-md">
                                    <span class="bg-amber-400 text-indigo-950 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider inline-block mb-2">Form I-130 Masterclass Guide</span>
                                    <h3 class="text-2xl font-extrabold mb-2">Petition for Alien Relative Made Easy</h3>
                                    <p class="text-indigo-200 text-sm leading-relaxed">
                                        Navigate the family-based immigration journey with confidence. Check off your required documents below in real-time, and review the official step-by-step instructions.
                                    </p>
                                </div>

                                <!-- Interactive Checklist Box -->
                                <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                                    <div class="flex justify-between items-center mb-4 pb-4 border-b border-slate-100">
                                        <h4 class="font-bold text-slate-900 text-base"><i class="fa-solid fa-clipboard-list text-indigo-600 mr-2"></i> Interactive Document Checklist</h4>
                                        <span class="bg-indigo-50 text-indigo-900 px-3 py-1 rounded-lg font-bold text-xs border border-indigo-100">
                                            Completed: <span id="guideProgressText">0</span> / 12 items
                                        </span>
                                    </div>
                                    <div class="grid grid-cols-1 gap-3" id="embeddedChecklistGrid"></div>
                                    <div class="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center">
                                        <button onclick="resetEmbeddedChecklist()" class="text-slate-500 hover:text-slate-800 text-xs font-medium flex items-center gap-1.5 transition">
                                            <i class="fa-solid fa-rotate-right"></i> Reset Checklist
                                        </button>
                                    </div>
                                </div>

                                <!-- Detailed Steps Breakdown -->
                                <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                                    <h4 class="font-bold text-slate-900 text-lg mb-4"><i class="fa-solid fa-list-check text-indigo-600 mr-2"></i> Step-by-Step Filing Walkthrough</h4>
                                    
                                    <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                                        <h5 class="font-bold text-indigo-900 text-sm">Step 1: Determine Eligibility & Gather Documents</h5>
                                        <p class="text-xs text-slate-700 leading-relaxed">Before filling out any paperwork, verify your qualifying family relationship and assemble supporting records: U.S. birth certificate/passport or Green Card (front & back), official civil marriage certificate, divorce/annulment decrees for prior marriages, beneficiary birth certificate, passport-style photos, and joint lease/bank statements or utility bills for bona fide marriage evidence.</p>
                                    </div>

                                    <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                                        <h5 class="font-bold text-indigo-900 text-sm">Step 2: Download and Fill Out Official Forms</h5>
                                        <p class="text-xs text-slate-700 leading-relaxed">Accuracy is critical. Double-check that all names, dates of birth, and employment entries match identically across forms and supporting documents. Do not leave signature fields blank.</p>
                                        <div class="flex flex-wrap gap-2 pt-2">
                                            <a href="https://www.uscis.gov/i-130" target="_blank" rel="noopener noreferrer" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3.5 py-2 rounded-lg font-bold transition flex items-center gap-1.5 shadow-xs">
                                                <i class="fa-solid fa-arrow-up-right-from-square"></i> Official Form I-130
                                            </a>
                                     
                                            </a>
                                            <a href="https://www.uscis.gov/sites/default/files/document/forms/i-130instr.pdf" target="_blank" rel="noopener noreferrer" class="bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs px-3.5 py-2 rounded-lg font-bold transition flex items-center gap-1.5 shadow-xs">
                                                <i class="fa-solid fa-file-pdf"></i> Instructions for Form I-130 (PDF)
                                            </a>
                                        </div>
                                    </div>

                                    <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                                        <h5 class="font-bold text-indigo-900 text-sm">Step 3: Submit the Petition & Pay Fees</h5>
                                        <p class="text-xs text-slate-700 leading-relaxed">File online through your secure USCIS account ($625) for fastest receipt, or mail your complete physical packet to the correct Lockbox facility ($675 fee). Include Form G-1145 to receive text and email notifications when your case is accepted.</p>
                                    </div>

                                    <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                                        <h5 class="font-bold text-indigo-900 text-sm">Step 4: USCIS Review, Adjudication & Next Steps</h5>
                                        <p class="text-xs text-slate-700 leading-relaxed">Track your case status using your 13-character tracking number (IOE...) from Form I-797C. Promptly respond if USCIS issues a Request for Evidence (RFE). Upon approval, proceed to consular processing via the NVC or adjustment of status.</p>
                                    </div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "3. Official Processing & Visa Bulletin",
                        tip: "Mabagal ang proseso ng family petition dahil sa Visa Bulletin quota. Mag-ingat sa mga taong nangangakong mapapabilis nila ang priority date mo sa pera.",
                        content: `
                            <h4 class='text-lg font-bold text-slate-900 mb-2'>Navigating Processing Times & Priority Dates</h4>
                            <p class='text-slate-700 mb-3'>Understanding how application queues work:</p>
                            <ul class='list-disc pl-5 space-y-2 text-slate-700 mb-4'>
                                <li><strong>Visa Bulletin:</strong> Monitor priority dates published monthly by the U.S. Department of State to track when your immigrant visa number becomes available.</li>
                                <li><strong>Processing Centers:</strong> Always check estimated processing timelines directly on official USCIS service center pages before making life adjustments.</li>
                            </ul>
                        `
                    },
                    {
                        name: "4. Avoiding Immigration Fraud",
                        tip: "Laging i-verify kung ang kumakatawan sa iyo ay lisensyadong abogado. Huwag magpadala ng bayad sa mga social media agents na walang physical office o legal credentials.",
                        content: `
                            <h4 class='text-lg font-bold text-slate-900 mb-2'>Protecting Yourself from Visa Scams</h4>
                            <p class='text-slate-700 mb-3'>Red flags to watch out for:</p>
                            <ul class='list-disc pl-5 space-y-2 text-slate-700 mb-4'>
                                <li>Beware of individuals or agencies guaranteeing 100% visa approval or bypassing statutory immigration laws.</li>
                                <li>Ensure any legal assistance comes from a licensed attorney or a DOJ-accredited representative listed on official directories.</li>
                            </ul>
                        `
                    }
                ]
            }
        ];
