<script setup lang="ts">
const isMenuOpen = ref(false)

const navLinks = [
  { name: 'Features', href: '/features' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Use Cases', href: '/use-cases' },
  { name: 'About', href: '/about' },
  { name: 'FAQ', href: '/faq' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 m-4">
    <div class="glass border-b border-white/10">
      <nav class="container-max section-padding !py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center gap-2" @click="closeMenu">
            <img src="/logo/sub-logo.png" alt="TableMatch" class="h-12 w-auto rounded-lg" />
            <span class="text-xl font-bold">TableMatch</span>
          </NuxtLink>

          <!-- Desktop Navigation -->
          <div class="hidden lg:flex items-center gap-8">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.name"
              :to="link.href"
              class="text-white/70 hover:text-white transition-colors font-medium"
            >
              {{ link.name }}
            </NuxtLink>
          </div>

          <!-- CTA Button -->
          <div class="hidden lg:block">
            <a
              href="https://app.tablematch.com"
              class="btn-primary"
            >
              Launch App
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button
            class="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
            @click="toggleMenu"
            aria-label="Toggle menu"
          >
            <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-4"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-4"
        >
          <div v-if="isMenuOpen" class="lg:hidden mt-4 pt-4 border-t border-white/10">
            <div class="flex flex-col gap-4">
              <NuxtLink
                v-for="link in navLinks"
                :key="link.name"
                :to="link.href"
                class="text-white/70 hover:text-white transition-colors font-medium py-2"
                @click="closeMenu"
              >
                {{ link.name }}
              </NuxtLink>
              <a
                href="https://app.tablematch.com"
                class="btn-primary mt-2"
              >
                Launch App
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </Transition>
      </nav>
    </div>
  </header>
</template>
