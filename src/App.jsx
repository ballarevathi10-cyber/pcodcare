import React, { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Activity, Apple, Flame, AlertCircle, CheckCircle2, XCircle, Stethoscope, ShieldAlert, Zap, Leaf,
  Search, MapPin, X, Menu, HelpCircle, ChevronDown, Calendar, ClipboardList, ArrowRight
} from 'lucide-react'
import { translations } from './content'

const SectionHeading = ({ children, tagline }) => (
  <div className="mb-10 text-center">
    {tagline && <span className="text-xs md:text-sm uppercase tracking-widest text-purple-600 mb-2 block font-bold">{tagline}</span>}
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-teal-700 leading-tight px-2">
      {children}
    </h2>
  </div>
)

const BentoCard = ({ children, className, delay = 0, id }) => (
  <motion.div
    id={id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    whileHover={{ y: -4 }}
    className={`glass glass-hover rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 relative overflow-hidden group border-2 ${className}`}
  >
    <div className="relative z-10 h-full">{children}</div>
    <div className="absolute -bottom-10 -right-10 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-tr from-purple-200 to-teal-100 blur-3xl opacity-50 group-hover:opacity-80 transition-all duration-700 rounded-full pointer-events-none" />
  </motion.div>
)

// ─── PCOD RISK QUIZ COMPONENT ───────────────────────────────────────────────
function QuizSection({ t }) {
  const [started, setStarted] = useState(false)
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState([])
  const [result, setResult] = useState(null)

  const q = t.quiz

  const handleAnswer = (idx) => {
    const newAnswers = [...answers, idx]
    if (current + 1 < q.questions.length) {
      setAnswers(newAnswers)
      setCurrent(current + 1)
    } else {
      const score = newAnswers.reduce((a, b) => a + b, 0)
      const maxScore = q.questions.length * 3
      const pct = score / maxScore
      setAnswers(newAnswers)
      setResult(pct >= 0.6 ? 'high' : pct >= 0.35 ? 'medium' : 'low')
    }
  }

  const reset = () => { setStarted(false); setCurrent(0); setAnswers([]); setResult(null) }

  const resultConfig = {
    high:   { bg: 'bg-red-50',    border: 'border-red-200',    icon: '⚠️', bar: 'bg-red-400',    badge: 'bg-red-100 text-red-700'    },
    medium: { bg: 'bg-orange-50', border: 'border-orange-200', icon: '🔶', bar: 'bg-orange-400', badge: 'bg-orange-100 text-orange-700' },
    low:    { bg: 'bg-green-50',  border: 'border-green-200',  icon: '✅', bar: 'bg-green-400',  badge: 'bg-green-100 text-green-700'  },
  }

  return (
    <section id="quiz" className="py-16 md:py-24 px-4 md:px-6 bg-white/50 border-t border-purple-100">
      <div className="max-w-2xl mx-auto">
        <SectionHeading tagline={q.tagline}>{q.title}</SectionHeading>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          {!started && !result && (
            <div className="glass rounded-[2rem] p-8 md:p-10 border-2 border-purple-100 text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClipboardList className="text-purple-600" size={36} />
              </div>
              <h3 className="text-2xl font-black text-purple-900 mb-3">{q.title}</h3>
              <p className="text-zinc-600 mb-8 font-medium">{q.subtitle}</p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {['5 Questions', '2 Minutes', 'Free & Private'].map(tag => (
                  <span key={tag} className="px-4 py-1.5 bg-purple-50 rounded-full text-purple-700 font-bold text-sm border border-purple-100">{tag}</span>
                ))}
              </div>
              <button
                onClick={() => setStarted(true)}
                className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-teal-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 text-base"
              >
                {q.btnStart} <ArrowRight className="inline ml-1" size={18} />
              </button>
            </div>
          )}

          {started && !result && (
            <div className="glass rounded-[2rem] p-6 md:p-10 border-2 border-purple-100">
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex justify-between text-xs font-bold text-purple-600 mb-2">
                  <span>Question {current + 1} of {q.questions.length}</span>
                  <span>{Math.round(((current) / q.questions.length) * 100)}% done</span>
                </div>
                <div className="h-2.5 bg-purple-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-teal-400 rounded-full"
                    animate={{ width: `${((current) / q.questions.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg md:text-xl font-black text-purple-900 mb-6 leading-snug">
                    {q.questions[current].q}
                  </h3>
                  <div className="space-y-3">
                    {q.questions[current].options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(idx)}
                        className="w-full text-left p-4 rounded-2xl border-2 border-purple-100 bg-white hover:border-purple-400 hover:bg-purple-50 hover:shadow-md transition-all font-bold text-zinc-700 text-sm md:text-base group flex items-center gap-3"
                      >
                        <span className="w-7 h-7 min-w-[1.75rem] rounded-full border-2 border-purple-200 bg-purple-50 flex items-center justify-center text-purple-600 font-black text-xs group-hover:bg-purple-500 group-hover:text-white transition-all">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        {opt}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          )}

          {result && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`rounded-[2rem] p-6 md:p-10 border-2 ${resultConfig[result].bg} ${resultConfig[result].border} text-center`}
            >
              <div className="text-6xl mb-4">{resultConfig[result].icon}</div>
              <span className={`px-4 py-1.5 rounded-full font-black text-sm uppercase tracking-widest ${resultConfig[result].badge} mb-4 inline-block`}>
                {q.results[result].label}
              </span>
              <p className="text-zinc-700 font-bold text-base md:text-lg leading-relaxed mt-4 mb-8 max-w-lg mx-auto">
                {q.results[result].msg}
              </p>
              <button
                onClick={reset}
                className="px-6 py-3 bg-purple-600 text-white font-bold rounded-2xl hover:bg-purple-700 transition-all shadow-md"
              >
                {q.btnRetake}
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

// ─── PERIOD TRACKER COMPONENT ───────────────────────────────────────────────
function TrackerSection({ t }) {
  const tr = t.tracker
  const [lastDate, setLastDate] = useState('')
  const [cycleLen, setCycleLen] = useState(28)
  const [result, setResult] = useState(null)

  const calculate = () => {
    if (!lastDate) return
    const last = new Date(lastDate)
    const next = new Date(last)
    next.setDate(next.getDate() + cycleLen)
    const ovul = new Date(last)
    ovul.setDate(ovul.getDate() + cycleLen - 14)
    const fertileStart = new Date(ovul); fertileStart.setDate(fertileStart.getDate() - 3)
    const fertileEnd = new Date(ovul); fertileEnd.setDate(fertileEnd.getDate() + 1)
    const fmt = (d) => d.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
    setResult({ next: fmt(next), ovul: fmt(ovul), fertileStart: fmt(fertileStart), fertileEnd: fmt(fertileEnd) })
  }

  return (
    <section id="tracker" className="py-16 md:py-24 px-4 md:px-6 bg-purple-50/50 border-t border-purple-100">
      <div className="max-w-2xl mx-auto">
        <SectionHeading tagline={tr.tagline}>{tr.title}</SectionHeading>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="glass rounded-[2rem] p-6 md:p-10 border-2 border-purple-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Calendar className="text-purple-600" size={24} />
              </div>
              <p className="text-zinc-600 font-medium text-sm md:text-base">{tr.subtitle}</p>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-black text-purple-900 mb-2">{tr.lastPeriod}</label>
                <input
                  type="date"
                  value={lastDate}
                  onChange={e => { setLastDate(e.target.value); setResult(null) }}
                  max={new Date().toISOString().split('T')[0]}
                  className="w-full bg-purple-50/50 border-2 border-purple-100 rounded-2xl py-3 px-4 text-base font-medium text-purple-900 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-400/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-black text-purple-900 mb-2">{tr.cycleLength}: <span className="text-teal-600">{cycleLen} days</span></label>
                <input
                  type="range"
                  min={21} max={40} value={cycleLen}
                  onChange={e => { setCycleLen(Number(e.target.value)); setResult(null) }}
                  className="w-full h-2 bg-purple-200 rounded-full appearance-none cursor-pointer accent-purple-600"
                />
                <div className="flex justify-between text-xs text-purple-400 font-bold mt-1">
                  <span>21d</span><span>28d (avg)</span><span>40d</span>
                </div>
              </div>

              <button
                onClick={calculate}
                disabled={!lastDate}
                className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-teal-500 text-white font-black rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 text-base"
              >
                {tr.calculate}
              </button>
            </div>

            <AnimatePresence>
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 space-y-3"
                >
                  <div className="p-4 bg-purple-100 rounded-2xl border border-purple-200">
                    <p className="text-xs font-black text-purple-500 uppercase tracking-widest mb-1">{tr.nextPeriod}</p>
                    <p className="text-base md:text-lg font-black text-purple-900">{result.next}</p>
                  </div>
                  <div className="p-4 bg-teal-50 rounded-2xl border border-teal-100">
                    <p className="text-xs font-black text-teal-500 uppercase tracking-widest mb-1">{tr.ovulation}</p>
                    <p className="text-base font-black text-teal-900">{result.ovul}</p>
                  </div>
                  <div className="p-4 bg-pink-50 rounded-2xl border border-pink-100">
                    <p className="text-xs font-black text-pink-500 uppercase tracking-widest mb-1">{tr.fertileWindow}</p>
                    <p className="text-sm font-black text-pink-900">{result.fertileStart} → {result.fertileEnd}</p>
                  </div>
                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-100 flex gap-2 items-start">
                    <AlertCircle size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-700 font-bold leading-relaxed">{tr.note}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── FAQ ACCORDION COMPONENT ────────────────────────────────────────────────
function FAQSection({ t }) {
  const [open, setOpen] = useState(null)
  const faq = t.faq

  return (
    <section id="faq" className="py-16 md:py-24 px-4 md:px-6 bg-white/50 border-t border-purple-100">
      <div className="max-w-3xl mx-auto">
        <SectionHeading tagline={faq.tagline}>{faq.title}</SectionHeading>

        <div className="space-y-3 md:space-y-4">
          {faq.list.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`rounded-2xl border-2 overflow-hidden transition-all duration-300 ${
                open === i ? 'border-purple-300 shadow-md' : 'border-purple-100 bg-white'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left p-4 md:p-5 flex items-start justify-between gap-3 hover:bg-purple-50/50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 min-w-[1.75rem] rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-black text-xs mt-0.5">
                    {i + 1}
                  </span>
                  <span className="font-black text-purple-900 text-sm md:text-base leading-snug">{item.q}</span>
                </div>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex-shrink-0 mt-0.5"
                >
                  <ChevronDown size={20} className="text-purple-400" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-4 md:px-5 pb-4 md:pb-5 pt-0 ml-10">
                      <p className="text-zinc-600 font-medium text-sm md:text-base leading-relaxed">{item.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── MAIN APP ────────────────────────────────────────────────────────────────
function App() {
  const containerRef = useRef(null)
  const [lang, setLang] = useState('en')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const t = translations[lang]

  const normalizedQuery = searchQuery.toLowerCase().trim();
  const searchResults = t.clinic.doctors[normalizedQuery] || [];
  const searchAttempted = normalizedQuery.length > 2;

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileNavOpen(false)
  }

  const navItems = [
    { id: 'symptoms',  icon: <Activity size={14} className="text-teal-500"/>,    label: t.dashboard.symptoms },
    { id: 'problems',  icon: <ShieldAlert size={14} className="text-red-400"/>,  label: t.dashboard.problems },
    { id: 'treatment', icon: <Stethoscope size={14} className="text-purple-500"/>, label: t.dashboard.treatment },
    { id: 'diet',      icon: <Apple size={14} className="text-teal-500"/>,       label: t.dashboard.diet },
    { id: 'seeds',     icon: <Leaf size={14} className="text-teal-500"/>,        label: t.dashboard.seeds },
    { id: 'fitness',   icon: <Flame size={14} className="text-teal-500"/>,       label: t.dashboard.exercises },
    { id: 'quiz',      icon: <ClipboardList size={14} className="text-purple-500"/>, label: lang === 'te' ? 'రిస్క్ క్విజ్' : lang === 'hi' ? 'जोखिम जाँच' : 'Risk Quiz' },
    { id: 'tracker',   icon: <Calendar size={14} className="text-pink-400"/>,    label: lang === 'te' ? 'ట్రాకర్' : lang === 'hi' ? 'ट्रैकर' : 'Tracker' },
    { id: 'faq',       icon: <HelpCircle size={14} className="text-teal-500"/>,  label: 'FAQ' },
  ]

  return (
    <div ref={containerRef} className="relative min-h-screen text-zinc-800">
      <div className="aura-bg" />

      {/* ───── NAVIGATION ───── */}
      <nav className="fixed top-0 left-0 w-full z-50 px-4 py-3 flex flex-row justify-between items-center backdrop-blur-2xl bg-white/70 border-b border-purple-200 shadow-sm">
        <div className="flex flex-col items-start">
          <div className="text-xl md:text-2xl font-black tracking-tighter text-purple-900 drop-shadow-sm leading-none">{t.nav.brand}<span className="text-teal-600">{t.nav.brandHighlight}</span></div>
          <div className="text-[9px] md:text-[10px] font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-600 mt-0.5">@ Developed by Revathi Balla</div>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <div className="flex bg-purple-100 rounded-full p-0.5 border border-purple-200">
            {['en', 'te', 'hi'].map((l) => (
              <button key={l} onClick={() => setLang(l)}
                className={`px-2.5 md:px-3.5 py-1 text-[10px] md:text-xs font-bold rounded-full uppercase transition-all ${
                  lang === l ? 'bg-purple-600 text-white shadow-md' : 'text-purple-700 hover:bg-purple-200'
                }`}>
                {l}
              </button>
            ))}
          </div>
          <button onClick={() => setIsModalOpen(true)}
            className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 text-sm font-bold text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
            {t.nav.join}
          </button>
          <button onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="md:hidden p-1.5 rounded-xl bg-purple-100 text-purple-700 hover:bg-purple-200 transition-colors">
            <Menu size={18} />
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="fixed top-[56px] left-0 w-full z-40 bg-white/97 backdrop-blur-xl border-b border-purple-100 shadow-lg px-4 py-3 grid grid-cols-2 gap-2"
          >
            {navItems.map(item => (
              <button key={item.id} onClick={() => scrollTo(item.id)}
                className="flex items-center gap-2 px-3 py-2.5 bg-purple-50 rounded-xl text-purple-800 font-bold text-xs border border-purple-100 hover:bg-purple-100 transition-all">
                {item.icon} {item.label}
              </button>
            ))}
            <button onClick={() => { setIsModalOpen(true); setMobileNavOpen(false) }}
              className="col-span-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-teal-500 text-sm font-bold text-white shadow-md">
              {t.nav.join}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sub-Nav */}
      <div className="hidden md:flex fixed top-[60px] w-full z-40 py-2.5 px-2 bg-white/70 backdrop-blur-xl border-b border-purple-100 shadow-sm overflow-x-auto justify-center custom-scrollbar">
        <div className="flex gap-2 min-w-max px-4">
          {navItems.map(item => (
            <button key={item.id} onClick={() => scrollTo(item.id)}
              className="px-4 py-2 bg-white rounded-full shadow-sm border border-purple-100 hover:border-purple-300 hover:shadow-md transition-all font-bold text-purple-800 flex items-center gap-2 text-sm">
              {item.icon} {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* ───── HERO ───── */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 text-center pt-32 md:pt-40 pb-10">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: "easeOut" }} className="relative mb-6">
          <div className="w-44 h-44 md:w-64 md:h-64 lg:w-80 lg:h-80 flex items-center justify-center p-3 md:p-4 bg-white/40 rounded-full shadow-2xl backdrop-blur-md border border-white relative">
            <motion.img src="/uterus.png" alt="Uterus Anatomy" animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="w-full h-full object-contain mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-100/50 to-transparent rounded-full pointer-events-none" />
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
          <span className="text-xs md:text-sm font-bold text-teal-600 uppercase tracking-[0.2em] md:tracking-[0.3em] mb-3 block">{t.hero.tagline}</span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[5.5rem] font-black mb-4 md:mb-6 tracking-tight text-purple-900 leading-[1.15]">
            {t.hero.title1} <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500 italic font-serif px-1">{t.hero.title2}</span>
          </h1>
          <p className="max-w-xl mx-auto text-base md:text-lg text-zinc-600 mb-8 font-medium leading-relaxed px-2">{t.hero.subtitle}</p>
          <button onClick={() => setIsModalOpen(true)} className="md:hidden px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 text-sm font-bold text-white shadow-lg">
            {t.nav.join}
          </button>
        </motion.div>
      </section>

      {/* ───── SYMPTOMS ───── */}
      <section id="symptoms" className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <SectionHeading tagline={t.about.tagline}>{t.about.title}</SectionHeading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <BentoCard className="bg-white/80 border-purple-100 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-black mb-4 text-purple-900">{t.about.w_title}</h3>
              <p className="text-base md:text-lg text-zinc-600 leading-relaxed">{t.about.w_desc}</p>
            </div>
            <div className="mt-6 flex justify-center">
              <img src="/cysts.png?v=2" alt="Cysts" className="w-36 h-36 md:w-56 md:h-56 object-contain opacity-90 drop-shadow-xl mix-blend-multiply hover:scale-105 transition-transform duration-700" />
            </div>
          </BentoCard>
          <BentoCard className="bg-purple-50/80 border-purple-200">
            <h3 className="text-xl md:text-2xl font-black mb-4 md:mb-6 text-purple-900">{t.about.matrix_title}</h3>
            <ul className="space-y-3">
              {t.about.symptoms_list.map((sym, i) => (
                <li key={i} className="flex gap-3 items-center bg-white p-3 md:p-4 rounded-xl shadow-sm border border-purple-50">
                  <span className="w-7 h-7 min-w-[1.75rem] rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xs">{i+1}</span>
                  <span className="font-bold text-sm md:text-base text-zinc-700">{sym}</span>
                </li>
              ))}
            </ul>
          </BentoCard>
        </div>
      </section>

      {/* ───── PROBLEMS ───── */}
      <section id="problems" className="py-16 md:py-24 px-4 md:px-6 bg-purple-50/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading tagline={t.problems.tagline}>{t.problems.title}</SectionHeading>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
            <BentoCard className="bg-red-50/60 border-red-200">
              <div className="flex items-center gap-3 mb-5">
                <ShieldAlert className="text-red-500 flex-shrink-0" size={28} />
                <h3 className="text-2xl md:text-3xl font-black text-red-700 leading-tight">{t.problems.title}</h3>
              </div>
              <p className="text-base md:text-lg text-zinc-700 mb-5 font-medium">{t.problems.desc}</p>
              <ul className="space-y-2.5 pl-2 border-l-4 border-red-300">
                {t.problems.list.map((item, i) => <li key={i} className="pl-4 text-zinc-800 font-bold text-sm md:text-base leading-relaxed">{item}</li>)}
              </ul>
            </BentoCard>
            <BentoCard className="bg-white/90 border-purple-200">
              <div className="flex items-center gap-3 mb-5">
                <Zap className="text-teal-500 flex-shrink-0" size={28} />
                <h3 className="text-2xl md:text-3xl font-black text-purple-900 leading-tight">{t.compare.title}</h3>
              </div>
              <div className="space-y-4 mt-4">
                <div className="p-4 bg-teal-50 rounded-2xl border border-teal-100">
                  <span className="px-3 py-1 bg-teal-200 text-teal-800 text-[10px] font-black uppercase rounded-full mb-2 inline-block">Mild</span>
                  <h4 className="text-lg font-bold text-teal-900 mb-1">{t.compare.pcod_title}</h4>
                  <p className="text-zinc-600 font-medium text-sm md:text-base">{t.compare.pcod_desc}</p>
                </div>
                <div className="p-4 bg-red-50 rounded-2xl border border-red-100">
                  <span className="px-3 py-1 bg-red-200 text-red-800 text-[10px] font-black uppercase rounded-full mb-2 inline-block">Severe</span>
                  <h4 className="text-lg font-bold text-red-900 mb-1">{t.compare.pcos_title}</h4>
                  <p className="text-zinc-600 font-medium text-sm md:text-base">{t.compare.pcos_desc}</p>
                </div>
              </div>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* ───── TREATMENT ───── */}
      <section id="treatment" className="py-16 md:py-24 px-4 md:px-6 max-w-4xl mx-auto">
        <SectionHeading tagline={t.treatment.tagline}>{t.treatment.title}</SectionHeading>
        <BentoCard className="bg-white shadow-xl border border-purple-200">
          <div className="bg-red-500 text-white p-4 md:p-6 rounded-2xl mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-[0_10px_30px_rgba(239,68,68,0.3)]">
            <AlertCircle size={36} className="flex-shrink-0 animate-pulse self-center" />
            <div>
              <h4 className="font-black text-base md:text-xl mb-1 tracking-widest">{t.treatment.warning_tag}</h4>
              <p className="font-semibold text-red-50 leading-relaxed text-xs md:text-sm">{t.treatment.warning_msg}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 mb-5">
            <Stethoscope className="text-purple-500 flex-shrink-0 mt-1" size={24} />
            <p className="text-base md:text-xl font-bold text-zinc-700">{t.treatment.desc}</p>
          </div>
          <div className="space-y-3">
            {t.treatment.meds.map((med, i) => (
              <div key={i} className="p-4 bg-purple-50 rounded-2xl border border-purple-100/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 hover:shadow-md transition-all">
                <span className="font-black text-base md:text-lg text-purple-900">{med.name}</span>
                <span className="px-3 py-1.5 bg-white text-purple-700 rounded-full font-bold text-xs md:text-sm shadow-sm">{med.purpose}</span>
              </div>
            ))}
          </div>
        </BentoCard>
      </section>

      {/* ───── DIET ───── */}
      <section id="diet" className="py-16 md:py-24 px-4 md:px-6 bg-white/50 backdrop-blur-2xl border-t border-purple-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeading tagline={t.fuel.tagline}>{t.fuel.title}</SectionHeading>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
            <BentoCard className="bg-teal-50/50 border-teal-200 flex flex-col">
              <div className="h-48 md:h-64 w-full rounded-xl md:rounded-2xl overflow-hidden mb-5 shadow-inner">
                <img src="/healthy.png" alt="Healthy Food" className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center gap-3 mb-3 text-teal-700">
                <CheckCircle2 size={26} />
                <h3 className="text-2xl md:text-3xl font-black">{t.fuel.eat_title}</h3>
              </div>
              <p className="text-teal-800 font-medium mb-4 text-sm md:text-base">{t.fuel.eat_desc}</p>
              <div className="space-y-2.5">
                {t.fuel.eat_list.map((item, i) => (
                  <div key={i} className="p-3 md:p-4 bg-white rounded-xl shadow-sm border border-teal-100 text-zinc-700 font-bold text-sm flex items-center gap-3">
                    <span className="w-2 h-2 min-w-[0.5rem] rounded-full bg-teal-400"></span>{item}
                  </div>
                ))}
              </div>
            </BentoCard>
            <BentoCard className="bg-red-50/50 border-red-200 flex flex-col">
              <div className="h-48 md:h-64 w-full rounded-xl md:rounded-2xl overflow-hidden mb-5 shadow-inner">
                <img src="/unhealthy.png" alt="Unhealthy Food" className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center gap-3 mb-3 text-red-600">
                <XCircle size={26} />
                <h3 className="text-2xl md:text-3xl font-black">{t.fuel.avoid_title}</h3>
              </div>
              <p className="text-red-700 font-medium mb-4 text-sm md:text-base">{t.fuel.avoid_desc}</p>
              <div className="space-y-2.5">
                {t.fuel.avoid_list.map((item, i) => (
                  <div key={i} className="p-3 md:p-4 bg-white rounded-xl shadow-sm border border-red-100 text-zinc-700 font-bold text-sm flex items-center gap-3">
                    <span className="w-2 h-2 min-w-[0.5rem] rounded-full bg-red-400"></span>{item}
                  </div>
                ))}
              </div>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* ───── SEEDS ───── */}
      <section id="seeds" className="py-16 md:py-24 px-4 md:px-6 bg-purple-50/50 border-t border-purple-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeading tagline={t.seeds.tagline}>{t.seeds.title}</SectionHeading>
          <p className="text-center text-sm md:text-lg text-zinc-600 font-medium max-w-2xl mx-auto mb-8 md:mb-12 px-2">{t.seeds.desc}</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {t.seeds.list.map((seed, i) => (
              <BentoCard key={i} className="bg-white/90 border-purple-100 flex flex-col">
                <div className="h-28 md:h-40 w-full rounded-xl overflow-hidden mb-4 shadow-inner">
                  <img src={seed.image} alt={seed.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-base md:text-xl font-black text-purple-900 mb-1">{seed.name}</h4>
                <p className="text-xs md:text-sm text-zinc-600 leading-relaxed font-bold">{seed.desc}</p>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      {/* ───── FITNESS ───── */}
      <section id="fitness" className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto border-t border-purple-100">
        <SectionHeading tagline={t.fitness.tagline}>{t.fitness.title}</SectionHeading>
        <div className="mb-8 text-center max-w-2xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-purple-900 mb-2">{t.fitness.card_title}</h3>
          <p className="text-zinc-600 leading-relaxed font-medium text-sm md:text-base">{t.fitness.card_desc}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          {t.fitness.poses.map((pose, i) => (
            <BentoCard key={i} className="bg-white/80 border-purple-100 flex flex-col items-center text-center gap-5">
              <div className="w-36 h-36 md:w-52 md:h-52 flex-shrink-0 bg-purple-50 rounded-[1.5rem] p-3 flex items-center justify-center border border-purple-100 shadow-inner">
                <img src={`/${pose.image}.png`} alt={pose.name} className="w-full h-full object-contain mix-blend-multiply" />
              </div>
              <div className="pb-2">
                <h4 className="text-xl md:text-2xl font-black text-purple-900 mb-2">{pose.name}</h4>
                <p className="text-zinc-600 leading-relaxed font-bold text-sm md:text-base">{pose.desc}</p>
              </div>
            </BentoCard>
          ))}
        </div>
      </section>

      {/* ───── NEW: QUIZ, TRACKER, FAQ ───── */}
      <QuizSection t={t} />
      <TrackerSection t={t} />
      <FAQSection t={t} />

      {/* ───── FOOTER ───── */}
      <footer className="py-10 md:py-16 px-4 md:px-6 bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-5 text-center">
          <div className="text-2xl md:text-3xl font-black text-purple-200">{t.nav.brand}<span className="text-teal-400">{t.nav.brandHighlight}</span></div>
          <p className="text-purple-300 font-medium text-sm max-w-md">{t.footer.desc}</p>
          <div className="text-xs font-bold tracking-widest text-purple-400">{t.footer.copyright}</div>
        </div>
      </footer>

      {/* ───── DOCTOR MODAL ───── */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-purple-900/40 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.95, y: 40 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 40 }}
              className="bg-white/95 backdrop-blur-xl w-full sm:max-w-2xl rounded-t-[2rem] sm:rounded-[2rem] shadow-2xl overflow-hidden border border-purple-100 flex flex-col max-h-[90vh] sm:max-h-[85vh]">
              <div className="p-4 md:p-8 border-b border-purple-100 flex justify-between items-center bg-gradient-to-r from-purple-50 to-white">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center">
                    <Search className="text-purple-600" size={18} />
                  </div>
                  <h2 className="text-xl md:text-2xl font-black text-purple-900">{t.clinic.searchTitle}</h2>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="p-2 rounded-full hover:bg-red-50 text-zinc-400 hover:text-red-500 transition-colors">
                  <X size={22} />
                </button>
              </div>
              <div className="p-4 md:p-8 bg-white">
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" size={18} />
                  <input type="text" placeholder={t.clinic.searchPlaceholder} value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-purple-50/50 border-2 border-purple-100 rounded-2xl py-3 pl-11 pr-4 text-base font-medium text-purple-900 placeholder:text-purple-300 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-400/20 transition-all shadow-inner" />
                </div>
              </div>
              <div className="px-4 pb-6 md:px-8 md:pb-8 overflow-y-auto custom-scrollbar flex-1 min-h-[180px]">
                {searchAttempted ? (
                  searchResults.length > 0 ? (
                    <div className="space-y-3">
                      {searchResults.map((doc, i) => (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} key={i}
                          className="flex items-center justify-between p-3 md:p-4 rounded-2xl border border-purple-100 hover:border-purple-300 hover:shadow-md transition-all bg-white">
                          <div className="flex items-center gap-3">
                            <img src={doc.img} alt={doc.name} className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-purple-100 shadow-sm object-cover flex-shrink-0" />
                            <div>
                              <h4 className="text-sm md:text-lg font-black text-zinc-800 flex items-center gap-1.5 flex-wrap">
                                {doc.name} {doc.top && <span className="bg-teal-100 text-teal-800 text-[9px] uppercase font-black px-1.5 py-0.5 rounded-full">Top Rated</span>}
                              </h4>
                              <p className="text-purple-600 font-bold text-xs tracking-wide">{doc.spec}</p>
                              <p className="text-xs mt-0.5">{doc.rating}</p>
                            </div>
                          </div>
                          <button className="px-3 md:px-5 py-2 bg-gradient-to-r from-purple-600 to-teal-500 text-white font-bold rounded-xl text-xs md:text-sm transition-all shadow-md flex-shrink-0 ml-2">
                            {t.clinic.bookBtn}
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-10 px-4">
                      <Stethoscope className="mx-auto text-purple-200 mb-4" size={40} />
                      <p className="text-base text-zinc-500 font-medium">{t.clinic.noResults}</p>
                    </div>
                  )
                ) : (
                  <div className="text-center py-10 opacity-60">
                    <MapPin className="mx-auto text-purple-200 mb-4" size={40} />
                    <p className="font-bold text-purple-900 text-sm">Type a major Indian city to begin</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
