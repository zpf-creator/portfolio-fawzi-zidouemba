# 🚀 Portfolio Fawzi Zidouemba

Portfolio interactif professionnel présentant mes projets, compétences et parcours en Génie Mécanique.

**🌐 Site en ligne :** [portfolio-fawzi.vercel.app](https://portfolio-fawzi.vercel.app)

---

## ✨ Fonctionnalités

- 🏠 **Page d'accueil** - Présentation dynamique avec statistiques
- 🚀 **Projets détaillés** - 5 projets avec modal interactif
- 💻 **Compétences** - Barres de progression animées
- 🎓 **Parcours** - Expériences, formation, certifications
- 📧 **Contact** - Informations complètes et CV téléchargeables
- 📱 **Responsive** - Adapté mobile, tablette, desktop
- 🎨 **Design moderne** - Interface élégante et professionnelle

---

## 🛠️ Technologies Utilisées

- **React 18** - Framework JavaScript
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Styling moderne
- **Lucide React** - Icônes
- **Vercel** - Hébergement

---

## 📁 Structure du Projet

```
portfolio-fawzi/
├── public/                      # Fichiers statiques
│   ├── images/
│   │   ├── profile.jpg         # ⭐ VOTRE PHOTO
│   │   ├── projects/           # ⭐ IMAGES PROJETS
│   │   │   ├── skillup.jpg
│   │   │   ├── maxwell.jpg
│   │   │   └── ...
│   │   └── certificates/       # ⭐ CERTIFICATS
│   ├── videos/                 # ⭐ VIDÉOS DÉMOS (optionnel)
│   └── cv/                     # ⭐ VOS CV PDF
│       ├── CV_Automobile.pdf
│       ├── CV_Aeronautique.pdf
│       └── ...
├── src/
│   ├── data/                   # 📝 FICHIERS À MODIFIER
│   │   ├── projects.js        # Vos projets
│   │   ├── skills.js          # Vos compétences
│   │   ├── experiences.js     # Vos expériences
│   │   └── contact.js         # Vos coordonnées
│   ├── components/
│   │   └── Portfolio.jsx      # Composant principal
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

## 🚀 Démarrage Rapide

### 1. Installation

```bash
# Cloner le repository
git clone https://github.com/votre-username/portfolio-fawzi.git
cd portfolio-fawzi

# Installer les dépendances
npm install
```

### 2. Développement Local

```bash
# Lancer le serveur de développement
npm run dev

# Ouvrir dans le navigateur
# http://localhost:5173
```

### 3. Build Production

```bash
# Créer la version de production
npm run build

# Tester la version de production
npm run preview
```

---

## 📝 Modifications

### Ajouter Vos Images

1. **Photo de profil :**
   - Placez votre photo dans `public/images/profile.jpg`
   - Format recommandé : 500x500px, carré

2. **Images de projets :**
   - Placez vos images dans `public/images/projects/`
   - Format : JPG ou PNG
   - Résolution : 1920x1080px recommandé

3. **Certificats :**
   - Placez vos certificats PDF dans `public/images/certificates/`

4. **CV :**
   - Placez vos 6 CV dans `public/cv/`
   - Nommez-les exactement comme indiqué dans `contact.js`

### Modifier Vos Projets

Éditez `src/data/projects.js` :

```javascript
{
  id: 'mon-projet',
  title: 'Titre de Mon Projet',
  image: '/images/projects/mon-image.jpg',  // ⭐ Changez ici
  description: 'Description courte',
  // ... autres champs
}
```

### Modifier Vos Coordonnées

Éditez `src/data/contact.js` :

```javascript
export const contact = {
  email: 'votre-email@example.com',
  phone: '+212 XXX XXX XXX',
  social: {
    linkedin: 'https://linkedin.com/in/votre-profil',
    github: 'https://github.com/votre-username'
  }
};
```

### Modifier Vos Compétences

Éditez `src/data/skills.js` :

```javascript
{
  name: 'Nouvelle Compétence',
  level: 85,  // Pourcentage
  icon: '🎨'
}
```

---

## 🌐 Déploiement sur Vercel

### Méthode 1 : Via Interface (Recommandé)

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous avec GitHub
3. Cliquez "Import Project"
4. Sélectionnez votre repository
5. Cliquez "Deploy"

✅ **C'est fait !** Votre site est en ligne !

### Méthode 2 : Via CLI

```bash
# Installer Vercel CLI
npm install -g vercel

# Se connecter
vercel login

# Déployer
vercel --prod
```

### Mises à Jour Automatiques

Avec Vercel + GitHub, chaque push déploie automatiquement :

```bash
git add .
git commit -m "Ajout nouveau projet"
git push
```

→ Vercel redéploie automatiquement ! 🎉

---

## 📚 Guide Détaillé des Fichiers

### `src/data/projects.js`

**Contient :** Tous vos projets

**Champs importants :**
- `image`: Chemin vers l'image (`/images/projects/...`)
- `video`: Chemin vers vidéo optionnel
- `gallery`: Tableau d'images supplémentaires
- `report`: Lien vers rapport PDF

**Exemple d'ajout :**

```javascript
{
  id: 'nouveau-projet',
  title: 'Mon Nouveau Projet',
  category: 'Catégorie',
  year: '2024',
  status: 'Terminé',
  image: '/images/projects/nouveau.jpg',
  video: '/videos/nouveau-demo.mp4',
  description: 'Description courte',
  fullDescription: 'Description détaillée complète...',
  objectives: ['Objectif 1', 'Objectif 2'],
  technologies: ['Tech 1', 'Tech 2'],
  results: ['Résultat 1', 'Résultat 2'],
  skills: ['Compétence 1', 'Compétence 2'],
  details: {
    'Phase 1': 'Description phase 1',
    'Phase 2': 'Description phase 2'
  },
  gallery: [
    '/images/projects/nouveau-1.jpg',
    '/images/projects/nouveau-2.jpg'
  ]
}
```

### `src/data/contact.js`

**Contient :** Vos informations de contact

**À modifier :**
- `email`
- `phone`
- `social.linkedin` ⭐
- `social.github` ⭐
- `cv.automobile` (et autres CV)

### `src/data/skills.js`

**Contient :** Vos compétences techniques

**Structure :**
```javascript
{
  'Catégorie': [
    { name: 'Compétence', level: 85, icon: '🎨' }
  ]
}
```

**`level`** = Pourcentage de maîtrise (0-100)

### `src/data/experiences.js`

**Contient :** Vos expériences professionnelles

**À modifier :**
- Dates
- Entreprises
- Descriptions
- Réalisations

---

## 🎨 Personnalisation Avancée

### Changer les Couleurs

Éditez `src/data/contact.js` → section `theme` :

```javascript
export const theme = {
  colors: {
    primary: '#3B82F6',    // Bleu → Changez en #FF0000 pour rouge
    secondary: '#8B5CF6',  // Violet
    accent: '#10B981'      // Vert
  }
};
```

### Ajouter un Logo

1. Placez votre logo dans `public/images/logo.png`
2. Dans `contact.js` :
```javascript
logo: '/images/logo.png'
```

### Ajouter des Vidéos

1. Placez vos vidéos dans `public/videos/`
2. Dans `projects.js` :
```javascript
video: '/videos/ma-demo.mp4'
```

Formats supportés : MP4, WebM

---

## 🐛 Problèmes Courants

### Images ne s'affichent pas

**Solution :**
- Vérifiez le chemin : doit commencer par `/images/...`
- Vérifiez l'extension : `.jpg`, `.png` (minuscules)
- Vérifiez que le fichier existe dans `public/images/`

### Erreur "npm not found"

**Solution :**
```bash
# Réinstallez Node.js depuis https://nodejs.org
# Version LTS (18+)
```

### Erreur de déploiement Vercel

**Solution :**
- Framework Preset : **Vite**
- Build Command : `npm run build`
- Output Directory : `dist`
- Install Command : `npm install`

### Le site est lent

**Solution :**
- Optimisez vos images (max 200KB par image)
- Utilisez des formats modernes (WebP)
- Compressez vos vidéos

---

## 📊 Optimisation Images

### Avec Photoshop/GIMP
- Résolution : 1920x1080px
- Qualité : 80%
- Format : JPG pour photos, PNG pour graphiques

### En ligne (gratuit)
- [TinyPNG](https://tinypng.com) - Compression PNG/JPG
- [Squoosh](https://squoosh.app) - Compression avancée
- [CloudConvert](https://cloudconvert.com) - Conversion formats

---

## 🔒 Sécurité

**Ne JAMAIS commiter :**
- Mots de passe
- Clés API
- Données personnelles sensibles

**À faire :**
- Créer `.gitignore` (déjà fait)
- Ne pas exposer d'infos sensibles dans le code

---

## 📞 Support

**Besoin d'aide ?**
- 📧 Email : fawzizidouemba0@gmail.com
- 💬 Créez une Issue sur GitHub
- 📚 Consultez la documentation Vite : https://vitejs.dev

---

## 📜 Licence

© 2024 Pengdwende Fawzi Zidouemba. Tous droits réservés.

---

## 🎯 Checklist de Déploiement

- [ ] Node.js installé
- [ ] Dépendances installées (`npm install`)
- [ ] Images ajoutées dans `public/images/`
- [ ] CV ajoutés dans `public/cv/`
- [ ] Données modifiées dans `src/data/`
- [ ] Test local réussi (`npm run dev`)
- [ ] Build réussi (`npm run build`)
- [ ] Compte Vercel créé
- [ ] Repository GitHub créé
- [ ] Déployé sur Vercel
- [ ] Site accessible en ligne
- [ ] LinkedIn/GitHub liens mis à jour

---

## 🚀 Prochaines Étapes

1. **Ajoutez du contenu :**
   - Plus de projets
   - Articles de blog
   - Certifications

2. **Améliorations :**
   - Analytics (Google Analytics)
   - SEO (meta tags)
   - Formulaire de contact fonctionnel

3. **Domaine personnalisé :**
   - Acheter un domaine (ex: fawzi-zidouemba.com)
   - Configurer sur Vercel

---

**🎉 Félicitations ! Votre portfolio est prêt !**

Pour toute question, n'hésitez pas à me contacter.