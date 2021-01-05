<template>
  <BuilderNavbar>
    <template #menu>
      <div class="relative hidden lg:flex items-center ml-auto">
        <div class="flex items-center justify-center">
          <img
            class="w-6 h-6 rounded-full"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            alt="Avatar of Jonathan Reinink"
          />
          <span class="ml-2 text-sm font-semibold">Alfian</span>
          <IconUil:angle-down />
        </div>
        <div
          class="flex space-x-4 border-l ml-6 pl-6 border-gray-900/10 dark:border-gray-50/[0.2]"
        >
          <LanguageSwitcher />
          <ThemeSwitcher />
          <Anchor
            class="hover:no-underline hover:text-slate-900 hover:dark:text-white text-lg flex self-center items-center"
            href="https://github.com/viandwi24/nuxt3-awesome-starter"
            title="Github"
          >
            <IconMdi:git