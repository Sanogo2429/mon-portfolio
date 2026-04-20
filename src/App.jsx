import React, { useState, useEffect, useRef } from 'react';
import {
  Github, Linkedin, Mail, ExternalLink, Cpu, Database, Globe,
  Menu, X, Zap, Palette, Sparkles, Users, Lightbulb, ShieldCheck,
  Brain, Layers, Terminal, Monitor, Briefcase, ChevronRight, Calendar, ArrowUpRight, Rocket
} from 'lucide-react';

/* ─────────────────────────────────────────────
   HOOK : révèle les éléments au scroll
───────────────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-revealed'); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─────────────────────────────────────────────
   COMPOSANT : Texte qui s'écrit lettre par lettre
───────────────────────────────────────────── */
function TypeWriter({ text, className = '', delay = 0 }) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 45);
    return () => clearInterval(interval);
  }, [started, text]);
  return <span className={className}>{displayed}<span className="animate-blink">|</span></span>;
}

/* ─────────────────────────────────────────────
   COMPOSANT : Compteur animé
───────────────────────────────────────────── */
function Counter({ to, suffix = '', duration = 1500 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      let start = null;
      const step = ts => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / duration, 1);
        setVal(Math.floor(p * to));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.5 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* ─────────────────────────────────────────────
   APP PRINCIPALE
───────────────────────────────────────────── */
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeColor, setActiveColor] = useState('gold');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });
  const [scrollPct, setScrollPct] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);

  useReveal();

  const colors = [
    { id: 'gold',    hex: '#d4af37', label: 'Or' },
    { id: 'white',   hex: '#ffffff', label: 'Blanc' },
    { id: 'cyan',    hex: '#06b6d4', label: 'Cyan' },
    { id: 'emerald', hex: '#10b981', label: 'Émeraude' },
    { id: 'rose',    hex: '#f43f5e', label: 'Rose' },
    { id: 'violet',  hex: '#8b5cf6', label: 'Violet' },
  ];

  const themes = {
    gold:    { accent: '#d4af37', accentSoft: 'rgba(212,175,55,0.12)',  accentBorder: 'rgba(212,175,55,0.3)',  accentText: '#d4af37',  glow: '0 0 40px rgba(212,175,55,0.25)' },
    white:   { accent: '#ffffff', accentSoft: 'rgba(255,255,255,0.08)', accentBorder: 'rgba(255,255,255,0.25)',accentText: '#ffffff',  glow: '0 0 40px rgba(255,255,255,0.15)' },
    cyan:    { accent: '#06b6d4', accentSoft: 'rgba(6,182,212,0.12)',   accentBorder: 'rgba(6,182,212,0.3)',   accentText: '#06b6d4',  glow: '0 0 40px rgba(6,182,212,0.25)' },
    emerald: { accent: '#10b981', accentSoft: 'rgba(16,185,129,0.12)',  accentBorder: 'rgba(16,185,129,0.3)',  accentText: '#10b981',  glow: '0 0 40px rgba(16,185,129,0.25)' },
    rose:    { accent: '#f43f5e', accentSoft: 'rgba(244,63,94,0.12)',   accentBorder: 'rgba(244,63,94,0.3)',   accentText: '#f43f5e',  glow: '0 0 40px rgba(244,63,94,0.25)' },
    violet:  { accent: '#8b5cf6', accentSoft: 'rgba(139,92,246,0.12)',  accentBorder: 'rgba(139,92,246,0.3)',  accentText: '#8b5cf6',  glow: '0 0 40px rgba(139,92,246,0.25)' },
  };
  const t = themes[activeColor];

  const cvPath    = "/cv_alternance_Mohamed_Ismael_Sanogo.pdf";
  const photoPath = "/maphoto.png";
  const myEmail   = "msanogo@et.esiea.fr";
  const myLinkedin= "https://linkedin.com/in/mohamed-ismael-sanogo";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(docH > 0 ? (window.scrollY / docH) * 100 : 0);
    };
    const onMouse = e => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('scroll', onScroll);
    window.addEventListener('mousemove', onMouse);

    // Toast bienvenue
    const t1 = setTimeout(() => setShowWelcome(true), 1200);
    const t2 = setTimeout(() => setShowWelcome(false), 7000);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouse);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const softSkills = [
    { name: "Esprit d'équipe",  desc: "Collaboration agile & coordination", icon: <Users size={16} /> },
    { name: "Rigueur",          desc: "Code propre et vigilance constante",  icon: <ShieldCheck size={16} /> },
    { name: "Autonomie",        desc: "Apprentissage rapide et proactivité", icon: <Brain size={16} /> },
    { name: "Communication",    desc: "Écoute active & empathie",            icon: <Lightbulb size={16} /> },
  ];
  const techSkills = [
    { name: "Frontend",         tools: ["React", "HTML/CSS", "JS", "TS"],    icon: <Monitor size={16} /> },
    { name: "Backend",          tools: ["C#", "ASP.NET Core", "PHP", "SQL"], icon: <Terminal size={16} /> },
    { name: "IoT & Systèmes",   tools: ["Arduino", "C++", "Capteurs"],       icon: <Cpu size={16} /> },
    { name: "Outils",           tools: ["GitLab", "UML", "Agilité"],         icon: <Layers size={16} /> },
  ];
  const timeline = [
    { year: "2024 – 2027",              title: "Bachelor Informatique",               place: "ESIEA Paris",        desc: "Développement web, architecture MVC/MVVM, BDD, et intégration IoT." },
    { year: "Oct. 2024 – Fév. 2025",   title: "Chef de Projet – E-Learning",         place: "Cyberharcèlement & Harcèlement Scolaire", desc: "Création d'un site web de sensibilisation, organisation d'ateliers, gestion d'équipe et conception de supports pédagogiques." },
    { year: "Mai 2025 – Présent",       title: "Agent de Sûreté Aéroportuaire",       place: "Aéroport CDG",       desc: "Gestion des flux et contrôle de sécurité. Rigueur et gestion du stress." },
    { year: "2024 – Présent",           title: "Bénévole Logistique",                 place: "Marie Charity",      desc: "Organisation logistique et coordination d'équipes." },
  ];
  const projects = [
    { title: "Gestion de Bibliothèque", tech: ["ASP.NET Core","React","Entity Framework"], desc: "API REST structurée consommée par un frontend React. Séparation stricte des responsabilités.", impact: "Full Stack", github: "https://github.com/Sanogo2429", icon: <Database size={20}/> },
    { title: "Serre Intelligente IoT",  tech: ["C#","Arduino","MySQL","C++"],               desc: "Système d'arrosage automatique avec capteurs et interface WPF temps réel.",                impact: "−30% eau",   github: "https://github.com/Sanogo2429/Gaia.git", icon: <Cpu size={20}/> },
    { title: "Plateforme Gastronomique",tech: ["PHP","MVC","MySQL"],                        desc: "Application web de recettes avec gestion utilisateurs et optimisation BDD.",                impact: "−40% load",  github: "https://github.com/Sanogo2429/cookify.git", icon: <Globe size={20}/> },
    { title: "E-Learning Cyberharcèlement", tech: ["Gestion de projet","UML","Site web"],  desc: "Création d'un site de sensibilisation, ateliers jeunes & adultes. Gestion d'équipe et supports pédagogiques.", impact: "Chef de Projet", github: "https://github.com/Sanogo2429", icon: <Rocket size={20}/> },
  ];

  const handleContact = async e => {
    e.preventDefault();
    setFormStatus('sending');
    const data = Object.fromEntries(new FormData(e.target));
    try {
      const r = await fetch('https://formspree.io/f/mbdrlpdn', {
        method: 'POST', body: JSON.stringify(data),
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
      });
      if (r.ok) { setFormStatus('success'); e.target.reset(); setTimeout(() => setFormStatus(null), 5000); }
      else setFormStatus('error');
    } catch { setFormStatus('error'); }
  };

  return (
    <div style={{ '--accent': t.accent, '--accent-soft': t.accentSoft, '--accent-border': t.accentBorder, '--glow': t.glow }} className="app-root">

      {/* ── STYLES GLOBAUX ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400&family=DM+Mono:wght@400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root { scroll-behavior: smooth; }

        .app-root {
          min-height: 100vh;
          height: 100vh;
          background: #070708;
          color: #c8c8d0;
          font-family: 'DM Sans', sans-serif;
          overflow-x: hidden;
          overflow-y: auto;
          position: relative;
        }

        /* Grain overlay */
        .app-root::before {
          content: '';
          position: fixed; inset: 0; z-index: 0; pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.55;
        }

        /* Curseur lumineux */
        .cursor-glow {
          position: fixed;
          width: 320px; height: 320px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, var(--accent-soft) 0%, transparent 70%);
          transition: background 0.6s ease;
        }

        /* Barre de progression */
        .progress-bar {
          position: fixed; top: 0; left: 0; height: 2px; z-index: 200;
          background: var(--accent);
          box-shadow: var(--glow);
          transition: width 0.1s linear;
        }

        /* Ligne verticale déco */
        .side-line {
          position: fixed; left: 32px; top: 50%; transform: translateY(-50%);
          width: 1px; height: 120px;
          background: linear-gradient(to bottom, transparent, var(--accent), transparent);
          z-index: 50; opacity: 0.5;
        }

        /* Titre display */
        .font-display { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.03em; }
        .font-mono    { font-family: 'DM Mono', monospace; }

        /* Reveal animation */
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1); }
        .reveal.is-revealed { opacity: 1; transform: none; }
        .reveal-d1 { transition-delay: 100ms; }
        .reveal-d2 { transition-delay: 200ms; }
        .reveal-d3 { transition-delay: 300ms; }

        /* Blink cursor */
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .animate-blink { animation: blink 1s step-end infinite; color: var(--accent); }

        /* Float photo */
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        .animate-float { animation: float 6s ease-in-out infinite; }

        /* Spin glow */
        @keyframes spin-slow { to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 18s linear infinite; }

        /* Accent text */
        .text-accent { color: var(--accent); }
        .border-accent { border-color: var(--accent-border); }

        /* Accent gradient text */
        .gradient-text {
          background: linear-gradient(135deg, #fff 30%, var(--accent) 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; display: inline-block;
        }

        /* Nav link hover */
        .nav-link { position: relative; }
        .nav-link::after {
          content: ''; position: absolute; left: 0; bottom: -2px;
          width: 0; height: 1px; background: var(--accent);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after { width: 100%; }

        /* Card hover */
        .card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
        }
        .card:hover {
          border-color: var(--accent-border);
          transform: translateY(-4px);
          box-shadow: var(--glow);
        }

        /* Séparateur décoratif */
        .section-sep {
          width: 100%; height: 1px;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent);
        }

        /* Tag tech */
        .tech-tag {
          font-size: 9px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
          padding: 4px 10px; border-radius: 4px;
          background: var(--accent-soft); border: 1px solid var(--accent-border);
          color: var(--accent);
        }

        /* Stat number */
        .stat-number {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          line-height: 1;
          color: var(--accent);
        }

        /* Input / textarea */
        .field {
          width: 100%; background: rgba(0,0,0,0.4);
          border: 1px solid rgba(255,255,255,0.08); border-radius: 8px;
          padding: 14px 20px; color: #fff; outline: none;
          font-family: 'DM Sans', sans-serif; font-size: 14px;
          transition: border-color 0.2s;
        }
        .field:focus { border-color: var(--accent); }
        .field::placeholder { color: rgba(255,255,255,0.2); }

        /* Bouton primaire */
        .btn-primary {
          background: var(--accent); color: #000;
          font-family: 'DM Sans', sans-serif; font-weight: 700;
          font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase;
          padding: 16px 36px; border-radius: 6px; border: none;
          cursor: pointer; transition: opacity 0.2s, box-shadow 0.2s;
          display: inline-flex; align-items: center; gap: 8px;
        }
        .btn-primary:hover { opacity: 0.88; box-shadow: var(--glow); }

        /* Bouton ghost */
        .btn-ghost {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.12); color: #fff;
          font-family: 'DM Sans', sans-serif; font-weight: 700;
          font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase;
          padding: 16px 36px; border-radius: 6px;
          cursor: pointer; transition: border-color 0.2s, background 0.2s;
          display: inline-flex; align-items: center; gap: 8px;
          text-decoration: none;
        }
        .btn-ghost:hover { border-color: var(--accent-border); background: var(--accent-soft); }

        /* Timeline dot */
        .tl-dot {
          position: absolute; left: -9px; top: 4px;
          width: 16px; height: 16px; border-radius: 50%;
          background: #070708; border: 2px solid rgba(255,255,255,0.15);
          transition: border-color 0.3s, background 0.3s;
        }
        .tl-item:hover .tl-dot { border-color: var(--accent); background: var(--accent); }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #070708; }
        ::-webkit-scrollbar-thumb { background: var(--accent-border); border-radius: 2px; }

        /* Mobile menu */
        @keyframes slide-in { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:none} }
        .mobile-link { animation: slide-in 0.4s ease forwards; }

        /* Section label */
        .section-label {
          font-family: 'DM Mono', monospace;
          font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase;
          color: var(--accent); opacity: 0.8;
        }
      `}</style>

      {/* Curseur lumineux */}
      <div className="cursor-glow" style={{ left: mousePos.x, top: mousePos.y }} />

      {/* Barre de progression */}
      <div className="progress-bar" style={{ width: `${scrollPct}%` }} />

      {/* Ligne latérale déco */}
      <div className="side-line" />

      {/* ── TOAST BIENVENUE ── */}
      <div style={{
        position: 'fixed', left: 24, bottom: 24, zIndex: 200,
        transform: showWelcome ? 'translateY(0)' : 'translateY(120%)',
        opacity: showWelcome ? 1 : 0,
        transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1), opacity 0.5s ease',
        background: 'rgba(10,10,12,0.92)',
        backdropFilter: 'blur(20px)',
        border: '1px solid var(--accent-border)',
        borderRadius: 12,
        padding: '14px 16px',
        display: 'flex', alignItems: 'center', gap: 14,
        maxWidth: 320,
        boxShadow: 'var(--glow)',
      }}>
        <div style={{ width:36, height:36, borderRadius:8, background:'var(--accent-soft)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
          <Sparkles size={18} style={{ color: t.accent }} />
        </div>
        <div style={{ flex:1 }}>
          <div style={{ fontWeight:700, fontSize:12, color:'#fff', letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:3 }}>Bienvenue !</div>
          <div style={{ fontSize:11, color:'rgba(255,255,255,0.4)', fontStyle:'italic' }}>Découvrez mon parcours et mes projets.</div>
        </div>
        <button onClick={() => setShowWelcome(false)} style={{ background:'none', border:'none', cursor:'pointer', color:'rgba(255,255,255,0.3)', padding:4, display:'flex' }}
          onMouseEnter={e=>e.currentTarget.style.color='#fff'} onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.3)'}>
          <X size={14}/>
        </button>
      </div>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? '14px 0' : '24px 0',
        background: scrolled ? 'rgba(7,7,8,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        transition: 'all 0.4s ease',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button onClick={() => window.scrollTo(0,0)} style={{ background:'none',border:'none',cursor:'pointer',display:'flex',alignItems:'center',gap:12 }}>
            <div style={{ width:36, height:36, background: t.accent, borderRadius:6, display:'flex',alignItems:'center',justifyContent:'center', fontFamily:'Bebas Neue,sans-serif', fontSize:13, color:'#000', letterSpacing:'0.05em' }}>MS</div>
            <span style={{ fontFamily:'DM Mono,monospace', fontSize:11, letterSpacing:'0.2em', color:'rgba(255,255,255,0.7)', textTransform:'uppercase' }}>Mohamed Sanogo</span>
          </button>

          <div style={{ display:'flex', alignItems:'center', gap:36 }} className="hidden-mobile">
            {['Accueil','Expertise','Projets','Profil','Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link"
                style={{ fontSize:10, fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(255,255,255,0.45)', textDecoration:'none', transition:'color 0.2s' }}
                onMouseEnter={e=>e.target.style.color='#fff'} onMouseLeave={e=>e.target.style.color='rgba(255,255,255,0.45)'}
              >{item}</a>
            ))}
            <button onClick={() => setShowColorPicker(!showColorPicker)}
              style={{ width:32,height:32,borderRadius:'50%',border:'1px solid rgba(255,255,255,0.1)',background:'rgba(255,255,255,0.03)',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',color:t.accent }}>
              <Palette size={14}/>
            </button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="show-mobile"
            style={{ background:'none',border:'none',cursor:'pointer',color:'#fff',padding:4 }}>
            {isMenuOpen ? <X size={26}/> : <Menu size={26}/>}
          </button>
        </div>
      </nav>

      {/* Color picker — panel desktop / bottom sheet mobile */}
      {showColorPicker && (
        <>
          {/* Overlay pour fermer en cliquant dehors */}
          <div onClick={() => setShowColorPicker(false)}
            style={{ position:'fixed', inset:0, zIndex:198, background:'rgba(0,0,0,0.4)', backdropFilter:'blur(2px)' }} />

          {/* Panel desktop */}
          <div className="color-picker-desktop" style={{
            position:'fixed', top:70, right:32, zIndex:200,
            background:'rgba(10,10,12,0.97)',
            border:'1px solid rgba(255,255,255,0.1)',
            borderRadius:16, padding:'16px',
            backdropFilter:'blur(24px)',
            boxShadow:'0 24px 60px rgba(0,0,0,0.6)',
            minWidth:210,
          }}>
            <div style={{ fontFamily:'DM Mono,monospace', fontSize:9, letterSpacing:'0.25em', textTransform:'uppercase', color:'rgba(255,255,255,0.3)', marginBottom:14, paddingBottom:10, borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
              Couleur d'accent
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
              {colors.map(c => (
                <button key={c.id}
                  onClick={() => { setActiveColor(c.id); setShowColorPicker(false); }}
                  style={{
                    display:'flex', alignItems:'center', gap:12,
                    background: activeColor===c.id ? 'rgba(255,255,255,0.06)' : 'transparent',
                    border: activeColor===c.id ? `1px solid ${c.hex}40` : '1px solid transparent',
                    borderRadius:8, padding:'10px 12px', cursor:'pointer',
                    transition:'all 0.2s', width:'100%', textAlign:'left',
                  }}>
                  <div style={{ width:22, height:22, borderRadius:'50%', flexShrink:0, background:c.hex, border:c.id==='white'?'1px solid rgba(255,255,255,0.3)':'none', boxShadow:activeColor===c.id?`0 0 12px ${c.hex}80`:'none', transition:'box-shadow 0.2s' }} />
                  <span style={{ fontFamily:'DM Sans,sans-serif', fontSize:13, fontWeight:600, color:activeColor===c.id?'#fff':'rgba(255,255,255,0.45)', letterSpacing:'0.05em' }}>{c.label}</span>
                  {activeColor===c.id && <span style={{ marginLeft:'auto', fontSize:12, color:c.hex }}>✓</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom sheet mobile */}
          <div className="color-picker-mobile" style={{
            position:'fixed', bottom:0, left:0, right:0, zIndex:200,
            background:'#0e0e10',
            borderTop:'1px solid rgba(255,255,255,0.1)',
            borderRadius:'20px 20px 0 0',
            padding:'20px 24px 40px',
            boxShadow:'0 -24px 60px rgba(0,0,0,0.8)',
          }}>
            {/* Poignée */}
            <div style={{ width:40, height:4, borderRadius:2, background:'rgba(255,255,255,0.15)', margin:'0 auto 20px' }} />
            <div style={{ fontFamily:'DM Mono,monospace', fontSize:9, letterSpacing:'0.25em', textTransform:'uppercase', color:'rgba(255,255,255,0.35)', marginBottom:20, textAlign:'center' }}>
              Couleur d'accent
            </div>
            {/* Grille de swatches larges pour le doigt */}
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12 }}>
              {colors.map(c => (
                <button key={c.id}
                  onClick={() => { setActiveColor(c.id); setShowColorPicker(false); }}
                  style={{
                    display:'flex', flexDirection:'column', alignItems:'center', gap:10,
                    background: activeColor===c.id ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.02)',
                    border: activeColor===c.id ? `1px solid ${c.hex}60` : '1px solid rgba(255,255,255,0.07)',
                    borderRadius:14, padding:'16px 8px', cursor:'pointer',
                    transition:'all 0.2s',
                  }}>
                  {/* Swatch grand format pour le doigt */}
                  <div style={{
                    width:44, height:44, borderRadius:'50%', background:c.hex,
                    border: c.id==='white' ? '1px solid rgba(255,255,255,0.4)' : 'none',
                    boxShadow: activeColor===c.id ? `0 0 18px ${c.hex}90` : 'none',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    fontSize:18, color: c.id==='white'?'#000':'transparent',
                    transition:'box-shadow 0.2s',
                  }}>
                    {activeColor===c.id ? '✓' : ''}
                  </div>
                  <span style={{ fontFamily:'DM Sans,sans-serif', fontSize:12, fontWeight:600, color:activeColor===c.id?'#fff':'rgba(255,255,255,0.4)', letterSpacing:'0.04em' }}>{c.label}</span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Menu mobile */}
      {isMenuOpen && (
        <div style={{ position:'fixed',inset:0,background:'#070708',zIndex:150,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:32 }}>
          {['Accueil','Expertise','Projets','Profil','Contact'].map((item, i) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="mobile-link"
              style={{ fontFamily:'Bebas Neue,sans-serif',fontSize:'clamp(2.5rem,8vw,4rem)',color:'#fff',textDecoration:'none',letterSpacing:'0.05em',animationDelay:`${i*60}ms` }}>
              {item}
            </a>
          ))}
          <div style={{ display:'flex',gap:24,marginTop:8 }}>
            <a href={myLinkedin} target="_blank" rel="noreferrer" style={{ color:t.accent }}><Linkedin size={24}/></a>
            <a href="https://github.com/Sanogo2429" target="_blank" rel="noreferrer" style={{ color:t.accent }}><Github size={24}/></a>
          </div>
          {/* Bouton palette dans le menu mobile */}
          <button onClick={() => { setIsMenuOpen(false); setShowColorPicker(true); }}
            style={{ display:'flex',alignItems:'center',gap:10,background:'rgba(255,255,255,0.04)',border:`1px solid ${t.accentBorder}`,borderRadius:12,padding:'12px 24px',cursor:'pointer',color:t.accent,marginTop:8 }}>
            <Palette size={18}/>
            <span style={{ fontFamily:'DM Sans,sans-serif',fontSize:13,fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase' }}>Changer la couleur</span>
          </button>
        </div>
      )}

      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section id="accueil" style={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', padding:'120px 32px 80px', position:'relative' }}>
        {/* Grille déco en arrière-plan */}
        <div style={{ position:'absolute',inset:0,pointerEvents:'none',
          backgroundImage:'linear-gradient(rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.015) 1px,transparent 1px)',
          backgroundSize:'60px 60px', zIndex:0 }} />

        <div style={{ maxWidth:1280,width:'100%',margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:80,alignItems:'center',position:'relative',zIndex:2 }} className="hero-grid">
          <div>
            <div style={{ display:'inline-flex',alignItems:'center',gap:8,padding:'6px 14px',borderRadius:4,border:'1px solid var(--accent-border)',background:'var(--accent-soft)',marginBottom:32 }}>
              <Zap size={12} style={{ color:t.accent, fill:t.accent }} />
              <span style={{ fontFamily:'DM Mono,monospace',fontSize:9,letterSpacing:'0.25em',textTransform:'uppercase',color:t.accent }}>Élève-Ingénieur @ ESIEA</span>
            </div>

            <h1 style={{ fontFamily:'Bebas Neue,sans-serif', fontSize:'clamp(4rem,8vw,7rem)', lineHeight:0.9, marginBottom:24 }}>
              <span style={{ display:'block', color:'rgba(255,255,255,0.92)' }}>Mohamed</span>
              <span className="gradient-text">Sanogo.</span>
            </h1>

            <p style={{ fontSize:15, color:'rgba(255,255,255,0.4)', lineHeight:1.7, maxWidth:480, marginBottom:36, fontStyle:'italic', borderLeft:`3px solid ${t.accent}`, paddingLeft:20 }}>
              Développeur Full Stack avec une forte appétence pour l'IoT. Je conçois et livre des projets concrets avec des résultats mesurables.
            </p>

            <div style={{ display:'flex',flexDirection:'column',gap:10,marginBottom:40 }}>
              <div style={{ display:'flex',alignItems:'center',gap:12 }}>
                <Briefcase size={14} style={{ color:t.accent }} />
                <span style={{ fontSize:12,fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase',color:'rgba(255,255,255,0.6)' }}>
                  Recherche <span style={{ color:'#fff' }}>Alternance</span> d'un an
                </span>
              </div>
              <div style={{ display:'flex',alignItems:'center',gap:12 }}>
                <Calendar size={14} style={{ color:t.accent }} />
                <span style={{ fontFamily:'DM Mono,monospace',fontSize:10,letterSpacing:'0.12em',color:'rgba(255,255,255,0.4)' }}>
                  Début : <span style={{ color:'#fff' }}>Sept. 2026</span> &nbsp;·&nbsp; Rythme : <span style={{ color:'#fff' }}>3 sem. / 1 sem.</span>
                </span>
              </div>
            </div>

            <div style={{ display:'flex',gap:12,flexWrap:'wrap' }}>
              <a href="#projets" className="btn-primary">Explorer Projets <ChevronRight size={14}/></a>
              <a href={cvPath} download className="btn-ghost">Télécharger CV</a>
            </div>
          </div>

          {/* Photo */}
          <div style={{ display:'flex',justifyContent:'center',alignItems:'center' }}>
            <div style={{ position:'relative',width:'min(400px,90vw)',aspectRatio:'1' }} className="animate-float">
              <div style={{ position:'absolute',inset:-8,borderRadius:'2rem',
                background:`conic-gradient(from 0deg, ${t.accent}, transparent 40%, ${t.accent} 60%, transparent)`,
                filter:'blur(24px)',opacity:0.35,animation:'spin-slow 18s linear infinite' }} className="animate-spin-slow" />
              <div style={{ position:'relative',width:'100%',height:'100%',borderRadius:'1.8rem',overflow:'hidden',border:'1px solid rgba(255,255,255,0.08)',background:'#0d0d0f' }}>
                <img src={photoPath} alt="Mohamed Sanogo" style={{ width:'100%',height:'100%',objectFit:'cover',filter:'grayscale(20%)' }}
                  onError={e => { e.target.src="https://via.placeholder.com/500x500/0d0d0f/d4af37?text=MS"; }} />
                {/* Overlay accent coin */}
                <div style={{ position:'absolute',bottom:0,left:0,right:0,height:'40%',background:`linear-gradient(to top, rgba(7,7,8,0.8), transparent)` }} />
                <div style={{ position:'absolute',bottom:16,left:16,fontFamily:'DM Mono,monospace',fontSize:9,letterSpacing:'0.2em',textTransform:'uppercase',color:t.accent,opacity:0.7 }}>
                  Full Stack · IoT · 2026
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position:'absolute',bottom:32,left:'50%',transform:'translateX(-50%)',display:'flex',flexDirection:'column',alignItems:'center',gap:6,opacity:0.3 }}>
          <span style={{ fontFamily:'DM Mono,monospace',fontSize:8,letterSpacing:'0.3em',textTransform:'uppercase' }}>Scroll</span>
          <div style={{ width:1,height:40,background:`linear-gradient(to bottom, ${t.accent}, transparent)` }} />
        </div>
      </section>

      {/* Stats rapides */}
      <div style={{ padding:'0 32px 80px' }}>
        <div style={{ maxWidth:1280,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:1,borderRadius:12,overflow:'hidden',border:'1px solid rgba(255,255,255,0.06)' }} className="reveal stats-grid">
          {[
            { val:3, suffix:'+', label:'Projets livrés' },
            { val:4, suffix:'', label:'Langages maîtrisés' },
            { val:2026, suffix:'', label:'Disponible dès' },
          ].map((s, i) => (
            <div key={i} style={{ padding:'32px 24px',background:'rgba(255,255,255,0.015)',textAlign:'center',borderRight: i<2 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
              <div className="stat-number"><Counter to={s.val} suffix={s.suffix} /></div>
              <div style={{ fontFamily:'DM Mono,monospace',fontSize:9,letterSpacing:'0.2em',textTransform:'uppercase',color:'rgba(255,255,255,0.3)',marginTop:8 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════
          EXPERTISE
      ═══════════════════════════════════════ */}
      <section id="expertise" style={{ padding:'100px 32px' }}>
        <div className="section-sep" />
        <div style={{ maxWidth:1280,margin:'0 auto',paddingTop:80 }}>
          <div className="reveal" style={{ marginBottom:64 }}>
            <div className="section-label" style={{ marginBottom:16 }}>// 01 — Compétences</div>
            <h2 style={{ fontFamily:'Bebas Neue,sans-serif',fontSize:'clamp(2.5rem,5vw,4rem)',color:'#fff',lineHeight:1 }}>
              Stack & <span className="gradient-text">Savoir-être.</span>
            </h2>
          </div>

          <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:48 }} className="two-col">
            {/* Tech */}
            <div className="reveal reveal-d1">
              <div style={{ fontSize:10,fontWeight:700,letterSpacing:'0.2em',textTransform:'uppercase',color:'rgba(255,255,255,0.3)',marginBottom:24,display:'flex',alignItems:'center',gap:8 }}>
                <span style={{ flex:1,height:1,background:'rgba(255,255,255,0.08)',display:'block' }} />
                Technologies
              </div>
              <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:12 }}>
                {techSkills.map((skill, i) => (
                  <div key={i} className="card" style={{ borderRadius:10,padding:'20px' }}>
                    <div style={{ color:t.accent,marginBottom:14 }}>{skill.icon}</div>
                    <div style={{ fontWeight:700,fontSize:11,letterSpacing:'0.12em',textTransform:'uppercase',color:'#fff',marginBottom:12 }}>{skill.name}</div>
                    <div style={{ display:'flex',flexWrap:'wrap',gap:6 }}>
                      {skill.tools.map(tool => <span key={tool} className="tech-tag">{tool}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft skills */}
            <div className="reveal reveal-d2">
              <div style={{ fontSize:10,fontWeight:700,letterSpacing:'0.2em',textTransform:'uppercase',color:'rgba(255,255,255,0.3)',marginBottom:24,display:'flex',alignItems:'center',gap:8 }}>
                <span style={{ flex:1,height:1,background:'rgba(255,255,255,0.08)',display:'block' }} />
                Qualités
              </div>
              <div style={{ display:'flex',flexDirection:'column',gap:12 }}>
                {softSkills.map((skill, i) => (
                  <div key={i} className="card" style={{ borderRadius:10,padding:'18px 20px',display:'flex',alignItems:'center',gap:16 }}>
                    <div style={{ width:36,height:36,borderRadius:8,background:'var(--accent-soft)',display:'flex',alignItems:'center',justifyContent:'center',color:t.accent,flexShrink:0 }}>
                      {skill.icon}
                    </div>
                    <div>
                      <div style={{ fontWeight:700,fontSize:12,letterSpacing:'0.1em',textTransform:'uppercase',color:'#fff',marginBottom:4 }}>{skill.name}</div>
                      <div style={{ fontSize:11,color:'rgba(255,255,255,0.35)',fontStyle:'italic' }}>{skill.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROJETS
      ═══════════════════════════════════════ */}
      <section id="projets" style={{ padding:'100px 32px' }}>
        <div className="section-sep" />
        <div style={{ maxWidth:1280,margin:'0 auto',paddingTop:80 }}>
          <div className="reveal" style={{ marginBottom:64,display:'flex',justifyContent:'space-between',alignItems:'flex-end',flexWrap:'wrap',gap:16 }}>
            <div>
              <div className="section-label" style={{ marginBottom:16 }}>// 02 — Réalisations</div>
              <h2 style={{ fontFamily:'Bebas Neue,sans-serif',fontSize:'clamp(2.5rem,5vw,4rem)',color:'#fff',lineHeight:1 }}>
                Projets <span className="gradient-text">2024 – 26.</span>
              </h2>
            </div>
            <p style={{ fontSize:13,color:'rgba(255,255,255,0.3)',maxWidth:360,lineHeight:1.6,fontStyle:'italic' }}>
              Architectures complètes, code livré, résultats mesurables.
            </p>
          </div>

          <div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16 }} className="three-col">
            {projects.map((p, i) => (
              <div key={i} className={`card reveal reveal-d${i+1}`} style={{ borderRadius:12,padding:'28px',display:'flex',flexDirection:'column',position:'relative',overflow:'hidden' }}>
                {/* Numéro déco */}
                <div style={{ position:'absolute',top:20,right:20,fontFamily:'Bebas Neue,sans-serif',fontSize:'4rem',color:'rgba(255,255,255,0.03)',lineHeight:1,userSelect:'none' }}>0{i+1}</div>

                <div style={{ width:40,height:40,borderRadius:8,border:'1px solid rgba(255,255,255,0.08)',display:'flex',alignItems:'center',justifyContent:'center',color:t.accent,marginBottom:20 }}>
                  {p.icon}
                </div>

                <div style={{ fontFamily:'Bebas Neue,sans-serif',fontSize:'1.35rem',color:'#fff',letterSpacing:'0.04em',marginBottom:10 }}>{p.title}</div>
                <p style={{ fontSize:12,color:'rgba(255,255,255,0.35)',lineHeight:1.7,flex:1,marginBottom:20,fontStyle:'italic' }}>{p.desc}</p>

                <div style={{ display:'flex',flexWrap:'wrap',gap:6,marginBottom:20 }}>
                  {p.tech.map(t2 => <span key={t2} className="tech-tag">{t2}</span>)}
                </div>

                <div style={{ display:'flex',justifyContent:'space-between',alignItems:'center',paddingTop:16,borderTop:'1px solid rgba(255,255,255,0.06)' }}>
                  <a href={p.github} target="_blank" rel="noreferrer"
                    style={{ display:'flex',alignItems:'center',gap:6,fontSize:10,fontWeight:700,letterSpacing:'0.15em',textTransform:'uppercase',color:'rgba(255,255,255,0.5)',textDecoration:'none',transition:'color 0.2s' }}
                    onMouseEnter={e=>e.currentTarget.style.color=t.accent} onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.5)'}>
                    GitHub <ArrowUpRight size={12}/>
                  </a>
                  <span style={{ fontFamily:'DM Mono,monospace',fontSize:9,letterSpacing:'0.15em',color:t.accent,textTransform:'uppercase' }}>{p.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROFIL / CV + TIMELINE
      ═══════════════════════════════════════ */}
      <section id="profil" style={{ padding:'100px 32px' }}>
        <div className="section-sep" />
        <div style={{ maxWidth:1280,margin:'0 auto',paddingTop:80,display:'grid',gridTemplateColumns:'5fr 7fr',gap:80,alignItems:'start' }} className="two-col">

          {/* CV sticky */}
          <div className="reveal" style={{ position:'sticky',top:100 }}>
            <div className="section-label" style={{ marginBottom:24 }}>// 03 — Profil</div>
            <div style={{ borderRadius:16,overflow:'hidden',border:'1px solid rgba(255,255,255,0.07)',boxShadow:'0 24px 80px rgba(0,0,0,0.6)',background:'#fff' }}>
              <div style={{ width:'100%',aspectRatio:'210/297',position:'relative' }}>
                <iframe
                  src={`${cvPath}#toolbar=0&navpanes=0&scrollbar=0&view=FitV&zoom=page-fit`}
                  style={{ position:'absolute',inset:0,width:'100%',height:'100%',border:'none' }}
                  title="CV Mohamed Sanogo"
                />
              </div>
            </div>
            <div style={{ display:'flex',gap:10,marginTop:16 }}>
              <a href={cvPath} download className="btn-primary" style={{ flex:1,justifyContent:'center' }}>Télécharger CV</a>
              <a href={cvPath} target="_blank" rel="noreferrer" className="btn-ghost" style={{ flex:1,justifyContent:'center' }}>Plein écran</a>
            </div>
          </div>

          {/* Timeline */}
          <div className="reveal reveal-d2">
            <h2 style={{ fontFamily:'Bebas Neue,sans-serif',fontSize:'clamp(2.5rem,5vw,4rem)',color:'#fff',lineHeight:1,marginBottom:56 }}>
              Mon <span className="gradient-text">Parcours.</span>
            </h2>

            <div style={{ display:'flex',flexDirection:'column',gap:0 }}>
              {timeline.map((item, i) => (
                <div key={i} className="tl-item" style={{ position:'relative',paddingLeft:32,paddingBottom:i<timeline.length-1?48:0,borderLeft:'1px solid rgba(255,255,255,0.08)' }}>
                  <div className="tl-dot" />
                  <div style={{ fontFamily:'DM Mono,monospace',fontSize:9,letterSpacing:'0.2em',textTransform:'uppercase',color:t.accent,marginBottom:8 }}>{item.year}</div>
                  <div style={{ fontFamily:'Bebas Neue,sans-serif',fontSize:'1.25rem',color:'#fff',letterSpacing:'0.04em',marginBottom:6 }}>{item.title}</div>
                  <div style={{ fontSize:10,fontWeight:700,letterSpacing:'0.15em',textTransform:'uppercase',color:'rgba(255,255,255,0.3)',marginBottom:10 }}>{item.place}</div>
                  <p style={{ fontSize:12,color:'rgba(255,255,255,0.4)',fontStyle:'italic',lineHeight:1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACT
      ═══════════════════════════════════════ */}
      <section id="contact" style={{ padding:'100px 32px' }}>
        <div className="section-sep" />
        <div style={{ maxWidth:1280,margin:'0 auto',paddingTop:80 }}>
          <div className="reveal" style={{ marginBottom:64 }}>
            <div className="section-label" style={{ marginBottom:16 }}>// 04 — Contact</div>
            <h2 style={{ fontFamily:'Bebas Neue,sans-serif',fontSize:'clamp(2.5rem,5vw,4rem)',color:'#fff',lineHeight:1 }}>
              Lançons <span className="gradient-text">Le Contact.</span>
            </h2>
          </div>

          <div style={{ display:'grid',gridTemplateColumns:'2fr 3fr',gap:80,alignItems:'start' }} className="two-col">
            <div className="reveal">
              <p style={{ fontSize:14,color:'rgba(255,255,255,0.4)',lineHeight:1.8,marginBottom:40,fontStyle:'italic' }}>
                Je suis activement à la recherche d'une alternance en développement logiciel à partir de septembre 2026. N'hésitez pas à me contacter.
              </p>
              <div style={{ display:'flex',flexDirection:'column',gap:16 }}>
                <a href={`mailto:${myEmail}`} style={{ display:'flex',alignItems:'center',gap:14,textDecoration:'none',padding:'14px 0',borderBottom:'1px solid rgba(255,255,255,0.06)' }}
                  onMouseEnter={e=>e.currentTarget.style.borderBottomColor=t.accentBorder} onMouseLeave={e=>e.currentTarget.style.borderBottomColor='rgba(255,255,255,0.06)'}>
                  <Mail size={16} style={{ color:t.accent,flexShrink:0 }} />
                  <span style={{ fontFamily:'DM Mono,monospace',fontSize:10,letterSpacing:'0.1em',color:'rgba(255,255,255,0.5)',transition:'color 0.2s' }}>{myEmail}</span>
                </a>
                <a href={myLinkedin} target="_blank" rel="noreferrer" style={{ display:'flex',alignItems:'center',gap:14,textDecoration:'none',padding:'14px 0',borderBottom:'1px solid rgba(255,255,255,0.06)' }}
                  onMouseEnter={e=>e.currentTarget.style.borderBottomColor=t.accentBorder} onMouseLeave={e=>e.currentTarget.style.borderBottomColor='rgba(255,255,255,0.06)'}>
                  <Linkedin size={16} style={{ color:t.accent,flexShrink:0 }} />
                  <span style={{ fontFamily:'DM Mono,monospace',fontSize:10,letterSpacing:'0.1em',color:'rgba(255,255,255,0.5)' }}>LinkedIn — Mohamed-Ismael</span>
                </a>
              </div>
            </div>

            <div className="reveal reveal-d2">
              <form onSubmit={handleContact} style={{ display:'flex',flexDirection:'column',gap:16 }}>
                <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:12 }}>
                  <div>
                    <label style={{ display:'block',fontFamily:'DM Mono,monospace',fontSize:9,letterSpacing:'0.2em',textTransform:'uppercase',color:'rgba(255,255,255,0.3)',marginBottom:8 }}>Nom</label>
                    <input name="name" type="text" className="field" placeholder="Votre nom" required />
                  </div>
                  <div>
                    <label style={{ display:'block',fontFamily:'DM Mono,monospace',fontSize:9,letterSpacing:'0.2em',textTransform:'uppercase',color:'rgba(255,255,255,0.3)',marginBottom:8 }}>Email</label>
                    <input name="email" type="email" className="field" placeholder="email@pro.com" required />
                  </div>
                </div>
                <div>
                  <label style={{ display:'block',fontFamily:'DM Mono,monospace',fontSize:9,letterSpacing:'0.2em',textTransform:'uppercase',color:'rgba(255,255,255,0.3)',marginBottom:8 }}>Message</label>
                  <textarea name="message" rows={5} className="field" placeholder="Votre message..." required style={{ resize:'none' }} />
                </div>
                <button type="submit" className="btn-primary" disabled={formStatus==='sending'}
                  style={{ background: formStatus==='success' ? '#10b981' : t.accent, width:'100%',justifyContent:'center',fontSize:11 }}>
                  {formStatus==='sending' ? 'Envoi en cours…' : formStatus==='success' ? '✓ Message transmis' : 'Envoyer le message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding:'60px 32px',borderTop:'1px solid rgba(255,255,255,0.05)',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:16 }}>
        <div style={{ fontFamily:'Bebas Neue,sans-serif',fontSize:'1.1rem',letterSpacing:'0.15em',color:'rgba(255,255,255,0.25)' }}>
          Mohamed Ismael Sanogo — Élève Ingénieur ESIEA © 2026
        </div>
        <div style={{ display:'flex',gap:20 }}>
          <a href={myLinkedin} target="_blank" rel="noreferrer" style={{ color:'rgba(255,255,255,0.2)',transition:'color 0.2s' }} onMouseEnter={e=>e.currentTarget.style.color=t.accent} onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.2)'}><Linkedin size={18}/></a>
          <a href="https://github.com/Sanogo2429" target="_blank" rel="noreferrer" style={{ color:'rgba(255,255,255,0.2)',transition:'color 0.2s' }} onMouseEnter={e=>e.currentTarget.style.color=t.accent} onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.2)'}><Github size={18}/></a>
          <a href={`mailto:${myEmail}`} style={{ color:'rgba(255,255,255,0.2)',transition:'color 0.2s' }} onMouseEnter={e=>e.currentTarget.style.color=t.accent} onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.2)'}><Mail size={18}/></a>
        </div>
      </footer>

      {/* Responsive CSS */}
      <style>{`
        .hidden-mobile { display: flex; }
        .show-mobile   { display: none; }
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; align-items: center; }
          .hero-grid, .two-col, .three-col, .stats-grid { grid-template-columns: 1fr !important; }
          .side-line { display: none; }
          footer { flex-direction: column; text-align: center; }
          /* Sur mobile : afficher bottom sheet, cacher panel desktop */
          .color-picker-desktop { display: none !important; }
          .color-picker-mobile  { display: block !important; }
        }
        @media (min-width: 901px) {
          /* Sur desktop : afficher panel, cacher bottom sheet */
          .color-picker-desktop { display: block !important; }
          .color-picker-mobile  { display: none !important; }
        }
      `}</style>
    </div>
  );
};

export default App;