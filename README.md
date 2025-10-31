# OpenBlog

A small React + Appwrite blog starter built with Vite, TailwindCSS and TinyMCE.

A responsive blog with storage support and a clean user interface. It uses Authentication of 'Appwrite' and for store images also.

## Quick clone & run (Windows PowerShell)

1. Clone repository
```powershell
git clone https://github.com/animeshkhanra2022/Twixy.git
cd twixy
```

2. Install dependencies and run dev server
```powershell
npm install
npm run dev
```

3. Build for production
```powershell
npm run build
```
## Structure of this folder:
```
OpenBlog/
├─ .git/
├─ .gitignore
├─ .env
├─ .env.example
├─ README.md
├─ index.html
├─ package.json
├─ package-lock.json
├─ vite.config.js
├─ tailwind.config.js
├─ postcss.config.js
└─ src/
   ├─ main.jsx
   ├─ App.jsx
   ├─ index.css
   ├─ appwrite/
   │  ├─ auth.js        # Authentication service
   │  └─ config.js      # Appwrite configuration & services
   ├─ components/
   │  ├─ Button.jsx
   │  ├─ Container.jsx
   │  ├─ Header.jsx
   │  ├─ Input.jsx
   │  ├─ Login.jsx
   │  ├─ Logo.jsx
   │  ├─ LogoutBtn.jsx
   │  ├─ PostCard.jsx
   │  ├─ RTE.jsx        # Rich Text Editor
   │  ├─ Select.jsx
   │  ├─ Signup.jsx
   │  ├─ AuthLayout.jsx # Protected route wrapper
   │  └─ index.js       # Components export file
   ├─ conf/
   │  └─ conf.js        # Environment configuration
   ├─ pages/
   │  ├─ AddPost.jsx
   │  ├─ AllPosts.jsx
   │  ├─ EditPost.jsx
   │  ├─ Home.jsx
   │  ├─ Login.jsx
   │  ├─ Post.jsx
   │  └─ Signup.jsx
   └─ store/
      ├─ authSlice.js   # Redux auth slice
      └─ store.js       # Redux store configuration
```

This structure shows:
- Root configuration files (.env, vite.config.js etc)
- Source code in `src/` directory
- Modular organization with separate folders for:
  - Components (reusable UI components)
  - Pages (route components)
  - Appwrite services
  - Redux store
  - Configuration

Key aspects:
- All React components are `.jsx` files
- Configuration and services are `.js` files
- Components are organized by feature/purpose
- Clear separation between pages and reusable components
- Central exports through `index.js` in components folder

## Environment

- Copy `.env.sample` (or create `.env`) and provide values:
  - VITE_APPWRITE_URL
  - VITE_APPWRITE_PROJECT_ID
  - VITE_APPWRITE_DATABASE_ID
  - VITE_APPWRITE_COLLECTION_ID
  - VITE_APPWRITE_BUCKET_ID
  - VITE_TINY_MCE_API_KEY

- Do NOT commit `.env`. To stop tracking if already committed:
```powershell
git rm --cached .env
git add .gitignore
git commit -m "Stop tracking .env and ignore env files"
git push
```

If secrets were pushed to a public repo, rotate them immediately and consider rewriting history (BFG or git filter-repo).

## What this app does

- User auth (signup/login) using Appwrite.
- CRUD posts stored in Appwrite Database.
- File upload & preview using Appwrite Storage.
- Rich text editing with TinyMCE.
- React + Vite + Tailwind stack, with a small Redux store for auth/state.

Key files:
- src/appwrite/config.js — Appwrite service (create/update/delete/list posts, file upload)
- src/appwrite/auth.js — authentication helper
- src/conf/conf.js — environment/config adapter
- src/components — UI components (PostForm, RTE, AuthLayout, etc.)
- src/pages — Routes / pages (Home, AllPost, Post)
- package.json — scripts and deps

## Usage notes & gotchas

- Ensure Appwrite project, database, collection and bucket IDs match `.env`.
- TinyMCE requires an API key for advanced features.
- Many service methods currently log errors and return falsy values; UI error handling can be improved.

## Future work (planned)

- Add posts slice and client-side caching in Redux.
- Improve error handling and show user-friendly messages.
- Implement pagination, search and filters for posts.
- Better image upload UX (progress, resizing/optimization).
- Optimistic UI updates for create/update/delete operations.
- Add unit tests and end-to-end tests (Vitest / Playwright).
- CI for linting, testing and production builds.
- Add role-based access controls and admin dashboard.


## License

Add license information here.