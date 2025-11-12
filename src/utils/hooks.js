import { useState, useEffect, useRef } from 'react';

// ============================================
// 1. HOOK MODE SOMBRE/CLAIR
// ============================================
export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDark));
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleDarkMode = () => setIsDark(!isDark);

  return [isDark, toggleDarkMode];
};

// ============================================
// 2. HOOK LANGUE FR/EN
// ============================================
export const useLanguage = () => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    return saved || 'fr';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
  };

  return [language, setLanguage, toggleLanguage];
};

// ============================================
// 3. HOOK VIDÉO AU HOVER
// ============================================
export const useVideoHover = () => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log('Video play failed:', err));
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return { videoRef, handleMouseEnter, handleMouseLeave };
};

// ============================================
// 4. HOOK INTERSECTION OBSERVER (Scroll Reveal)
// ============================================
export const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1,
      ...options
    });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isVisible];
};

// ============================================
// 5. HOOK RECHERCHE ET FILTRES
// ============================================
export const useSearch = (items, searchFields = []) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({});

  const filteredItems = items.filter(item => {
    // Recherche textuelle
    const matchesSearch = searchFields.some(field => {
      const value = field.split('.').reduce((obj, key) => obj?.[key], item);
      return value?.toLowerCase().includes(searchTerm.toLowerCase());
    });

    // Filtres par catégorie
    const matchesFilters = Object.entries(selectedFilters).every(([key, value]) => {
      if (!value || value === 'all') return true;
      return item[key] === value;
    });

    return matchesSearch && matchesFilters;
  });

  const setFilter = (key, value) => {
    setSelectedFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setSelectedFilters({});
    setSearchTerm('');
  };

  return {
    searchTerm,
    setSearchTerm,
    selectedFilters,
    setFilter,
    clearFilters,
    filteredItems
  };
};

// ============================================
// 6. HOOK TÉLÉCHARGEMENT FICHIERS
// ============================================
export const useDownload = () => {
  const [downloading, setDownloading] = useState(false);

  const downloadFile = async (url, filename) => {
    setDownloading(true);
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setDownloading(false);
    }
  };

  return { downloadFile, downloading };
};

// ============================================
// 7. HOOK MODAL
// ============================================
export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent(null);
    document.body.style.overflow = 'unset';
  };

  return { isOpen, modalContent, openModal, closeModal };
};

// ============================================
// 8. HOOK SCROLL PROGRESS
// ============================================
export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollProgress;
};

// ============================================
// 9. HOOK TYPING ANIMATION
// ============================================
export const useTypingEffect = (texts, speed = 100) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, texts, speed]);

  return displayText;
};

// ============================================
// 10. HOOK CURSOR CUSTOM
// ============================================
export const useCustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return { cursorPosition, isHovering, setIsHovering };
};

// ============================================
// 11. HOOK FORMULAIRE CONTACT
// ============================================
export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errors, setErrors] = useState({});

  const validate = (t) => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = t?.required || 'Ce champ est requis';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t?.required || 'Ce champ est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t?.invalidEmail || 'Email invalide';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = t?.required || 'Ce champ est requis';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = t?.required || 'Ce champ est requis';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e, t) => {
    e.preventDefault();
    
    if (!validate(t)) return;
    
    setStatus('loading');
    
    try {
      // Simulation d'envoi (À REMPLACER par EmailJS ou Formspree)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setStatus('idle'), 3000);
      
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setStatus('idle');
  };

  return {
    formData,
    status,
    errors,
    handleChange,
    handleSubmit,
    resetForm
  };
};