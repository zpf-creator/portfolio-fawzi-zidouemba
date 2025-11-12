// src/components/ProjectModal.jsx
// Modal détaillé pour afficher toutes les informations d'un projet

import React from 'react';
import { X, ChevronRight, Star, Target, Code, Wrench, BookOpen, TrendingUp } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 overflow-y-auto p-6 animate-fade-in" 
      onClick={onClose}
    >
      <div 
        className="max-w-5xl mx-auto my-8" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/30 rounded-3xl p-8 shadow-2xl">
          {/* Header du modal */}
          <div className="flex justify-between items-start mb-8">
            <div className="flex-1">
              <div className="text-7xl mb-4 animate-bounce">{project.emoji}</div>
              <h2 className="text-4xl font-bold text-white mb-3">{project.title}</h2>
              
              <div className="flex flex-wrap gap-3 mb-4">
                <span className={`bg-gradient-to-r ${project.color} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                  {project.status}
                </span>
                <span className="bg-slate-700 text-gray-300 px-4 py-2 rounded-full text-sm">
                  {project.category === 'aerospace' ? 'Aéronautique' : 
                   project.category === 'automotive' ? 'Automobile' :
                   project.category === 'simulation' ? 'Simulation' :
                   project.category === 'manufacturing' ? 'Fabrication' : project.category}
                </span>
                <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  {project.impact}
                </span>
              </div>

              <div className="flex gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <span>📅</span>
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>👥</span>
                  <span>{project.team}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📆</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white hover:rotate-90 transition-all p-2 hover:bg-slate-700 rounded-lg"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          {/* Image du projet */}
          {project.image && (
            <div className="mb-8 rounded-xl overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-96 object-cover"
              />
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-8">
            {/* Colonne gauche */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-400" />
                  Description
                </h3>
                <p className="text-gray-300 leading-relaxed">{project.fullDescription || project.description}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-400" />
                  Objectifs
                </h3>
                <ul className="space-y-2">
                  {project.objectives.map((obj, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <ChevronRight className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-400" />
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-lg border border-blue-500/30 hover:border-blue-400 hover:scale-105 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Colonne droite */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <Star className="w-5 h-5 text-blue-400" />
                  Résultats & Réalisations
                </h3>
                <ul className="space-y-2">
                  {project.results.map((result, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-start gap-3 text-gray-300 bg-slate-800/50 p-3 rounded-lg hover:bg-slate-800 transition-colors"
                    >
                      <span className="text-green-400 text-xl flex-shrink-0">✓</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-400" />
                  Compétences Développées
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="bg-slate-700/50 text-gray-300 px-4 py-2 rounded-lg border border-slate-600 hover:border-purple-400 hover:scale-105 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {project.details && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-blue-400" />
                    Détails Techniques
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(project.details).map(([key, value], idx) => (
                      <div 
                        key={idx} 
                        className="bg-slate-800/50 rounded-lg p-4 hover:bg-slate-800 transition-colors border border-slate-700 hover:border-blue-500/50"
                      >
                        <div className="text-blue-400 font-semibold mb-2 text-sm">{key}</div>
                        <div className="text-gray-300 text-sm leading-relaxed">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bouton fermer */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={onClose}
              className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all hover:scale-105"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;