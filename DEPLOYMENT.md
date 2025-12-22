# Portfolio - Guide de déploiement sur VPS

## 📋 Prérequis

- Un VPS avec Ubuntu/Debian
- Accès SSH au serveur
- Node.js 18+ installé
- Nom de domaine (optionnel mais recommandé)

## 🚀 Déploiement étape par étape

### 1. Connexion au VPS

```bash
ssh votre-user@ip-du-serveur
```

### 2. Installation de Node.js (si nécessaire)

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
node --version
npm --version
```

### 3. Installation de Git (si nécessaire)

```bash
sudo apt-get update
sudo apt-get install git
```

### 4. Cloner le projet sur le VPS

```bash
cd /var/www
sudo mkdir portfolio
sudo chown $USER:$USER portfolio
cd portfolio

# Si vous utilisez Git
git clone votre-repo-url .

# Ou transférez les fichiers via SCP depuis votre machine locale :
# scp -r /chemin/vers/Portfolio/* user@ip-serveur:/var/www/portfolio/
```

### 5. Installation des dépendances

```bash
cd /var/www/portfolio
npm install
```

### 6. Build du projet

```bash
npm run build
```

### 7. Installation de PM2

PM2 est un gestionnaire de processus qui garde votre application en vie.

```bash
sudo npm install -g pm2
```

### 8. Démarrage avec PM2

```bash
pm2 start npm --name "portfolio-majda" -- start
pm2 save
pm2 startup
```

Exécutez la commande affichée par `pm2 startup`.

### 9. Vérification

```bash
pm2 status
pm2 logs portfolio-majda
```

Votre site est maintenant accessible sur `http://ip-du-serveur:3000`

## 🌐 Configuration Nginx (recommandé)

Pour utiliser un nom de domaine et le port 80/443 :

### 1. Installation de Nginx

```bash
sudo apt-get update
sudo apt-get install nginx
```

### 2. Configuration du site

```bash
sudo nano /etc/nginx/sites-available/portfolio
```

Ajoutez :

```nginx
server {
    listen 80;
    server_name votre-domaine.com www.votre-domaine.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 3. Activation du site

```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 4. Configuration du firewall

```bash
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw enable
```

## 🔒 HTTPS avec Let's Encrypt (recommandé)

### 1. Installation de Certbot

```bash
sudo apt-get install certbot python3-certbot-nginx
```

### 2. Obtention du certificat SSL

```bash
sudo certbot --nginx -d votre-domaine.com -d www.votre-domaine.com
```

Suivez les instructions. Certbot configurera automatiquement Nginx.

### 3. Renouvellement automatique

```bash
sudo certbot renew --dry-run
```

Le renouvellement automatique est configuré par défaut.

## 🔄 Mises à jour du portfolio

### Script de déploiement automatique

Créez un fichier `deploy.sh` :

```bash
#!/bin/bash

cd /var/www/portfolio

# Pull les dernières modifications
git pull origin main

# Installation des nouvelles dépendances
npm install

# Build
npm run build

# Redémarrage de PM2
pm2 restart portfolio-majda

echo "✅ Déploiement terminé !"
```

Rendez-le exécutable :

```bash
chmod +x deploy.sh
```

Pour déployer les mises à jour :

```bash
./deploy.sh
```

## 📊 Commandes PM2 utiles

```bash
# Voir les logs
pm2 logs portfolio-majda

# Voir le status
pm2 status

# Redémarrer l'application
pm2 restart portfolio-majda

# Arrêter l'application
pm2 stop portfolio-majda

# Supprimer l'application de PM2
pm2 delete portfolio-majda

# Monitorer en temps réel
pm2 monit
```

## 🐛 Résolution de problèmes

### Le site ne se charge pas

```bash
# Vérifier que Next.js tourne
pm2 status
pm2 logs portfolio-majda

# Vérifier Nginx
sudo systemctl status nginx
sudo nginx -t

# Vérifier les ports
sudo netstat -tulpn | grep :3000
```

### Erreurs de permission

```bash
sudo chown -R $USER:$USER /var/www/portfolio
```

### Problème de mémoire

```bash
# Augmenter la mémoire Node.js
pm2 delete portfolio-majda
pm2 start npm --name "portfolio-majda" --node-args="--max-old-space-size=4096" -- start
```

## 📈 Optimisations supplémentaires

### 1. Compression Gzip

Ajoutez dans votre config Nginx :

```nginx
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
```

### 2. Cache des assets

```nginx
location /_next/static {
    alias /var/www/portfolio/.next/static;
    expires 1y;
    access_log off;
}
```

### 3. Monitoring avec PM2 Plus (optionnel)

```bash
pm2 link [secret-key] [public-key]
```

Créez un compte sur https://app.pm2.io/

## ✅ Checklist de déploiement

- [ ] Node.js installé
- [ ] Projet cloné/transféré sur le VPS
- [ ] Dépendances installées (`npm install`)
- [ ] Build réussi (`npm run build`)
- [ ] PM2 configuré et démarré
- [ ] Nginx installé et configuré
- [ ] Nom de domaine pointé vers le VPS
- [ ] SSL/HTTPS configuré avec Let's Encrypt
- [ ] Firewall configuré
- [ ] Script de déploiement créé
- [ ] Monitoring en place

## 🎉 Votre portfolio est en ligne !

Votre portfolio est maintenant accessible sur :
- `https://votre-domaine.com`

N'oubliez pas de :
1. Mettre à jour régulièrement votre portfolio avec de nouveaux projets
2. Surveiller les logs avec `pm2 logs`
3. Renouveler votre certificat SSL (automatique avec Let's Encrypt)

---

Pour toute question : mhailimajda@gmail.com
