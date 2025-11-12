// src/config/cloudinaryConfig.js
// Configuration Cloudinary pour héberger images et vidéos

// Remplacez 'votre-cloud-name' par votre nom de cloud Cloudinary
export const CLOUDINARY_CLOUD_NAME = 'dtzow5aii';

// URL de base Cloudinary
export const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}`;

// Helper pour générer les URLs d'images optimisées
export const getImageUrl = (publicId, transformations = {}) => {
  const {
    width = 'auto',
    quality = 'auto',
    format = 'auto',
    crop = 'fill',
  } = transformations;

  return `${CLOUDINARY_BASE_URL}/image/upload/w_${width},q_${quality},f_${format},c_${crop}/${publicId}`;
};

// Helper pour générer les URLs de vidéos optimisées
export const getVideoUrl = (publicId, transformations = {}) => {
  const {
    width = 800,
    quality = 'auto',
    format = 'mp4',
  } = transformations;

  return `${CLOUDINARY_BASE_URL}/video/upload/w_${width},q_${quality},f_${format}/${publicId}`;
};

// Helper pour les images avec effet de flou progressif (lazy loading)
export const getImageUrlWithBlur = (publicId) => {
  return {
    blur: `${CLOUDINARY_BASE_URL}/image/upload/w_50,q_30,e_blur:1000/${publicId}`,
    full: getImageUrl(publicId)
  };
};

// Chemins des dossiers Cloudinary (organisez vos fichiers par dossier)
export const CLOUDINARY_FOLDERS = {
  PROFILE: 'portfolio/profile',
  PROJECTS: 'portfolio/projects',
  DESIGNS: 'portfolio/designs',
  CVS: 'portfolio/cvs',
  VIDEOS: 'portfolio/videos'
};

// URLs complètes pour vos médias (à personnaliser après upload sur Cloudinary)
export const MEDIA_URLS = {
  // Photo de profil
  profilePhoto: getImageUrl(`${CLOUDINARY_FOLDERS.PROFILE}/photo_profile`, {
    width: 400,
    quality: 'auto:best',
    crop: 'fill'
  }),

  // Images des projets
  projects: {
    skillup: getImageUrl(`${CLOUDINARY_FOLDERS.PROJECTS}/skillup`, {
      width: 800,
      quality: 'auto'
    }),
    cfd: getImageUrl(`${CLOUDINARY_FOLDERS.PROJECTS}/cfd`, {
      width: 800,
      quality: 'auto'
    }),
    seats: getImageUrl(`${CLOUDINARY_FOLDERS.PROJECTS}/seats`, {
      width: 800,
      quality: 'auto'
    })
  },

  // Images des designs 3D
  designs: {
    fuselage: getImageUrl(`${CLOUDINARY_FOLDERS.DESIGNS}/fuselage`, {
      width: 600,
      quality: 'auto'
    }),
    engrenageConique: getImageUrl(`${CLOUDINARY_FOLDERS.DESIGNS}/engrenage_conique`, {
      width: 600,
      quality: 'auto'
    }),
    engrenagedroit: getImageUrl(`${CLOUDINARY_FOLDERS.DESIGNS}/engrenage_droit`, {
      width: 600,
      quality: 'auto'
    })
  },

  // Vidéos des designs 3D
  videos: {
    fuselage: getVideoUrl(`${CLOUDINARY_FOLDERS.VIDEOS}/fuselage`, {
      width: 1280,
      quality: 'auto'
    }),
    engrenageConique: getVideoUrl(`${CLOUDINARY_FOLDERS.VIDEOS}/engrenage_conique`, {
      width: 1280,
      quality: 'auto'
    }),
    engrenagedroit: getVideoUrl(`${CLOUDINARY_FOLDERS.VIDEOS}/engrenage_droit`, {
      width: 1280,
      quality: 'auto'
    })
  },

  // CVs (PDFs hébergés sur Cloudinary)
  cvs: {
    aeronautique: `${CLOUDINARY_BASE_URL}/image/upload/${CLOUDINARY_FOLDERS.CVS}/cv_aeronautique.pdf`,
    automobile: `${CLOUDINARY_BASE_URL}/image/upload/${CLOUDINARY_FOLDERS.CVS}/cv_automobile.pdf`,
    simulation: `${CLOUDINARY_BASE_URL}/image/upload/${CLOUDINARY_FOLDERS.CVS}/cv_simulation.pdf`,
    production: `${CLOUDINARY_BASE_URL}/image/upload/${CLOUDINARY_FOLDERS.CVS}/cv_production.pdf`,
    bureauEtude: `${CLOUDINARY_BASE_URL}/image/upload/${CLOUDINARY_FOLDERS.CVS}/cv_bureau_etude.pdf`
  }
};

// Presets de transformations réutilisables
export const IMAGE_PRESETS = {
  thumbnail: { width: 300, quality: 'auto', crop: 'thumb' },
  card: { width: 600, quality: 'auto', crop: 'fill' },
  hero: { width: 1200, quality: 'auto', crop: 'fill' },
  profile: { width: 400, quality: 'auto:best', crop: 'fill' }
};

export const VIDEO_PRESETS = {
  preview: { width: 640, quality: 'auto' },
  standard: { width: 1280, quality: 'auto' },
  hd: { width: 1920, quality: 'auto:best' }
};