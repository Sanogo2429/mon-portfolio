// Importation de React et des hooks nécessaires
import React, { useState, useEffect, useRef } from 'react';
// Importation des icônes depuis lucide-react
import { Menu, X, Download, ArrowRight, Code, Database, Github, Cpu, Globe, Mail, Send, Linkedin, Sparkles, CheckCircle2, ChevronLeft, ChevronRight as ChevronRightIcon, ShieldAlert, BookOpen, BrainCircuit, PenTool } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // État pour le zoom d'image ou de vidéo (Modal Lightbox)
  const [zoomedMedia, setZoomedMedia] = useState(null);

  // Diaporama pour le projet Bibliothèque
  const [biblioSlide, setBiblioSlide] = useState(0);
  const [isBiblioPaused, setIsBiblioPaused] = useState(false);

  // Diaporama pour le projet Gaïa
  const [slideIndex, setSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Diaporama pour le projet SafeSchool
  const [safeSchoolSlide, setSafeSchoolSlide] = useState(0);
  const [isSafeSchoolPaused, setIsSafeSchoolPaused] = useState(false);

  // Images des projets
  const biblioSlides = [
    { src: '/imageprojetbiblio.jpeg', title: '1. Tableau de bord' },
    { src: '/imagebiblio1.jpeg', title: '2. Ajout de livre' }
  ];

  const gaiaSlides = [
    { type: 'video', src: '/gaiaprojet1.mp4', title: '1. Présentation' },
    { type: 'video', src: '/gaiaprojet.mp4', title: '2. Démo capteurs' },
    { type: 'image', src: '/imagegaia.jpeg', title: '3. Stand ESIEA' }
  ];

  const safeSchoolSlides = [
    { src: '/s.png', title: '1. Accueil & Choix' },
    { src: '/S3.png', title: '2. Mes Parcours' },
    { src: '/s4.png', title: '3. Détail du Cours' }
  ];

  // Défilements automatiques
  useEffect(() => {
    if (isBiblioPaused || zoomedMedia) return;
    const interval = setInterval(() => setBiblioSlide((prev) => (prev + 1) % biblioSlides.length), 5000);
    return () => clearInterval(interval);
  }, [biblioSlides.length, isBiblioPaused, zoomedMedia]);

  useEffect(() => {
    if (isPaused || zoomedMedia) return;
    const interval = setInterval(() => setSlideIndex((prev) => (prev + 1) % gaiaSlides.length), 6000);
    return () => clearInterval(interval);
  }, [gaiaSlides.length, isPaused, zoomedMedia]);

  useEffect(() => {
    if (isSafeSchoolPaused || zoomedMedia) return;
    const interval = setInterval(() => setSafeSchoolSlide((prev) => (prev + 1) % safeSchoolSlides.length), 5000);
    return () => clearInterval(interval);
  }, [safeSchoolSlides.length, isSafeSchoolPaused, zoomedMedia]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
    e.target.reset();
  };

  const hardSkillsList = [
    { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
    { name: ".NET Core", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Arduino", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg" }
  ];

  return (
    <div className="min-h-screen bg-[#1c1412] text-[#f4ebd0] font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">
      
      <style>{`
        @keyframes scrollLeft { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scrollRight { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .animate-ticker-left { display: flex; width: max-content; animation: scrollLeft 22s linear infinite; }
        .animate-ticker-right { display: flex; width: max-content; animation: scrollRight 22s linear infinite; }
        .animate-ticker-left:hover, .animate-ticker-right:hover { animation-play-state: paused; }
        
        /* Optimisation du scroll PDF sur mobile iOS */
        .pdf-container { -webkit-overflow-scrolling: touch; overflow-y: scroll; }
      `}</style>

      {/* MODAL ZOOM */}
      {zoomedMedia && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-pointer" onClick={() => setZoomedMedia(null)}>
          <div className="relative max-w-6xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setZoomedMedia(null)} className="absolute -top-12 sm:-top-14 right-0 text-white bg-orange-600 hover:bg-orange-500 p-2.5 rounded-full transition-all shadow-[0_0_20px_rgba(234,88,12,0.5)] z-50">
              <X size={24} />
            </button>
            {zoomedMedia.type === 'video' ? (
              <video src={zoomedMedia.src} controls autoPlay className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl bg-black border border-[#f4ebd0]/20" />
            ) : (
              <img src={zoomedMedia.src} alt="Zoom Projet" className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl bg-black border border-[#f4ebd0]/20" />
            )}
          </div>
        </div>
      )}

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#1c1412]/90 backdrop-blur-md border-b border-[#f4ebd0]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-2">
            <span>M. Sanogo</span>
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          </div>

          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#f4ebd0]/70">
            <a href="#accueil" className="hover:text-white transition-colors">Accueil</a>
            <a href="#projets" className="hover:text-white transition-colors">Projets</a>
            <a href="#competences" className="hover:text-white transition-colors">Compétences</a>
            <a href="#cv" className="hover:text-white transition-colors">CV</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="hidden md:block">
            <a href="#contact" className="bg-orange-600 hover:bg-orange-500 text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-orange-600/25">
              Discutons 🚀
            </a>
          </div>

          <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#1c1412] border-b border-[#f4ebd0]/10 flex flex-col items-center py-6 gap-6 shadow-2xl">
            <a href="#accueil" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Accueil</a>
            <a href="#projets" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Projets</a>
            <a href="#competences" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Compétences</a>
            <a href="#cv" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">CV</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg text-orange-400 font-bold bg-orange-500/10 px-6 py-2 rounded-full">Contact</a>
          </div>
        )}
      </nav>

      {/* MAIN CONTENT */}
      <main className="pt-28 sm:pt-32 pb-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-24 sm:space-y-32">
        
        {/* HERO SECTION */}
        <section id="accueil" className="space-y-8 sm:space-y-12">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
              <Sparkles size={14} /> Alternance d'un an (ou plus) · ESIEA
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] sm:leading-[1.1]">
              Développeur Fullstack, Architecte Logiciel, <span className="text-[#e2a088] font-serif italic font-normal">IA & IoT</span>
            </h1>
          </div>

          <div className="bg-[#261c1a] border border-[#f4ebd0]/10 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center shadow-2xl">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block bg-orange-500/10 text-orange-400 text-[10px] sm:text-xs font-bold px-3.5 py-1.5 rounded-full border border-orange-500/20">
                / Recherche d'alternance d'1 an
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                Bonjour, je suis Mohamed Ismael Sanogo.
              </h2>
              <p className="text-[#f4ebd0]/70 text-sm sm:text-base md:text-lg leading-relaxed">
                Étudiant en Bachelor Informatique à l'ESIEA. Je conçois des applications web robustes, des architectures logicielles propres, des systèmes connectés (IoT) et j'intègre l'intelligence artificielle avec une obsession pour la qualité et l'impact mesurable.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a href="#projets" className="text-center bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2">
                  Voir mes projets <ArrowRight size={16} />
                </a>
                <a href="/cv_alternance_Mohamed_Ismael_Sanogo.pdf" download className="text-center bg-transparent border border-[#f4ebd0]/20 hover:border-[#f4ebd0]/50 text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2">
                  <Download size={16} /> Télécharger CV
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center order-first lg:order-last mb-6 lg:mb-0">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full sm:rounded-3xl overflow-hidden border-2 border-[#f4ebd0]/15 shadow-2xl group cursor-pointer" onClick={() => setZoomedMedia({ type: 'image', src: '/maphoto.png' })}>
                <img src="/maphoto.png" alt="Mohamed Sanogo" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1412] via-transparent opacity-60"></div>
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-4 text-[10px] sm:text-xs font-mono tracking-widest text-orange-400 bg-[#1c1412]/80 px-3 py-1 rounded-lg backdrop-blur-md whitespace-nowrap">
                  PARIS / ARGENTEUIL
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* PROJETS */}
        <section id="projets" className="space-y-8 sm:space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#f4ebd0]/10 pb-6">
            <div>
              <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">/ Mes Projets</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mt-1">Réalisations & Code</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Projet 1 : Bibliothèque */}
            <div className="bg-[#261c1a] border border-[#f4ebd0]/10 rounded-[2rem] p-5 sm:p-6 flex flex-col justify-between hover:border-orange-500/50 transition-all duration-300 shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2 sm:p-3 bg-[#1c1412] rounded-xl sm:rounded-2xl border border-[#f4ebd0]/10">
                    <Database className="text-orange-400" size={20} />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full border border-orange-500/20">Full Stack / API</span>
                </div>
                <div className="relative w-full h-56 sm:h-64 bg-black rounded-2xl overflow-hidden border border-[#f4ebd0]/10 group/biblio cursor-pointer" onMouseEnter={() => setIsBiblioPaused(true)} onMouseLeave={() => setIsBiblioPaused(false)} onClick={() => setZoomedMedia({ type: 'image', src: biblioSlides[biblioSlide].src })}>
                  <img src={biblioSlides[biblioSlide].src} className="absolute inset-0 w-full h-full object-cover opacity-30 blur-xl pointer-events-none" alt="" />
                  <img src={biblioSlides[biblioSlide].src} alt="Biblio" className="relative z-10 w-full h-full object-contain transition-transform duration-700 group-hover/biblio:scale-105" />
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center px-4 py-1.5 bg-black/80 backdrop-blur-md rounded-lg text-[10px] sm:text-xs font-mono text-white z-20 pointer-events-none">
                    <span className="truncate pr-2">{biblioSlides[biblioSlide].title}</span>
                    <span className="text-orange-400 font-bold shrink-0">{biblioSlide + 1} / {biblioSlides.length}</span>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Application de Gestion de Bibliothèque</h3>
                <p className="text-[#f4ebd0]/70 text-sm leading-relaxed">
                  Développement d'une API RESTful sécurisée (ASP.NET Core / Entity Framework), couplée à une interface frontend en React avec authentification JWT pour simplifier la gestion d'emprunt.
                </p>
              </div>
              <div className="space-y-4 pt-6 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {["ASP.NET", "React", "Entity Framework", "JWT"].map((t, i) => <span key={i} className="text-[10px] sm:text-[11px] font-mono bg-[#1c1412] px-2 py-1 rounded-md border border-[#f4ebd0]/5">{t}</span>)}
                </div>
                <a href="https://github.com/Sanogo2429" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 sm:py-3.5 rounded-xl bg-[#1c1412] hover:bg-orange-600 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-colors border border-[#f4ebd0]/10">
                  <Github size={15} /> Code Source GitHub
                </a>
              </div>
            </div>

            {/* Projet 2 : Gaïa */}
            <div className="bg-[#261c1a] border border-[#f4ebd0]/10 rounded-[2rem] p-5 sm:p-6 flex flex-col justify-between hover:border-orange-500/50 transition-all duration-300 shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2 sm:p-3 bg-[#1c1412] rounded-xl sm:rounded-2xl border border-[#f4ebd0]/10">
                    <Cpu className="text-orange-400" size={20} />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full border border-orange-500/20">IoT & Systèmes</span>
                </div>
                <div className="relative w-full h-56 sm:h-64 bg-black rounded-2xl overflow-hidden border border-[#f4ebd0]/10 group/carousel cursor-pointer" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} onClick={() => setZoomedMedia({ type: gaiaSlides[slideIndex].type, src: gaiaSlides[slideIndex].src })}>
                  {gaiaSlides[slideIndex].type === 'video' ? (
                    <video src={gaiaSlides[slideIndex].src} autoPlay muted loop playsInline className="w-full h-full object-contain pointer-events-none" />
                  ) : (
                    <>
                      <img src={gaiaSlides[slideIndex].src} className="absolute inset-0 w-full h-full object-cover opacity-30 blur-xl pointer-events-none" alt="" />
                      <img src={gaiaSlides[slideIndex].src} alt="Gaïa" className="relative z-10 w-full h-full object-contain transition-transform duration-700 group-hover/carousel:scale-105" />
                    </>
                  )}
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center px-4 py-1.5 bg-black/80 backdrop-blur-md rounded-lg text-[10px] sm:text-xs font-mono text-white z-20 pointer-events-none">
                    <span className="truncate pr-2">▶ {gaiaSlides[slideIndex].title}</span>
                    <span className="text-orange-400 font-bold shrink-0">{slideIndex + 1} / {gaiaSlides.length}</span>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Gaïa - Serre Intelligente</h3>
                <p className="text-[#f4ebd0]/70 text-sm leading-relaxed">
                  Conception d'un système intelligent combinant capteurs physiques (température, humidité), Arduino et interface WPF (MySQL) pour réduire la consommation d'eau de 30%.
                </p>
              </div>
              <div className="space-y-4 pt-6 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {["C#", "C++", "Arduino", "MySQL", "WPF"].map((t, i) => <span key={i} className="text-[10px] sm:text-[11px] font-mono bg-[#1c1412] px-2 py-1 rounded-md border border-[#f4ebd0]/5">{t}</span>)}
                </div>
                <a href="https://github.com/Sanogo2429/Gaia.git" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 sm:py-3.5 rounded-xl bg-[#1c1412] hover:bg-orange-600 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-colors border border-[#f4ebd0]/10">
                  <Github size={15} /> Code Source GitHub
                </a>
              </div>
            </div>

            {/* Projet 3 : Cookify */}
            <div className="bg-[#261c1a] border border-[#f4ebd0]/10 rounded-[2rem] p-5 sm:p-6 flex flex-col justify-between hover:border-orange-500/50 transition-all duration-300 shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2 sm:p-3 bg-[#1c1412] rounded-xl sm:rounded-2xl border border-[#f4ebd0]/10">
                    <Globe className="text-orange-400" size={20} />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full border border-orange-500/20">Web Full Stack</span>
                </div>
                <div className="relative w-full h-56 sm:h-64 bg-black rounded-2xl overflow-hidden border border-[#f4ebd0]/10 cursor-pointer" onClick={() => setZoomedMedia({ type: 'image', src: '/cookifyphoto.jpeg' })}>
                  <img src="/cookifyphoto.jpeg" className="absolute inset-0 w-full h-full object-cover opacity-30 blur-xl pointer-events-none" alt="" />
                  <img src="/cookifyphoto.jpeg" alt="Cookify" className="relative z-10 w-full h-full object-contain" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Cookify - Plateforme de Recettes</h3>
                <p className="text-[#f4ebd0]/70 text-sm leading-relaxed">
                  Fédérer une communauté autour du partage culinaire. Intègre la publication de recettes, des commentaires et des quiz ludiques, développé en PHP sous architecture MVC.
                </p>
              </div>
              <div className="space-y-4 pt-6 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {["PHP", "MySQL", "MVC", "HTML/CSS"].map((t, i) => <span key={i} className="text-[10px] sm:text-[11px] font-mono bg-[#1c1412] px-2 py-1 rounded-md border border-[#f4ebd0]/5">{t}</span>)}
                </div>
                <a href="https://github.com/Sanogo2429/cookify.git" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 sm:py-3.5 rounded-xl bg-[#1c1412] hover:bg-orange-600 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-colors border border-[#f4ebd0]/10">
                  <Github size={15} /> Code Source GitHub
                </a>
              </div>
            </div>

            {/* Projet 4 : SafeSchool (AVEC LES DEUX BOUTONS GITHUB) */}
            <div className="bg-[#261c1a] border border-[#f4ebd0]/10 rounded-[2rem] p-5 sm:p-6 flex flex-col justify-between hover:border-orange-500/50 transition-all duration-300 shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2 sm:p-3 bg-[#1c1412] rounded-xl sm:rounded-2xl border border-[#f4ebd0]/10">
                    <ShieldAlert className="text-orange-400" size={20} />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full border border-orange-500/20">Chef de Projet</span>
                </div>
                <div className="relative w-full h-56 sm:h-64 bg-black rounded-2xl overflow-hidden border border-[#f4ebd0]/10 group/safe cursor-pointer" onMouseEnter={() => setIsSafeSchoolPaused(true)} onMouseLeave={() => setIsSafeSchoolPaused(false)} onClick={() => setZoomedMedia({ type: 'image', src: safeSchoolSlides[safeSchoolSlide].src })}>
                  <img src={safeSchoolSlides[safeSchoolSlide].src} className="absolute inset-0 w-full h-full object-cover opacity-30 blur-xl pointer-events-none" alt="" />
                  <img src={safeSchoolSlides[safeSchoolSlide].src} alt="SafeSchool" className="relative z-10 w-full h-full object-contain transition-transform duration-700 group-hover/safe:scale-105" />
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center px-4 py-1.5 bg-black/80 backdrop-blur-md rounded-lg text-[10px] sm:text-xs font-mono text-white z-20 pointer-events-none">
                    <span className="truncate pr-2">{safeSchoolSlides[safeSchoolSlide].title}</span>
                    <span className="text-orange-400 font-bold shrink-0">{safeSchoolSlide + 1} / {safeSchoolSlides.length}</span>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">SafeSchool (Cyberharcèlement)</h3>
                <p className="text-[#f4ebd0]/70 text-sm leading-relaxed">
                  Plateforme e-learning de sensibilisation proposant modules, vidéos interactives et jeux pour informer sur les causes et conséquences du cyberharcèlement.
                </p>
              </div>
              <div className="space-y-4 pt-6 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {["UI/UX Design", "HTML/CSS", "JavaScript", "Gestion"].map((t, i) => <span key={i} className="text-[10px] sm:text-[11px] font-mono bg-[#1c1412] px-2 py-1 rounded-md border border-[#f4ebd0]/5">{t}</span>)}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a href="https://github.com/Sanogo2429/safeschool-front.git" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1 sm:gap-2 w-full py-3 sm:py-3.5 rounded-xl bg-[#1c1412] hover:bg-orange-600 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-colors border border-[#f4ebd0]/10">
                    <Github size={15} /> Frontend
                  </a>
                  <a href="https://github.com/Sanogo2429/safeschool.git" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1 sm:gap-2 w-full py-3 sm:py-3.5 rounded-xl bg-[#1c1412] hover:bg-orange-600 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-colors border border-[#f4ebd0]/10">
                    <Github size={15} /> Backend
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION CV & PARCOURS (Optimisée pour le scroll PDF sur mobile) */}
        <section id="cv" className="space-y-8 sm:space-y-12">
          <div className="border-b border-[#f4ebd0]/10 pb-6">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">/ Parcours</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mt-1">CV & Expériences</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            
            {/* Le Document PDF : Hauteur adaptée (500px sur mobile, 650px sur ordi) */}
            <div className="bg-[#261c1a] p-4 sm:p-6 rounded-[2rem] border border-[#f4ebd0]/10 shadow-xl flex flex-col h-[500px] lg:h-[650px]">
              <div className="flex justify-between items-center mb-4 shrink-0 px-2 sm:px-0">
                <span className="font-bold text-xs sm:text-sm text-white">Document PDF</span>
                <a href="/cv_alternance_Mohamed_Ismael_Sanogo.pdf" download className="bg-orange-600 hover:bg-orange-500 text-white px-3 sm:px-4 py-2 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors">
                  <Download size={14} /> <span className="hidden sm:inline">Télécharger</span>
                </a>
              </div>
              <div className="w-full flex-1 bg-white rounded-2xl overflow-hidden border border-[#f4ebd0]/10 pdf-container relative">
                {/* On s'assure que l'iframe est scrollable sur mobile */}
                <iframe src="/cv_alternance_Mohamed_Ismael_Sanogo.pdf" className="absolute top-0 left-0 w-full h-full border-none" title="CV Mohamed Sanogo" />
              </div>
            </div>

            {/* Expériences */}
            <div className="grid grid-rows-4 gap-4 h-auto lg:h-[650px]">
              {[
                { date: "Gestion de Projet & Web", title: "Chef de Projet – SafeSchool", desc: "Création plateforme e-learning de prévention. Ateliers, gestion d'équipe et pédagogie." },
                { date: "2024 – 2027 · Paris", title: "Bachelor Informatique - ESIEA", desc: "Architecture logicielle, programmation orientée objet, web, BDD et intégration IoT." },
                { date: "Mai 2025 – Présent", title: "Agent de Sûreté Aéroportuaire - CDG", desc: "Contrôle de sécurité et gestion des flux. Rigueur absolue et maîtrise du stress." },
                { date: "2024 – Présent", title: "Bénévole - Marie Charity", desc: "Distribution de repas, gestion logistique et coordination dans un esprit solidaire." }
              ].map((exp, i) => (
                <div key={i} className="bg-[#261c1a] p-5 sm:p-6 rounded-3xl border border-[#f4ebd0]/10 shadow-xl flex flex-col justify-center transition-all hover:border-orange-500/30">
                  <span className="text-[10px] font-mono text-orange-400 uppercase tracking-widest mb-1 sm:mb-2">{exp.date}</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">{exp.title}</h3>
                  <p className="text-[#f4ebd0]/70 text-xs sm:text-sm leading-relaxed mt-1 sm:mt-2">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPÉTENCES */}
        <section id="competences" className="space-y-8 sm:space-y-12">
          <div className="border-b border-[#f4ebd0]/10 pb-6">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">/ Mes Outils</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mt-1">Compétences</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-[#261c1a] p-6 sm:p-8 rounded-[2rem] border border-[#f4ebd0]/10 shadow-xl space-y-6 lg:col-span-2 overflow-hidden">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <Code className="text-orange-400" size={24} /> Hard Skills
              </h3>
              <div className="relative w-full overflow-hidden py-4 space-y-4">
                <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-r from-[#261c1a] to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-l from-[#261c1a] to-transparent z-10"></div>
                <div className="animate-ticker-left flex gap-4 sm:gap-6 items-center">
                  {[...hardSkillsList, ...hardSkillsList].map((skill, index) => (
                    <div key={`l1-${index}`} className="flex flex-col items-center justify-center min-w-[100px] sm:min-w-[130px] p-4 sm:p-5 bg-[#1c1412] rounded-2xl border border-[#f4ebd0]/10 shrink-0">
                      <img src={skill.icon} alt={skill.name} className="w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-3" />
                      <span className="text-[10px] sm:text-xs font-mono text-[#f4ebd0]/70">{skill.name}</span>
                    </div>
                  ))}
                </div>
                <div className="animate-ticker-right flex gap-4 sm:gap-6 items-center">
                  {[...hardSkillsList, ...hardSkillsList].reverse().map((skill, index) => (
                    <div key={`l2-${index}`} className="flex flex-col items-center justify-center min-w-[100px] sm:min-w-[130px] p-4 sm:p-5 bg-[#1c1412] rounded-2xl border border-[#f4ebd0]/10 shrink-0">
                      <img src={skill.icon} alt={skill.name} className="w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-3" />
                      <span className="text-[10px] sm:text-xs font-mono text-[#f4ebd0]/70">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[#261c1a] p-6 sm:p-8 rounded-[2rem] border border-[#f4ebd0]/10 shadow-xl space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <BrainCircuit className="text-orange-400" size={24} /> Soft Skills
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {["Rigueur & Précision", "Travail en équipe", "Autonomie", "Gestion du stress (Aéroport)", "Éloquence"].map((softSkill, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-[#f4ebd0]/80 bg-[#1c1412] p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-[#f4ebd0]/5">
                    <Sparkles size={14} className="text-orange-500 shrink-0" /> {softSkill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="pt-4 sm:pt-12">
          <div className="bg-gradient-to-br from-[#261c1a] to-[#140e0d] border border-[#f4ebd0]/15 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-14 shadow-2xl relative overflow-hidden max-w-3xl mx-auto">
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-10">
              <span className="text-orange-500 text-[10px] sm:text-xs font-bold uppercase tracking-widest">/ Contactez-moi</span>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">Prêt à intégrer votre équipe</h2>
              <p className="text-[#f4ebd0]/70 text-xs sm:text-sm">Alternance d'un an (ou plus) : 3 semaines entreprise / 1 semaine école.</p>
            </div>
            {formSubmitted ? (
              <div className="bg-orange-500/10 border border-orange-500/20 text-orange-300 p-6 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="mx-auto text-orange-400" size={32} />
                <h3 className="font-bold text-lg text-white">Message bien envoyé !</h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#f4ebd0]/60 mb-2">Votre Nom</label>
                    <input type="text" required className="w-full bg-[#1c1412] border border-[#f4ebd0]/15 rounded-xl px-4 py-3 text-white text-sm" placeholder="Jean Dupont" />
                  </div>
                  <div>
                    <label className="block text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#f4ebd0]/60 mb-2">Email</label>
                    <input type="email" required className="w-full bg-[#1c1412] border border-[#f4ebd0]/15 rounded-xl px-4 py-3 text-white text-sm" placeholder="jean@exemple.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#f4ebd0]/60 mb-2">Message</label>
                  <textarea rows={4} required className="w-full bg-[#1c1412] border border-[#f4ebd0]/15 rounded-xl px-4 py-3 text-white text-sm resize-none" placeholder="Bonjour Mohamed..." />
                </div>
                <button type="submit" className="w-full py-3.5 sm:py-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-[10px] sm:text-xs uppercase tracking-widest flex items-center justify-center gap-2">
                  <Send size={15} /> Envoyer le message
                </button>
              </form>
            )}
          </div>
        </section>

      </main>

      <footer className="border-t border-[#f4ebd0]/10 py-8 sm:py-12 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs font-mono text-[#f4ebd0]/50 text-center sm:text-left">
        <p>© 2026 Mohamed Ismael Sanogo · Conçu avec React & Tailwind.</p>
        <p>ESIEA · Bachelor Informatique</p>
      </footer>
    </div>
  );
};

export default App;