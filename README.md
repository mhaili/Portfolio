# Portfolio de Majda Mhaili 💜

Un portfolio moderne et élégant créé avec Next.js, TypeScript et Tailwind CSS.

## Démarrage rapide

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

## Structure du projet

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

## 🚀 Déploiement sur VPS



###  Avec Docker

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


Activez le site :

```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

##  Technologies utilisées

- **Framework** : Next.js 14
- **Langage** : TypeScript
- **Styling** : Tailwind CSS

##  Prochaines étapes suggérées

1. Ajouter des projets
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
