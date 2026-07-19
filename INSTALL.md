# Installation

## 1. Prerequisites

- **Node.js** version **20** or later

## 2. Get the Code

Clone or download the repository and navigate into the project directory:

```bash
cd orbit-blog
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Environment Variables

Copy the example environment file and edit if needed:

```bash
cp .env.example .env
```

The only supported variable is `PORT` (default `4321`).

## 5. Run the Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:4321` (or your configured `PORT`).

## 6. Build for Production

Generate a static site in the `dist/` directory:

```bash
npm run build
```

## 7. Preview the Production Build

Serve the built site locally:

```bash
npm run preview
```

## 8. Troubleshooting

- **Node version too old**: ensure `node -v` shows ≥20.0.0.
- **Port already in use**: set a different `PORT` in your `.env` file.
- **Dependencies fail to install**: try deleting `node_modules` and `package-lock.json`, then run `npm install` again.