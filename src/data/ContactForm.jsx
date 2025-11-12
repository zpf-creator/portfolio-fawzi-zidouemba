import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

const ContactForm = ({ language = 'fr' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errors, setErrors] = useState({});

  const translations = {
    fr: {
      name: 'Nom complet',
      email: 'Email',
      subject: 'Sujet',
      message: 'Votre message',
      send: 'Envoyer le message',
      sending: 'Envoi en cours...',
      success: 'Message envoyé avec succès !',
      error: 'Erreur lors de l\'envoi. Réessayez.',
      required: 'Ce champ est requis',
      invalidEmail: 'Email invalide'
    },
    en: {
      name: 'Full name',
      email: 'Email',
      subject: 'Subject',
      message: 'Your message',
      send: 'Send message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Error sending. Try again.',
      required: 'This field is required',
      invalidEmail: 'Invalid email'
    }
  };

  const t = translations[language];

  // Validation
  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = t.required;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.invalidEmail;
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = t.required;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = t.required;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Envoi avec EmailJS (à configurer)
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setStatus('loading');
    
    try {
      // OPTION 1: EmailJS (Recommandé - Gratuit)
      // Installez: npm install @emailjs/browser
      // Décommentez ci-dessous après configuration
      
      /*
      import emailjs from '@emailjs/browser';
      
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'fawzizidouemba0@gmail.com'
        },
        'YOUR_PUBLIC_KEY'
      );
      */
      
      // OPTION 2: Formspree (Alternative)
      // await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      // SIMULATION (À REMPLACER)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset après 3 secondes
      setTimeout(() => setStatus('idle'), 3000);
      
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Effacer l'erreur du champ modifié
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Informations de contact */}
        <div className="bg-slate-800/50 backdrop-blur border border-blue-500/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Informations</h3>
          
          <div className="space-y-6">
            <a 
              href="mailto:fawzizidouemba0@gmail.com"
              className="flex items-start gap-4 group cursor-pointer"
            >
              <div className="bg-blue-500/20 p-3 rounded-lg group-hover:bg-blue-500 transition-all group-hover:scale-110">
                <Mail className="w-6 h-6 text-blue-400 group-hover:text-white" />
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-1">Email</div>
                <div className="text-white group-hover:text-blue-400 transition">
                  fawzizidouemba0@gmail.com
                </div>
              </div>
            </a>

            <a 
              href="tel:+212658810270"
              className="flex items-start gap-4 group cursor-pointer"
            >
              <div className="bg-blue-500/20 p-3 rounded-lg group-hover:bg-blue-500 transition-all group-hover:scale-110">
                <Phone className="w-6 h-6 text-blue-400 group-hover:text-white" />
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-1">Téléphone</div>
                <div className="text-white group-hover:text-blue-400 transition">
                  +212 658 810 270
                </div>
              </div>
            </a>

            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="bg-blue-500/20 p-3 rounded-lg group-hover:bg-blue-500 transition-all group-hover:scale-110">
                <MapPin className="w-6 h-6 text-blue-400 group-hover:text-white" />
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-1">Localisation</div>
                <div className="text-white">Monflouri 2, Fès, Maroc</div>
              </div>
            </div>
          </div>

          {/* Disponibilité */}
          <div className="mt-8 p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-400/30">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-semibold">Disponible</span>
            </div>
            <p className="text-gray-300 text-sm">
              Ouvert aux opportunités de stage, alternance ou emploi
            </p>
          </div>
        </div>

        {/* Formulaire */}
        <div className="bg-slate-800/50 backdrop-blur border border-blue-500/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Envoyez un message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nom */}
            <div>
              <label className="block text-gray-300 text-sm mb-2">
                {t.name} <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full bg-slate-700/50 border ${errors.name ? 'border-red-500' : 'border-slate-600'} rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition`}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-300 text-sm mb-2">
                {t.email} <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-slate-700/50 border ${errors.email ? 'border-red-500' : 'border-slate-600'} rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition`}
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Sujet */}
            <div>
              <label className="block text-gray-300 text-sm mb-2">
                {t.subject} <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full bg-slate-700/50 border ${errors.subject ? 'border-red-500' : 'border-slate-600'} rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition`}
                placeholder="Opportunité de stage"
              />
              {errors.subject && (
                <p className="text-red-400 text-xs mt-1">{errors.subject}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-300 text-sm mb-2">
                {t.message} <span className="text-red-400">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className={`w-full bg-slate-700/50 border ${errors.message ? 'border-red-500' : 'border-slate-600'} rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition resize-none`}
                placeholder="Votre message..."
              ></textarea>
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            {/* Bouton d'envoi */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className={`w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                status === 'loading' 
                  ? 'opacity-70 cursor-not-allowed' 
                  : 'hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105'
              }`}
            >
              {status === 'loading' ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  {t.sending}
                </>
              ) : status === 'success' ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  {t.success}
                </>
              ) : status === 'error' ? (
                <>
                  <AlertCircle className="w-5 h-5" />
                  {t.error}
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  {t.send}
                </>
              )}
            </button>

            {/* Message de succès/erreur */}
            {status === 'success' && (
              <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 text-green-400 text-sm">
                ✓ {t.success}
              </div>
            )}
            
            {status === 'error' && (
              <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 text-red-400 text-sm">
                ✗ {t.error}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;