// Importation de React et des hooks nécessaires
import React, { useState, useEffect } from 'react';
// Importation des icônes depuis lucide-react
import { 
  Menu, X, Download, ArrowRight, Code, Database, Github, Cpu, Globe, 
  Mail, Send, Linkedin, Sparkles, CheckCircle2, ChevronLeft, 
  ChevronRight as ChevronRightIcon, ShieldAlert, BookOpen, BrainCircuit, 
  PenTool, Layers, Terminal, Target, Users, CheckSquare, BarChart3, 
  Clock, ShieldCheck, Video, Layout
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // État pour la bulle de bienvenue en bas qui disparaît toute seule
  const [showToast, setShowToast] = useState(true);

  // État pour le zoom d'image ou de vidéo (Modal Lightbox)
  const [zoomedMedia, setZoomedMedia] = useState(null);

  // Diaporamas pour les projets
  const [biblioSlide, setBiblioSlide] = useState(0);
  const [isBiblioPaused, setIsBiblioPaused] = useState(false);

  const [slideIndex, setSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const [cookifySlide, setCookifySlide] = useState(0);
  const [isCookifyPaused, setIsCookifyPaused] = useState(false);

  const [safeSchoolSlide, setSafeSchoolSlide] = useState(0);
  const [isSafeSchoolPaused, setIsSafeSchoolPaused] = useState(false);

  // Images du projet Bibliothèque
  const biblioSlides = [
    { src: '/imageprojetbiblio.jpeg', title: '1. Tableau de bord & Gestion des ouvrages' },
    { src: '/imagebiblio1.jpeg', title: '2. Formulaire d’ajout & validation' }
  ];

  // Médias du projet Gaïa
  const gaiaSlides = [
    { type: 'video', src: '/gaiaprojet1.mp4', title: '1. Présentation de l’équipe' },
    { type: 'video', src: '/gaiaprojet.mp4', title: '2. Démo du système & capteurs' },
    { type: 'image', src: '/imagegaia.jpeg', title: '3. Équipe sur le stand ESIEA' }
  ];

  // Médias du projet Cookify (Chemins corrigés pour mobile/web)
  const cookifySlides = [
    { type: 'image', src: '/cookifyphoto.jpeg', title: '1. Présentation de Cookify' },
    { type: 'image', src: '/pageacceuilcookify.png', title: '2. Accueil & Découverte' },
    { type: 'image', src: '/pageinscriptioncookify.png', title: '3. Authentification sécurisée' },
    { type: 'image', src: '/pageprofilcookify.png', title: '4. Espace Profil Utilisateur' },
    { type: 'image', src: '/recettepayscookify.png', title: '5. Explorateur de cuisines du monde' },
    { type: 'image', src: '/selectionmenucookify.png', title: '6. Sélection des menus' },
    { type: 'image', src: '/menudescriptioncookify.png', title: '7. Fiche détaillée des recettes' },
    { type: 'image', src: '/cuisinothèquecookify.png', title: '8. Cuisinothèque & Ingrédients' },
    { type: 'image', src: '/jeuxcookify.png', title: '9. Quizz & Espace ludique' },
    { type: 'video', src: '/IMG_1344-Ck1IXw3W.mov', title: '10. Moment de démonstration' },
    { type: 'video', src: '/videocookify.MOV', title: '11. Démo dynamique de Cookify' }
  ];

  // Images du projet SafeSchool (Chemins corrigés)
  const safeSchoolSlides = [
    { src: '/s.png', title: '1. Accueil & Choix des Formations' },
    { src: '/S3.png', title: '2. Mes Parcours & Certificats' },
    { src: '/s4.png', title: '3. Détail du Cours & Modules' }
  ];

  // Effet pour faire disparaître le toast tout seul après 4 secondes
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

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
    if (isCookifyPaused || zoomedMedia) return;
    const interval = setInterval(() => setCookifySlide((prev) => (prev + 1) % cookifySlides.length), 5500);
    return () => clearInterval(interval);
  }, [cookifySlides.length, isCookifyPaused, zoomedMedia]);

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
    { name: "React JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" },
    { name: "Node JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" }
  ];

  const collaborativeToolsList = [
    { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
    { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
    { name: "Trello", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-plain.svg" },
    { name: "Slack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg" },
    { name: "Notion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg" }
  ];

  return (
    <div className="min-h-screen bg-[#1c1412] text-[#f4ebd0] font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">
      
      <style>{`
        @keyframes scrollLeft { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scrollRight { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        @keyframes slideUp { 
          0% { opacity: 0; transform: translateY(30px); } 
          100% { opacity: 1; transform: translateY(0); } 
        }
        @keyframes slideDown { 
          0% { opacity: 1; transform: translateY(0); } 
          100% { opacity: 0; transform: translateY(30px); } 
        }
        .animate-ticker-left { display: flex; width: max-content; animation: scrollLeft 25s linear infinite; }
        .animate-ticker-right { display: flex; width: max-content; animation: scrollRight 25s linear infinite; }
        .animate-ticker-left:hover, .animate-ticker-right:hover { animation-play-state: paused; }
        .animate-toast-in { animation: slideUp 0.5s ease-out forwards; }
        .animate-toast-out { animation: slideDown 0.5s ease-in forwards; }
        .pdf-container { -webkit-overflow-scrolling: touch; overflow-y: scroll; }
      `}</style>

      {/* ── PETIT MESSAGE DE BIENVENUE FLOTTANT EN BAS ── */}
      {showToast && (
        <div className="fixed bottom-4 right-4 z-[120] bg-[#261c1a]/95 border border-orange-500/50 rounded-2xl px-4 py-3 shadow-[0_10px_25px_rgba(0,0,0,0.6)] backdrop-blur-md flex items-center gap-3 animate-toast-in max-w-[90vw]">
          <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
            <Sparkles size={16} />
          </div>
          <div>
            <p className="text-xs font-bold text-white">Bienvenue sur mon portfolio ! 👋</p>
            <p className="text-[11px] text-[#f4ebd0]/70">Bonne visite et découverte de mes projets.</p>
          </div>
        </div>
      )}

      {/* ── MODAL LIGHTBOX (ZOOM MEDIAS) ── */}
      {zoomedMedia && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-2 sm:p-4 cursor-pointer" onClick={() => setZoomedMedia(null)}>
          <div className="relative max-w-6xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setZoomedMedia(null)} className="absolute -top-12 right-0 text-white bg-orange-600 hover:bg-orange-500 p-2.5 rounded-full transition-all shadow-lg z-50">
              <X size={24} />
            </button>
            {zoomedMedia.type === 'video' ? (
              <video src={zoomedMedia.src} controls autoPlay className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl bg-black border border-[#f4ebd0]/20" />
            ) : (
              <img src={zoomedMedia.src} alt="Zoom Media" className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl bg-black border border-[#f4ebd0]/20" />
            )}
          </div>
        </div>
      )}

      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#1c1412]/90 backdrop-blur-md border-b border-[#f4ebd0]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-2">
            <span>M. Sanogo</span>
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse"></span>
          </div>

          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#f4ebd0]/70">
            <a href="#accueil" className="hover:text-white transition-colors">Accueil</a>
            <a href="#methodologie" className="hover:text-white transition-colors">Méthodologie</a>
            <a href="#projets" className="hover:text-white transition-colors">Projets</a>
            <a href="#competences" className="hover:text-white transition-colors">Savoirs</a>
            <a href="#cv" className="hover:text-white transition-colors">CV</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="hidden md:block">
            <a href="#contact" className="bg-orange-600 hover:bg-orange-500 text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-orange-600/25">
              Discutons d'alternance 🚀
            </a>
          </div>

          <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#1c1412] border-b border-[#f4ebd0]/10 flex flex-col items-center py-6 gap-6 shadow-2xl">
            <a href="#accueil" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Accueil</a>
            <a href="#methodologie" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Méthodologie</a>
            <a href="#projets" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Projets</a>
            <a href="#competences" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Savoirs</a>
            <a href="#cv" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">CV</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg text-orange-400 font-bold bg-orange-500/10 px-6 py-2 rounded-full">Contact</a>
          </div>
        )}
      </nav>

      {/* ── MAIN CONTENT ── */}
      <main className="pt-28 sm:pt-32 pb-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-24 sm:space-y-32">
        
        {/* ── HERO SECTION ── */}
        <section id="accueil" className="space-y-8 sm:space-y-12">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
              <Sparkles size={14} /> Disponible Immédiatement pour une alternance d'un an (ou plus)
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
              Étudiant en Bachelor en Informatique
            </h1>
            <p className="text-base sm:text-2xl font-serif italic text-[#e2a088]">
              Développement Fullstack, Cloud & DevOps, IA, Management Agile de Projet
            </p>
          </div>

          <div className="bg-[#261c1a] border border-[#f4ebd0]/10 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center shadow-2xl">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block bg-orange-500/10 text-orange-400 text-[10px] sm:text-xs font-bold px-3.5 py-1.5 rounded-full border border-orange-500/25">
                / Rythme : 3 sem. entreprise / 1 sem. école (ESIEA)
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                Mohamed Ismael Sanogo
              </h2>
              
              <p className="text-[#f4ebd0]/80 text-sm sm:text-base md:text-lg leading-relaxed">
                Passionné par l'architecture logicielle et la gestion rigoureuse de projets informatiques. Je combine une solide maîtrise technique du code (C#, React, PHP, DevOps) à un leadership reconnu en gestion d'équipe Agile, structuration du besoin et assurance qualité des livrables.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a href="#projets" className="text-center bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2">
                  Découvrir mes projets <ArrowRight size={16} />
                </a>
                <a href="/cv_alternance_Mohamed_Ismael_Sanogo.pdf" download className="text-center bg-transparent border border-[#f4ebd0]/20 hover:border-[#f4ebd0]/50 text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2">
                  <Download size={16} /> Télécharger mon CV
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center order-first lg:order-last mb-4 lg:mb-0">
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

        {/* ── SECTION MÉTHODOLOGIE & DÉMARCHE PRO ── */}
        <section id="methodologie" className="space-y-8 sm:space-y-12">
          <div className="border-b border-[#f4ebd0]/10 pb-6">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">/ Rigueur & Gestion de Projet</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mt-1">Ma Démarche de Travail</h2>
            <p className="text-[#f4ebd0]/70 text-sm sm:text-base mt-2 max-w-2xl">
              Chaque projet est conduit selon des normes strictes de gestion, combinant cadrage méthodique, suivi agile et intégration continue pour garantir la sécurité et la haute qualité du code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            <div className="bg-[#261c1a] border border-[#f4ebd0]/10 p-6 rounded-3xl space-y-4 hover:border-orange-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-orange-600/10 rounded-2xl flex items-center justify-center text-orange-400 border border-orange-500/20 mb-4">
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">1. Objectifs SMART & Cadrage</h3>
                <p className="text-xs text-[#f4ebd0]/70 leading-relaxed">
                  Définition claire des objectifs (Spécifiques, Mesurables, Atteignables, Réalistes, Temporels). Rédaction fine des cahiers des charges, spécifications techniques et cartographie du besoin métier.
                </p>
              </div>
            </div>

            <div className="bg-[#261c1a] border border-[#f4ebd0]/10 p-6 rounded-3xl space-y-4 hover:border-orange-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-orange-600/10 rounded-2xl flex items-center justify-center text-orange-400 border border-orange-500/20 mb-4">
                  <Clock size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">2. Sprints & Itérations Agile</h3>
                <p className="text-xs text-[#f4ebd0]/70 leading-relaxed">
                  Découpage fonctionnel en Epics & User Stories. Déploiement en méthodologie SCRUM avec planification de Sprints et réunions de suivi quotidiennes pour adapter le rythme.
                </p>
              </div>
            </div>

            <div className="bg-[#261c1a] border border-[#f4ebd0]/10 p-6 rounded-3xl space-y-4 hover:border-orange-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-orange-600/10 rounded-2xl flex items-center justify-center text-orange-400 border border-orange-500/20 mb-4">
                  <CheckSquare size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">3. Suivi Collaboratif</h3>
                <p className="text-xs text-[#f4ebd0]/70 leading-relaxed">
                  Utilisation de plateformes comme Jira pour la répartition claire des tâches, le suivi temps réel des responsabilités, la transparence et le reporting d'avancement.
                </p>
              </div>
            </div>

            <div className="bg-[#261c1a] border border-[#f4ebd0]/10 p-6 rounded-3xl space-y-4 hover:border-orange-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-orange-600/10 rounded-2xl flex items-center justify-center text-orange-400 border border-orange-500/20 mb-4">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">4. Livraison & QA Continu</h3>
                <p className="text-xs text-[#f4ebd0]/70 leading-relaxed">
                  Minimisation rigoureuse des erreurs via des tests automatisés, unitaires et d'intégration. Respect strict des livrables et montée en compétences renforcée à chaque fin de sprint.
                </p>
              </div>
            </div>

          </div>

          {/* Engagements Qualité */}
          <div className="bg-[#261c1a] border border-orange-500/30 rounded-3xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 shadow-xl">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="text-orange-400 shrink-0 mt-1" size={20} />
              <div>
                <h4 className="text-sm font-bold text-white">Maîtrise absolue des livrables</h4>
                <p className="text-xs text-[#f4ebd0]/70 mt-1">Respect rigoureux du cahier des charges, des attentes métiers et des échéances fixées.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="text-orange-400 shrink-0 mt-1" size={20} />
              <div>
                <h4 className="text-sm font-bold text-white">Minimisation zéro erreur</h4>
                <p className="text-xs text-[#f4ebd0]/70 mt-1">Utilisation intensive d'outils collaboratifs et de tests continus pour sécuriser le code avant livraison.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="text-orange-400 shrink-0 mt-1" size={20} />
              <div>
                <h4 className="text-sm font-bold text-white">Amélioration Continue</h4>
                <p className="text-xs text-[#f4ebd0]/70 mt-1">Optimisation systématique des processus et montée en rigueur technique à chaque rétrospective.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION COMPÉTENCES : SAVOIR-ÊTRE & SAVOIR-FAIRE ── */}
        <section id="competences" className="space-y-8 sm:space-y-12">
          <div className="border-b border-[#f4ebd0]/10 pb-6">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">/ Mes Compétences</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mt-1">Savoir-Être & Savoir-Faire</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* SAVOIR-ÊTRE (Soft Skills) */}
            <div className="bg-[#261c1a] p-6 sm:p-8 rounded-[2rem] border border-[#f4ebd0]/10 shadow-xl space-y-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3 mb-2">
                  <BrainCircuit className="text-orange-400" size={24} /> Savoir-Être
                </h3>
                <p className="text-xs text-[#f4ebd0]/70 mb-4">Les qualités humaines qui encadrent ma façon de travailler :</p>
                <ul className="space-y-3 sm:space-y-4">
                  {[
                    "Rigueur & Précision technique", 
                    "Travail en équipe & Collaboration", 
                    "Leadership & Médiation des conflits",
                    "Autonomie & Prise d'initiative", 
                    "Gestion du stress (Exp. Aéroportuaire)", 
                    "Communication & Éloquence"
                  ].map((softSkill, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-[#f4ebd0]/80 bg-[#1c1412] p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-[#f4ebd0]/5">
                      <Sparkles size={14} className="text-orange-500 shrink-0" /> {softSkill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* SAVOIR-FAIRE TECHNIQUE ET COLLABORATIF */}
            <div className="lg:col-span-2 space-y-6 flex flex-col justify-between">
              
              {/* Outils Collaboratifs & Management */}
              <div className="bg-[#261c1a] p-6 sm:p-8 rounded-[2rem] border border-[#f4ebd0]/10 shadow-xl space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 border-b border-[#f4ebd0]/10 pb-4">
                    <Users className="text-orange-400" size={24} />
                    <h3 className="text-xl font-bold text-white">Savoir-Faire : Outils Collaboratifs & Management</h3>
                  </div>
                  <p className="text-xs text-[#f4ebd0]/70 my-3">Plateformes de travail en équipe, suivi agile et écosystèmes projet :</p>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-[#f4ebd0]/80 font-mono">
                    {["Jira Software", "GitHub / GitLab", "Méthode Agile SCRUM", "Rédaction User Stories", "Reporting & Powerpoint"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 bg-[#1c1412] p-2.5 rounded-xl border border-[#f4ebd0]/5">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></span>
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 border-t border-[#f4ebd0]/10 pt-4 relative w-full overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#261c1a] to-transparent z-10 pointer-events-none"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#261c1a] to-transparent z-10 pointer-events-none"></div>
                  <div className="animate-ticker-right flex gap-6 items-center">
                    {[...collaborativeToolsList, ...collaborativeToolsList].map((tool, index) => (
                      <div key={`t1-${index}`} className="flex flex-col items-center justify-center shrink-0 opacity-80 hover:opacity-100 transition-opacity">
                        <img src={tool.icon} alt={tool.name} className="w-8 h-8 mb-1 object-contain bg-white/10 p-1 rounded-lg" />
                        <span className="text-[9px] font-mono text-[#f4ebd0]/60">{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Savoir-Faire : Développement & IT */}
              <div className="bg-[#261c1a] p-6 sm:p-8 rounded-[2rem] border border-[#f4ebd0]/10 shadow-xl flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 border-b border-[#f4ebd0]/10 pb-4 mb-3">
                    <Code className="text-orange-400" size={24} />
                    <h3 className="text-xl font-bold text-white">Savoir-Faire : Développement, Cloud & Data</h3>
                  </div>
                  <ul className="grid grid-cols-2 gap-2 text-xs text-[#f4ebd0]/80 font-mono">
                    {["C#, React, PHP, JS, Angular", "Architecture MVC & API REST", "SQL, MySQL, Oracle", "Docker & Kubernetes", "AWS, Azure, GCP", "Tests Unitaires & Auto"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 bg-[#1c1412] p-2.5 rounded-xl border border-[#f4ebd0]/5">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></span>
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-4 border-t border-[#f4ebd0]/10 pt-4 relative w-full overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#261c1a] to-transparent z-10 pointer-events-none"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#261c1a] to-transparent z-10 pointer-events-none"></div>
                  <div className="animate-ticker-left flex gap-6 items-center">
                    {[...hardSkillsList, ...hardSkillsList].map((skill, index) => (
                      <div key={`l1-${index}`} className="flex flex-col items-center justify-center shrink-0 opacity-80 hover:opacity-100 transition-opacity">
                        <img src={skill.icon} alt={skill.name} className="w-8 h-8 mb-1 object-contain" />
                        <span className="text-[9px] font-mono text-[#f4ebd0]/60">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── SECTION PROJETS ── */}
        <section id="projets" className="space-y-8 sm:space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#f4ebd0]/10 pb-6">
            <div>
              <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">/ Mes Projets Phares</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mt-1">Réalisations & Management</h2>
            </div>
            <p className="text-[#f4ebd0]/60 text-sm max-w-sm">
              Des projets réels conduits avec rigueur, de la phase de cadrage jusqu'au déploiement et à la recette.
            </p>
          </div>

          <div className="space-y-8">
            
            {/* LIGNE 1 : SAFESCHOOL & COOKIFY */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              
              {/* PROJET 1 : SAFESCHOOL */}
              <div className="bg-[#261c1a] border border-orange-500/40 rounded-[2rem] p-5 sm:p-6 flex flex-col justify-between hover:border-orange-500 transition-all duration-300 shadow-2xl relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 bg-orange-600 text-white text-[10px] font-mono font-bold px-4 py-1 rounded-bl-2xl uppercase tracking-wider z-30">
                  Leadership & Projets Humains
                </div>

                <div className="space-y-4 flex-1 flex flex-col">
                  <div className="flex items-center justify-between pt-2">
                    <div className="p-2 sm:p-3 bg-[#1c1412] rounded-xl sm:rounded-2xl border border-[#f4ebd0]/10">
                      <ShieldAlert className="text-orange-400" size={22} />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full border border-orange-500/20">
                      Chef de Projet & E-Learning
                    </span>
                  </div>

                  <div 
                    className="relative w-full h-56 sm:h-64 bg-black rounded-2xl overflow-hidden border border-[#f4ebd0]/10 group/safe cursor-pointer shadow-inner shrink-0"
                    onMouseEnter={() => setIsSafeSchoolPaused(true)}
                    onMouseLeave={() => setIsSafeSchoolPaused(false)}
                    onClick={() => setZoomedMedia({ type: 'image', src: safeSchoolSlides[safeSchoolSlide].src })}
                  >
                    <img src={safeSchoolSlides[safeSchoolSlide].src} className="absolute inset-0 w-full h-full object-cover opacity-30 blur-xl pointer-events-none" alt="" />
                    <img src={safeSchoolSlides[safeSchoolSlide].src} alt="SafeSchool" className="relative z-10 w-full h-full object-contain transition-transform duration-700 group-hover/safe:scale-105" />

                    <button onClick={(e) => { e.stopPropagation(); setSafeSchoolSlide((prev) => (prev - 1 + safeSchoolSlides.length) % safeSchoolSlides.length); }} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-orange-600 text-white p-2 rounded-full transition-all z-20">
                      <ChevronLeft size={16} />
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); setSafeSchoolSlide((prev) => (prev + 1) % safeSchoolSlides.length); }} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-orange-600 text-white p-2 rounded-full transition-all z-20">
                      <ChevronRightIcon size={16} />
                    </button>

                    <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center px-4 py-1.5 bg-black/80 backdrop-blur-md rounded-lg text-[10px] sm:text-xs font-mono text-white z-20 pointer-events-none">
                      <span className="truncate pr-2">{safeSchoolSlides[safeSchoolSlide].title}</span>
                      <span className="text-orange-400 font-bold shrink-0">{safeSchoolSlide + 1} / {safeSchoolSlides.length}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors h-[56px] sm:h-[60px] flex items-center">
                    Plateforme SafeSchool – Prévention du Cyberharcèlement
                  </h3>

                  <p className="text-[#f4ebd0]/80 text-xs sm:text-sm leading-relaxed flex-1">
                    Application de sensibilisation et de lutte contre le harcèlement scolaire et le cyberharcèlement. Cette plateforme propose des modules pédagogiques complets permettant d'informer et d'agir : chaque module est constitué de supports PDF détaillés pour comprendre les notions de harcèlement, apprendre à le reconnaître, identifier les risques, en mesurer les conséquences et disposer d'éléments d'urgence externes. Pour faciliter l'apprentissage, une vidéo explicative résume les grandes lignes du support, complétée par un système de quiz interactif pour valider les acquis. SafeSchool permet ainsi de prévenir les risques, d'éduquer la communauté et d'offrir un espace d'aide sécurisé.
                  </p>

                  <div className="bg-[#1c1412] p-3 rounded-xl border border-[#f4ebd0]/10 text-xs space-y-1">
                    <p className="font-bold text-orange-400 flex items-center gap-1.5">
                      <Users size={14} /> Ma contribution en tant que Chef de Projet :
                    </p>
                    <p className="text-[#f4ebd0]/70 text-[11px] leading-relaxed">
                      Pilotage complet du cycle de vie du projet, définition des objectifs SMART, structuration des US (User Stories), animation des points d'équipe quotidiens, arbitrage des choix techniques et médiation active pour garantir la cohésion et le respect des livrables.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-6 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {["Chef de Projet", "Agile", "E-Learning", "User Stories", "Management"].map((t, i) => (
                      <span key={i} className="text-[10px] sm:text-[11px] font-mono bg-[#1c1412] px-2 py-1 rounded-md border border-[#f4ebd0]/5">{t}</span>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <a href="https://github.com/Sanogo2429/safeschool-front.git" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-[#1c1412] hover:bg-orange-600 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-colors border border-[#f4ebd0]/10">
                      <Github size={15} /> Repo Frontend
                    </a>
                    <a href="https://github.com/Sanogo2429/safeschool.git" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-[#1c1412] hover:bg-orange-600 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-colors border border-[#f4ebd0]/10">
                      <Github size={15} /> Repo Backend
                    </a>
                  </div>
                </div>
              </div>

              {/* PROJET 2 : COOKIFY */}
              <div className="bg-[#261c1a] border border-[#f4ebd0]/10 rounded-[2rem] p-5 sm:p-6 flex flex-col justify-between hover:border-orange-500/50 transition-all duration-300 shadow-xl h-full">
                <div className="space-y-4 flex-1 flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className="p-2 sm:p-3 bg-[#1c1412] rounded-xl sm:rounded-2xl border border-[#f4ebd0]/10">
                      <Globe className="text-orange-400" size={22} />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full border border-orange-500/20">
                      Web Fullstack MVC
                    </span>
                  </div>

                  <div 
                    className="relative w-full h-56 sm:h-64 bg-black rounded-2xl overflow-hidden border border-[#f4ebd0]/10 group/cookify cursor-pointer shadow-inner shrink-0"
                    onMouseEnter={() => setIsCookifyPaused(true)}
                    onMouseLeave={() => setIsCookifyPaused(false)}
                    onClick={() => setZoomedMedia({ type: cookifySlides[cookifySlide].type, src: cookifySlides[cookifySlide].src })}
                  >
                    {cookifySlides[cookifySlide].type === 'video' ? (
                      <video src={cookifySlides[cookifySlide].src} autoPlay muted loop playsInline className="w-full h-full object-contain pointer-events-none" />
                    ) : (
                      <>
                        <img src={cookifySlides[cookifySlide].src} className="absolute inset-0 w-full h-full object-cover opacity-30 blur-xl pointer-events-none" alt="" />
                        <img src={cookifySlides[cookifySlide].src} alt="Cookify" className="relative z-10 w-full h-full object-contain transition-transform duration-700 group-hover/cookify:scale-105" />
                      </>
                    )}

                    <button onClick={(e) => { e.stopPropagation(); setCookifySlide((prev) => (prev - 1 + cookifySlides.length) % cookifySlides.length); }} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-orange-600 text-white p-2 rounded-full transition-all z-20">
                      <ChevronLeft size={16} />
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); setCookifySlide((prev) => (prev + 1) % cookifySlides.length); }} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-orange-600 text-white p-2 rounded-full transition-all z-20">
                      <ChevronRightIcon size={16} />
                    </button>

                    <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center px-4 py-1.5 bg-black/80 backdrop-blur-md rounded-lg text-[10px] sm:text-xs font-mono text-white z-20 pointer-events-none">
                      <span className="truncate pr-2">{cookifySlides[cookifySlide].title}</span>
                      <span className="text-orange-400 font-bold shrink-0">{cookifySlide + 1} / {cookifySlides.length}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors h-[56px] sm:h-[60px] flex items-center">
                    Cookify – Recettes & Cultures Culinaires
                  </h3>

                  <p className="text-[#f4ebd0]/80 text-xs sm:text-sm leading-relaxed flex-1">
                    Application web interactive de recettes de cuisine personnalisées conçue selon une architecture MVC rigoureuse en PHP natif. La plateforme intègre un puissant moteur de recherche multicritères permettant de composer des repas à partir des ingrédients déjà disponibles dans son placard ou de découvrir des plats emblématiques classés par pays et spécialités régionales. La persistance et la modélisation des données relationnelles sont administrées sous MySQL et phpMyAdmin. Un module de quiz culinaire interactif est également intégré pour tester et perfectionner ses connaissances gastronomiques.
                  </p>

                  <div className="bg-[#1c1412] p-3 rounded-xl border border-[#f4ebd0]/10 text-xs space-y-1">
                    <p className="font-bold text-orange-400 flex items-center gap-1.5">
                      <Code size={14} /> Ma contribution technique & architecture :
                    </p>
                    <p className="text-[#f4ebd0]/70 text-[11px] leading-relaxed">
                      Conception complète du modèle MVC, routage personnalisé, sécurisation des formulaires d'authentification, requêtage SQL optimisé pour la cuisinothèque et développement des scripts JS pour l'interactivité des quiz.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-6 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {["PHP Natif", "MySQL", "Architecture MVC", "JavaScript", "phpMyAdmin"].map((t, i) => (
                      <span key={i} className="text-[10px] sm:text-[11px] font-mono bg-[#1c1412] px-2 py-1 rounded-md border border-[#f4ebd0]/5">{t}</span>
                    ))}
                  </div>
                  <a href="https://github.com/Sanogo2429/cookify.git" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#1c1412] hover:bg-orange-600 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-colors border border-[#f4ebd0]/10">
                    <Github size={15} /> Code Source GitHub
                  </a>
                </div>
              </div>

            </div>

            {/* LIGNE 2 : GAÏA & BIBLIOTHÈQUE */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              
              {/* PROJET 3 : GAÏA */}
              <div className="bg-[#261c1a] border border-[#f4ebd0]/10 rounded-[2rem] p-5 sm:p-6 flex flex-col justify-between hover:border-orange-500/50 transition-all duration-300 shadow-xl h-full">
                <div className="space-y-4 flex-1 flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className="p-2 sm:p-3 bg-[#1c1412] rounded-xl sm:rounded-2xl border border-[#f4ebd0]/10">
                      <Cpu className="text-orange-400" size={22} />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full border border-orange-500/20">
                      IoT & Embarqué
                    </span>
                  </div>

                  <div className="relative w-full h-56 sm:h-64 bg-black rounded-2xl overflow-hidden border border-[#f4ebd0]/10 group/carousel cursor-pointer shrink-0" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} onClick={() => setZoomedMedia({ type: gaiaSlides[slideIndex].type, src: gaiaSlides[slideIndex].src })}>
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

                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors h-[56px] sm:h-[60px] flex items-center">
                    Gaïa – Serre Intelligente Automatisée
                  </h3>

                  <p className="text-[#f4ebd0]/80 text-xs sm:text-sm leading-relaxed flex-1">
                    Système connecté d'optimisation écologique. Intégration de capteurs physiques (température, humidité, luminosité), microcontrôleurs Arduino/C++ et interface de supervision WPF reliée à une base de données MySQL.
                  </p>

                  <div className="bg-[#1c1412] p-3 rounded-xl border border-[#f4ebd0]/10 text-xs space-y-1">
                    <p className="font-bold text-orange-400 flex items-center gap-1.5">
                      <Cpu size={14} /> Ma contribution système & embarqué :
                    </p>
                    <p className="text-[#f4ebd0]/70 text-[11px] leading-relaxed">
                      Programmation des cartes Arduino en C++, étalonnage et lecture des capteurs environnementaux, transmission de données en temps réel et liaison avec l'application de bureau WPF.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-6 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {["C#", "C++", "Arduino", "MySQL", "WPF", "IoT"].map((t, i) => (
                      <span key={i} className="text-[10px] sm:text-[11px] font-mono bg-[#1c1412] px-2 py-1 rounded-md border border-[#f4ebd0]/5">{t}</span>
                    ))}
                  </div>
                  <a href="https://github.com/Sanogo2429/Gaia.git" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#1c1412] hover:bg-orange-600 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-colors border border-[#f4ebd0]/10">
                    <Github size={15} /> Code Source GitHub
                  </a>
                </div>
              </div>

              {/* PROJET 4 : BIBLIOTHÈQUE */}
              <div className="bg-[#261c1a] border border-[#f4ebd0]/10 rounded-[2rem] p-5 sm:p-6 flex flex-col justify-between hover:border-orange-500/50 transition-all duration-300 shadow-xl h-full">
                <div className="space-y-4 flex-1 flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className="p-2 sm:p-3 bg-[#1c1412] rounded-xl sm:rounded-2xl border border-[#f4ebd0]/10">
                      <Database className="text-orange-400" size={22} />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full border border-orange-500/20">
                      Fullstack API REST
                    </span>
                  </div>

                  <div className="relative w-full h-56 sm:h-64 bg-black rounded-2xl overflow-hidden border border-[#f4ebd0]/10 group/biblio cursor-pointer shrink-0" onMouseEnter={() => setIsBiblioPaused(true)} onMouseLeave={() => setIsBiblioPaused(false)} onClick={() => setZoomedMedia({ type: 'image', src: biblioSlides[biblioSlide].src })}>
                    <img src={biblioSlides[biblioSlide].src} className="absolute inset-0 w-full h-full object-cover opacity-30 blur-xl pointer-events-none" alt="" />
                    <img src={biblioSlides[biblioSlide].src} alt="Biblio" className="relative z-10 w-full h-full object-contain transition-transform duration-700 group-hover/biblio:scale-105" />
                    <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center px-4 py-1.5 bg-black/80 backdrop-blur-md rounded-lg text-[10px] sm:text-xs font-mono text-white z-20 pointer-events-none">
                      <span className="truncate pr-2">{biblioSlides[biblioSlide].title}</span>
                      <span className="text-orange-400 font-bold shrink-0">{biblioSlide + 1} / {biblioSlides.length}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors h-[56px] sm:h-[60px] flex items-center">
                    Application de Gestion de Bibliothèque Moderne
                  </h3>

                  <p className="text-[#f4ebd0]/80 text-xs sm:text-sm leading-relaxed flex-1">
                    Numérisation de processus d'emprunt via une architecture logicielle découplée. Développement d'une API RESTful sécurisée en ASP.NET Core / Entity Framework, couplée à un frontend React moderne sécurisé par JWT.
                  </p>

                  <div className="bg-[#1c1412] p-3 rounded-xl border border-[#f4ebd0]/10 text-xs space-y-1">
                    <p className="font-bold text-orange-400 flex items-center gap-1.5">
                      <Database size={14} /> Ma contribution backend & API :
                    </p>
                    <p className="text-[#f4ebd0]/70 text-[11px] leading-relaxed">
                      Mise en place de l'architecture Clean Architecture, développement des endpoints REST pour les livres et les adhérents, gestion des tokens JWT et intégration du client React.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-6 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {["ASP.NET Core", "React", "Entity Framework", "JWT", "Clean Architecture"].map((t, i) => (
                      <span key={i} className="text-[10px] sm:text-[11px] font-mono bg-[#1c1412] px-2 py-1 rounded-md border border-[#f4ebd0]/5">{t}</span>
                    ))}
                  </div>
                  <a href="https://github.com/Sanogo2429" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#1c1412] hover:bg-orange-600 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-colors border border-[#f4ebd0]/10">
                    <Github size={15} /> Code Source GitHub
                  </a>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ── SECTION CV & PARCOURS ── */}
        <section id="cv" className="space-y-8 sm:space-y-12">
          <div className="border-b border-[#f4ebd0]/10 pb-6">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">/ Parcours Pro & Académique</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mt-1">CV & Expériences</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            
            {/* Visualiseur de CV PDF */}
            <div className="bg-[#261c1a] p-4 sm:p-6 rounded-[2rem] border border-[#f4ebd0]/10 shadow-xl flex flex-col h-[500px] lg:h-[650px]">
              <div className="flex justify-between items-center mb-4 shrink-0 px-2 sm:px-0">
                <span className="font-bold text-xs sm:text-sm text-white">Document CV Officiel</span>
                <a href="/cv_alternance_Mohamed_Ismael_Sanogo.pdf" download className="bg-orange-600 hover:bg-orange-500 text-white px-3 sm:px-4 py-2 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors">
                  <Download size={14} /> <span>Télécharger PDF</span>
                </a>
              </div>
              <div className="w-full flex-1 bg-white rounded-2xl overflow-hidden border border-[#f4ebd0]/10 pdf-container relative">
                <iframe src="/cv_alternance_Mohamed_Ismael_Sanogo.pdf" className="absolute top-0 left-0 w-full h-full border-none" title="CV Mohamed Sanogo" />
              </div>
            </div>

            {/* Cartes Expériences */}
            <div className="grid grid-rows-4 gap-4 h-auto lg:h-[650px]">
              {[
                { date: "Chef de Projet & Web", title: "Chef de Projet – Formation Cyberharcèlement", desc: "Création de la plateforme SafeSchool. Définition des objectifs SMART, découpage en Sprints, gestion d'équipe, animation des réunions et médiation." },
                { date: "2024 – 2027 · ESIEA Paris", title: "Bachelor Informatique", desc: "Formation approfondie en architecture logicielle, POO, développement Fullstack, DevOps, bases de données et intégration IoT." },
                { date: "Mai 2025 – Présent (16h/semaine)", title: "Agent de Sûreté Aéroportuaire – CDG", desc: "Contrôle de sécurité exigeant et gestion des flux passagers. Rigueur absolue, gestion du stress et respect strict des règles de sécurité." },
                { date: "2024 – Présent", title: "Bénévole – Association Marie Charity", desc: "Distribution de repas, logistique des stocks et coordination d'équipes terrain dans un esprit d'entraide." }
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

        {/* ── SECTION CONTACT ── */}
        <section id="contact" className="pt-4 sm:pt-12">
          <div className="bg-gradient-to-br from-[#261c1a] to-[#140e0d] border border-[#f4ebd0]/15 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-14 shadow-2xl relative overflow-hidden max-w-3xl mx-auto">
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-10">
              <span className="text-orange-500 text-[10px] sm:text-xs font-bold uppercase tracking-widest">/ Contact & Alternance</span>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">Prêt à intégrer votre équipe</h2>
              <p className="text-[#f4ebd0]/70 text-xs sm:text-sm">
                Recherche d'une alternance d'un an (ou plus) · Rythme : 3 semaines en entreprise / 1 semaine à l'ESIEA.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-orange-500/10 border border-orange-500/20 text-orange-300 p-6 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="mx-auto text-orange-400" size={32} />
                <h3 className="font-bold text-lg text-white">Message envoyé avec succès !</h3>
                <p className="text-xs text-[#f4ebd0]/70">Je vous répondrai dans les plus brefs délais.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#f4ebd0]/60 mb-2">Votre Nom</label>
                    <input type="text" required className="w-full bg-[#1c1412] border border-[#f4ebd0]/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500" placeholder="Jean Dupont" />
                  </div>
                  <div>
                    <label className="block text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#f4ebd0]/60 mb-2">Votre Email</label>
                    <input type="email" required className="w-full bg-[#1c1412] border border-[#f4ebd0]/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500" placeholder="jean@exemple.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#f4ebd0]/60 mb-2">Message</label>
                  <textarea rows={4} required className="w-full bg-[#1c1412] border border-[#f4ebd0]/15 rounded-xl px-4 py-3 text-white text-sm resize-none focus:outline-none focus:border-orange-500" placeholder="Bonjour Mohamed, nous souhaitons échanger avec vous pour une opportunité d'alternance..." />
                </div>
                <button type="submit" className="w-full py-3.5 sm:py-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-[10px] sm:text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl shadow-orange-600/30 transition-all">
                  <Send size={15} /> Envoyer le message
                </button>
              </form>
            )}

            <div className="mt-8 pt-6 border-t border-[#f4ebd0]/10 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#f4ebd0]/60">
              <a href="mailto:msanogo@et.esiea.fr" className="hover:text-white transition-colors flex items-center gap-2">
                <Mail size={14} className="text-orange-400" /> msanogo@et.esiea.fr
              </a>
              <a href="https://linkedin.com/in/mohamed-ismael-sanogo" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                <Linkedin size={14} className="text-orange-400" /> LinkedIn
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#f4ebd0]/10 py-8 sm:py-12 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs font-mono text-[#f4ebd0]/50 text-center sm:text-left">
        <p>© 2026 Mohamed Ismael Sanogo · Disponible pour des opportunités d'alternance.</p>
        <p>Etudiant en Informatique</p>
      </footer>
    </div>
  );
};

export default App;