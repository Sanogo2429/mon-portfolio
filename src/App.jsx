import React, { useState, useEffect } from 'react';
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
  Sparkles,
  Users,
  Lightbulb,
  ShieldCheck,
  Brain,
  Layers,
  Terminal,
  Monitor,
  Briefcase,
  Heart
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState(null); 
  const [scrolled, setScrolled] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  
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
    blue: { 
      primary: 'bg-blue-600', 
      text: 'text-blue-500', 
      textLight: 'text-blue-400', 
      border: 'border-blue-500/30', 
      bgMain: 'bg-[#020817]',
      bgGradient: 'from-[#020817] via-[#030d2b] to-[#020817]',
      bgSoft: 'bg-blue-500/10',
      accent: '#2563eb'
    },
    emerald: { 
      primary: 'bg-emerald-600', 
      text: 'text-emerald-500', 
      textLight: 'text-emerald-400', 
      border: 'border-emerald-500/30', 
      bgMain: 'bg-[#020a08]',
      bgGradient: 'from-[#020a08] via-[#041a14] to-[#020a08]',
      bgSoft: 'bg-emerald-500/10',
      accent: '#10b981'
    },
    purple: { 
      primary: 'bg-purple-600', 
      text: 'text-purple-500', 
      textLight: 'text-purple-400', 
      border: 'border-purple-500/30', 
      bgMain: 'bg-[#06020a]',
      bgGradient: 'from-[#06020a] via-[#12051f] to-[#06020a]',
      bgSoft: 'bg-purple-500/10',
      accent: '#a855f7'
    },
    rose: { 
      primary: 'bg-rose-600', 
      text: 'text-rose-500', 
      textLight: 'text-rose-400', 
      border: 'border-rose-500/30', 
      bgMain: 'bg-[#0a0204]',
      bgGradient: 'from-[#0a0204] via-[#1a040b] to-[#0a0204]',
      bgSoft: 'bg-rose-500/10',
      accent: '#f43f5e'
    },
    orange: { 
      primary: 'bg-orange-600', 
      text: 'text-orange-500', 
      textLight: 'text-orange-400', 
      border: 'border-orange-500/30', 
      bgMain: 'bg-[#0a0502]',
      bgGradient: 'from-[#0a0502] via-[#1a0d04] to-[#0a0502]',
      bgSoft: 'bg-orange-500/10',
      accent: '#f97316'
    },
  }[activeColor];

  const cvPath = "/cv_stage_Mohamed_Sanogo.pdf";
  const photoPath = "/maphoto.png";
  const myEmail = "msanogo@et.esiea.fr";
  const myLinkedin = "https://linkedin.com/in/mohamed-ismael-sanogo";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    const timer = setTimeout(() => setShowWelcome(true), 1000);
    const hideTimer = setTimeout(() => setShowWelcome(false), 8000);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const softSkills = [
    { name: "Travail d'Équipe", desc: "Collaboration agile", icon: <Users size={20} /> },
    { name: "Adaptabilité", desc: "Apprentissage constant", icon: <Brain size={20} /> },
    { name: "Rigueur", desc: "Code propre & structuré", icon: <ShieldCheck size={20} /> },
    { name: "Force de proposition", desc: "Esprit critique & innovant", icon: <Lightbulb size={20} /> },
  ];

  const techSkills = [
    { name: "Frontend", tools: ["React", "Tailwind CSS", "JavaScript"], icon: <Monitor size={20} /> },
    { name: "Backend", tools: ["Node.js", "PHP (MVC)", "MySQL"], icon: <Terminal size={20} /> },
    { name: "IoT & Systèmes", tools: ["Arduino", "C#", "C++"], icon: <Cpu size={20} /> },
    { name: "Outils", tools: ["Git", "GitLab", "Docker", "Vercel"], icon: <Layers size={20} /> },
  ];

  const timeline = [
    { year: "2024 - 2026", title: "Bachelor Informatique", place: "ESIEA Paris", desc: "Spécialisation Développement Web et IoT. Apprentissage de l'architecture MVC et des méthodes Agiles." },
    { year: "2023 - 2024", title: "Université Félix-Houphouët-Boigny", place: "Cocody (Abidjan)", desc: "Parcours universitaire scientifique - Renforcement des bases en sciences numériques." },
    { year: "2022 - 2023", title: "Classes Préparatoires (PCSI/PT)", place: "Parcours Technologique", desc: "Formation scientifique intensive en Physique, Chimie et Technologie." },
  ];

  const experience = [
    { title: "Agent de Sûreté Aéroportuaire", company: "Aéroport CDG (Paris)", period: "Mai 2025 - Présent", desc: "Gestion des flux passagers et contrôle de sécurité. Exige une vigilance permanente et une gestion rigoureuse du stress.", icon: <Briefcase size={20}/> },
    { title: "Bénévole Logistique", company: "Marie Charity", period: "2024 - Présent", desc: "Coordination des bénévoles et gestion des stocks alimentaires. Engagement social et organisation logistique.", icon: <Heart size={20}/> }
  ];

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
      const response = await fetch(`https://formspree.io/f/mbdrlpdn`, {
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
    <div className={`min-h-screen ${theme.bgMain} transition-colors duration-1000 text-slate-200 font-sans scroll-smooth overflow-x-hidden`}>
      
      <style>{`
        * { cursor: default !important; }
        a, button, input, textarea, [role="button"] { cursor: pointer !important; }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        
        /* Animation de texte Focus */
        @keyframes focusText {
          0% { filter: blur(12px); opacity: 0; transform: translateY(20px); }
          100% { filter: blur(0); opacity: 1; transform: translateY(0); }
        }

        /* Animation de balayage dégradé */
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-name { animation: focusText 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        
        .name-reveal {
          background: linear-gradient(270deg, #fff, ${theme.accent}, #fff);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientFlow 5s ease infinite;
          display: inline-block;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.3s; }
      `}</style>

      {/* Background Gradient dynamique */}
      <div className={`fixed inset-0 bg-gradient-to-b ${theme.bgGradient} opacity-50 -z-10 transition-colors duration-1000`} />

      {/* Toast Bienvenue */}
      <div className={`fixed left-6 bottom-6 z-[150] transition-all duration-700 transform ${showWelcome ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <div className="bg-slate-900 border border-white/10 p-5 rounded-2xl shadow-2xl flex items-center gap-4 max-w-sm backdrop-blur-xl">
          <div className={`w-12 h-12 rounded-xl ${theme.primary} flex items-center justify-center text-white shadow-lg`}>
            <Sparkles size={24} />
          </div>
          <div>
            <h4 className="font-black text-sm text-white uppercase tracking-wider">Bienvenue !</h4>
            <p className="text-xs text-slate-400">Heureux de vous accueillir. Explorez mon parcours scientifique !</p>
          </div>
          <button onClick={() => setShowWelcome(false)} className="text-slate-500 hover:text-white"><X size={16} /></button>
        </div>
      </div>

      {/* Navbar */}
      <nav className={`fixed w-full top-0 z-[100] transition-all duration-300 ${scrolled ? 'bg-black/40 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 ${theme.primary} rounded flex items-center justify-center font-bold text-white shadow-lg text-[10px]`}>MS</div>
            <span className="text-sm font-bold tracking-widest text-white hidden sm:block uppercase">Mohamed Ismael Sanogo</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['Accueil', 'Expertise', 'Projets', 'Profil', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-bold hover:text-white transition-colors uppercase tracking-[0.2em] text-slate-400">{item}</a>
            ))}
            <button 
              onClick={() => setShowColorPicker(!showColorPicker)}
              className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center ${theme.text} hover:bg-white/5 transition-all`}
              title="Changer le thème"
            >
              <Palette size={16} />
            </button>
          </div>
          <button className="md:hidden text-white z-[120]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`fixed inset-0 ${theme.bgMain} z-[110] flex flex-col items-center justify-center gap-10 md:hidden text-center p-6 transition-colors duration-500`}>
          {['Accueil', 'Expertise', 'Projets', 'Profil', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsMenuOpen(false)} 
              className="text-5xl font-black text-white hover:opacity-70 uppercase tracking-tighter"
            >
              {item}
            </a>
          ))}
          <div className="mt-8 flex gap-8">
            <a href={myLinkedin} target="_blank" rel="noreferrer" className={theme.text}><Linkedin size={32}/></a>
            <a href="https://github.com/Sanogo2429" target="_blank" rel="noreferrer" className={theme.text}><Github size={32}/></a>
          </div>
        </div>
      )}

      {/* Color Picker Float */}
      {showColorPicker && (
        <div className="fixed top-24 right-6 z-[120] bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex flex-col gap-3 animate-focus hidden md:flex">
          {colors.map((c) => (
            <button 
              key={c.id} 
              onClick={() => { setActiveColor(c.id); setShowColorPicker(false); }} 
              className={`w-7 h-7 rounded-full border-2 transition-transform hover:scale-125 ${activeColor === c.id ? 'border-white' : 'border-transparent'}`} 
              style={{ backgroundColor: c.hex }} 
            />
          ))}
        </div>
      )}

      {/* Hero */}
      <section id="accueil" className="relative pt-48 pb-32 px-6 flex items-center justify-center min-h-screen">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded border ${theme.border} ${theme.textLight} text-[9px] font-bold mb-6 tracking-[0.3em] uppercase animate-name stagger-1`}>
              <Zap size={12} /> ÉLÈVE-INGÉNIEUR @ ESIEA
            </div>
            
            <h1 className="text-6xl md:text-[92px] font-black mb-8 leading-[0.85] tracking-tighter uppercase">
              <span className="text-white block opacity-90 animate-name stagger-1">Mohamed Ismael</span> 
              <span className="name-reveal italic animate-name stagger-2">Sanogo.</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-6 mb-10 justify-center lg:justify-start animate-name stagger-2">
              <div className="flex items-center gap-3">
                <Calendar size={16} className={theme.text} />
                <p className="text-[11px] font-bold uppercase tracking-widest text-slate-300">Stage : <span className="text-white">Mars 2026</span></p>
              </div>
              <div className="flex items-center gap-3">
                <Rocket size={16} className={theme.text} />
                <p className="text-[11px] font-bold uppercase tracking-widest text-slate-300">Alternance : <span className="text-white">Sept 2026</span></p>
              </div>
            </div>

            <p className="text-lg text-slate-400 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light italic border-l-2 pl-6 border-white/5 animate-name stagger-2">
              "Profil scientifique de formation, spécialisé en Web & IoT. J'allie rigueur technologique et créativité pour bâtir des solutions robustes."
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 uppercase text-[10px] font-bold tracking-widest animate-name stagger-2">
              <a href="#projets" className={`${theme.primary} text-white px-10 py-5 rounded transition-all hover:brightness-110 shadow-lg`}>Explorer Projets</a>
              <a href={cvPath} download className="bg-white/5 border border-white/10 px-10 py-5 rounded hover:bg-white/10 transition-all text-white">Curriculum Vitae</a>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="relative w-64 h-64 md:w-[420px] md:h-[420px] group">
              <div className={`absolute -inset-4 bg-gradient-to-tr from-transparent via-${activeColor}-500/10 to-transparent rounded-full blur-2xl opacity-40`} />
              <div className={`relative w-full h-full bg-slate-900 border ${theme.border} p-2 overflow-hidden shadow-2xl transition-all duration-700 animate-float`}>
                <img 
                  src={photoPath} 
                  alt="Mohamed Ismael Sanogo" 
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" 
                  onError={(e) => { e.target.src = "https://via.placeholder.com/500x500/020617/FFFFFF?text=MS"; }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Skills */}
      <section id="expertise" className="py-32 px-6 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Hard Skills */}
            <div>
              <h2 className="text-3xl font-black text-white mb-12 uppercase tracking-tighter">Expertise <span className={theme.text}>Technique.</span></h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {techSkills.map((skill, idx) => (
                  <div key={idx} className="bg-white/[0.02] border border-white/5 p-6 rounded-xl hover:border-white/20 transition-all group">
                    <div className={`${theme.text} mb-4`}>{skill.icon}</div>
                    <h5 className="text-[11px] font-bold uppercase text-white tracking-widest mb-3">{skill.name}</h5>
                    <div className="flex flex-wrap gap-2">
                      {skill.tools.map(tool => (
                        <span key={tool} className="text-[9px] bg-white/5 px-2 py-1 rounded text-slate-400 group-hover:text-white transition-colors">{tool}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Expériences de Terrain */}
            <div>
              <h2 className="text-3xl font-black text-white mb-12 uppercase tracking-tighter">Engagement <span className={theme.text}>Professionnel.</span></h2>
              <div className="space-y-6">
                {experience.map((exp, idx) => (
                  <div key={idx} className="flex items-start gap-4 bg-white/[0.02] border border-white/5 p-6 rounded-xl">
                    <div className={theme.text}>{exp.icon}</div>
                    <div>
                      <h5 className="text-[11px] font-bold uppercase text-white tracking-widest mb-1">{exp.title}</h5>
                      <p className={`text-[10px] font-bold ${theme.text} mb-2`}>{exp.company} • {exp.period}</p>
                      <p className="text-[10px] text-slate-500 italic leading-tight">{exp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projets */}
      <section id="projets" className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center mb-24">
          <h2 className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter">
            Réalisations <span className={`${theme.textLight} italic`}>2024-25.</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className={`group flex flex-col bg-white/[0.02] border border-white/5 p-8 hover:${theme.border} hover:-translate-y-2 transition-all duration-500 rounded-lg`}>
              <div className={`w-12 h-12 rounded border ${theme.border} flex items-center justify-center mb-10 ${theme.text} group-hover:scale-110 transition-transform`}>
                {project.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">{project.title}</h3>
              <p className="text-slate-400 mb-8 flex-1 leading-relaxed text-sm font-light italic">"{project.desc}"</p>
              <div className={`mb-8 flex flex-wrap gap-2`}>
                {project.tech.map(t => <span key={t} className={`text-[8px] font-bold px-2 py-1 bg-${activeColor}-500/10 rounded text-slate-300`}>{t}</span>)}
              </div>
              <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-white hover:opacity-70 transition-opacity">
                Dépôt GitHub <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Profil & Timeline */}
      <section id="profil" className="py-32 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          {/* CV Iframe */}
          <div className={`bg-black/40 p-3 border ${theme.border} shadow-2xl aspect-[1/1.414] overflow-hidden group hidden lg:block`}>
            <iframe 
              src={`${cvPath}#toolbar=0&navpanes=0&scrollbar=0`} 
              className="w-full h-full border-none grayscale hover:grayscale-0 transition-all duration-700" 
              title="CV Mohamed Ismael Sanogo" 
            />
          </div>

          {/* Timeline & Parcours Scientifique */}
          <div>
            <h2 className="text-4xl md:text-7xl font-black text-white mb-12 leading-none uppercase tracking-tighter">Mon <br /><span className={`${theme.textLight} italic`}>Parcours.</span></h2>
            
            <div className="space-y-12 mb-12">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-white/10">
                  <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${theme.primary} shadow-[0_0_15px_${theme.accent}]`} />
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${theme.text} mb-2 block`}>{item.year}</span>
                  <h4 className="text-xl font-bold text-white uppercase mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-300 font-bold mb-2 tracking-tight">{item.place}</p>
                  <p className="text-xs text-slate-500 italic leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 uppercase text-[10px] font-bold tracking-widest text-center">
              <a href={cvPath} download className={`${theme.primary} text-white px-10 py-5 rounded shadow-lg block`}>Télécharger CV (PDF)</a>
              <a href={cvPath} target="_blank" rel="noreferrer" className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded hover:bg-white/10 transition-all block">Voir plein écran</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className={`max-w-6xl mx-auto bg-white/[0.02] border border-white/5 p-10 md:p-24 rounded-lg relative overflow-hidden transition-all duration-700`}>
          <div className="relative z-10 grid lg:grid-cols-5 gap-20 items-center">
            <div className="lg:col-span-2 text-center lg:text-left">
              <h2 className="text-5xl font-black text-white mb-12 uppercase tracking-tighter italic">Lançons <br /><span className={theme.textLight}>Le Contact.</span></h2>
              <div className="space-y-8 font-bold text-[10px] tracking-widest uppercase text-left">
                <a href={`mailto:${myEmail}`} className="flex items-center gap-5 text-slate-400 hover:text-white transition-all group">
                  <div className={`w-10 h-10 border ${theme.border} rounded flex items-center justify-center ${theme.text} group-hover:${theme.primary} group-hover:text-white transition-all`}><Mail size={18}/></div>
                  <span className="truncate">{myEmail}</span>
                </a>
                <a href={myLinkedin} target="_blank" rel="noreferrer" className="flex items-center gap-5 text-slate-400 hover:text-white transition-all group">
                  <div className={`w-10 h-10 border ${theme.border} rounded flex items-center justify-center ${theme.text} group-hover:${theme.primary} group-hover:text-white transition-all`}><Linkedin size={18}/></div>
                  <span>LinkedIn : Mohamed-Ismael-Sanogo</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-3">
              <form className="space-y-6" onSubmit={handleContact}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 uppercase text-[9px] font-bold tracking-widest text-slate-500">
                  <div className="space-y-2">
                    <label>Nom</label>
                    <input name="name" type="text" className="w-full bg-black/40 border border-white/10 rounded px-6 py-4 focus:border-white outline-none text-white transition-all" required />
                  </div>
                  <div className="space-y-2">
                    <label>Email</label>
                    <input name="email" type="email" className="w-full bg-black/40 border border-white/10 rounded px-6 py-4 focus:border-white outline-none text-white transition-all" required />
                  </div>
                </div>
                <div className="space-y-2 uppercase text-[9px] font-bold tracking-widest text-slate-500">
                  <label>Message</label>
                  <textarea name="message" rows="4" className="w-full bg-black/40 border border-white/10 rounded px-6 py-4 focus:border-white outline-none text-white resize-none transition-all" required></textarea>
                </div>
                <button type="submit" className={`w-full py-5 rounded font-bold transition-all uppercase text-[10px] tracking-widest ${formStatus === 'success' ? 'bg-emerald-600 text-white' : `${theme.primary} text-white shadow-xl`}`} disabled={formStatus === 'sending'}>
                  {formStatus === 'sending' ? "Envoi en cours..." : formStatus === 'success' ? "Message Transmis" : "Envoyer le message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 text-center border-t border-white/5 bg-black/40">
        <div className="text-2xl font-black text-white mb-6 tracking-widest uppercase italic">Mohamed Ismael Sanogo</div>
        <div className="flex justify-center gap-8 mb-8 opacity-50">
            <a href={myLinkedin} target="_blank" rel="noreferrer" className={`hover:scale-110 transition-transform ${theme.text}`}><Linkedin size={20}/></a>
            <a href="https://github.com/Sanogo2429" target="_blank" rel="noreferrer" className={`hover:scale-110 transition-transform ${theme.text}`}><Github size={20}/></a>
            <a href={`mailto:${myEmail}`} className={`hover:scale-110 transition-transform ${theme.text}`}><Mail size={20}/></a>
        </div>
        <p className="text-slate-600 text-[9px] uppercase font-bold tracking-[1em]">ESIEA Paris • © 2025</p>
      </footer>
    </div>
  );
};

export default App;