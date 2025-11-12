// src/components/DesignModal.jsx
// Modal pour afficher les designs 3D avec vidéos interactives

import React, { useState } from 'react';
import { X, Play, Star, BookOpen, Wrench, TrendingUp, Code } from 'lucide-react';

const DesignModal = ({ design, onClose }) => {
  const [playingVideo, setPlayingVideo] = useState(false);

  if (!design) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 overflow-y-auto p-6 animate-fade-in" 
      onClick={() => { onClose(); setPlayingVideo(false); }}
    >
      <div 
        className="max-w-6xl mx-auto my-8" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/30 rounded-3xl overflow-hidden shadow-2xl">
          {/* Header avec vidéo */}
          <div className="relative">
            {/* Video/Image principale */}
            <div className="relative h-96 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
              {playingVideo ? (
                <div className="w-full h-full bg-black flex items-center justify-center">
                  <video
                    className="max-w-full max-h-full"
                    controls
                    autoPlay
                    onEnded={() => setPlayingVideo(false)}
                  >
                    <source src={design.video} type="video/mp4" />
                    Votre navigateur ne supporte pas la vidéo.
                  </video>
                </div>
              ) : (
                <>
                  <span className="text-9xl animate-pulse">{design.emoji}</span>
                  {design.video && (
                    <button
                      onClick={() => setPlayingVideo(true)}
                      className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition-all group"
                    >
                      <div className="bg-blue-500 p-6 rounded-full group-hover:scale-110 transition-transform shadow-2xl">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                    </button>
                  )}
                </>
              )}
            </div>

            {/* Close button */}
            <button
              onClick={() => { onClose(); setPlayingVideo(false); }}
              className="absolute top-6 right-6 text-white hover:text-red-400 hover:rotate-90 transition-all p-3 bg-slate-900/80 backdrop-blur rounded-full hover:bg-slate-800"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Badges */}
            <div className="absolute bottom-6 left-6 flex gap-3">
              <span className={`bg-gradient-to-r ${design.color} text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg`}>
                {design.software}
              </span>
              <span className="bg-purple-500/90 backdrop-blur text-white px-4 py-3 rounded-full font-semibold">
                {design.complexity}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="mb-6">
              <h2 className="text-4xl font-bold text-white mb-3">{design.title}</h2>
              <div className="flex flex-wrap gap-3">
                <span className="bg-slate-700 text-gray-300 px-4 py-2 rounded-full text-sm">
                  {design.category}
                </span>
                <span className="text-gray-500">📅 {design.year}</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Colonne gauche */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-blue-400" />
                    Description
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {design.fullDescription}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <Star className="w-5 h-5 text-blue-400" />
                    Fonctionnalités
                  </h3>
                  <ul className="space-y-2">
                    {design.features.map((feature, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-start gap-3 text-gray-300 bg-slate-800/50 p-3 rounded-lg"
                      >
                        <span className="text-green-400 text-xl flex-shrink-0">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <Code className="w-5 h-5 text-blue-400" />
                    Compétences
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {design.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-lg border border-blue-500/30 hover:border-blue-400 hover:scale-105 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Colonne droite */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-blue-400" />
                    Spécifications Techniques
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(design.technicalSpecs).map(([key, value], idx) => (
                      <div 
                        key={idx} 
                        className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 hover:border-blue-500/50 transition-colors"
                      >
                        <div className="text-blue-400 font-semibold mb-1 text-sm">{key}</div>
                        <div className="text-gray-300">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                    Résultats
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(design.stats).map(([key, value], idx) => (
                      <div 
                        key={idx} 
                        className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur border border-blue-400/30 rounded-xl p-4 text-center hover:scale-105 transition-transform"
                      >
                        <div className="text-3xl font-bold text-blue-400 mb-1">{value}</div>
                        <div className="text-gray-400 text-xs capitalize">
                          {key === 'parts' ? 'Pièces' : 
                           key === 'hours' ? 'Heures' : 
                           key === 'weight' ? 'Masse' : 
                           key === 'efficiency' ? 'Efficacité' : 
                           key === 'precision' ? 'Précision' : key}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fichiers disponibles */}
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur border border-blue-400/30 rounded-xl p-6">
                  <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Fichiers disponibles
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <button className="bg-slate-700 hover:bg-blue-500 text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm transition-all hover:scale-105">
                      📄 Plans PDF
                    </button>
                    <button className="bg-slate-700 hover:bg-blue-500 text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm transition-all hover:scale-105">
                      📦 STEP
                    </button>
                    <button className="bg-slate-700 hover:bg-blue-500 text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm transition-all hover:scale-105">
                      🎨 Rendus
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bouton fermer */}
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => { onClose(); setPlayingVideo(false); }}
                className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all hover:scale-105"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignModal;