import React, { useState, useEffect } from 'react';


// Pour votre déploiement local sur Vercel, si l'image ne s'affiche toujours pas,
// décommentez la ligne ci-dessous et utilisez 'photoPathImport' dans la balise img :
// import photoPathImport from './assets/photo-removebg-preview.png';

import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Database, 
  Globe, 
  ChevronRight, 
  Menu, 
  X,
  FileText,
  Download,
  Send,
  Award,
  Eye,
  Rocket,
  Zap,
  CheckCircle2,
  Calendar,
  Palette,
  Sparkles
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState(null); 
  const [scrolled, setScrolled] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  
  // --- GESTION DU THÈME (ACCENT UNIQUEMENT) ---
  const [activeColor, setActiveColor] = useState('blue');
  const [showColorPicker, setShowColorPicker] = useState(false);

  const colors = [
    { id: 'blue', hex: '#2563eb', label: 'Bleu' },
    { id: 'emerald', hex: '#10b981', label: 'Émeraude' },
    { id: 'purple', hex: '#a855f7', label: 'Violet' },
    { id: 'rose', hex: '#f43f5e', label: 'Rose' },
    { id: 'orange', hex: '#f97316', label: 'Orange' },
  ];

  const theme = {
    blue: { primary: 'bg-blue-600', hover: 'hover:bg-blue-500', text: 'text-blue-500', textLight: 'text-blue-400', shadow: 'shadow-blue-600/20', border: 'border-blue-500', bgSoft: 'bg-blue-500/10' },
    emerald: { primary: 'bg-emerald-600', hover: 'hover:bg-emerald-500', text: 'text-emerald-500', textLight: 'text-emerald-400', shadow: 'shadow-emerald-600/20', border: 'border-emerald-500', bgSoft: 'bg-emerald-500/10' },
    purple: { primary: 'bg-purple-600', hover: 'hover:bg-purple-500', text: 'text-purple-500', textLight: 'text-purple-400', shadow: 'shadow-purple-600/20', border: 'border-purple-500', bgSoft: 'bg-purple-500/10' },
    rose: { primary: 'bg-rose-600', hover: 'hover:bg-rose-500', text: 'text-rose-500', textLight: 'text-rose-400', shadow: 'shadow-rose-600/20', border: 'border-rose-500', bgSoft: 'bg-rose-500/10' },
    orange: { primary: 'bg-orange-600', hover: 'hover:bg-orange-500', text: 'text-orange-500', textLight: 'text-orange-400', shadow: 'shadow-orange-600/20', border: 'border-orange-500', bgSoft: 'bg-orange-500/10' },
  }[activeColor];

  // --- CONFIGURATION ---
  const FORMSPREE_ID = "mbdrlpdn"; 
  const cvPath = "/cv_stage_Mohamed_Sanogo.pdf";
  const photoPath = "/photo.png";
  const myEmail = "msanogo@et.esiea.fr";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    const timer = setTimeout(() => setShowWelcome(true), 1000);
    const hideTimer = setTimeout(() => setShowWelcome(false), 6000);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const projects = [
    {
      title: "Serre Intelligente IoT",
      tech: ["C#", "Arduino", "MySQL"],
      desc: "Système d'arrosage autonome piloté par données capteurs. Automatisation complète du cycle de vie végétal.",
      impact: "-30% consommation d'eau",
      github: "https://github.com/Sanogo2429/Gaia.git",
      icon: <Cpu size={28}/>
    },
    {
      title: "Plateforme Gastronomique",
      tech: ["PHP", "MVC", "MySQL"],
      desc: "Application de gestion de recettes avec architecture MVC sécurisée et optimisation SQL.",
      impact: "-40% temps de chargement",
      github: "https://github.com/Sanogo2429/cookify.git",
      icon: <Globe size={28}/>
    },
    {
      title: "Escape Game Interactif",
      tech: ["React", "Tailwind", "JS"],
      desc: "Jeu web immersif avec mécaniques d'énigmes complexes et design adaptatif haute performance.",
      impact: "+85% satisfaction testeurs",
      github: "https://github.com/Sanogo2429/The-lost-",
      icon: <Database size={28}/>
    }
  ];

  const handleContact = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
      });
      if (response.ok) {
        setFormStatus('success');
        e.target.reset(); 
        setTimeout(() => setFormStatus(null), 5000); 
      } else { setFormStatus('error'); }
    } catch { setFormStatus('error'); }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans scroll-smooth selection:bg-white/10 overflow-x-hidden">
      
      {/* Animation de flottaison discrète pour la photo */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float-simple {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>

      {/* Toast Bienvenue */}
      <div className={`fixed left-6 bottom-6 z-[150] transition-all duration-700 transform ${showWelcome ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <div className="bg-slate-900 border border-white/10 p-5 rounded-2xl shadow-2xl flex items-center gap-4 max-w-sm backdrop-blur-xl">
          <div className={`w-12 h-12 rounded-xl ${theme.primary} flex items-center justify-center text-white shadow-lg`}>
            <Sparkles size={24} />
          </div>
          <div>
            <h4 className="font-black text-sm text-white uppercase tracking-wider">Bienvenue !</h4>
            <p className="text-xs text-slate-400">Ravi de vous accueillir sur mon portfolio.</p>
          </div>
          <button onClick={() => setShowWelcome(false)} className="text-slate-500 hover:text-white"><X size={16} /></button>
        </div>
      </div>

      {/* Sélecteur de couleurs */}
      <div className="fixed right-6 bottom-6 z-[120]">
        <button 
          onClick={() => setShowColorPicker(!showColorPicker)}
          className={`p-4 rounded-full bg-slate-900 border border-white/10 shadow-2xl ${theme.text} hover:scale-110 transition-all`}
        >
          {showColorPicker ? <X size={24} /> : <Palette size={24} />}
        </button>
        {showColorPicker && (
          <div className="absolute bottom-16 right-0 bg-slate-900 border border-white/10 p-3 rounded-2xl shadow-3xl flex flex-col gap-3">
            {colors.map((c) => (
              <button key={c.id} onClick={() => { setActiveColor(c.id); setShowColorPicker(false); }} className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-125 ${activeColor === c.id ? 'border-white' : 'border-transparent'}`} style={{ backgroundColor: c.hex }} />
            ))}
          </div>
        )}
      </div>

      {/* Navbar */}
      <nav className={`fixed w-full top-0 z-[100] transition-all duration-300 ${scrolled ? 'bg-[#020617]/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 ${theme.primary} rounded-lg flex items-center justify-center font-black text-white shadow-lg text-xs`}>MS</div>
            <span className="text-xl font-bold tracking-tight text-white hidden sm:block uppercase">Mohamed Sanogo</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['Accueil', 'Projets', 'Profil', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-black hover:text-white transition-colors uppercase tracking-widest text-slate-400">{item}</a>
            ))}
            <a href="#contact" className={`${theme.primary} ${theme.hover} text-white px-6 py-2.5 rounded-full text-[10px] font-black transition-all uppercase shadow-xl ${theme.shadow}`}>CONTACT</a>
          </div>
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X size={28} /> : <Menu size={28} />}</button>
        </div>
      </nav>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#020617] z-[110] flex flex-col items-center justify-center gap-8 md:hidden text-center p-6">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 text-slate-400 hover:text-white"><X size={40}/></button>
          {['Accueil', 'Projets', 'Profil', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-4xl font-black text-white hover:text-blue-500 uppercase">{item}</a>
          ))}
          <div className="mt-8 flex gap-6">
            <a href="https://linkedin.com/in/mohamed-sanogo" target="_blank" rel="noreferrer" className={theme.text}><Linkedin size={32}/></a>
            <a href="https://github.com/Sanogo2429" target="_blank" rel="noreferrer" className={theme.text}><Github size={32}/></a>
          </div>
        </div>
      )}

      {/* Hero */}
      <section id="accueil" className="relative pt-48 pb-32 px-6 flex items-center justify-center overflow-hidden min-h-screen">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] ${theme.primary} opacity-[0.03] blur-[120px] rounded-full -z-10 transition-colors duration-1000`} />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${theme.bgSoft} border ${theme.border}/20 ${theme.textLight} text-[10px] font-black mb-8 tracking-widest uppercase`}>
              <Zap size={14} className="fill-current" /> ÉLÈVE-INGÉNIEUR @ ESIEA
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter uppercase">
              Mohamed <br /><span className={`${theme.textLight} italic`}>Sanogo.</span>
            </h1>
            <p className="text-xl text-slate-400 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Architecte de solutions <strong>Web</strong> & <strong>IoT</strong>. 
              Précision, performance et innovation au service de vos projets.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 uppercase text-[10px] font-black tracking-widest">
              <a href="#projets" className={`${theme.primary} ${theme.hover} text-white px-10 py-5 rounded-2xl transition-all shadow-xl`}>Voir Projets</a>
              <a href={cvPath} download className="bg-white/5 border border-white/10 px-10 py-5 rounded-2xl hover:bg-white/10 transition-all">Télécharger CV</a>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="relative w-64 h-64 md:w-[450px] md:h-[450px] group">
              <div className={`absolute inset-0 ${theme.primary} opacity-10 rounded-[60px] blur-3xl animate-pulse`} />
              <div className="relative w-full h-full bg-slate-900 rounded-[50px] border border-white/10 p-3 overflow-hidden shadow-2xl animate-float-simple">
                <img 
                  src={photoPath} 
                  alt="Mohamed Sanogo" 
                  className="w-full h-full object-cover rounded-[40px] pointer-events-none" 
                  onError={(e) => { e.target.src = "https://via.placeholder.com/500x500/020617/FFFFFF?text=Mohamed+Ismael"; }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projets */}
      <section id="projets" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-20 uppercase tracking-tighter text-center md:text-left">Réalisations <span className="text-slate-500 italic block sm:inline">2024-2025.</span></h2>
          <div className="grid lg:grid-cols-3 gap-10">
            {projects.map((project, idx) => (
              <div key={idx} className={`group flex flex-col bg-slate-900/40 backdrop-blur-sm rounded-[40px] border border-white/5 p-10 hover:${theme.border}/30 transition-all duration-500 shadow-2xl relative overflow-hidden`}>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-10 bg-slate-800 border border-white/5 ${theme.text} group-hover:scale-110 transition-transform shadow-lg`}>
                  {project.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase italic tracking-tight">{project.title}</h3>
                <p className="text-slate-400 mb-8 flex-1 leading-relaxed text-sm font-light italic">"{project.desc}"</p>
                <div className={`p-4 rounded-2xl bg-white/5 border-l-4 ${theme.border} mb-8`}>
                   <div className="flex items-center gap-2 font-black text-white text-[10px] uppercase tracking-widest mb-1 italic">
                      <Award size={14} className={theme.text} /> Résultat : {project.impact}
                   </div>
                </div>
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-4 bg-white/5 border border-white/10 rounded-2xl font-black hover:bg-white text-slate-950 transition-all text-[10px] uppercase tracking-widest uppercase">VOIR SUR GITHUB</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profil & CV (Section Dossier Candidat) */}
      <section id="profil" className="py-32 px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="bg-[#020617] p-4 rounded-[40px] border border-white/10 shadow-3xl aspect-[1/1.414] overflow-hidden group">
            <iframe 
              src={`${cvPath}#toolbar=0&navpanes=0&scrollbar=0`} 
              className="w-full h-full rounded-3xl border-none transition-all duration-700 opacity-90 hover:opacity-100" 
              title="CV Mohamed Sanogo" 
            />
          </div>
          <div className="text-center lg:text-left">
            <div className={`flex items-center justify-center lg:justify-start gap-3 ${theme.text} font-black text-xs uppercase tracking-[0.4em] mb-8 italic`}>
              <div className={`h-px w-8 ${theme.primary} hidden sm:block`} /> Dossier Candidat
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-white mb-10 leading-none uppercase tracking-tighter">Mon <br /><span className={`${theme.textLight} italic underline decoration-white/10 decoration-8 underline-offset-12 text-3xl sm:text-7xl`}>Parcours.</span></h2>
            <p className="text-slate-400 text-lg mb-12 font-light italic leading-relaxed">Consultez mon CV interactif pour découvrir le détail de mes expériences académiques et professionnelles.</p>
            <div className="flex flex-col sm:flex-row gap-4 uppercase text-[10px] font-black tracking-widest text-center">
              <a href={cvPath} download className={`${theme.primary} ${theme.hover} text-white px-10 py-5 rounded-2xl transition-all shadow-xl ${theme.shadow} block`}>Télécharger PDF</a>
              <a href={cvPath} target="_blank" rel="noreferrer" className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl hover:bg-white/10 transition-all block">Plein Écran</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-6xl mx-auto bg-slate-900/40 border border-white/10 p-10 md:p-20 rounded-[60px] relative overflow-hidden shadow-3xl">
          <div className="absolute top-0 right-0 p-12 text-white/5 rotate-12 -z-10"><Mail size={400}/></div>
          <div className="relative z-10 grid lg:grid-cols-5 gap-20 items-center">
            <div className="lg:col-span-2 text-center lg:text-left">
              <h2 className="text-5xl font-black text-white mb-8 uppercase tracking-tighter italic">Lançons le <br /><span className={`${theme.textLight} tracking-normal`}>Contact.</span></h2>
              <div className="space-y-4 font-black text-[10px] tracking-widest uppercase text-left mt-10">
                <a href={`mailto:${myEmail}`} className="flex items-center gap-4 text-white hover:text-white group">
                  <div className={`w-10 h-10 ${theme.bgSoft} rounded-full flex items-center justify-center ${theme.text} group-hover:${theme.primary} group-hover:text-white transition-all`}><Mail size={20}/></div>
                  <span>{myEmail}</span>
                </a>
                <a href="https://linkedin.com/in/mohamed-sanogo" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-white hover:text-white group">
                  <div className={`w-10 h-10 ${theme.bgSoft} rounded-full flex items-center justify-center ${theme.text} group-hover:${theme.primary} group-hover:text-white transition-all`}><Linkedin size={20}/></div>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-3">
              <form className="space-y-6" onSubmit={handleContact}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 uppercase text-[9px] font-black tracking-widest text-slate-500">
                  <div className="space-y-2">
                    <label>Votre Nom</label>
                    <input name="name" type="text" className="w-full bg-[#020617] border border-white/5 rounded-2xl px-6 py-5 focus:border-white outline-none text-white transition-colors" required />
                  </div>
                  <div className="space-y-2">
                    <label>Email Pro</label>
                    <input name="email" type="email" className="w-full bg-[#020617] border border-white/5 rounded-2xl px-6 py-5 focus:border-white outline-none text-white transition-colors" required />
                  </div>
                </div>
                <div className="space-y-2 uppercase text-[9px] font-black tracking-widest text-slate-500">
                  <label>Message</label>
                  <textarea name="message" rows="4" className="w-full bg-[#020617] border border-white/5 rounded-2xl px-6 py-5 focus:border-white outline-none text-white resize-none transition-colors" required></textarea>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button type="submit" className={`w-full py-6 rounded-2xl font-black transition-all uppercase text-[10px] ${formStatus === 'success' ? 'bg-emerald-600 text-white' : `${theme.primary} text-white shadow-2xl`}`} disabled={formStatus === 'sending'}>
                    {formStatus === 'sending' ? "Envoi..." : formStatus === 'success' ? "Message Envoyé !" : "Via Formulaire"}
                  </button>
                  <a href={`mailto:${myEmail}?subject=Contact Portfolio`} className="w-full py-6 rounded-2xl font-black bg-white/5 border border-white/10 text-white text-[10px] uppercase block text-center">E-mail Direct</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 text-center border-t border-white/5 bg-black/20">
        <div className="text-2xl font-black text-white mb-4 tracking-tighter uppercase italic tracking-[0.2em]">Mohamed Ismael Sanogo</div>
        <p className="text-slate-800 text-[10px] uppercase font-black tracking-[0.8em] italic">Engineering Student @ ESIEA • © 2025</p>
      </footer>
    </div>
  );
};

export default App;