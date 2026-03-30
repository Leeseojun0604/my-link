# my-link

## Project Overview
This workspace contains a personal profile and link management project. The main application is located in the `my-profile` directory.

### Core Technologies
- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Library:** [React](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Language:** [TypeScript](https://www.typescript.org/)
- **Runtime:** Node.js

## Project Structure
- `my-profile/`: The main Next.js application.
  - `app/`: Contains routes, layouts, and components (Next.js App Router).
  - `public/`: Static assets like images and icons.
  - `next.config.ts`: Next.js configuration.
  - `package.json`: Project dependencies and scripts.

## Building and Running
Commands should be executed within the `my-profile` directory.

### Development
Run the development server with hot-reloading:
```bash
cd my-profile
npm run dev
```

### Production
Build the application for production:
```bash
cd my-profile
npm run build
```
Start the production server:
```bash
npm run start
```

### Linting
Run ESLint to check for code quality issues:
```bash
cd my-profile
npm run lint
```

## Development Conventions
- **Routing:** Uses the Next.js App Router. New pages should be added as `page.tsx` files within the `app/` directory.
- **Styling:** Tailwind CSS v4 is used for styling. Global styles are located in `my-profile/app/globals.css`.
- **Components:** Prefer functional components with TypeScript for type safety.
- **Icons:** Standard SVG icons are stored in the `public/` directory.
