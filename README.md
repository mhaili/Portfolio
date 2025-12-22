# Portfolio de Majda Mhaili 💜✨

Un portfolio moderne et élégant créé avec Next.js, TypeScript et Tailwind CSS.

## 🚀 Démarrage rapide

### Installation des dépendances

```bash
npm install
```

### Lancer en mode développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build de production

```bash
npm run build
npm start
```

## 📁 Structure du projet

```
portfolio/
├── app/
│   ├── globals.css         # Styles globaux
│   ├── layout.tsx          # Layout principal
│   └── page.tsx            # Page d'accueil
├── components/
│   ├── Header.tsx          # En-tête avec navigation
│   ├── Hero.tsx            # Section héro
│   ├── About.tsx           # À propos et compétences
│   ├── Experience.tsx      # Expériences professionnelles
│   ├── Education.tsx       # Formation et langues
│   ├── Projects.tsx        # Projets
│   ├── Contact.tsx         # Formulaire de contact
│   └── Footer.tsx          # Pied de page
├── public/                 # Fichiers statiques
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## ✨ Fonctionnalités

- ✅ Design moderne et féminin
- ✅ Responsive (mobile, tablette, desktop)
- ✅ Animations fluides
- ✅ Navigation smooth scroll
- ✅ Section projets extensible
- ✅ Formulaire de contact
- ✅ Optimisé pour le SEO
- ✅ Performance optimale

## 🎨 Personnalisation

### Modifier les couleurs

Éditez [tailwind.config.ts](tailwind.config.ts) pour changer les couleurs du thème :

```typescript
colors: {
  primary: { ... },  // Couleurs principales (violet)
  accent: { ... },   // Couleurs d'accent (rose)
}
```

### Ajouter un projet

1. Ouvrez [components/Projects.tsx](components/Projects.tsx)
2. Ajoutez un objet dans le tableau `initialProjects` :

```typescript
{
  title: 'Mon nouveau projet',
  description: 'Description du projet',
  tags: ['React', 'TypeScript'],
  image: '🚀',
  category: 'web',
  featured: true,
}
```

### Modifier vos informations

- **Coordonnées** : [components/Contact.tsx](components/Contact.tsx)
- **Expériences** : [components/Experience.tsx](components/Experience.tsx)
- **Formation** : [components/Education.tsx](components/Education.tsx)
- **Compétences** : [components/About.tsx](components/About.tsx)

## 🚀 Déploiement sur VPS

### Option 1 : Avec PM2 (recommandé)

```bash
# Build du projet
npm run build

# Installation de PM2
npm install -g pm2

# Démarrage avec PM2
pm2 start npm --name "portfolio" -- start

# Sauvegarder la configuration PM2
pm2 save
pm2 startup
```

### Option 2 : Avec Docker

Créez un fichier `Dockerfile` :

```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

Build et run :

```bash
docker build -t portfolio .
docker run -d -p 3000:3000 portfolio
```

### Option 3 : Avec Nginx (reverse proxy)

Configuration Nginx (`/etc/nginx/sites-available/portfolio`) :

```nginx
server {
    listen 80;
    server_name votre-domaine.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Activez le site :

```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## 📝 Technologies utilisées

- **Framework** : Next.js 14
- **Langage** : TypeScript
- **Styling** : Tailwind CSS
- **Icônes** : Lucide React
- **Polices** : Google Fonts (Inter, Playfair Display)

## 🎯 Prochaines étapes suggérées

1. Ajouter vos propres projets
2. Personnaliser les couleurs selon vos préférences
3. Ajouter votre photo dans la section Hero
4. Intégrer EmailJS pour le formulaire de contact
5. Ajouter Google Analytics
6. Créer un blog (optionnel)
7. Ajouter des animations supplémentaires avec Framer Motion

## 💌 Contact

**Majda Mhaili**
- Email : mhailimajda@gmail.com
- Téléphone : +33 6 62 60 04 73
- Localisation : Bordeaux, France

---

Créé avec 💜 par Majda Mhaili
