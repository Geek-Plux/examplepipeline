
# Nuxt 3 Awesome Starter
a Nuxt 3 starter template or boilerplate with a lot of useful features. and integrated with TailwindCSS 3.  

_This template was built to make it easier to create web projects using Nuxt 3. It was originally designed for coursework and portfolio templates. (hence there will be lots of ui components for easy reuse)_

> **NOTES** 
> - This Project using "pnpm" as package manager. (not npm or yarn)!!! 
> - Nuxt 3 now in stable version
> - Breaking changes tracker can be found [here](https://github.com/nuxt/framework/discussions/2883)  
> - Roadmap can be found [here](https://v3.nuxtjs.org/community/roadmap)

## Features
- [x] 💨 [Tailwind CSS v3](https://tailwindcss.com/) with [Windicss](https://windicss.org/)
- [x] ✨ [Headless UI](https://headlessui.dev/)
- [x] 🔔 [Icon Pack Component (unplugin-icons)](https://icones.js.org/)
- [x] 🛹 [State & Store Management (Pinia)](https://pinia.vuejs.org/)
- [x] 🚩 [Localization (i18n) by @intlify](https://github.com/intlify/nuxt3) & Auto Generate Locales
- [x] 📦 [Vue Composition Collection (Vueuse)](https://vueuse.org/)
- [x] 📚 [Content Management System (Nuxt Content)](https://content.nuxtjs.org/) [SSR]
- [x] 🌙 Switch Theme (light, dark, system, realtime)
- [x] 🇮🇩 Language Switcher
- [x] 🪝 Built-in Component & Layout
- [x] Eslint & Prettier
- [x] Husky & Commitlint
- [x] Custom Workspace Snippets
- [x] Built-in Unit Test
- [x] Configurable Theme
  - [x] Primary Colors
  - [x] Font

## To Do
- [ ] Adding HTTP Client

## Preview
<table align="center">
  <tr>
    <td align="center" width="100%" colspan="2">
      <img src="https://github.com/viandwi24/nuxt3-awesome-starter/blob/main/assets/images/preview_new.png?raw=true" alt="Preview" title="Preview">
    </td>
  </tr>
  <tr>
    <td align="center" width="75%">
      <img src="https://github.com/viandwi24/nuxt3-awesome-starter/blob/main/assets/images/preview.gif?raw=true" alt="Preview" title="Preview">
    </td>
    <td align="center" width="25%">
      <img src="https://github.com/viandwi24/nuxt3-awesome-starter/blob/main/assets/images/preview_mobile.gif?raw=true" alt="Preview" title="Preview">
    </td>
  </tr>
</table>
<p align="center">
  <br>
  <a href="https://nuxt3-awesome-starter.vercel.app/" target="_blank">
    Live Demo
  </a>
  <br><br>
  <a href="https://codesandbox.io/s/github/viandwi24/nuxt3-awesome-starter" title="Open In Code Sandbox">
    <img src="https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandboxg" alt="Open In Code Sandbox">
  </a>
  <br>
  <a href="https://stackblitz.com/github/viandwi24/nuxt3-awesome-starter" title="Open In Stackblitz">
    <img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt="Open In Stackblitz">
  </a>
</p>

## Table of Contents
- [Nuxt 3 Awesome Starter](#nuxt-3-awesome-starter)
  - [Features](#features)
  - [To Do](#to-do)
  - [Preview](#preview)
  - [Table of Contents](#table-of-contents)
  - [Quick Start](#quick-start)
    - [Start with this template](#start-with-this-template)
    - [Deploy as Static Site](#deploy-as-static-site)
  - [Built-in Components](#built-in-components)
  - [Notes](#notes)
    - [Nuxt Content](#nuxt-content)
    - [Custom Workspace Snippets](#custom-workspace-snippets)
    - [Styles](#styles)
    - [Theme (Dark Mode)](#theme-dark-mode)
    - [Localization](#localization)
    - [Generate Locales](#generate-locales)
    - [Icons](#icons)
    - [Precommit and Postmerge](#precommit-and-postmerge)
  - [License](#license)

## Quick Start
For detail information, go here [Getting Started](https://nuxt3-awesome-starter.vercel.app/getting-started)
### Start with this template
* This project using `pnpm` as package manager.
* Clone this project to your computer `git clone https://github.com/viandwi24/nuxt3-awesome-starter`
* Install dependencies `pnpm install --shamefully-hoist`
* Run `pnpm dev` to start development server and open `http://localhost:3000` in your browser
### Deploy as Static Site
* Run `pnpm generate` to build the project
* Serve `dist/` folder
Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).


## Built-in Components
- [x] Footer
- [x] Button
- [x] Anchor (link)
- [x] Alert
- [x] Card
- [x] Action Sheet
- [x] Theme Toggle / Switcher
- [x] Navbar
  - [x] Navbar Builder
  - [x] Drawer (on mobile)
  - [x] Options (on mobile)
- [x] Page Layout
  - [x] Wrapper
  - [x] Header
    - [x] Title