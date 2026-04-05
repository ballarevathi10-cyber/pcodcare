import React, { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Activity, Apple, Flame, AlertCircle, CheckCircle2, XCircle, Stethoscope, ShieldAlert, Zap, Leaf,
  Search, MapPin, X
} from 'lucide-react'
import { translations } from './content'

const SectionHeading = ({ children, tagline }) => (
  <div className="mb-14 text-center">
    {tagline && <span className="text-sm md:text-base uppercase tracking-widest text-purple-600 mb-3 block font-bold">{tagline}</span>}
    <h2 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-teal-700">
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
    whileHover={{ y: -5 }}
    className={`glass glass-hover rounded-[2rem] p-8 md:p-10 relative overflow-hidden group border-2 ${className}`}
  >
    <div className="relative z-10 h-full">{children}</div>
    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tr from-purple-200 to-teal-100 blur-3xl opacity-50 group-hover:opacity-80 transition-all duration-700 rounded-full pointer-events-none" />
  </motion.div>
)

function App() {
  const containerRef = useRef(null)
  const [lang, setLang] = useState('en')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const t = translations[lang]

  // Doctor search logic
  const normalizedQuery = searchQuery.toLowerCase().trim();
  const searchResults = t.clinic.doctors[normalizedQuery] || [];
  const searchAttempted = normalizedQuery.length > 2;

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div ref={containerRef} className="relative min-h-screen text-zinc-800">
      <div className="aura-bg" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex flex-col md:flex-row gap-4 justify-between items-center backdrop-blur-2xl bg-white/60 border-b border-purple-200 shadow-sm">
        <div className="flex flex-col items-center md:items-start">
          <div className="text-3xl font-black tracking-tighter text-purple-900 drop-shadow-sm leading-none">{t.nav.brand}<span className="text-teal-600">{t.nav.brandHighlight}</span></div>
          <div className="text-[11px] md:text-xs font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-600 mt-1">@ Developed by Revathi Balla</div>
        </div>
        
        {/* Language Switcher & CTA */}
        <div className="flex items-center gap-4">
          <div className="flex bg-purple-100 rounded-full p-1 border border-purple-200">
            {['en', 'te', 'hi'].map((l) => (
              <button 
                key={l}
                onClick={() => setLang(l)}
                className={`px-4 py-1.5 text-xs font-bold rounded-full uppercase transition-all ${
                  lang === l ? 'bg-purple-600 text-white shadow-md' : 'text-purple-700 hover:bg-purple-200'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="hidden md:block px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 text-sm font-bold text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            {t.nav.join}
          </button>
        </div>
      </nav>

      {/* Persistent Dashboard Sub-Nav */}
      <div className="fixed top-[120px] md:top-[76px] w-full z-40 py-3 px-2 bg-white/70 backdrop-blur-xl border-b border-purple-100 shadow-sm overflow-x-auto flex justify-start md:justify-center custom-scrollbar">
        <div className="flex gap-2 md:gap-4 min-w-max px-4">
           <button onClick={() => scrollTo('symptoms')} className="px-5 py-2.5 bg-white rounded-full shadow-sm border border-purple-100 hover:border-purple-300 hover:shadow-md transition-all font-bold text-purple-800 flex items-center gap-2 text-sm md:text-base"><Activity size={16} className="text-teal-500"/> {t.dashboard.symptoms}</button>
           <button onClick={() => scrollTo('problems')} className="px-5 py-2.5 bg-white rounded-full shadow-sm border border-purple-100 hover:border-purple-300 hover:shadow-md transition-all font-bold text-purple-800 flex items-center gap-2 text-sm md:text-base"><ShieldAlert size={16} className="text-red-400"/> {t.dashboard.problems}</button>
           <button onClick={() => scrollTo('treatment')} className="px-5 py-2.5 bg-white rounded-full shadow-sm border border-purple-100 hover:border-purple-300 hover:shadow-md transition-all font-bold text-purple-800 flex items-center gap-2 text-sm md:text-base"><Stethoscope size={16} className="text-purple-500"/> {t.dashboard.treatment}</button>
           <button onClick={() => scrollTo('diet')} className="px-5 py-2.5 bg-white rounded-full shadow-sm border border-purple-100 hover:border-purple-300 hover:shadow-md transition-all font-bold text-purple-800 flex items-center gap-2 text-sm md:text-base"><Apple size={16} className="text-teal-500"/> {t.dashboard.diet}</button>
           <button onClick={() => scrollTo('seeds')} className="px-5 py-2.5 bg-white rounded-full shadow-sm border border-purple-100 hover:border-purple-300 hover:shadow-md transition-all font-bold text-purple-800 flex items-center gap-2 text-sm md:text-base"><Leaf size={16} className="text-teal-500"/> {t.dashboard.seeds}</button>
           <button onClick={() => scrollTo('fitness')} className="px-5 py-2.5 bg-white rounded-full shadow-sm border border-purple-100 hover:border-purple-300 hover:shadow-md transition-all font-bold text-purple-800 flex items-center gap-2 text-sm md:text-base"><Flame size={16} className="text-teal-500"/> {t.dashboard.exercises}</button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 text-center pt-48 pb-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mb-8"
        >
          {/* Main Anatomical Image */}
          <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center p-4 bg-white/40 rounded-full shadow-2xl backdrop-blur-md border border-white relative">
             <motion.img 
                src="/uterus.png" 
                alt="Uterus Anatomy"
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full object-contain mix-blend-multiply"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-purple-100/50 to-transparent rounded-full pointer-events-none" />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
          <span className="text-sm font-bold text-teal-600 uppercase tracking-[0.3em] mb-4 block">{t.hero.tagline}</span>
          <h1 className="text-5xl md:text-[5rem] lg:text-[6rem] font-black mb-6 tracking-tight text-purple-900 leading-[1.1]">
            {t.hero.title1} <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500 italic font-serif px-2">{t.hero.title2}</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-600 mb-10 font-medium leading-relaxed">
            {t.hero.subtitle}
          </p>
        </motion.div>
      </section>

      {/* About / Matrix (Symptoms) Section */}
      <section id="symptoms" className="py-24 px-6 max-w-7xl mx-auto">
        <SectionHeading tagline={t.about.tagline}>{t.about.title}</SectionHeading>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <BentoCard className="bg-white/80 border-purple-100 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-black mb-6 text-purple-900">{t.about.w_title}</h3>
              <p className="text-lg text-zinc-600 leading-relaxed">
                {t.about.w_desc}
              </p>
            </div>
            {/* The beautiful minimal Cysts illustration */}
            <div className="mt-8 flex justify-center items-center">
               <img src="/cysts.png?v=2" alt="Cysts represented as water bubbles" className="w-48 h-48 md:w-64 md:h-64 object-contain opacity-90 drop-shadow-xl mix-blend-multiply hover:scale-105 transition-transform duration-700" />
            </div>
          </BentoCard>

          <BentoCard className="bg-purple-50/80 border-purple-200">
             <h3 className="text-2xl font-black mb-6 text-purple-900">{t.about.matrix_title}</h3>
             <ul className="space-y-4">
                {t.about.symptoms_list.map((sym, i) => (
                  <li key={i} className="flex gap-4 items-center bg-white p-4 rounded-xl shadow-sm border border-purple-50">
                     <span className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-sm">{i+1}</span>
                     <span className="font-bold text-zinc-700">{sym}</span>
                  </li>
                ))}
             </ul>
          </BentoCard>
        </div>
      </section>

      {/* Problems & PCOD vs PCOS (Compare) Section */}
      <section id="problems" className="py-24 px-6 bg-purple-50/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading tagline={t.problems.tagline}>{t.problems.title}</SectionHeading>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Health Risks */}
            <BentoCard className="bg-red-50/60 border-red-200">
               <div className="flex items-center gap-3 mb-6">
                 <ShieldAlert className="text-red-500" size={36} />
                 <h3 className="text-3xl font-black text-red-700">{t.problems.title}</h3>
               </div>
               <p className="text-lg text-zinc-700 mb-6 font-medium">{t.problems.desc}</p>
               <ul className="space-y-3 pl-2 border-l-4 border-red-300">
                  {t.problems.list.map((item, i) => (
                    <li key={i} className="pl-4 text-zinc-800 font-bold leading-relaxed">{item}</li>
                  ))}
               </ul>
            </BentoCard>

            {/* PCOD vs PCOS */}
            <BentoCard className="bg-white/90 border-purple-200">
               <div className="flex items-center gap-3 mb-6">
                 <Zap className="text-teal-500" size={32} />
                 <h3 className="text-3xl font-black text-purple-900">{t.compare.title}</h3>
               </div>
               <div className="space-y-8 mt-6">
                  <div className="p-5 bg-teal-50 rounded-2xl border border-teal-100">
                    <span className="px-3 py-1 bg-teal-200 text-teal-800 text-xs font-black uppercase rounded-full mb-3 inline-block">Mild</span>
                    <h4 className="text-xl font-bold text-teal-900 mb-2">{t.compare.pcod_title}</h4>
                    <p className="text-zinc-600 font-medium">{t.compare.pcod_desc}</p>
                  </div>
                  <div className="p-5 bg-red-50 rounded-2xl border border-red-100">
                    <span className="px-3 py-1 bg-red-200 text-red-800 text-xs font-black uppercase rounded-full mb-3 inline-block">Severe</span>
                    <h4 className="text-xl font-bold text-red-900 mb-2">{t.compare.pcos_title}</h4>
                    <p className="text-zinc-600 font-medium">{t.compare.pcos_desc}</p>
                  </div>
               </div>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* Treatments & Tablets Section */}
      <section id="treatment" className="py-24 px-6 max-w-4xl mx-auto">
        <SectionHeading tagline={t.treatment.tagline}>{t.treatment.title}</SectionHeading>
        <BentoCard className="bg-white shadow-xl border border-purple-200 relative overflow-hidden">
          
          {/* Strict Warning Alert */}
          <div className="bg-red-500 text-white p-6 rounded-2xl mb-8 flex flex-col md:flex-row items-center gap-6 shadow-[0_10px_30px_rgba(239,68,68,0.3)]">
             <AlertCircle size={48} className="flex-shrink-0 animate-pulse" />
             <div>
                <h4 className="font-black text-xl mb-2 tracking-widest">{t.treatment.warning_tag}</h4>
                <p className="font-semibold text-red-50 leading-relaxed text-sm md:text-base">{t.treatment.warning_msg}</p>
             </div>
          </div>

          <div className="flex items-center gap-4 mb-6">
             <Stethoscope className="text-purple-500" size={32} />
             <p className="text-xl font-bold text-zinc-700">{t.treatment.desc}</p>
          </div>

          <div className="space-y-4">
             {t.treatment.meds.map((med, i) => (
                <div key={i} className="p-5 bg-purple-50 rounded-2xl border border-purple-100/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-md transition-all">
                  <span className="font-black text-lg text-purple-900">{med.name}</span>
                  <span className="px-4 py-2 bg-white text-purple-700 rounded-full font-bold text-sm shadow-sm whitespace-nowrap">{med.purpose}</span>
                </div>
             ))}
          </div>

        </BentoCard>
      </section>

      {/* Diet / Fuel Section */}
      <section id="diet" className="py-24 px-6 bg-white/50 backdrop-blur-2xl border-t border-purple-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeading tagline={t.fuel.tagline}>{t.fuel.title}</SectionHeading>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
             {/* Eat */}
             <BentoCard className="bg-teal-50/50 border-teal-200 flex flex-col">
                <div className="h-64 w-full rounded-2xl overflow-hidden mb-8 shadow-inner relative">
                   <img src="/healthy.png" alt="Healthy Food" className="w-full h-full object-cover" />
                </div>
                <div className="flex items-center gap-3 mb-4 text-teal-700">
                   <CheckCircle2 size={32} />
                   <h3 className="text-3xl font-black">{t.fuel.eat_title}</h3>
                </div>
                <p className="text-teal-800 font-medium mb-6">{t.fuel.eat_desc}</p>
                <div className="space-y-3">
                   {t.fuel.eat_list.map((item, i) => (
                      <div key={i} className="p-4 bg-white rounded-xl shadow-sm border border-teal-100 text-zinc-700 font-bold flex items-center gap-3">
                         <span className="w-2 h-2 rounded-full bg-teal-400"></span>{item}
                      </div>
                   ))}
                </div>
             </BentoCard>

             {/* Avoid */}
             <BentoCard className="bg-red-50/50 border-red-200 flex flex-col">
                <div className="h-64 w-full rounded-2xl overflow-hidden mb-8 shadow-inner relative">
                   <img src="/unhealthy.png" alt="Unhealthy Food" className="w-full h-full object-cover" />
                </div>
                <div className="flex items-center gap-3 mb-4 text-red-600">
                   <XCircle size={32} />
                   <h3 className="text-3xl font-black">{t.fuel.avoid_title}</h3>
                </div>
                <p className="text-red-700 font-medium mb-6">{t.fuel.avoid_desc}</p>
                <div className="space-y-3">
                   {t.fuel.avoid_list.map((item, i) => (
                      <div key={i} className="p-4 bg-white rounded-xl shadow-sm border border-red-100 text-zinc-700 font-bold flex items-center gap-3">
                         <span className="w-2 h-2 rounded-full bg-red-400"></span>{item}
                      </div>
                   ))}
                </div>
             </BentoCard>
          </div>
        </div>
      </section>

      {/* Seed Cycling Section */}
      <section id="seeds" className="py-24 px-6 bg-purple-50/50 border-t border-purple-100">
         <div className="max-w-7xl mx-auto">
            <SectionHeading tagline={t.seeds.tagline}>{t.seeds.title}</SectionHeading>
            <p className="text-center text-lg text-zinc-600 font-medium max-w-2xl mx-auto mb-12">
              {t.seeds.desc}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {t.seeds.list.map((seed, i) => (
                  <BentoCard key={i} className="bg-white/90 border-purple-100 p-6 flex flex-col">
                     <div className="h-40 w-full rounded-xl overflow-hidden mb-6 shadow-inner relative">
                        <img src={seed.image} alt={seed.name} className="w-full h-full object-cover" />
                     </div>
                     <h4 className="text-xl font-black text-purple-900 mb-2">{seed.name}</h4>
                     <p className="text-sm text-zinc-600 leading-relaxed font-bold">{seed.desc}</p>
                  </BentoCard>
               ))}
            </div>
         </div>
      </section>

      {/* Fitness / Yoga Poses Section */}
      <section id="fitness" className="py-24 px-6 max-w-7xl mx-auto border-t border-purple-100">
         <SectionHeading tagline={t.fitness.tagline}>{t.fitness.title}</SectionHeading>
         
         <div className="mb-10 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-purple-900 mb-3">{t.fitness.card_title}</h3>
            <p className="text-zinc-600 leading-relaxed font-medium">{t.fitness.card_desc}</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.fitness.poses.map((pose, i) => (
               <BentoCard key={i} className="bg-white/80 border-purple-100 p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
                  <div className="w-48 h-48 md:w-56 md:h-56 flex-shrink-0 bg-purple-50 rounded-[2rem] p-4 flex items-center justify-center border border-purple-100 shadow-inner">
                     <img src={`/${pose.image}.png`} alt={pose.name} className="w-full h-full object-contain mix-blend-multiply" />
                  </div>
                  <div className="flex-1">
                     <h4 className="text-2xl font-black text-purple-900 mb-4">{pose.name}</h4>
                     <p className="text-zinc-600 leading-relaxed font-bold">{pose.desc}</p>
                  </div>
               </BentoCard>
            ))}
         </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
            <div className="text-3xl font-black text-purple-200 mb-2">{t.nav.brand}<span className="text-teal-400">{t.nav.brandHighlight}</span></div>
            <p className="text-purple-300 font-medium text-sm">
              {t.footer.desc}
            </p>
          </div>
          <div className="text-xs font-bold tracking-widest text-purple-400">
            {t.footer.copyright}
          </div>
        </div>
      </footer>
      {/* Doctor Search Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-purple-900/40 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white/95 backdrop-blur-xl w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden border border-purple-100 flex flex-col max-h-[85vh]"
            >
              {/* Header */}
              <div className="p-6 md:p-8 border-b border-purple-100 flex justify-between items-center bg-gradient-to-r from-purple-50 to-white">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <Search className="text-purple-600" size={20} />
                   </div>
                   <h2 className="text-2xl font-black text-purple-900">{t.clinic.searchTitle}</h2>
                 </div>
                 <button onClick={() => setIsModalOpen(false)} className="p-2 rounded-full hover:bg-red-50 text-zinc-400 hover:text-red-500 transition-colors">
                    <X size={24} />
                 </button>
              </div>

              {/* Search Bar */}
              <div className="p-6 md:p-8 bg-white">
                 <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" size={20} />
                    <input 
                      type="text" 
                      placeholder={t.clinic.searchPlaceholder}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-purple-50/50 border-2 border-purple-100 rounded-2xl py-4 pl-12 pr-4 text-lg font-medium text-purple-900 placeholder:text-purple-300 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-400/20 transition-all shadow-inner"
                    />
                 </div>
              </div>

              {/* Results Area */}
              <div className="px-6 pb-8 md:px-8 overflow-y-auto custom-scrollbar flex-1 min-h-[200px]">
                 {searchAttempted ? (
                    searchResults.length > 0 ? (
                       <div className="space-y-4">
                          {searchResults.map((doc, i) => (
                             <motion.div 
                               initial={{ opacity: 0, y: 10 }}
                               animate={{ opacity: 1, y: 0 }}
                               transition={{ delay: i * 0.1 }}
                               key={i} 
                               className="flex items-center justify-between p-4 rounded-2xl border border-purple-100 hover:border-purple-300 hover:shadow-md transition-all bg-white"
                             >
                                <div className="flex items-center gap-4">
                                   <img src={doc.img} alt={doc.name} className="w-16 h-16 rounded-full border-2 border-purple-100 shadow-sm object-cover" />
                                   <div>
                                      <h4 className="text-lg font-black text-zinc-800 flex items-center gap-2">
                                        {doc.name} 
                                        {doc.top && <span className="bg-teal-100 text-teal-800 text-[10px] uppercase font-black px-2 py-0.5 rounded-full">Top Rated</span>}
                                      </h4>
                                      <p className="text-purple-600 font-bold text-sm tracking-wide">{doc.spec}</p>
                                      <p className="text-sm mt-1">{doc.rating}</p>
                                   </div>
                                </div>
                                <button className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-teal-500 hover:from-teal-500 hover:to-purple-600 text-white font-bold rounded-xl text-sm transition-all shadow-md hidden sm:block">
                                   {t.clinic.bookBtn}
                                </button>
                             </motion.div>
                          ))}
                       </div>
                    ) : (
                       <div className="text-center py-10 px-4">
                          <Stethoscope className="mx-auto text-purple-200 mb-4" size={48} />
                          <p className="text-lg text-zinc-500 font-medium leading-relaxed max-w-sm mx-auto">{t.clinic.noResults}</p>
                       </div>
                    )
                 ) : (
                    <div className="text-center py-10 opacity-60">
                       <MapPin className="mx-auto text-purple-200 mb-4" size={48} />
                       <p className="font-bold text-purple-900">Type a major Indian city to begin</p>
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
