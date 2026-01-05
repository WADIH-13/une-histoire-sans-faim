# 📚 Une Histoire Sans Faim

> Plateforme collaborative de storytelling avec micro-donations pour une cause charitable

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC)
![Prisma](https://img.shields.io/badge/Prisma-5.7-2D3748)

## 🎯 Concept

**Une Histoire Sans Faim** est une plateforme innovante où les utilisateurs écrivent collaborativement des histoires. Pour ajouter un nouveau chapitre, chaque utilisateur fait une micro-donation de 1€. Une IA sélectionne le meilleur chapitre parmi les contributions, et les fonds collectés sont redistribués entre les auteurs, les fondateurs et une association caritative.

## ✨ Fonctionnalités

### 🖋️ Storytelling Collaboratif
- Écriture de chapitres jusqu'à 1000 mots
- Interface d'écriture intuitive et sans distraction
- Résumé IA de l'histoire en cours

### 🤖 Intelligence Artificielle
- **Adjudicateur IA** : Sélection automatique du meilleur chapitre
- **Modération IA** : Filtrage du contenu inapproprié
- **Résumé IA** : Synthèse de l'histoire pour les nouveaux lecteurs
- **Chatbot IA** : Assistant pour répondre aux questions

### 💰 Micro-donations
- Paiement sécurisé via Stripe (1€ par chapitre)
- Redistribution équitable :
  - 15% au meilleur auteur
  - 30% aux fondateurs
  - 55% à l'association "Le guide d'essor"

### 🎨 Design Élégant
- Interface minimaliste et moderne
- Palette de couleurs apaisante
- Expérience mobile optimisée

## 🛠️ Stack Technique

### Frontend
- **Next.js 14** (App Router)
- **TypeScript** pour la robustesse
- **Tailwind CSS** pour le design
- **Framer Motion** pour les animations

### Backend
- **Node.js** avec API Routes Next.js
- **Prisma ORM** pour la base de données
- **PostgreSQL** comme base de données

### Intégrations
- **Stripe** pour les paiements
- **OpenAI API** pour l'IA
- **Vercel** pour le déploiement

## 🚀 Installation

### Prérequis
- Node.js 18+
- PostgreSQL
- Comptes Stripe et OpenAI

### Installation locale

```bash
# Cloner le repository
git clone https://github.com/WADIH-13/une-histoire-sans-faim.git
cd une-histoire-sans-faim

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env.local
# Éditer .env.local avec vos clés API

# Configurer la base de données
npx prisma db push
npx prisma db seed

# Lancer en développement
npm run dev
```

## 📁 Structure du Projet

```
une-histoire-sans-faim/
├── app/                    # App Router (Next.js 14)
│   ├── api/               # API Routes
│   ├── components/        # Composants React
│   ├── lib/              # Utilitaires et configurations
│   └── (pages)/          # Pages de l'application
├── prisma/               # Schéma et seeds de la DB
├── public/               # Assets statiques
└── types/                # Types TypeScript
```

## 🎨 Design System

### Couleurs
- **Blanc** : `#FFFFFF` (fond principal)
- **Bleu doux** : `#6366F1` (liens, boutons)
- **Rose chaleureux** : `#EC4899` (accents, notifications)
- **Gris neutre** : `#6B7280` (texte secondaire)

### Typographie
- **Police principale** : Inter (sans-serif)
- **Hiérarchie claire** avec des tailles cohérentes

## 🤝 Contribution

Les contributions sont les bienvenues ! Veuillez lire nos [guidelines de contribution](CONTRIBUTING.md) avant de soumettre une PR.

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👥 Équipe

- **Ilyes & Nour** - Fondateurs
- Développé avec ❤️ pour une cause charitable

## 🎯 Roadmap

- [x] MVP avec fonctionnalités de base
- [ ] Système de gamification
- [ ] Application mobile
- [ ] Intégration réseaux sociaux
- [ ] Programme d'ambassadeurs

---

**Ensemble, écrivons une histoire qui compte** ✨
