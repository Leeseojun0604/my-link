# MyLink Project Guide

## 1. Project Overview
**MyLink** is a unified profile link service that allows users to gather and share their scattered work, social links, and portfolios on a single page. It targets developers and creators, aiming to provide a concise and intuitive management experience.

### Core Tech Stack
- **Framework**: Next.js 16 (App Router, Turbopack)
- **Styling**: Tailwind CSS v4, shadcn/ui (base-vega style)
- **UI Components**: Radix UI (via shadcn), Base UI, Hugeicons
- **State/Theme**: next-themes (Dark/Light mode support)
- **Backend (Planned)**: Firebase (Authentication - Google Login, Firestore)
- **Language**: TypeScript

## 2. Key Features & User Scenarios (Based on PRD/User Scenario)
- **Auth & Onboarding**: Google Social Login via Firebase. Gmail ID is extracted as the initial `displayName`.
- **Profile Management**: Edit and save `displayName` (URL slug), `username` (actual name), and `bio`.
- **Link Management (CRUD)**:
  - **Add**: Automatically fetch icons via Google Favicon API upon adding titles and URLs.
  - **Inline Editing**: Click text areas in the list to switch to input forms instantly. Auto-save on Enter or Blur.
  - **Delete**: Finalize deletion via a Confirm Alert.
- **SEO**: Basic Open Graph support (thumbnail, title, description) for profile sharing.

## 3. UI/UX Design Guide (Based on Wireframe)
- **Dashboard Structure**:
  - Top: Logo and Logout button.
  - Center Top: Profile Management section (`displayName`, `username`, `bio`).
  - Center Bottom: Link addition form and link list (sorted by latest).
- **Design Principles**: 
  - Focused layout on form elements and list editing, excluding complex mobile preview panels.
  - Intuitive and fast editing experience via Inline Editor.
  - Dark mode support and consistent iconography using `hugeicons`.

## 4. Commands
- **Dev Server**: `npm run dev` (Turbopack)
- **Build**: `npm run build`
- **Start**: `npm run start`
- **Lint**: `npm run lint`
- **Format**: `npm run format` (Prettier)
- **Type Check**: `npm run typecheck`
- **Add UI Component**: `npx shadcn@latest add [component-name]`

## 5. Development Conventions & Structure
- **Directory Structure**:
  - `@app/`: Next.js App Router pages and layouts.
  - `@components/ui/`: shadcn/ui common components.
  - `@components/`: Business logic-related reusable components.
  - `@lib/`: Utility functions (e.g., `cn`).
  - `@hooks/`: Custom React Hooks.
  - `@.docs/`: PRD, User Scenarios, and other planning docs.
- **Component Authoring**:
  - Prioritize `shadcn/ui` components; use Tailwind CSS v4 for custom styles.
  - Use `@hugeicons/react` for icons.
- **Coding Style**:
  - Follow ESLint and Prettier configurations (`npm run format` recommended).
  - Use strict TypeScript for type safety.

## 6. Additional Notes
- Design system remains a single system without custom themes, but supports Dark Mode by default.
- Focus on large, intuitive inline editing UX on desktop rather than a mobile preview panel.
- Direct image upload is currently out of scope.
