# 🚀 DEPLOYMENT GUIDE — PROJECT SPORT

## ✅ Pre-Deployment Checklist

- [x] All source files created and organized
- [x] 6 example articles with realistic content
- [x] Blog with pagination (6 articles/page)
- [x] Tag system with independent pages
- [x] Local search functionality
- [x] Decap CMS admin interface
- [x] Netlify Forms contact form
- [x] Full SEO optimization
- [x] Production build successful (39 files, 472KB)
- [x] All components responsive and styled

---

## 🌐 STEP-BY-STEP NETLIFY DEPLOYMENT

### STEP 1: Initialize Git Repository

```bash
cd /workspaces/Project-Sport
git init
git add .
git commit -m "Initial commit: Project Sport website"
git branch -M main
```

### STEP 2: Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create new repository: `Project-Sport`
3. Choose your username/organization
4. **Important**: Do NOT initialize with README (you have one)
5. Click "Create repository"

### STEP 3: Push to GitHub

```bash
git remote add origin https://github.com/YOUR-USERNAME/Project-Sport.git
git push -u origin main
```

### STEP 4: Netlify Site Creation

**Option A: Direct Connect (Recommended)**

1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Select **GitHub** as provider
4. Authorize Netlify for GitHub
5. Search for and select `Project-Sport`
6. Build settings should auto-detect:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
7. Click **"Deploy site"**

**Option B: Via Netlify CLI**

```bash
npm install -g netlify-cli
netlify init
# Follow prompts to connect and deploy
```

### STEP 5: Enable Netlify Identity

**After site is deployed:**

1. Go to **Site settings** → **Identity**
2. Click **"Enable Identity"**
3. Go to **Settings** → **Identity** → **Services**
4. Click **"Enable Git Gateway"**

### STEP 6: Configure OAuth (GitHub Login)

1. Go to **Access control** → **OAuth**
2. Click **"Install the authorization application"**
3. Select repository `YOUR-USERNAME/Project-Sport`
4. Authorize app
5. GitHub OAuth is now configured

### STEP 7: Add Admin Users

1. Go to **Identity** → **Users**
2. Click **"Invite user"**
3. Enter email address
4. Send invitation

**Guest receives email with login link:**
- Click invitation link
- Set password
- Now can access `/admin` to manage content

---

## 📝 FIRST ADMIN LOGIN

1. Go to `https://your-site.netlify.app/admin`
2. Click **"Login with Netlify Identity"**
3. Enter email and password
4. You're in! ✅

---

## ✍️ MANAGING CONTENT

### Creating New Article (Admin UI)

1. Login at `/admin`
2. Go to **Blog** collection (left sidebar)
3. Click **"New Blog"** button
4. Fill form fields:
   - **Title**: Article headline
   - **Date**: Publication date
   - **Excerpt**: 1-2 sentence summary
   - **Cover Image**: Upload or paste URL
   - **Tags**: Add free-form tags (e.g., "fitness", "yoga")
   - **Video URL** (optional): Embed YouTube link
   - **Draft**: Toggle if not ready to publish
   - **Body**: Markdown content
5. Click **"Save"**
6. Changes auto-commit to `main` branch
7. Site auto-rebuilds (~1-2 minutes)

### Publishing Schedule

When you save an article, it:
1. Commits to GitHub
2. Triggers Netlify build
3. Generates static site
4. Deploys to CDN
5. **Live** in 1-2 minutes

### Editing Existing Article

1. Go to **Blog** in admin
2. Click article to edit
3. Make changes
4. **Save**
5. Auto-deployed

### Deleting Article

1. Click article in Blog collection
2. Click **"Delete"** (trash icon)
3. Confirm deletion
4. Auto-committed

---

## 🔍 VERIFYING DEPLOYMENT

### Check Homepage
```
https://your-site.netlify.app
```
Should show:
- Orange accent color
- Hero section
- Services cards
- Recent blog articles
- Footer

### Check Blog
```
https://your-site.netlify.app/blog
```
Should show:
- 6 articles in grid (or first 6)
- Pagination to page 2
- Search bar

### Check Tags
```
https://your-site.netlify.app/blog/tags
```
Should show:
- All 18 tags used
- Article counts per tag

### Check Admin
```
https://your-site.netlify.app/admin
```
Should show:
- Netlify Identity login
- Blog collection with 6 articles

### Check Search Index
```
https://your-site.netlify.app/search-index.json
```
Should show:
- JSON array with 6 articles
- Title, excerpt, tags per article

---

## 🎨 INITIAL CUSTOMIZATION

### Update Site Domain
Change site name in Netlify:
1. **Site settings** → **Domain management**
2. Use custom domain
3. Add your domain (e.g., coachsportif.fr)
4. Follow DNS setup instructions

### Update Site Info
Edit values in source code:

**1. Site URL** (`astro.config.mjs`)
```js
export default defineConfig({
  site: 'https://your-domain.com',
  // ...
});
```

**2. Contact Info** (`src/components/Footer.astro`)
```astro
<li>📧 your-email@example.com</li>
<li>📞 +33 6 XX XX XX XX</li>
```

**3. Service Pricing** (`src/pages/services.astro`)
- Update prices
- Update descriptions

### Update Colors
Edit `tailwind.config.cjs`:
```js
colors: {
  accent: '#f97316',  // Change to your brand color
}
```

---

## 🔒 SECURITY BEST PRACTICES

### 1. Protect Sensitive Info
- Never commit API keys to repo
- Use Netlify Environment Variables for secrets
- Location: **Site settings** → **Build & deploy** → **Environment**

### 2. Limit Admin Access
- Only invite trusted users
- Decap CMS has audit trail
- Git commits show all changes

### 3. Backup Repository
- Always push to GitHub
- All content is in git history
- Easy to rollback if needed

---

## 🆘 TROUBLESHOOTING

### Issue: Admin page is blank/404
**Solution:**
- Ensure `public/admin/` files exist
- Rebuild site: Go to Netlify → **Deploys** → click latest → **Trigger deploy**
- Check `/admin` path in netlify.toml

### Issue: Form not working
**Solution:**
- Ensure form has `name="contact"` attribute
- Set `data-netlify="true"` on `<form>`
- Check **Netlify** → **Forms** to see submissions

### Issue: Can't login to admin
**Solution:**
- Ensure **Identity** is enabled
- Ensure **Git Gateway** is enabled
- Try clearing browser cache
- Check email for invitation

### Issue: Changes not showing after deploy
**Solution:**
- Force refresh: `Ctrl+Shift+R` (or `Cmd+Shift+R`)
- Check Netlify deploy log for errors
- Ensure article has `draft: false`

### Issue: Search index not working
**Solution:**
- Check `dist/search-index.json` exists
- Should have all articles
- Try `npm run build` locally
- Deploy should pick up new index

---

## 📊 BUILD & DEPLOYMENT TIME

Typical timings:

| Step | Time |
|------|------|
| npm install | 45s |
| npm run build | 4s |
| Netlify build | 1-2 min |
| CDN deployment | ~10s |
| **Total** | **~2-3 min** |

---

## 📈 COMMON TASKS

### Add New Service
Edit `src/pages/services.astro`:
1. Duplicate a ServiceCard component call
2. Update title, description, icon, price
3. Commit and push
4. Auto-deployed

### Add Testimonial
Edit `src/components/Testimonials.astro`:
1. Add new testimonial div
2. Update quote, author name
3. Commit and push

### Update Home Services Section
Edit `src/pages/index.astro`:
1. Modify ServiceCard parameters
2. Change descriptions
3. Commit and push

### Create Redirect (URL change)
Edit `netlify.toml`:
```toml
[[redirects]]
  from = "/old-path"
  to = "/new-path"
  status = 301
```

---

## 🚀 PERFORMANCE MONITORING

### Check Lighthouse Score
1. Netlify Deploy Log → **Lighthouse** tab
2. Should see scores 90+

### Monitor Build Log
1. **Netlify** → **Deploys** tab
2. Click deploy to see log
3. Check for errors/warnings

### View Analytics
- Netlify Basic Analytics: **Site settings** → **Analytics**
- Or connect Google Analytics

---

## 💡 DEPLOYMENT TIPS

1. **Always test locally first**
   ```bash
   npm run build
   npm run preview
   ```

2. **Use meaningful commit messages**
   ```bash
   git commit -m "Add fitness tip article with HIIT workout"
   ```

3. **Batch commits when possible**
   ```bash
   # Better than 10 tiny commits
   git add .
   git commit -m "Update pricing and add 2 new testimonials"
   git push
   ```

4. **Use draft mode for scheduling**
   ```yaml
   draft: true  # Hide until ready
   ```

5. **Test all pages after major update**
   - Homepage
   - Blog page 1
   - Blog page 2
   - Tag pages
   - Contact form
   - Admin interface

---

## 📞 SUPPORT RESOURCES

- [Astro Deployment Docs](https://docs.astro.build/en/guides/deploy/)
- [Netlify Docs](https://docs.netlify.com/)
- [Decap CMS Docs](https://decapcms.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

## ✅ DEPLOYMENT CHECKLIST (Final)

Before going live:

- [ ] GitHub repository created and pushed
- [ ] Netlify site connected
- [ ] Identity enabled
- [ ] Git Gateway enabled
- [ ] GitHub OAuth configured
- [ ] Admin user invited (you)
- [ ] Contact form tested
- [ ] All pages responsive (mobile check)
- [ ] Search working
- [ ] Blog pagination working
- [ ] Tags clickable and filtering
- [ ] Meta tags set correctly
- [ ] Domain configured (optional)
- [ ] SSL certificate active (auto with Netlify)

---

## 🎉 YOU'RE LIVE!

Your **static, high-performance coaching website** is now deployed and ready for visitors.

**Features Ready to Use:**
- ✅ Blog with 6 articles
- ✅ Admin interface for content management
- ✅ Contact form for client inquiries
- ✅ Local search across articles
- ✅ Tag-based content organization
- ✅ Full responsive design
- ✅ SEO optimized

**Next Steps:**
1. Customize branding/colors
2. Add more articles
3. Invite team members to admin
4. Monitor analytics
5. Scale to thousands of articles

---

**Built with Astro + Tailwind CSS + Decap CMS**  
**Deployed on Netlify (100% static)**  
**Production-ready February 27, 2025**
