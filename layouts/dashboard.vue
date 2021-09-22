<template>
  <div>
    <slot name="app-before" />
    <div id="app-before"></div>
    <div class="flex flex-col min-h-screen">
      <slot name="header">
        <DashboardNavbar>
          <template #drawer>
            <DashboardSidebar mode="mobile" />
          </template>
