export const translations = {
  en: {
    nav: {
      brand: "PCOD",
      brandHighlight: "CARE",
      join: "Contact Specialist"
    },
    hero: {
      tagline: "Empower Your Wellness",
      title1: "Reclaim Your",
      title2: "Health.",
      subtitle: "Understand PCOD deeply through simple science, right nutrition, and restorative practices.",
      cta: "Learn More"
    },
    dashboard: {
      symptoms: "Symptoms",
      problems: "Health Risks",
      treatment: "Cures & Meds",
      diet: "Diet Plan",
      seeds: "Seed Cycling",
      exercises: "Exercises"
    },
    about: {
      tagline: "Biological Truth",
      title: "Decoding the Details",
      w_title: "Understanding Cysts",
      w_desc: "Polycystic ovaries contain small fluid-filled follicles (cysts). It signals a hormonal shift, often driven by lifestyle and metabolism.",
      matrix_title: "Common Symptoms",
      symptoms_list: ["Hormonal Acne", "Hair Thinning", "Weight Flux", "Sleep Issues", "Cycle Chaos"]
    },
    problems: {
      tagline: "Complications to Watch",
      title: "What Happens If Ignored?",
      desc: "Ignoring PCOD can lead to long-term health problems over time. Addressing it early is the best defense.",
      list: [
        "Severe Insulin Resistance (Pre-diabetes).",
        "Difficulty in Conceiving (Infertility).",
        "Higher risk of Endometrial conditions.",
        "Chronic Fatigue and Anxiety."
      ]
    },
    compare: {
      tagline: "Know the Difference",
      title: "PCOD vs PCOS",
      pcod_title: "PCOD (Disease)",
      pcod_desc: "A common lifestyle disorder where over-immature eggs form cysts. Highly manageable with diet & exercise alone.",
      pcos_title: "PCOS (Syndrome)",
      pcos_desc: "A severe endocrine disorder causing massive hormonal imbalances. Often requires strict medical intervention and lifelong tracking."
    },
    treatment: {
      tagline: "Medical Intervention",
      title: "Cures & Medications",
      warning_tag: "MEDICAL WARNING",
      warning_msg: "NEVER use these tablets without a direct doctor's prescription! Taking wrong hormonal medication can permanently damage your cycle.",
      desc: "Common medications prescribed strictly by gynecologists include:",
      meds: [
        { name: "Myo-Inositol & D-Chiro Inositol", purpose: "To improve egg quality and insulin sensitivity." },
        { name: "Metformin", purpose: "To treat severe insulin resistance." },
        { name: "Birth Control Pills", purpose: "To force regulate absent menstrual cycles." }
      ]
    },
    fuel: {
      tagline: "Nutrition Guide",
      title: "Food for Healing",
      eat_title: "What To Eat",
      eat_desc: "Focus on anti-inflammatory superfoods.",
      eat_list: ["Fresh Leafy Greens & Spinach", "Walnuts, Almonds & Flaxseeds", "Fresh Berries & Antioxidants", "Healthy Fats like Salmon"],
      avoid_title: "What To Avoid",
      avoid_desc: "Minimize highly processed triggers.",
      avoid_list: ["Refined Sugar & Sweeteners", "Processed Fast Foods", "Sugary Sodas & Drinks", "High-Starch White Bread"]
    },
    seeds: {
      tagline: "Hormonal Balance",
      title: "Seed Cycling for PCOD",
      desc: "Seed cycling is a natural way to support female hormones by eating specific seeds during the two main phases of your menstrual cycle.",
      list: [
        { name: "Chia Seeds", desc: "Rich in Omega-3. Reduces inflammation and keeps you full.", image: "/chia.jpg?v=2" },
        { name: "Flax Seeds", desc: "Contains lignans that naturally bind excess estrogen.", image: "/flax.jpg?v=2" },
        { name: "Sunflower Seeds", desc: "Packed with Vitamin E. Boosts progesterone naturally.", image: "/sunflower.jpg?v=2" },
        { name: "Sabja Seeds (Basil)", desc: "Cools the body, reduces bloating and controls sugar spikes.", image: "/sabja.jpg?v=2" }
      ]
    },
    fitness: {
      tagline: "Movement Protocol",
      title: "Restorative Yoga",
      poses: [
        { name: "Butterfly Pose", desc: "Baddha Konasana. Stimulates the pelvis and improves blood circulation.", image: "butterfly" },
        { name: "Garland Pose", desc: "Malasana. Opens the hips and aids in deep pelvic floor relaxation.", image: "malasana" }
      ],
      card_title: "Gentle Routine",
      card_desc: "Never over-exhaust. High-intensity workouts can spike cortisol. Stick to grounding yoga flows."
    },
    clinic: {
      searchTitle: "Find a Specialist",
      searchPlaceholder: "Search city (e.g. Hyderabad, Bangalore...)",
      noResults: "No direct partners found here. Please consult your local specialist or try online consultations via Apollo/Practo.",
      bookBtn: "Book Appointment",
      doctors: {
        hyderabad: [
          { name: "Dr. Evita Fernandez", spec: "Senior Gynecologist", rating: "⭐⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=evita", top: true },
          { name: "Dr. Rooma Sinha", spec: "Endocrinologist", rating: "⭐⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=rooma" }
        ],
        bangalore: [
          { name: "Dr. Hema Divakar", spec: "PCOD Expert", rating: "⭐⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=hema", top: true },
          { name: "Dr. Kamini Rao", spec: "Fertility & Hormones", rating: "⭐⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=kamini" }
        ],
        vizag: [
          { name: "Dr. Mahati Sudhakar", spec: "Senior Gynecologist", rating: "⭐⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=mahati", top: true },
          { name: "Dr. Ch. Ragasudha", spec: "Infertility Specialist", rating: "⭐⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=raga" }
        ],
        vijayawada: [
          { name: "Dr. Nori Anuradha", spec: "Minimally Invasive Surgeon", rating: "⭐⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=nori", top: true },
          { name: "Dr. Lakshmi Prasuna", spec: "High-Risk Pregnancy Expert", rating: "⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=lakshmi" }
        ],
        guntur: [
          { name: "Dr. Jhansi Lakshmi Kanumuri", spec: "High-Risk Obstetrics", rating: "⭐⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=jhansi", top: true },
          { name: "Dr. Anita Nelakuditi", spec: "PCOD Specialist", rating: "⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=anita" }
        ],
        ongole: [
          { name: "Dr. Deepa D", spec: "Endoscopic Surgeon", rating: "⭐⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=deepa", top: true },
          { name: "Dr. Kalpana Ginjupalli", spec: "Senior Obstetrician", rating: "⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=kalpana" }
        ],
        rajamundry: [
          { name: "Dr. Kandula Shilpa Alekhya", spec: "Fetal Maternal Medicine", rating: "⭐⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=shilpa", top: true },
          { name: "Dr. Sravya Naramchetti", spec: "Gynecological Care", rating: "⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=sravya" }
        ],
        srikakulam: [
          { name: "Dr. Daneti Sridhar", spec: "IVF Specialist", rating: "⭐⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=daneti", top: true },
          { name: "Dr. Balaga Rajani", spec: "Fetal Medicine Expert", rating: "⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=balaga" }
        ],
        chennai: [
          { name: "Dr. Vani Sundaresan", spec: "Senior Gynecologist", rating: "⭐⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=vani", top: true },
          { name: "Dr. Kamala Selvaraj", spec: "Infertility & PCOD Expert", rating: "⭐⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=kamala" }
        ]
      }
    },
    quiz: {
      title: "PCOD Risk Check",
      tagline: "Quick Self-Assessment",
      subtitle: "Answer 5 simple questions to understand your PCOD risk level.",
      questions: [
        { q: "Are your periods irregular or delayed by more than 5 days?", options: ["Always", "Sometimes", "Rarely", "Never"] },
        { q: "Do you experience sudden hair fall or thinning?", options: ["Yes, severely", "Mild", "Occasionally", "No"] },
        { q: "Do you gain weight easily even with a normal diet?", options: ["Yes, very easily", "Somewhat", "Rarely", "No"] },
        { q: "Do you have hormonal acne on chin or jawline?", options: ["Frequently", "Sometimes", "Rarely", "Never"] },
        { q: "Do you often feel fatigued or have mood swings?", options: ["Always", "Often", "Sometimes", "Never"] }
      ],
      results: {
        high: { label: "High Risk", color: "red", msg: "Your answers suggest a higher risk of PCOD. Please consult a gynecologist soon for proper diagnosis." },
        medium: { label: "Moderate Risk", color: "orange", msg: "You show some signs. Focus on diet, yoga, and a balanced lifestyle. Consider a check-up." },
        low: { label: "Low Risk", color: "green", msg: "Great news! Your risk appears low. Keep maintaining a healthy lifestyle and stay aware." }
      },
      btnStart: "Start Quiz",
      btnNext: "Next →",
      btnResult: "See My Result",
      btnRetake: "Retake Quiz"
    },
    faq: {
      title: "Common Questions",
      tagline: "FAQ",
      list: [
        { q: "Can PCOD be completely cured?", a: "PCOD is highly manageable with the right diet, exercise, and lifestyle changes. Many women achieve complete hormonal balance naturally without medication." },
        { q: "At what age does PCOD usually appear?", a: "PCOD most commonly appears between ages 15–30, often triggered during puberty, stress, or significant weight changes." },
        { q: "Can I get pregnant with PCOD?", a: "Yes! With proper treatment and lifestyle changes, most women with PCOD can conceive naturally. Consult a fertility specialist if needed." },
        { q: "Is PCOD genetic?", a: "There is a genetic component. If your mother or sister has PCOD, your risk is higher. However, lifestyle choices play an equally important role." },
        { q: "Does losing weight help PCOD?", a: "Yes! Even a 5–10% reduction in body weight can significantly restore hormonal balance and improve symptoms dramatically." }
      ]
    },
    tracker: {
      title: "Period Tracker",
      tagline: "Cycle Awareness",
      subtitle: "Log your last period and calculate your next expected date.",
      lastPeriod: "Last Period Start Date",
      cycleLength: "Average Cycle Length (days)",
      calculate: "Calculate Next Period",
      nextPeriod: "Your Next Period is Expected on:",
      ovulation: "Estimated Ovulation Day:",
      fertileWindow: "Fertile Window:",
      note: "Note: This is an estimate. Irregular cycles are a PCOD symptom — consult a doctor if cycles vary greatly."
    },
    footer: {
      desc: "Designed with care to empower women towards a healthier lifestyle.",
      copyright: "© 2026 PCOD CARE | Designed by Revathi Balla"
    }
  },
  te: {
    nav: {
      brand: "PCOD",
      brandHighlight: "కేర్",
      join: "డాక్టర్‌ని సంప్రదించండి"
    },
    hero: {
      tagline: "సహజంగా నయం చేసుకోండి",
      title1: "మీ ఆరోగ్యం,",
      title2: "మీ చేతుల్లో.",
      subtitle: "సరైన ఆహారం, యోగా మరియు నిద్ర ద్వారా PCOD ని పూర్తిగా అర్థం చేసుకుని జయించండి.",
      cta: "మరింత తెలుసుకోండి"
    },
    dashboard: {
      symptoms: "లక్షణాలు",
      problems: "వచ్చే సమస్యలు",
      treatment: "చికిత్స (మందులు)",
      diet: "ఆహారం విధి",
      seeds: "సీడ్ సైక్లింగ్",
      exercises: "వ్యాయామాలు"
    },
    about: {
      tagline: "శరీరంలో మార్పులు",
      title: "నీటి బుడగలు (Cysts) అంటే ఏమిటి?",
      w_title: "గర్భాశయంలో మార్పులు",
      w_desc: "అండాశయాలలో చిన్న నీటి బుడగలు (cysts) ఏర్పడటమే PCOD. ఇది హార్మోన్ల అసమతుల్యత వల్ల జరుగుతుంది.",
      matrix_title: "సాధారణ లక్షణాలు",
      symptoms_list: ["మొటిమలు పగుళ్లు", "జుట్టు బాగా రాలడం", "అతిగా బరువు పెరగడం", "నిద్ర పట్టకపోవడం", "రుతుక్రమ సమస్యలు"]
    },
    problems: {
      tagline: "వచ్చే ముప్పులు",
      title: "నిర్లక్ష్యం చేస్తే వచ్చే సమస్యలు",
      desc: "దీన్ని నిర్లక్ష్యం చేస్తే భవిష్యత్తులో తీవ్రమైన ఆరోగ్య సమస్యలు వస్తాయి. ముందుగానే గుర్తించి నయం చేసుకోవాలి.",
      list: [
        "తీవ్రమైన ఇన్సులిన్ రెసిస్టెన్స్ (షుగర్ వ్యాధి వచ్చే ప్రమాదం).",
        "గర్భం దాల్చడంలో సమస్యలు (Infertility).",
        "గర్భాశయ క్యాన్సర్ కు దారితీసే పరిస్థితులు.",
        "దీర్ఘకాలిక మానసిక ఒత్తిడి, ఆందోళన."
      ]
    },
    compare: {
      tagline: "రెండింటికీ తేడాలు",
      title: "PCOD కి మరియు PCOS కి తేడా",
      pcod_title: "PCOD (సాధారణ సమస్య)",
      pcod_desc: "ఇది కేవలం జీవనశైలి మరియు ఆహారపు అలవాట్లతో వచ్చే సాధారణ సమస్య. వ్యాయామం, ఆహారంతో దీనిని సులభంగా నయం చేయవచ్చు.",
      pcos_title: "PCOS (తీవ్రమైన సమస్య)",
      pcos_desc: "ఇది తీవ్రమైన ఎండోక్రైన్ సమస్య. దీనివల్ల హార్మోన్లు పూర్తిగా దెబ్బతింటాయి. దీనికి కచ్చితంగా డాక్టర్ సూచనలతో కూడిన వైద్యం కావాలి."
    },
    treatment: {
      tagline: "వైద్య చికిత్స",
      title: "మందులు - ఎలా నయం చేయాలి",
      warning_tag: "ముఖ్య గమనిక (WARNING)",
      warning_msg: "డాక్టర్ ప్రిస్క్రిప్షన్ లేకుండా దయచేసి ఎలాంటి మందులూ సొంతంగా వాడకండి. ఇవి హార్మోన్ల మందులు కాబట్టి సైడ్ ఎఫెక్ట్స్ చాలా ప్రమాదకరం.",
      desc: "సాధారణంగా డాక్టర్లు సలహా ఇచ్చే మందులు ఇవే:",
      meds: [
        { name: "Myo-Inositol & D-Chiro Inositol", purpose: "అండం పెరగడానికి మరియు ఇన్సులిన్ కంట్రోల్ కోసం ఇస్తారు." },
        { name: "Metformin (మెట్ఫార్మిన్)", purpose: "షుగర్ లెవెల్స్ తగ్గించి, బరువును కంట్రోల్ చేయడానికి." },
        { name: "Birth Control Pills", purpose: "నెలసరి (Periods) ప్రతి నెలా సరిగ్గా వచ్చేలా చేయడానికి ఇస్తారు." }
      ]
    },
    fuel: {
      tagline: "పోషకాహారం",
      title: "ఏమి తినాలి? ఏమి తినకూడదు?",
      eat_title: "తప్పక తినాల్సినవి (Healthy)",
      eat_desc: "ఆరోగ్యానికి మేలు చేసే మంచి ఆహారం.",
      eat_list: ["తాజా ఆకుకూరలు (పాలకూర)", "వాల్‌నట్స్, బాదం, అవిసె గింజలు", "తాజా పండ్లు మరియు బెర్రీలు", "ఆరోగ్యకరమైన కొవ్వులు (చేపలు)"],
      avoid_title: "తినకూడనివి (Avoid)",
      avoid_desc: "PCOD ని పెంచే హానికరమైన ఆహారం.",
      avoid_list: ["తెల్లటి చక్కెర మరియు స్వీట్లు", "ప్రాసెస్ చేసిన జంక్ ఫుడ్", "కూల్ డ్రింక్స్, సోడాలు", "మైదాతో చేసిన బేకరీ ఫుడ్స్"]
    },
    seeds: {
      tagline: "హార్మోన్ల సమతుల్యత",
      title: "సీడ్ సైక్లింగ్ (గింజలు)",
      desc: "నెలసరి కాలాన్ని బట్టి కింద తెలిపిన విత్తనాలను క్రమం తప్పకుండా తీసుకోవడం వల్ల సహజంగానే హార్మోన్ల సమస్యలు తగ్గిపోతాయి.",
      list: [
        { name: "చియా సీడ్స్ (Chia Seeds)", desc: "దీనిలో ఒమేగా-3 ఎక్కువ ఉంటుంది. వాపులను తగ్గిస్తుంది.", image: "/chia.jpg?v=2" },
        { name: "అవిసె గింజలు (Flax Seeds)", desc: "సహజంగా ఈస్ట్రోజెన్ స్థాయిని అదుపులో ఉంచుతాయి.", image: "/flax.jpg?v=2" },
        { name: "మస్క్ మెలన్ లేదా పొద్దుతిరుగుడు గింజలు", desc: "విటమిన్ E అధికంగా ఉంటుంది. ప్రొజెస్టెరాన్‌ని పెంచుతుంది.", image: "/sunflower.jpg?v=2" },
        { name: "సబ్జా గింజలు (Sabja Seeds)", desc: "శరీరాన్ని చల్లరుస్తాయి మరియు షుగర్ లెవెల్స్ ని కంట్రోల్ చేస్తాయి.", image: "/sabja.jpg?v=2" }
      ]
    },
    fitness: {
      tagline: "యోగాసనాలు",
      title: "ఉపశమనం కలిగించే వ్యాయామాలు",
      poses: [
        { name: "బటర్ ఫ్లై (సీతాకోకచిలుక) ఆసనం", desc: "పెల్విస్ కు రక్త ప్రసరణను బాగా మెరుగుపరుస్తుంది. గర్భాశయానికి చాలా మంచిది.", image: "butterfly" },
        { name: "మలాసన (Malasana)", desc: "నడుము, కటి భాగాలలోని కండరాలను విశ్రాంతి పరుస్తుంది. హార్మోన్లను బ్యాలెన్స్ చేస్తుంది.", image: "malasana" }
      ],
      card_title: "సున్నితమైన వ్యాయామం",
      card_desc: "అతిగా బరువులు ఎత్తే వ్యాయామం చేయకండి. అది ఒత్తిడికి గురి చేసి కార్టిసాల్‌ను పెంచుతుంది. యోగా ఉత్తమం."
    },
    clinic: {
      searchTitle: "డాక్టర్‌ని వెతకండి",
      searchPlaceholder: "మీ నగరాన్ని ఎంటర్ చేయండి (ఉదా: హైదరాబాద్, ముంబై...)",
      noResults: "మీ నగరంలో ఎవరూ దొరకలేరు. దయచేసి అపోలో లేదా ప్రాక్టో ద్వారా ఆన్‌లైన్‌లో వెతకండి.",
      bookBtn: "అపాయింట్‌మెంట్ బుక్ చేయండి",
      doctors: {
        hyderabad: [
          { name: "Dr. Evita Fernandez", spec: "Senior Gynecologist", rating: "⭐⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=evita", top: true },
          { name: "Dr. Rooma Sinha", spec: "Endocrinologist", rating: "⭐⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=rooma" }
        ],
        bangalore: [
          { name: "Dr. Hema Divakar", spec: "PCOD Expert", rating: "⭐⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=hema", top: true },
          { name: "Dr. Kamini Rao", spec: "Fertility & Hormones", rating: "⭐⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=kamini" }
        ],
        vizag: [
          { name: "Dr. Mahati Sudhakar", spec: "Senior Gynecologist", rating: "⭐⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=mahati", top: true },
          { name: "Dr. Ch. Ragasudha", spec: "Infertility Specialist", rating: "⭐⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=raga" }
        ],
        vijayawada: [
          { name: "Dr. Nori Anuradha", spec: "Minimally Invasive Surgeon", rating: "⭐⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=nori", top: true },
          { name: "Dr. Lakshmi Prasuna", spec: "High-Risk Pregnancy Expert", rating: "⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=lakshmi" }
        ],
        guntur: [
          { name: "Dr. Jhansi Lakshmi Kanumuri", spec: "High-Risk Obstetrics", rating: "⭐⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=jhansi", top: true },
          { name: "Dr. Anita Nelakuditi", spec: "PCOD Specialist", rating: "⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=anita" }
        ],
        ongole: [
          { name: "Dr. Deepa D", spec: "Endoscopic Surgeon", rating: "⭐⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=deepa", top: true },
          { name: "Dr. Kalpana Ginjupalli", spec: "Senior Obstetrician", rating: "⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=kalpana" }
        ],
        rajamundry: [
          { name: "Dr. Kandula Shilpa Alekhya", spec: "Fetal Maternal Medicine", rating: "⭐⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=shilpa", top: true },
          { name: "Dr. Sravya Naramchetti", spec: "Gynecological Care", rating: "⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=sravya" }
        ],
        srikakulam: [
          { name: "Dr. Daneti Sridhar", spec: "IVF Specialist", rating: "⭐⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=daneti", top: true },
          { name: "Dr. Balaga Rajani", spec: "Fetal Medicine Expert", rating: "⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=balaga" }
        ],
        chennai: [
          { name: "Dr. Vani Sundaresan", spec: "Senior Gynecologist", rating: "⭐⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=vani", top: true },
          { name: "Dr. Kamala Selvaraj", spec: "Infertility & PCOD Expert", rating: "⭐⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=kamala" }
        ]
      }
    },
    quiz: {
      title: "PCOD రిస్క్ చెక్",
      tagline: "స్వీయ పరీక్ష",
      subtitle: "5 సాధారణ ప్రశ్నలకు సమాధానం ఇచ్చి మీ PCOD రిస్క్ తెలుసుకోండి.",
      questions: [
        { q: "మీ నెలసరి సరిగ్గా 5 రోజుల కంటే ఎక్కువ ఆలస్యమవుతుందా?", options: ["ఎప్పుడూ", "కొన్నిసార్లు", "అరుదు", "లేదు"] },
        { q: "జుట్టు ఎక్కువగా రాలడం లేదా సన్నబడటం అనుభవిస్తున్నారా?", options: ["చాలా తీవ్రంగా", "స్వల్పంగా", "అప్పుడప్పుడు", "లేదు"] },
        { q: "సాధారణ ఆహారంతోనే బరువు పెరుగుతున్నారా?", options: ["చాలా సులభంగా", "కొంచెం", "అరుదు", "లేదు"] },
        { q: "గడ్డం లేదా దవడ వద్ద హార్మోన్ వల్ల మొటిమలు ఉన్నాయా?", options: ["తరచుగా", "కొన్నిసార్లు", "అరుదు", "లేదు"] },
        { q: "తరచుగా అలసట లేదా మూడ్ స్వింగ్స్ అనుభవిస్తున్నారా?", options: ["ఎప్పుడూ", "తరచూ", "కొన్నిసార్లు", "లేదు"] }
      ],
      results: {
        high: { label: "అధిక రిస్క్", color: "red", msg: "మీ సమాధానాలు PCOD రిస్క్ ఎక్కువగా ఉందని సూచిస్తున్నాయి. దయచేసి వెంటనే గైనకాలజిస్ట్‌ను సంప్రదించండి." },
        medium: { label: "మధ్యస్థ రిస్క్", color: "orange", msg: "కొన్ని సంకేతాలు కనిపిస్తున్నాయి. ఆహారం, యోగా మీద దృష్టి పెట్టండి. వైద్య పరీక్ష చేయించుకోవడం మంచిది." },
        low: { label: "తక్కువ రిస్క్", color: "green", msg: "శుభవార్త! మీ రిస్క్ తక్కువగా ఉంది. ఆరోగ్యకరమైన జీవనశైలిని కొనసాగించండి." }
      },
      btnStart: "క్విజ్ మొదలుపెట్టండి",
      btnNext: "తదుపరి →",
      btnResult: "నా ఫలితం చూడండి",
      btnRetake: "మళ్ళీ రాయండి"
    },
    faq: {
      title: "సాధారణ సందేహాలు",
      tagline: "FAQ",
      list: [
        { q: "PCOD పూర్తిగా నయమవుతుందా?", a: "సరైన ఆహారం, వ్యాయామం మరియు జీవనశైలి మార్పులతో PCOD చాలా సులభంగా నయమవుతుంది. చాలా మంది మహిళలు మందులు లేకుండా హార్మోన్ల సమతుల్యత పొందుతారు." },
        { q: "PCOD ఏ వయసులో వస్తుంది?", a: "PCOD సాధారణంగా 15–30 సంవత్సరాల వయసులో వస్తుంది. ఒత్తిడి, బరువు పెరగడం, లేదా యుక్తవయసులో ట్రిగ్గర్ అవుతుంది." },
        { q: "PCOD తో గర్భం దాల్చవచ్చా?", a: "అవును! సరైన చికిత్స మరియు జీవనశైలి మార్పులతో చాలా మంది మహిళలు సహజంగా గర్భం దాల్చవచ్చు." },
        { q: "PCOD వంశపారంపర్యంగా వస్తుందా?", a: "జన్యు కారణాలు ఉన్నాయి. మీ అమ్మ లేదా అక్కకు PCOD ఉంటే మీకు రిస్క్ ఎక్కువ. కానీ జీవనశైలి కూడా ముఖ్యమైన పాత్ర పోషిస్తుంది." },
        { q: "బరువు తగ్గడం PCOD కి సహాయపడుతుందా?", a: "అవును! 5–10% బరువు తగ్గడం వల్ల హార్మోన్ల సమతుల్యత గణనీయంగా మెరుగవుతుంది." }
      ]
    },
    tracker: {
      title: "పీరియడ్ ట్రాకర్",
      tagline: "సైకిల్ అవగాహన",
      subtitle: "మీ చివరి నెలసరి తేదీ నమోదు చేసి తదుపరి తేదీ తెలుసుకోండి.",
      lastPeriod: "చివరి నెలసరి ప్రారంభ తేదీ",
      cycleLength: "సగటు సైకిల్ పొడవు (రోజులు)",
      calculate: "తదుపరి నెలసరి లెక్కించండి",
      nextPeriod: "మీ తదుపరి నెలసరి అంచనా తేదీ:",
      ovulation: "అండోత్సర్గ రోజు (అంచనా):",
      fertileWindow: "ఫర్టైల్ విండో:",
      note: "గమనిక: ఇవి అంచనాలు మాత్రమే. సైకిల్ చాలా అనియమితంగా ఉంటే డాక్టర్‌ని సంప్రదించండి."
    },
    footer: {
      desc: "మెరుగైన ఆరోగ్యం వైపు మహిళలను నడిపించేందుకు ఈ పేజీ రూపొందించబడింది.",
      copyright: "© 2026 PCOD CARE | Created by Revathi Balla"
    }
  },
  hi: {
    nav: {
      brand: "PCOD",
      brandHighlight: "केयर",
      join: "डॉक्टर से मिलें"
    },
    hero: {
      tagline: "प्राकृतिक रूप से ठीक करें",
      title1: "आपका स्वास्थ्य,",
      title2: "आपके हाथों में।",
      subtitle: "सही पोषण, योगा और नींद के माध्यम से PCOD को पूरी तरह से समझें और जीतें।",
      cta: "और जानें"
    },
    dashboard: {
      symptoms: "संकेत / लक्षण",
      problems: "स्वास्थ्य समस्याएं",
      treatment: "चिकित्सा व दवाएं",
      diet: "आहार चार्ट",
      seeds: "सीड साइक्लिंग",
      exercises: "योगासन"
    },
    about: {
      tagline: "शारीरिक परिवर्तन",
      title: "PCOD के सिस्ट (पानी के बुलबुले)",
      w_title: "गर्भाशय के बदलाव",
      w_desc: "अंडाशय में छोटे पानी के बुलबुले (cysts) बनना PCOD कहलाता है। यह मुख्य रूप से हार्मोनल असंतुलन के कारण होता है।",
      matrix_title: "सामान्य लक्षण",
      symptoms_list: ["हार्मोनल मुँहासे", "बालों का अत्यधिक झड़ना", "अचानक वजन बढ़ना", "नींद की कमी", "मासिक धर्म में अनियमितता"]
    },
    problems: {
      tagline: "महत्वपूर्ण जोखिम",
      title: "अनदेखा करने के नुकसान",
      desc: "इसे नज़रअंदाज़ करने से भविष्य में गंभीर स्वास्थ्य समस्याएं हो सकती हैं। जल्दी इलाज सबसे अच्छा बचाव है।",
      list: [
        "गंभीर इंसुलिन प्रतिरोध (शुगर होने का खतरा)।",
        "गर्भधारण (Infertility) में कठिनाई।",
        "गर्भाशय से संबंधित बीमारियों का अधिक खतरा।",
        "गंभीर थकान और मानसिक तनाव।"
      ]
    },
    compare: {
      tagline: "अंतर पहचानें",
      title: "PCOD बनाम PCOS",
      pcod_title: "PCOD (साधारण समस्या)",
      pcod_desc: "यह जीवनशैली से जुड़ी आम समस्या है। आहार और योग के माध्यम से इसे आसानी से नियंत्रित किया जा सकता है।",
      pcos_title: "PCOS (गंभीर विकार)",
      pcos_desc: "यह एक गंभीर हार्मोनल विकार है। इसके लिए कड़ी चिकित्सा देखभाल और डॉक्टर की सलाह की आवश्यकता होती है।"
    },
    treatment: {
      tagline: "चिकित्सीय इलाज",
      title: "दवाइयाँ - इसे कैसे ठीक करें",
      warning_tag: "सख्त चेतावनी (WARNING)",
      warning_msg: "डॉक्टर के पर्चे (Prescription) के बिना कृपया कोई भी दवा न लें! गलत हार्मोनल दवाएं लेने से आपके चक्र को स्थायी नुकसान पहुंच सकता है।",
      desc: "आमतौर पर डॉक्टरों द्वारा सुझाई जाने वाली कुछ दवाइयाँ:",
      meds: [
        { name: "Myo-Inositol & D-Chiro Inositol", purpose: "अंडे की गुणवत्ता और इंसुलिन नियंत्रण में सुधार के लिए।" },
        { name: "Metformin (मेटफॉर्मिन)", purpose: "शुगर लेवल को नियंत्रित करने के लिए।" },
        { name: "Birth Control Pills", purpose: "मासिक धर्म (Periods) को नियमित करने के लिए।" }
      ]
    },
    fuel: {
      tagline: "पोषण गाइड",
      title: "क्या खाएं और क्या न खाएं?",
      eat_title: "क्या खाना चाहिए",
      eat_desc: "सुपरफूड्स जो हार्मोन संतुलित करते हैं।",
      eat_list: ["ताजी पत्तेदार सब्जियां (पालक)", "अखरोट, बादाम, अलसी के बीज", "ताजे फल और जामुन (बेरीज)", "स्वस्थ वसा (मछली)"],
      avoid_title: "क्या नहीं खाना चाहिए",
      avoid_desc: "PCOD बढ़ाने वाले हानिकारक खाद्य पदार्थ।",
      avoid_list: ["सफेद चीनी और मिठाइयाँ", "प्रोसेस्ड जंक फूड", "मीठे कोल्ड ड्रिंक्स", "मैदा और बेकरी उत्पाद"]
    },
    seeds: {
      tagline: "हार्मोनल संतुलन",
      title: "सीड साइक्लिंग",
      desc: "आपकी मासिक धर्म चक्र के अनुसार इन बीजों का सेवन करने से प्राकृतिक रूप से हार्मोन संतुलित होते हैं।",
      list: [
        { name: "चिया सीड्स (Chia Seeds)", desc: "ओमेगा-3 से भरपूर। सूजन कम करते हैं।", image: "/chia.jpg?v=2" },
        { name: "अलसी के बीज (Flax Seeds)", desc: "प्राकृतिक स्तर पर एस्ट्रोजन को नियंत्रित करते हैं।", image: "/flax.jpg?v=2" },
        { name: "सूरजमुखी के बीज (Sunflower Seeds)", desc: "विटामिन ई से भरपूर। प्रोजेस्टेरोन बढ़ाते हैं।", image: "/sunflower.jpg?v=2" },
        { name: "सब्जा के बीज (Sabja Seeds)", desc: "शरीर को ठंडक देते हैं और शुगर कंट्रोल करते हैं।", image: "/sabja.jpg?v=2" }
      ]
    },
    fitness: {
      tagline: "योगा थेरेपी",
      title: "राहत देने वाला योग",
      poses: [
        { name: "तितली आसन (Butterfly Pose)", desc: "श्रोणि क्षेत्र में रक्त परिसंचरण को काफी सुधारता है। गर्भाशय के लिए उत्कृष्ट।", image: "butterfly" },
        { name: "मालासन (Garland Pose)", desc: "कमर के निचले हिस्से की मांसपेशियों को आराम देता है और तनाव कम करता है।", image: "malasana" }
      ],
      card_title: "हल्का व्यायाम करें",
      card_desc: "अत्यधिक व्यायाम न करें। भारी कसरत से कोर्टिसोल (तनाव हार्मोन) बढ़ सकता है। केवल योग और टहलना चुनें।"
    },
    clinic: {
      searchTitle: "विशेषज्ञ खोजें",
      searchPlaceholder: "अपना शहर खोजें (उदा: हैदराबाद, दिल्ली...)",
      noResults: "इस शहर में कोई डॉक्टर नहीं मिला। कृपया ऑनलाइन परामर्श की कोशिश करें।",
      bookBtn: "अपॉइंटमेंट बुक करें",
      doctors: {
        hyderabad: [
          { name: "Dr. Evita Fernandez", spec: "Senior Gynecologist", rating: "⭐⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=evita", top: true },
          { name: "Dr. Rooma Sinha", spec: "Endocrinologist", rating: "⭐⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=rooma" }
        ],
        bangalore: [
          { name: "Dr. Hema Divakar", spec: "PCOD Expert", rating: "⭐⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=hema", top: true },
          { name: "Dr. Kamini Rao", spec: "Fertility & Hormones", rating: "⭐⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=kamini" }
        ],
        vizag: [
          { name: "Dr. Mahati Sudhakar", spec: "Senior Gynecologist", rating: "⭐⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=mahati", top: true },
          { name: "Dr. Ch. Ragasudha", spec: "Infertility Specialist", rating: "⭐⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=raga" }
        ],
        vijayawada: [
          { name: "Dr. Nori Anuradha", spec: "Minimally Invasive Surgeon", rating: "⭐⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=nori", top: true },
          { name: "Dr. Lakshmi Prasuna", spec: "High-Risk Pregnancy Expert", rating: "⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=lakshmi" }
        ],
        guntur: [
          { name: "Dr. Jhansi Lakshmi Kanumuri", spec: "High-Risk Obstetrics", rating: "⭐⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=jhansi", top: true },
          { name: "Dr. Anita Nelakuditi", spec: "PCOD Specialist", rating: "⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=anita" }
        ],
        ongole: [
          { name: "Dr. Deepa D", spec: "Endoscopic Surgeon", rating: "⭐⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=deepa", top: true },
          { name: "Dr. Kalpana Ginjupalli", spec: "Senior Obstetrician", rating: "⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=kalpana" }
        ],
        rajamundry: [
          { name: "Dr. Kandula Shilpa Alekhya", spec: "Fetal Maternal Medicine", rating: "⭐⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=shilpa", top: true },
          { name: "Dr. Sravya Naramchetti", spec: "Gynecological Care", rating: "⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=sravya" }
        ],
        srikakulam: [
          { name: "Dr. Daneti Sridhar", spec: "IVF Specialist", rating: "⭐⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=daneti", top: true },
          { name: "Dr. Balaga Rajani", spec: "Fetal Medicine Expert", rating: "⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=balaga" }
        ],
        chennai: [
          { name: "Dr. Vani Sundaresan", spec: "Senior Gynecologist", rating: "⭐⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=vani", top: true },
          { name: "Dr. Kamala Selvaraj", spec: "Infertility & PCOD Expert", rating: "⭐⭐⭐⭐⭐", img: "https://i.pravatar.cc/150?u=kamala" }
        ]
      }
    },
    quiz: {
      title: "PCOD जोखिम जाँचें",
      tagline: "स्वयं परीक्षण",
      subtitle: "5 सरल प्रश्नों के उत्तर देकर अपना PCOD जोखिम स्तर जानें।",
      questions: [
        { q: "क्या आपके मासिक धर्म में 5 दिनों से अधिक की देरी होती है?", options: ["हमेशा", "कभी-कभी", "कभी-कभार", "नहीं"] },
        { q: "क्या आप बालों का अत्यधिक झड़ना या पतलापन अनुभव करती हैं?", options: ["हाँ, बहुत", "हल्का", "कभी-कभी", "नहीं"] },
        { q: "क्या आप सामान्य आहार से भी आसानी से वजन बढ़ा लेती हैं?", options: ["बहुत आसानी से", "थोड़ा", "कम", "नहीं"] },
        { q: "क्या आपकी ठोड़ी या जबड़े पर हार्मोनल मुँहासे हैं?", options: ["अक्सर", "कभी-कभी", "कम", "नहीं"] },
        { q: "क्या आप अक्सर थकान या मूड स्विंग्स महसूस करती हैं?", options: ["हमेशा", "अक्सर", "कभी-कभी", "नहीं"] }
      ],
      results: {
        high: { label: "उच्च जोखिम", color: "red", msg: "आपके उत्तर PCOD के अधिक जोखिम का संकेत देते हैं। कृपया जल्द ही स्त्री रोग विशेषज्ञ से मिलें।" },
        medium: { label: "मध्यम जोखिम", color: "orange", msg: "कुछ संकेत दिखाई दे रहे हैं। आहार और योग पर ध्यान दें। जाँच करवाना उचित रहेगा।" },
        low: { label: "कम जोखिम", color: "green", msg: "बेहतरीन! आपका जोखिम कम लगता है। स्वस्थ जीवनशैली बनाए रखें।" }
      },
      btnStart: "क्विज़ शुरू करें",
      btnNext: "अगला →",
      btnResult: "परिणाम देखें",
      btnRetake: "दोबारा लें"
    },
    faq: {
      title: "सामान्य प्रश्न",
      tagline: "FAQ",
      list: [
        { q: "क्या PCOD पूरी तरह ठीक हो सकती है?", a: "सही आहार, व्यायाम और जीवनशैली बदलावों से PCOD बहुत अच्छी तरह नियंत्रित हो सकती है। कई महिलाएं बिना दवा के हार्मोनल संतुलन पा लेती हैं।" },
        { q: "PCOD किस उम्र में होती है?", a: "PCOD सबसे ज्यादा 15–30 वर्ष की आयु में दिखती है, अक्सर तनाव, वजन बढ़ने या यौवन के समय शुरू होती है।" },
        { q: "क्या PCOD के साथ गर्भधारण हो सकता है?", a: "हाँ! उचित उपचार और जीवनशैली बदलावों से अधिकांश PCOD महिलाएं स्वाभाविक रूप से गर्भधारण कर सकती हैं।" },
        { q: "क्या PCOD आनुवंशिक है?", a: "आनुवंशिक कारक होते हैं। यदि माँ या बहन को PCOD है तो जोखिम अधिक है। लेकिन जीवनशैली भी महत्वपूर्ण भूमिका निभाती है।" },
        { q: "क्या वजन कम करने से PCOD में मदद मिलती है?", a: "हाँ! 5–10% वजन कम करने से हार्मोनल संतुलन में उल्लेखनीय सुधार हो सकता है।" }
      ]
    },
    tracker: {
      title: "पीरियड ट्रैकर",
      tagline: "चक्र जागरूकता",
      subtitle: "अपनी अंतिम माहवारी दर्ज करें और अगली अपेक्षित तारीख जानें।",
      lastPeriod: "अंतिम माहवारी की शुरुआत तारीख",
      cycleLength: "औसत चक्र की लंबाई (दिनों में)",
      calculate: "अगली माहवारी गणना करें",
      nextPeriod: "आपकी अगली माहवारी की संभावित तारीख:",
      ovulation: "अनुमानित ओवुलेशन दिवस:",
      fertileWindow: "उर्वर खिड़की:",
      note: "नोट: ये केवल अनुमान हैं। यदि चक्र बहुत अनियमित हो तो डॉक्टर से मिलें।"
    },
    footer: {
      desc: "बेहतर स्वास्थ्य की दिशा में महिलाओं को सशक्त बनाने के लिए डिज़ाइन किया गया।",
      copyright: "© 2026 PCOD CARE | Created by Revathi Balla"
    }
  }
};
