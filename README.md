# Skill Tracker — Vercel Deployment

## Klasör Yapısı
```
skill-tracker/
├── api/
│   ├── auth.js        # Şifre doğrulama endpoint
│   └── ai.js          # OpenAI proxy endpoint
├── public/
│   ├── index.html     # Ana uygulama
│   ├── login.html     # Giriş sayfası
│   └── manifest.json  # PWA manifest
├── vercel.json        # Routing config
└── README.md
```

## Kurulum (15 dakika)

### 1. GitHub Private Repo
```bash
git init
git add .
git commit -m "Initial commit"
# GitHub'da yeni private repo aç, push la
git remote add origin https://github.com/KULLANICI/skill-tracker.git
git push -u origin main
```

### 2. Vercel Deploy
1. vercel.com → "Add New Project"
2. GitHub repo'nu seç
3. Deploy butonuna bas

### 3. Environment Variables (Vercel Dashboard → Settings → Environment Variables)
| Key | Value |
|-----|-------|
| `SKILL_PASSWORD` | kendi şifren (ör: München2026!) |
| `AUTH_TOKEN` | rastgele string (ör: tarik_sk_2026_xyz) |
| `OPENAI_API_KEY` | sk-... (OpenAI API key) |

### 4. Redeploy
Environment variables ekledikten sonra Vercel'de "Redeploy" yap.

### 5. iPhone'a Yükle (PWA)
1. Safari'de `https://skill-tracker.vercel.app` aç
2. Paylaş butonu → "Ana Ekrana Ekle"
3. Artık uygulama gibi açılır

## Güvenlik
- Şifre Vercel sunucusunda, kodda görünmez
- OpenAI API key tarayıcıya gitmez
- Cookie HttpOnly + Secure — XSS'e karşı korumalı
- GitHub repo private
