# ⚙️ CONFIGURATION NETLIFY IDENTITY — ÉTAPES CRITIQUES

## 🎯 3 ÉLÉMENTS CLÉS À VÉRIFIER

Votre admin ne s'affiche pas? C'est **très probablement** parce que ces 3 éléments ne sont pas configurés dans Netlify.

### ✅ ÉTAPE 1: ACTIVER NETLIFY IDENTITY

**Location:** Dashboard Netlify → Site: visionary-tartufo-dc785c

1. Cliquez sur votre **site** dans Netlify Dashboard
2. Allez dans **Site settings**
3. Cherchez l'onglet **Identity** (à gauche)
4. Cliquez **Enable Identity**
5. Vous devriez voir: "Identity is enabled"

**Status attendu:** 🟢 Identity enabled

---

### ✅ ÉTAPE 2: ACTIVER GIT GATEWAY

**Location:** Dashboard Netlify → Identity → Services

1. Dans **Identity**, cherchez **Services** (onglet)
2. Vous devriez voir: **Git Gateway** (nom peut varier)
3. Si vous voyez un bouton **Enable**, cliquez-le
4. Après 30 secondes, vous devriez voir un statut vert

**Status attendu:** 🟢 Git Gateway enabled

---

### ✅ ÉTAPE 3: CONFIGURER GITHUB OAUTH

**Location:** Dashboard Netlify → Site settings → Identity → Access control

1. Dans **Site settings** → **Identity** → **Access control** (tab)
2. Cherchez **OAuth providers** ou **OAuth**
3. Vous devriez voir **GitHub** ou un bouton **Install**
4. Si vous ne voyez rien, cliquez **"Install the authorization application"**
5. Sélectionnez votre repository `Project-Sport`
6. Autorisez l'application

**Status attendu:** 🟢 GitHub OAuth provider connected

---

## 👥 ÉTAPE 4 (OPTIONNELLE): INVITER UN UTILISATEUR

Si vous voulez donner accès à d'autres personnes:

**Location:** Dashboard Netlify → Identity → Users

1. Cliquez **Invite user**
2. Entrez l'email
3. Cliquez **Send**
4. L'utilisateur reçoit un email d'invitation
5. Il accepte et définit un mot de passe

---

## 🔗 ACCÈS À L'INTERFACE

Après ces configurations:

```
https://visionary-tartufo-dc785c.netlify.app/admin
```

Vous verrez:
- ✅ Bouton login "Netlify Identity"
- ✅ Vous pouvez vous connecter
- ✅ Accédez à la collection Blog

---

## 📸 VISUELS ATTENDUS

### Homepage (fonctionne):
```
✅ https://visionary-tartufo-dc785c.netlify.app/
```

### Blog (fonctionne):
```
✅ https://visionary-tartufo-dc785c.netlify.app/blog
```

### Admin (DEVRAIT fonctionner après config):
```
✅ https://visionary-tartufo-dc785c.netlify.app/admin
   ↓
   Decap CMS Login Screen
   ↓
   Blog Collection
   ↓
   Manage Articles
```

---

## 🆘 PROBLÈMES COURANTS

### Problème 1: "This site doesn't have Identity enabled"
**Solution:** Vous n'avez pas activé Identity (Étape 1)

### Problème 2: Admin page shows blank/error
**Solution:** Git Gateway n'est pas activé (Étape 2)

### Problème 3: Can't login with GitHub
**Solution:** GitHub OAuth n'est pas configuré (Étape 3)

### Problème 4: Admin page redirects to home
**Solution:** Check netlify.toml redirects (vérifiez que vous avez poussé les changements)

---

## ✅ CHECKLIST NETLIFY

Cochez ces éléments dans Dashboard Netlify:

- [ ] Site name: visionary-tartufo-dc785c
- [ ] Identity: Enabled (green)
- [ ] Git Gateway: Enabled (green)
- [ ] GitHub OAuth: Configured (visible in Access control)
- [ ] Build settings: npm run build, publish: dist
- [ ] Latest deploy: Published (green)

---

## 📱 TEST D'ACCÈS

**Dans 2-3 minutes après le déploiement Netlify:**

1. Allez à `/admin`
2. Vous devriez voir l'écran de login Decap CMS
3. Cliquez **"Login with Netlify Identity"**
4. Loggez-vous avec votre email
5. Vous accédez à la collection Blog

---

## 💡 CONSEIL

Si l'admin **s'affiche** mais que:
- Vous ne pouvez pas vous connecter → Vérifiez Étape 3 (GitHub OAuth)
- Vous êtes connecté mais voyez erreur → Vérifiez que le `config.yml` est valide
- Les articles ne sauvegardent pas → Vérifiez que Git Gateway est vraiment activé

---

**Configuration requise:** ✅ Complete
**Status:** Attendez le redéploiement Netlify (1-2 min)
**Prochaine étape:** Allez à `/admin` et testez la connexion

---

*Mise à jour: 27 février 2025*
