// src/components/Portfolio.jsx
// Composant Portfolio enrichi avec toutes les sections détaillées

import React, { useState, useEffect } from 'react';
import { Rocket, Code, Cpu, Wrench, Award, Mail, Phone, MapPin, Linkedin, Github, ExternalLink, ChevronRight, Menu, X, FileText, Download, Star, TrendingUp, Zap, Target, BookOpen, Briefcase, Box, Play, Pause, Maximize2, Eye } from 'lucide-react';
import { projects, designs3D, skills, experiences, education, cvVersions, languages, softSkills, stats, titles } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import DesignModal from './DesignModal';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [activeSection, setActiveSection] = useState('accueil');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [currentTitle, setCurrentTitle] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  // Animation typing effect
  useEffect(() => {
    if (activeSection !== 'accueil') return;
    
    let currentIndex = 0;
    const currentText = titles[currentTitle];
    
    const typingInterval = setInterval(() => {
      if (currentIndex <= currentText.length) {
        setTypedText(currentText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentTitle((prev) => (prev + 1) % titles.length);
          setTypedText('');
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentTitle, activeSection]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filtrer les projets
  const filteredProjects = projects.filter(p => 
    (filterCategory === 'all' || p.category === filterCategory) &&
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation avec effet scroll */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => setActiveSection('accueil')}
              className="text-2xl font-bold text-white hover:scale-110 transition-transform cursor-pointer"
            >
              PF<span className="text-blue-400">Z</span>
            </button>
            
            <div className="hidden md:flex gap-8">
              {['accueil', 'projets', 'design-3d', 'compétences', 'parcours', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize transition-all ${
                    activeSection === section 
                      ? 'text-blue-400 font-semibold scale-110' 
                      : 'text-gray-300 hover:text-white hover:scale-105'
                  }`}
                >
                  {section === 'design-3d' ? 'Design 3D' : section}
                </button>
              ))}
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-3 animate-slide-down">
              {['accueil', 'projets', 'design-3d', 'compétences', 'parcours', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => {
                    setActiveSection(section);
                    setMenuOpen(false);
                  }}
                  className={`capitalize text-left px-4 py-2 rounded transition-all ${
                    activeSection === section 
                      ? 'bg-blue-500 text-white' 
                      : 'text-gray-300 hover:bg-slate-800'
                  }`}
                >
                  {section === 'design-3d' ? 'Design 3D' : section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <div className="pt-20">
        {/* Section ACCUEIL */}
        {activeSection === 'accueil' && (
          <div className="min-h-screen relative overflow-hidden">
            {/* Particules animées */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${5 + Math.random() * 10}s`
                  }}
                />
              ))}
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20 relative">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Colonne gauche - Texte */}
                <div className="space-y-8 animate-slide-up">
                  <div className="space-y-4">
                    <div className="text-blue-400 font-semibold text-lg flex items-center gap-2 animate-fade-in">
                      <Star className="w-5 h-5 animate-pulse" />
                      Bonjour, je suis
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                      Pengdwende <br/>
                      Fawzi
                      <br/>
                      <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Zidouemba
                      </span>
                    </h1>

                    <div className="h-20">
                      <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
                        Futur Ingénieur en
                      </h2>
                      <div className="text-2xl md:text-3xl font-bold text-blue-400 h-12 flex items-center">
                        {typedText}
                        <span className="animate-pulse">|</span>
                      </div>
                    </div>

                    <p className="text-gray-400 text-lg leading-relaxed">
                      Passionné par l'innovation mécanique et la résolution de problèmes complexes. 
                      Expertise en <span className="text-blue-400 font-semibold">CFD</span>, 
                      <span className="text-blue-400 font-semibold"> FEA</span> et 
                      <span className="text-blue-400 font-semibold"> optimisation</span> pour créer 
                      des solutions techniques durables et performantes.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => setActiveSection('projets')}
                      className="group bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2 hover:scale-105"
                    >
                      Découvrir mes projets
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button 
                      onClick={() => setActiveSection('contact')}
                      className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      Me contacter
                    </button>
                  </div>

                  {/* Réseaux sociaux */}
                  <div className="flex gap-4 pt-4">
                    <a href="https://www.linkedin.com/in/fawzi-pengdwende-zidouemba-7b45712b7/" className="bg-slate-800/50 p-3 rounded-lg hover:bg-blue-500 transition-all hover:scale-110">
                      <Linkedin className="w-5 h-5 text-gray-300 hover:text-white" />
                    </a>
                    <a href="#" className="bg-slate-800/50 p-3 rounded-lg hover:bg-blue-500 transition-all hover:scale-110">
                      <Github className="w-5 h-5 text-gray-300 hover:text-white" />
                    </a>
                    <a href="mailto:fawzizidouemba0@gmail.com" className="bg-slate-800/50 p-3 rounded-lg hover:bg-blue-500 transition-all hover:scale-110">
                      <Mail className="w-5 h-5 text-gray-300 hover:text-white" />
                    </a>
                  </div>
                </div>

                {/* Colonne droite - Photo + Stats */}
                <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  {/* Photo profil */}
                  <div className="relative w-64 h-64 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse opacity-20"></div>
                    <img 
                      src="https://res.cloudinary.com/dtzow5aii/image/upload/v1762943330/photo_profile_pudkdv.jpg" 
                      alt="Fawzi Zidouemba"
                      className="relative z-10 w-full h-full rounded-full object-cover border-4 border-blue-500/50 shadow-2xl"
                    />
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: stats.projects, label: 'Projets', icon: Target, color: 'text-blue-400' },
                      { value: stats.experience, label: 'Mois d\'exp', icon: Briefcase, color: 'text-green-400' },
                      { value: stats.skills, label: 'Compétences', icon: Zap, color: 'text-yellow-400' },
                      { value: stats.languages, label: 'Langues', icon: BookOpen, color: 'text-purple-400' }
                    ].map((stat, idx) => {
                      const IconComponent = stat.icon;
                      return (
                        <div key={idx} className="bg-slate-800/50 backdrop-blur border border-blue-500/20 rounded-xl p-6 hover:border-blue-400 transition-all hover:scale-105 cursor-pointer group">
                          <IconComponent className={`w-8 h-8 ${stat.color} mb-3 group-hover:scale-110 transition-transform`} />
                          <div className="text-4xl font-bold text-white mb-1">{stat.value}+</div>
                          <div className="text-gray-400 text-sm">{stat.label}</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Points forts */}
                  <div className="bg-gradient-to-br from-slate-800/70 to-slate-800/50 backdrop-blur border border-blue-500/20 rounded-xl p-6 hover:border-blue-400 transition-all">
                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-blue-400" />
                      Points Forts
                    </h3>
                    <div className="space-y-3">
                      {[
                        { icon: '🚀', text: 'Projet SKILLUP: -15% masse fuselage', color: 'text-blue-400' },
                        { icon: '⚡', text: 'Stage Maxwell: -25% consommation', color: 'text-green-400' },
                        { icon: '🎯', text: 'Expert CFD, FEA, Optimisation', color: 'text-purple-400' },
                        { icon: '💻', text: 'Python, MATLAB, CATIA, ANSYS', color: 'text-yellow-400' }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-gray-300 hover:text-white transition-all group cursor-pointer">
                          <span className="text-2xl group-hover:scale-125 transition-transform">{item.icon}</span>
                          <span className="group-hover:translate-x-2 transition-transform">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Disponibilité */}
                  <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur border border-green-400/30 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Briefcase className="w-6 h-6 text-blue-400" />
                      <h3 className="text-white font-bold">Disponibilité</h3>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">
                      Recherche stage/alternance en conception mécanique, simulation ou R&D
                    </p>
                    <div className="flex gap-2">
                      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        Disponible
                      </span>
                      <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold">
                        🌍 Mobilité totale
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scroll indicator */}
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronRight className="w-6 h-6 text-blue-400 rotate-90" />
              </div>
            </div>
          </div>
        )}

        {/* Section PROJETS */}
        {activeSection === 'projets' && (
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-5xl font-bold text-white mb-4">Mes Projets</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Découvrez mes réalisations en conception, simulation et optimisation avec résultats mesurables
              </p>
            </div>

            {/* Filtres et recherche */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Rechercher un projet..."
                  className="w-full px-4 py-3 pl-10 bg-slate-800/50 border border-blue-500/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
              </div>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-3 bg-slate-800/50 border border-blue-500/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
              >
                <option value="all">Tous les projets</option>
                <option value="aerospace">Aéronautique</option>
                <option value="automotive">Automobile</option>
                <option value="simulation">Simulation</option>
                <option value="manufacturing">Fabrication</option>
              </select>
            </div>

            {/* Grille de projets */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredProjects.map((project, idx) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group bg-slate-800/50 backdrop-blur border border-blue-500/20 rounded-2xl p-6 cursor-pointer hover:border-blue-400 transition-all hover:scale-105 hover:shadow-2xl animate-slide-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className={`text-6xl mb-4 group-hover:scale-110 transition-transform`}>
                    {project.emoji}
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`bg-gradient-to-r ${project.color} text-white text-xs px-3 py-1 rounded-full font-semibold`}>
                      {project.status}
                    </span>
                    <span className="text-gray-500 text-xs">{project.year}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1 text-green-400 text-sm font-semibold">
                      <TrendingUp className="w-4 h-4" />
                      {project.impact}
                    </div>
                    <div className="text-gray-500 text-xs">
                      📅 {project.duration}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="bg-slate-700/50 text-gray-300 text-xs px-2 py-1 rounded border border-slate-600 group-hover:border-blue-500 transition-colors">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-gray-500 text-xs px-2 py-1">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section DESIGN 3D */}
        {activeSection === 'design-3d' && (
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="text-center mb-12 animate-fade-in">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Box className="w-12 h-12 text-blue-400 animate-spin" style={{ animationDuration: '3s' }} />
                <h2 className="text-5xl font-bold text-white">Design 3D & CAO</h2>
              </div>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Découvrez mes conceptions 3D réalisées avec CATIA, SolidWorks et Fusion 360
              </p>
            </div>

            {/* Grille de designs */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {designs3D.map((design, idx) => (
                <div
                  key={design.id}
                  onClick={() => setSelectedDesign(design)}
                  className="group bg-slate-800/50 backdrop-blur border border-blue-500/20 rounded-2xl overflow-hidden cursor-pointer hover:border-blue-400 transition-all hover:scale-105 hover:shadow-2xl animate-slide-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="relative h-64 bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-8xl group-hover:scale-125 transition-transform duration-500">
                        {design.emoji}
                      </span>
                    </div>
                    
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <button className="bg-blue-500 p-3 rounded-full hover:bg-blue-600 transition-all hover:scale-110">
                        <Eye className="w-6 h-6 text-white" />
                      </button>
                      <button className="bg-green-500 p-3 rounded-full hover:bg-green-600 transition-all hover:scale-110">
                        <Play className="w-6 h-6 text-white" />
                      </button>
                    </div>

                    <div className="absolute top-4 left-4">
                      <span className={`bg-gradient-to-r ${design.color} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                        {design.software}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4">
                      <span className="bg-purple-500/80 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {design.complexity}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-slate-700 text-gray-300 text-xs px-3 py-1 rounded-full">
                        {design.category}
                      </span>
                      <span className="text-gray-500 text-xs">{design.year}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {design.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {design.description}
                    </p>

                    <div className="flex items-center gap-4 text-sm">
                      {design.stats.parts && (
                        <div className="flex items-center gap-1 text-blue-400">
                          <Box className="w-4 h-4" />
                          <span>{design.stats.parts} pièces</span>
                        </div>
                      )}
                      {design.stats.hours && (
                        <div className="text-gray-500 text-xs">
                          ⏱️ {design.stats.hours}h
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {design.skills.slice(0, 3).map((skill, idx) => (
                        <span key={idx} className="bg-slate-700/50 text-gray-300 text-xs px-2 py-1 rounded border border-slate-600 group-hover:border-blue-500 transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section COMPÉTENCES - Continuera dans le prochain message */}
        {activeSection === 'compétences' && (
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-5xl font-bold text-white mb-4">Compétences Techniques</h2>
              <p className="text-gray-400 text-lg">
                Maîtrise des outils et technologies de pointe
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, skillList], catIdx) => (
                <div 
                  key={category} 
                  className="bg-slate-800/50 backdrop-blur border border-blue-500/20 rounded-2xl p-8 hover:border-blue-400 transition-all hover:scale-105 animate-slide-up"
                  style={{ animationDelay: `${catIdx * 0.1}s` }}
                >
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <Cpu className="w-6 h-6 text-blue-400" />
                    {category}
                  </h3>
                  <div className="space-y-6">
                    {skillList.map((skill, idx) => (
                      <div key={idx} className="group">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300 flex items-center gap-3 group-hover:text-white transition-colors">
                            <span className="text-2xl group-hover:scale-125 transition-transform">{skill.icon}</span>
                            <span className="font-medium">{skill.name}</span>
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="text-blue-400 font-semibold text-lg">{skill.level}%</span>
                            <span className="text-gray-500 text-xs">{skill.years} ans</span>
                          </div>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000 group-hover:shadow-lg group-hover:shadow-blue-500/50"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section PARCOURS */}
        {activeSection === 'parcours' && (
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-5xl font-bold text-white mb-4">Mon Parcours</h2>
              <p className="text-gray-400 text-lg">
                Formation académique et expériences professionnelles
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Expériences */}
              <div>
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
                  <Briefcase className="w-7 h-7 text-blue-400" />
                  Expériences
                </h3>
                <div className="space-y-6">
                  {experiences.map((exp, idx) => (
                    <div 
                      key={idx} 
                      className="bg-slate-800/50 backdrop-blur border border-blue-500/20 rounded-2xl p-6 hover:border-blue-400 transition-all hover:scale-105 animate-slide-up"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                          <p className="text-blue-400 font-semibold">{exp.company}</p>
                          <p className="text-gray-500 text-sm">{exp.location}</p>
                        </div>
                        <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-3">{exp.description}</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                            <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Formation */}
              <div>
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
                  <Award className="w-7 h-7 text-blue-400" />
                  Formation
                </h3>
                <div className="space-y-6">
                  {education.map((edu, idx) => (
                    <div 
                      key={idx} 
                      className="bg-slate-800/50 backdrop-blur border border-blue-500/20 rounded-2xl p-6 hover:border-blue-400 transition-all hover:scale-105 animate-slide-up"
                      style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                          <p className="text-blue-400 font-semibold">{edu.school}</p>
                          <p className="text-gray-500 text-sm">{edu.location}</p>
                        </div>
                        <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm whitespace-nowrap">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-3 italic">{edu.specialization}</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, i) => (
                          <span key={i} className="bg-slate-700 text-gray-300 text-xs px-3 py-1 rounded-full hover:bg-blue-500/20 hover:text-blue-400 transition-colors">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Langues & Soft Skills */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 backdrop-blur border border-blue-500/20 rounded-2xl p-8 animate-slide-up">
                <h3 className="text-2xl font-bold text-white mb-6">Langues</h3>
                <div className="space-y-5">
                  {languages.map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 flex items-center gap-2">
                          <span className="text-2xl">{item.flag}</span>
                          <span className="font-medium">{item.lang}</span>
                        </span>
                        <span className="text-gray-400 text-sm">{item.level}</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${item.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur border border-blue-500/20 rounded-2xl p-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-2xl font-bold text-white mb-6">Soft Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  {softSkills.map((item, idx) => (
                    <div key={idx} className="bg-slate-700/50 rounded-lg p-4 flex items-center gap-3 hover:bg-slate-700 hover:scale-105 transition-all cursor-pointer group">
                      <span className="text-2xl group-hover:scale-125 transition-transform">{item.icon}</span>
                      <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{item.skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Section CONTACT */}
        {activeSection === 'contact' && (
          <div className="max-w-4xl mx-auto px-6 py-20">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-5xl font-bold text-white mb-4">Me Contacter</h2>
              <p className="text-gray-400 text-lg">
                Intéressé par mon profil ? N'hésitez pas à me contacter !
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-slate-800/50 backdrop-blur border border-blue-500/20 rounded-2xl p-8 animate-slide-up">
                <h3 className="text-2xl font-bold text-white mb-6">Informations</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="bg-blue-500/20 p-3 rounded-lg group-hover:bg-blue-500 transition-all group-hover:scale-110">
                      <Mail className="w-6 h-6 text-blue-400 group-hover:text-white" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm mb-1">Email</div>
                      <a href="mailto:fawzizidouemba0@gmail.com" className="text-white hover:text-blue-400 transition">
                        fawzizidouemba0@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="bg-blue-500/20 p-3 rounded-lg group-hover:bg-blue-500 transition-all group-hover:scale-110">
                      <Phone className="w-6 h-6 text-blue-400 group-hover:text-white" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm mb-1">Téléphone</div>
                      <a href="tel:+212658810270" className="text-white hover:text-blue-400 transition">
                        +212 658 810 270
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="bg-blue-500/20 p-3 rounded-lg group-hover:bg-blue-500 transition-all group-hover:scale-110">
                      <MapPin className="w-6 h-6 text-blue-400 group-hover:text-white" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm mb-1">Localisation</div>
                      <div className="text-white">Fès, Maroc</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg border border-green-400/30">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-white font-semibold">Disponible</span>
                  </div>
                  <p className="text-gray-300 text-sm">Ouvert aux opportunités de stage, alternance ou emploi</p>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur border border-blue-500/20 rounded-2xl p-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-2xl font-bold text-white mb-6">Réseaux Sociaux</h3>
                <div className="space-y-4">
                  <a 
                    href="https://www.linkedin.com/in/fawzi-pengdwende-zidouemba-7b45712b7/" 
                    className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-all group hover:scale-105"
                  >
                    <div className="bg-blue-500/20 p-3 rounded-lg group-hover:bg-blue-500 transition-all">
                      <Linkedin className="w-6 h-6 text-blue-400 group-hover:text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">LinkedIn</div>
                      <div className="text-gray-400 text-sm">Connectons-nous professionnellement</div>
                    </div>
                  </a>

                  <a 
                    href="#" 
                    className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-all group hover:scale-105"
                  >
                    <div className="bg-blue-500/20 p-3 rounded-lg group-hover:bg-blue-500 transition-all">
                      <Github className="w-6 h-6 text-blue-400 group-hover:text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">GitHub</div>
                      <div className="text-gray-400 text-sm">Découvrez mes projets code</div>
                    </div>
                  </a>

                  <a 
                    href="#" 
                    className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-all group hover:scale-105"
                  >
                    <div className="bg-blue-500/20 p-3 rounded-lg group-hover:bg-blue-500 transition-all">
                      <FileText className="w-6 h-6 text-blue-400 group-hover:text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">CV Téléchargeable</div>
                      <div className="text-gray-400 text-sm">Télécharger mon CV complet</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* CVs téléchargeables */}
            <div className="bg-slate-800/50 backdrop-blur border border-blue-500/20 rounded-2xl p-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Download className="w-6 h-6 text-blue-400" />
                Télécharger mon CV
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cvVersions.map((cv, idx) => (
                  <a
                    key={idx}
                    href={cv.file}
                    download
                    className={`flex flex-col items-center gap-3 p-6 bg-gradient-to-br ${cv.color} bg-opacity-10 rounded-xl hover:scale-105 transition-all border border-blue-500/30 hover:border-blue-400 group`}
                  >
                    <span className="text-5xl group-hover:scale-110 transition-transform">{cv.icon}</span>
                    <div className="text-center">
                      <div className="text-white font-semibold mb-1">{cv.name}</div>
                      <div className="text-gray-400 text-xs">{cv.description}</div>
                    </div>
                    <Download className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Disponibilité */}
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur border border-blue-500/30 rounded-2xl p-8 text-center animate-slide-up mt-8" style={{ animationDelay: '0.3s' }}>
              <Rocket className="w-16 h-16 text-blue-400 mx-auto mb-4 animate-bounce" />
              <h3 className="text-3xl font-bold text-white mb-3">Disponible pour Opportunités</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Je recherche activement des opportunités de stage, alternance ou emploi dans les domaines 
                de la conception mécanique, simulation CFD/FEA, optimisation et R&D. 
                Ouvert aux projets innovants et challenges techniques !
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-green-500/20 text-green-400 px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition-transform">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  Disponible immédiatement
                </span>
                <span className="bg-blue-500/20 text-blue-400 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                  🌍 Mobilité nationale & internationale
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
      
      {selectedDesign && (
        <DesignModal 
          design={selectedDesign} 
          onClose={() => setSelectedDesign(null)} 
        />
      )}

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-blue-500/20 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 Pengdwende Fawzi Zidouemba. Tous droits réservés.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all hover:scale-110">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:fawzizidouemba0@gmail.com" className="text-gray-400 hover:text-blue-400 transition-all hover:scale-110">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Styles CSS pour les animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float linear infinite;
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;