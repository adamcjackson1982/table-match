<script setup lang="ts">
const currentYear = new Date().getFullYear()

const footerLinks = {
  product: [
    { name: 'Features', href: '/features' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'FAQ', href: '/faq' }
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/faq#contact' }
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ]
}
</script>

<template>
  <footer class="border-t border-white/10 bg-deep-900/50">
    <div class="container-max section-padding !py-12">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
        <!-- Brand -->
        <div class="col-span-2 md:col-span-1">
          <NuxtLink to="/" class="flex items-center gap-2 mb-4">
            <img src="/logo/sub-logo.png" alt="TableMatch" class="h-12 w-auto rounded-lg" />
            <span class="text-xl font-bold">TableMatch</span>
          </NuxtLink>
          <p class="text-white/60 text-sm">
            Your table football matches, elevated. Digital scoreboard and match management for Subbuteo and foosball.
          </p>
        </div>

        <!-- Product Links -->
        <div>
          <h4 class="font-semibold text-white mb-4">Product</h4>
          <ul class="space-y-2">
            <li v-for="link in footerLinks.product" :key="link.name">
              <NuxtLink
                :to="link.href"
                class="text-white/60 hover:text-white transition-colors text-sm"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Company Links -->
        <div>
          <h4 class="font-semibold text-white mb-4">Company</h4>
          <ul class="space-y-2">
            <li v-for="link in footerLinks.company" :key="link.name">
              <NuxtLink
                :to="link.href"
                class="text-white/60 hover:text-white transition-colors text-sm"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- CTA -->
        <div>
          <h4 class="font-semibold text-white mb-4">Get Started</h4>
          <p class="text-white/60 text-sm mb-4">
            No signup required. Just open the app and start playing.
          </p>
          <a
            href="https://app.tablematchapp.com"
            class="btn-primary text-sm !px-4 !py-2"
          >
            Launch App
          </a>
        </div>
      </div>

      <!-- Disclaimer -->
      <div class="mt-12 pt-8 border-t border-white/10">
        <p class="text-white/30 text-xs text-center max-w-3xl mx-auto">
          This is an unofficial fan-made app. Club names, badges, and logos are the property of their respective owners. This app is not affiliated with, endorsed by, or sponsored by any football club, league, or governing body. Team data provided by football-data.org.
        </p>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p class="text-white/40 text-sm">
          &copy; {{ currentYear }} TableMatch. All rights reserved.
        </p>
        <div class="flex gap-6">
          <NuxtLink
            v-for="link in footerLinks.legal"
            :key="link.name"
            :to="link.href"
            class="text-white/40 hover:text-white/60 transition-colors text-sm"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
      </div>

      <!-- Crafted By -->
      <div class="mt-4 text-center">
        <p class="text-white/30 text-xs">
          Crafted by <a href="https://headless-digital.com" target="_blank" rel="noopener noreferrer" class="text-white/40 hover:text-accent transition-colors">Headless Digital</a>
        </p>
      </div>
    </div>
  </footer>
</template>
