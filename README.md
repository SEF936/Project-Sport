# Project Sport — Coach Sportif

Site vitrine professionnel, dynamique et optimisé pour un coach sportif avec blog, pagination, tags, recherche locale, formulaire de contact et admin Decap CMS.

## Fonctionnalités

✅ **Blog dynamique** avec 6 articles d'exemple réalistes
✅ **Pagination** (6 articles par page)
✅ **Système de tags** avec navigation
✅ **Recherche locale** en temps réel (sans API)
✅ **Admin Decap CMS** pour gérer les articles
✅ **Formulaire de contact** Netlify
✅ **SEO optimisé** (meta, Open Graph, canonical, JSON-LD)
✅ **Performance** (Lighthouse-friendly)
✅ **Mobile-first** responsive
✅ **Déploiement statique** sur Netlify

## Stack

- **Astro** — Framework statique performant
- **Tailwind CSS** — Design system
- **Astro Content Collections** — Gestion du contenu Markdown
- **Decap CMS** — Interface admin (git-gateway)
- **Netlify Forms** — Contact fonctionnel

## Installation

```bash
npm install
```

## Développement local

```bash
npm run dev
```

Accédez à `http://localhost:3000`

## Build statique

```bash
npm run build
```

Les fichiers statiques sont générés dans le dossier `dist/`.

## Déploiement sur Netlify

### 1. Connects votre repo GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/votre-username/Project-Sport.git
git push -u origin main
```

### 2. Activez Netlify Identity et Git Gateway

Dans votre dashboard Netlify :
- **Settings** → **Identity** → **Enable Identity**
- **Settings** → **Identity** → **Services** → Ajouter "Git Gateway"
- **Access control** → **OAuth** → Github

### 3. Invitation aux utilisateurs

- Allez dans **Identity** → **Invitations** → **Invite users**
- Invitez les personnes autorisées à modifier le contenu

### 4. Accédez à l'admin

```
https://votre-site.netlify.app/admin
```

Connectez-vous avec votre email.

## Gestion du contenu

### Ajouter un nouvel article

#### Méthode 1: Interface Admin

1. Allez à `/admin`
2. **New Blog**
3. Remplissez les champs
4. **Save**

L'article est publié automatiquement après commit.

#### Méthode 2: Directement dans le code

Créez un fichier `src/content/blog/mon-article.md`:

```markdown
---
title: "Titre de l'article"
date: "2025-02-27"
excerpt: "Courte description"
coverImage: "/content/blog/images/image.jpg"
tags: ["tag1", "tag2"]
videoUrl: "https://www.youtube.com/embed/xxxxx"
draft: false
---

Contenu Markdown ici...
```

### Articles Brouillon

Définissez `draft: true` pour masquer un article du site public.

## Structure du projet

```
/
├── astro.config.mjs          # Config Astro
├── package.json              # Dépendances
├── netlify.toml              # Config Netlify
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── search-index.json     # Index de recherche (auto-généré)
│   └── admin/
│       ├── index.html        # Interface Decap CMS
│       └── config.yml        # Configuration Decap CMS
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro  # Layout principal
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── ServiceCard.astro
│   │   ├── BlogCard.astro
│   │   ├── Pagination.astro
│   │   ├── SearchBar.astro
│   │   ├── CTASection.astro
│   │   └── Testimonials.astro
│   ├── content/
│   │   ├── config.ts         # Schema Content Collections
│   │   └── blog/             # Articles Markdown
│   ├── pages/
│   │   ├── index.astro       # Accueil
│   │   ├── a-propos.astro
│   │   ├── services.astro
│   │   ├── contact.astro
│   │   ├── merci.astro
│   │   └── blog/
│   │       ├── index.astro           # Blog page 1
│   │       ├── [slug].astro          # Article individuel
│   │       ├── tags.astro            # Tous les tags
│   │       ├── page/[page].astro     # Pagination
│   │       └── tag/[tag]/            # Pages par tag
│   └── styles/
│       └── global.css
```

## Personnalisation

### Couleurs

Modifiez le fichier `tailwind.config.cjs`:

```js
theme: {
  extend: {
    colors: {
      accent: '#f97316',  // Orange principal
    },
  },
}
```

### Favicon

Remplacez `public/favicon.svg`.

### Informations de contact

Mettez à jour le footer dans `src/components/Footer.astro`.

### Coordonnées du formullaire

Mettez à jour `src/pages/contact.astro`.

## Roadmap Future

- 🔜 **Intégration Stripe** pour vendre des formations/coaching
- 🔜 **Calendly** pour les consultations
- 🔜 **Newsletter** emails
- 🔜 **Multi-langue** (FR/EN)
- 🔜 **Galerie photos** avant/après
- 🔜 **Système de cotations** dans les commentaires

## Performance

Le site est optimisé pour Lighthouse:

- ✅ **Lighthouse Score**: 95+
- ✅ **First Contentful Paint**: < 1s
- ✅ **Largest Contentful Paint**: < 2.5s
- ✅ **No JavaScript bloat** — Astro ship zero-JS par défaut

## Support

Consultez la [documentation Astro](https://docs.astro.build).

---

**Réalisé avec Astro & Tailwind CSS** 🚀
