// src/data/portfolioData.js
// Fichier centralisé pour toutes les données du portfolio avec URLs Cloudinary

import { MEDIA_URLS } from '../config/cloudinaryConfig';

export const projects = [
  {
    id: 'skillup',
    category: 'aerospace',
    title: 'SKILLUP | EMAN Aerospace',
    subtitle: 'Optimisation structurale d\'un fuselage d\'avion',
    description: 'Projet majeur de conception et optimisation d\'une section de fuselage pour améliorer l\'efficacité structurale et réduire la masse de 15%.',
    fullDescription: 'Projet académique majeur de conception aérospatiale réalisé en équipe. Conception complète d\'une section de fuselage d\'avion avec approche multidisciplinaire intégrant CAO, simulations avancées et optimisation.',
    image: MEDIA_URLS.projects.skillup, // ← URL Cloudinary
    video: MEDIA_URLS.videos.fuselage, // ← URL Cloudinary
    duration: '4 mois',
    team: '4 personnes',
    impact: '-15% masse',
    year: '2024',
    status: 'Projet Majeur',
    emoji: '✈️',
    color: 'from-blue-500 to-cyan-500',
    technologies: ['CATIA V5', 'ANSYS Workbench', 'Abaqus', 'MATLAB', 'Python'],
    objectives: [
      'Concevoir une structure de fuselage optimale',
      'Réduire la masse structurelle de 15%',
      'Valider l\'intégrité structurelle par simulations',
      'Optimiser les coûts de production'
    ],
    results: [
      'Réduction masse structurelle: 15%',
      'Optimisation topologique réussie',
      'Validation FEA complète (charges statiques/dynamiques)',
      'Analyse coûts production et recommandations industrialisation',
      'Documentation technique complète'
    ],
    skills: ['Conception 3D', 'Optimisation topologique', 'FEA', 'Matériaux composites', 'Gestion projet'],
    details: {
      'Phase 1': 'Conception préliminaire et modélisation 3D CATIA',
      'Phase 2': 'Optimisation paramétrique et topologique',
      'Phase 3': 'Simulations FEA multi-physiques (ANSYS, Abaqus)',
      'Phase 4': 'Analyse coûts et documentation technique'
    }
  },
  {
    id: 'maxwell',
    category: 'automotive',
    title: 'Optimisation Système Propulsion Marine',
    subtitle: 'Stage Maxwell Engineering - Agadir',
    description: 'Optimisation d\'un système de propulsion marine pour réduire la consommation de carburant de 15-25%.',
    fullDescription: 'Stage technique chez Maxwell Engineering focalisé sur l\'optimisation de systèmes de propulsion pour bateaux de pêche. Approche scientifique combinant CFD, modélisation mathématique et algorithmes d\'optimisation.',
    image: MEDIA_URLS.projects.cfd, // ← URL Cloudinary
    duration: '3 mois',
    team: 'Stage individuel',
    impact: '-25% conso',
    year: '2025',
    status: 'Stage Technique',
    emoji: '🌊',
    color: 'from-green-500 to-emerald-500',
    technologies: ['ANSYS Fluent', 'Python', 'MATLAB', 'SolidWorks', 'Séries Wageningen'],
    objectives: [
      'Réduire consommation carburant de 15-25%',
      'Optimiser design hélices pour performance maximale',
      'Développer outils d\'optimisation automatisés',
      'Valider résultats par simulations CFD'
    ],
    results: [
      'Réduction consommation: 15-25% démontrée',
      'Dimensionnement optimal hélices via séries Wageningen',
      'Développement algorithmes optimisation multi-objectifs',
      'Validation CFD complète (écoulements turbulents, cavitation)',
      'Outils Python/MATLAB réutilisables'
    ],
    skills: ['CFD', 'Python', 'MATLAB', 'Optimisation', 'Analyse performance'],
    details: {
      'Modélisation CFD': 'ANSYS Fluent - Écoulements turbulents complexes, analyse cavitation',
      'Optimisation': 'Algorithmes génétiques Python pour optimisation multi-objectifs',
      'Dimensionnement': 'Application séries Wageningen pour sélection hélices optimales',
      'Validation': 'Simulations complètes et comparaison résultats théoriques/numériques'
    }
  },
  {
    id: 'seats',
    category: 'aerospace',
    title: 'Conception Sièges Aéronautiques',
    subtitle: 'Étude de résistance et ergonomie',
    description: 'Conception et optimisation de sièges d\'avion avec focus sur la résistance structurale et le confort passagers.',
    fullDescription: 'Projet de conception complète de sièges aéronautiques conformes aux normes de sécurité avec optimisation ergonomique pour améliorer le confort passagers.',
    image: "https://res.cloudinary.com/dtzow5aii/image/upload/v1762951755/seats_h3ixuf.png", // ← URL Cloudinary
    duration: '2 mois',
    team: '3 personnes',
    impact: '+30% confort',
    year: '2024',
    status: 'Projet Académique',
    emoji: '💺',
    color: 'from-purple-500 to-pink-500',
    technologies: ['CATIA V5', 'ANSYS', 'Ergonomie', 'Normes aéronautiques'],
    objectives: [
      'Concevoir sièges conformes normes aéronautiques',
      'Optimiser confort et ergonomie passagers',
      'Valider résistance structurale par FEA',
      'Réduire masse tout en maintenant sécurité'
    ],
    results: [
      'Design ergonomique innovant validé',
      'Amélioration confort passagers +30%',
      'Validation résistance crash test',
      'Réduction masse structurelle 12%',
      'Prototype fonctionnel réalisé'
    ],
    skills: ['CAO 3D', 'Ergonomie', 'FEA', 'Normes aéronautiques', 'Design produit'],
    details: {
      'Conception': 'Modélisation 3D complète avec CATIA V5, études ergonomiques',
      'Simulation': 'Analyse FEA résistance structurelle, crash test virtuel',
      'Optimisation': 'Réduction masse, amélioration confort',
      'Validation': 'Tests conformité normes aéronautiques CS-25'
    }
  },
  {
    id: 'cfd-aero',
    category: 'simulation',
    title: 'Simulation Aérodynamique CFD',
    subtitle: 'Calcul coefficients aérodynamiques',
    description: 'Calcul précis de coefficients de portance et traînée via simulations CFD avancées.',
    fullDescription: 'Projet de simulation CFD avancée pour l\'analyse aérodynamique et le calcul de coefficients de portance et traînée. Utilisation d\'ANSYS Fluent pour modélisation écoulements complexes.',
    image: "https://res.cloudinary.com/dtzow5aii/image/upload/v1762951937/cfd_nkhc7i.png", // ← URL Cloudinary
    duration: '2 mois',
    team: 'Binôme',
    impact: 'Précision 98%',
    year: '2024',
    status: 'Projet Académique',
    emoji: '💨',
    color: 'from-indigo-500 to-purple-500',
    technologies: ['ANSYS Fluent', 'CFD-Post', 'MATLAB', 'Meshing'],
    objectives: [
      'Calculer coefficients Cl et Cd précisément',
      'Analyser écoulements autour profils aérodynamiques',
      'Optimiser maillage pour convergence',
      'Post-traiter résultats pour visualisation'
    ],
    results: [
      'Calcul précis coefficients aérodynamiques',
      'Optimisation maillage et convergence',
      'Visualisations écoulements détaillées',
      'Rapport technique complet',
      'Validation résultats avec théorie'
    ],
    skills: ['CFD', 'ANSYS Fluent', 'Aérodynamique', 'Post-traitement', 'Analyse'],
    details: {
      'Setup': 'Configuration domaine fluide, conditions limites, modèles turbulence',
      'Maillage': 'Génération maillage adaptatif zones critiques',
      'Résolution': 'Résolution équations Navier-Stokes, convergence',
      'Post-traitement': 'Extraction données, visualisation CFD-Post'
    }
  },
  {
    id: 'taza-cap',
    category: 'manufacturing',
    title: 'Conception Engrenage Conique TAZA CAP',
    subtitle: 'Stage initiation - Fabrication',
    description: 'Conception complète, gamme d\'usinage et fabrication d\'un engrenage conique.',
    fullDescription: 'Stage d\'initiation pratique en atelier de fabrication mécanique. Conception complète d\'un engrenage conique à denture droite, élaboration gamme d\'usinage et fabrication.',
    image: MEDIA_URLS.designs.engrenageConique, // ← URL Cloudinary
    duration: '1 mois',
    team: 'Individuel',
    impact: '100% conforme',
    year: '2024',
    status: 'Stage Initiation',
    emoji: '⚙️',
    color: 'from-yellow-500 to-orange-500',
    technologies: ['SolidWorks', 'CNC', 'Machines-outils', 'Métrologie'],
    objectives: [
      'Concevoir engrenage conique complet',
      'Élaborer gamme d\'usinage CNC',
      'Réaliser fabrication en atelier',
      'Contrôler qualité dimensionnelle'
    ],
    results: [
      'Conception complète engrenage validée',
      'Plans de fabrication détaillés',
      'Gamme d\'usinage optimisée',
      'Fabrication réussie pièce conforme',
      'Contrôle qualité dimensionnel validé'
    ],
    skills: ['CAO', 'Procédés fabrication', 'CNC', 'Métrologie', 'Contrôle qualité'],
    details: {
      'Conception': 'Calculs dimensionnement, modélisation 3D SolidWorks',
      'Gamme usinage': 'Définition opérations, choix outils, paramètres coupe',
      'Fabrication': 'Usinage CNC, contrôles intermédiaires',
      'Validation': 'Métrologie dimensionnelle, conformité spécifications'
    }
  }
];

export const designs3D = [
  {
    id: 'fuselage-skillup',
    title: 'Section Fuselage Avion',
    software: 'CATIA V5',
    category: 'Aéronautique',
    year: '2024',
    complexity: 'Expert',
    image: "https://res.cloudinary.com/dtzow5aii/image/upload/v1762966143/fuselage_oappf5.jpg", // ← URL Cloudinary
    video: MEDIA_URLS.videos.fuselage, // ← URL Cloudinary
    emoji: '✈️',
    color: 'from-blue-500 to-cyan-500',
    description: 'Modélisation complète d\'une section de fuselage d\'avion avec optimisation topologique',
    fullDescription: 'Conception avancée d\'une section de fuselage utilisant les fonctionnalités avancées de CATIA V5. Modélisation surfacique complexe avec contraintes aérodynamiques et structurelles. Optimisation de la masse tout en maintenant l\'intégrité structurelle.',
    features: [
      'Modélisation surfacique avancée',
      'Assemblage multi-pièces (50+ composants)',
      'Optimisation topologique intégrée',
      'Contraintes de fabrication respectées',
      'Documentation technique complète'
    ],
    technicalSpecs: {
      'Logiciel': 'CATIA V5 R21',
      'Modules': 'Part Design, Generative Shape Design, Assembly Design',
      'Nombre de pièces': '52 composants',
      'Temps de modélisation': '120 heures',
      'Format export': 'STEP, IGES, STL'
    },
    skills: ['Surfacique', 'Assemblage', 'Cotation', 'GD&T'],
    stats: { parts: 52, hours: 120, weight: '-15%' }
  },
  {
    id: 'engrenage-conique',
    title: 'Engrenage Conique Denture Droite',
    software: 'SolidWorks',
    category: 'Transmission',
    year: '2024',
    complexity: 'Intermédiaire',
    image: "https://res.cloudinary.com/dtzow5aii/image/upload/v1762966150/engrenage_conique_k1vk4o.jpg", // ← URL Cloudinary
    video: MEDIA_URLS.videos.engrenageConique, // ← URL Cloudinary
    emoji: '⚙️',
    color: 'from-orange-500 to-red-500',
    description: 'Conception et simulation d\'un système d\'engrenages coniques',
    fullDescription: 'Modélisation précise d\'engrenages coniques avec calculs de résistance et simulation cinématique. Respect normes ISO pour denture et tolérances. Validation par analyse de contact FEA.',
    features: [
      'Calculs géométriques précis',
      'Simulation cinématique complète',
      'Analyse de contact FEA',
      'Plans de fabrication détaillés',
      'Gamme d\'usinage CNC'
    ],
    technicalSpecs: {
      'Logiciel': 'SolidWorks 2023 + GearTrax',
      'Module': '3 mm',
      'Nombre de dents': 'Z1=20, Z2=40',
      'Angle': '90°',
      'Norme': 'ISO 23509'
    },
    skills: ['Calculs mécaniques', 'Tolérancement', 'FEA', 'Fabrication'],
    stats: { parts: 8, hours: 40, precision: '0.01mm' }
  },
  {
    id: 'engrenage-droit',
    title: 'Engrenage Droit Standard',
    software: 'SolidWorks',
    category: 'Transmission',
    year: '2024',
    complexity: 'Intermédiaire',
    image: "https://res.cloudinary.com/dtzow5aii/image/upload/v1762966162/engrenage_droit_xdepzj.jpg", // ← URL Cloudinary
    video: MEDIA_URLS.videos.engrenagedroit, // ← URL Cloudinary
    emoji: '⚙️',
    color: 'from-yellow-500 to-orange-500',
    description: 'Engrenage cylindrique à denture droite pour transmission mécanique',
    fullDescription: 'Design classique d\'engrenage droit avec optimisation du profil de denture pour réduire le bruit et l\'usure.',
    features: [
      'Profil de denture optimisé',
      'Analyse de contact Hertz',
      'Simulation dynamique',
      'Tolérancement ISO',
      'Prêt pour fabrication'
    ],
    technicalSpecs: {
      'Logiciel': 'SolidWorks 2023',
      'Module': '2.5 mm',
      'Nombre de dents': '30',
      'Matériau': 'Acier 20MnCr5',
      'Traitement': 'Cémentation'
    },
    skills: ['CAO', 'Calculs', 'Normes', 'Fabrication'],
    stats: { parts: 2, hours: 25, precision: '0.02mm' }
  }
];

export const skills = {
  'CAO/Conception': [
    { name: 'CATIA V5/V6', level: 85, icon: '🎨', years: 3 },
    { name: 'SolidWorks', level: 90, icon: '🔧', years: 4 },
    { name: 'Fusion 360', level: 75, icon: '⚡', years: 2 },
    { name: 'Geomagic (RE)', level: 70, icon: '🔄', years: 1 }
  ],
  'Simulation': [
    { name: 'ANSYS Fluent (CFD)', level: 85, icon: '💨', years: 2 },
    { name: 'ANSYS Mechanical', level: 80, icon: '🏗️', years: 2 },
    { name: 'Abaqus FEA', level: 75, icon: '📊', years: 2 },
    { name: 'Simulink', level: 70, icon: '🔗', years: 1 }
  ],
  'Programmation': [
    { name: 'Python', level: 85, icon: '🐍', years: 3 },
    { name: 'MATLAB', level: 80, icon: '📐', years: 2 },
    { name: 'VBA', level: 65, icon: '📊', years: 1 },
    { name: 'Algorithmes', level: 80, icon: '🧮', years: 2 }
  ],
  'Production': [
    { name: 'CNC/FAO', level: 75, icon: '⚙️', years: 2 },
    { name: 'GRAFCET/Ladder', level: 70, icon: '🤖', years: 1 },
    { name: 'Maintenance', level: 75, icon: '🔧', years: 2 },
    { name: 'Qualité ISO', level: 80, icon: '✅', years: 2 }
  ]
};

export const experiences = [
  {
    title: 'Stage Technique',
    company: 'Maxwell Engineering',
    location: 'Agadir, Maroc',
    period: 'Juillet - Septembre 2025',
    type: 'Stage',
    description: 'Optimisation systèmes propulsion, CFD avancée, développement algorithmes',
    achievements: [
      'Réduction consommation 15-25%',
      'Algorithmes optimisation multi-objectifs',
      'Simulations CFD complexes'
    ]
  },
  {
    title: 'Stage d\'Initiation',
    company: 'TAZA CAP SARL',
    location: 'Fès, Maroc',
    period: 'Juin 2024',
    type: 'Stage',
    description: 'Conception, fabrication et maintenance en atelier',
    achievements: [
      'Conception engrenage conique',
      'Gamme d\'usinage CNC',
      'Maintenance machines-outils'
    ]
  }
];

export const education = [
  {
    degree: 'Cycle Ingénieur Génie Mécanique',
    school: 'Faculté des Sciences et Techniques de Fès',
    location: 'Fès, Maroc',
    period: '2023 - Présent',
    specialization: 'Option: Conception Mécanique et Innovation',
    courses: ['Optimisation', 'FEA/CFD', 'Matériaux Composites', 'Conception Robuste', 'Dynamique']
  },
  {
    degree: 'DEUST Mathématiques-Informatique-Physique',
    school: 'Faculté des Sciences et Techniques de Settat',
    location: 'Settat, Maroc',
    period: '2021 - 2023',
    specialization: 'Formation scientifique pluridisciplinaire',
    courses: ['Analyse', 'Algèbre', 'Physique', 'Programmation', 'Méthodes numériques']
  }
];

export const cvVersions = [
  { 
    name: 'CV Aéronautique', 
    file: MEDIA_URLS.cvs.aeronautique, // ← URL Cloudinary
    icon: '✈️', 
    color: 'from-blue-500 to-cyan-500',
    description: 'Spécialisé conception aéronautique'
  },
  { 
    name: 'CV Automobile', 
    file: MEDIA_URLS.cvs.automobile, // ← URL Cloudinary
    icon: '🚗', 
    color: 'from-green-500 to-emerald-500',
    description: 'Spécialisé automobile & mobilité'
  },
  { 
    name: 'CV Simulation', 
    file: MEDIA_URLS.cvs.simulation, // ← URL Cloudinary
    icon: '💨', 
    color: 'from-purple-500 to-pink-500',
    description: 'Spécialisé CFD/FEA'
  },
  { 
    name: 'CV Production', 
    file: MEDIA_URLS.cvs.production, // ← URL Cloudinary
    icon: '⚙️', 
    color: 'from-orange-500 to-red-500',
    description: 'Spécialisé production industrielle'
  },
  { 
    name: 'CV Bureau d\'Études', 
    file: MEDIA_URLS.cvs.bureauEtude, // ← URL Cloudinary
    icon: '📐', 
    color: 'from-yellow-500 to-orange-500',
    description: 'Spécialisé bureau d\'études'
  }
];

export const languages = [
  { lang: 'Français', level: 'Courant', flag: '🇫🇷', percent: 95 },
  { lang: 'Anglais', level: 'Intermédiaire technique', flag: '🇬🇧', percent: 75 },
  { lang: 'Mooré', level: 'Langue maternelle', flag: '🇧🇫', percent: 100 }
];

export const softSkills = [
  { skill: 'Résolution problèmes', icon: '🧩' },
  { skill: 'Travail équipe', icon: '🤝' },
  { skill: 'Créativité', icon: '💡' },
  { skill: 'Adaptabilité', icon: '🔄' },
  { skill: 'Rigueur', icon: '✓' },
  { skill: 'Gestion projet', icon: '📊' },
  { skill: 'Curiosité', icon: '🔍' },
  { skill: 'Leadership', icon: '👥' }
];

export const stats = {
  projects: 5,
  experience: 4,
  skills: 40,
  languages: 3
};

export const titles = [
  'Conception Mécanique',
  'Optimisation CFD/FEA',
  'Innovation Automobile',
  'Simulation Numérique',
  'R&D Aéronautique'
];

// Photo de profil
export const profilePhoto = MEDIA_URLS.profilePhoto;