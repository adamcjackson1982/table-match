<template>
  <div class="min-h-screen flex flex-col bg-gradient-dark">
    <!-- Background effects -->
    <div class="fixed inset-0 bg-grid opacity-30 pointer-events-none" />
    <div class="fixed top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
    <div class="fixed bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

    <AppHeader />

    <main class="flex-1 pt-20">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
