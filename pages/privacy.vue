<script setup lang="ts">
useSeoMeta({
  title: 'Privacy Policy - TableMatch',
  description: 'TableMatch privacy policy. Learn how we handle your data - spoiler: we don\'t collect any.'
})

const lastUpdated = 'December 2024'
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="section-padding pt-32 lg:pt-40">
      <div class="container-max">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="heading-1 text-white mb-6">
            Privacy <span class="gradient-text">Policy</span>
          </h1>
          <p class="subheading">
            Your privacy matters. Here's exactly how TableMatch handles your data.
          </p>
          <p class="text-white/50 text-sm mt-4">Last updated: {{ lastUpdated }}</p>
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="section-padding !pt-12">
      <div class="container-max">
        <div class="max-w-3xl mx-auto">
          <div class="prose prose-invert">
            <!-- TL;DR -->
            <div class="glass-hover p-6 mb-12">
              <h2 class="heading-3 text-white mb-4">The Short Version</h2>
              <p class="text-white/70 mb-0">
                TableMatch doesn't collect, store, or transmit any personal data. Everything stays on your device. No accounts, no tracking, no analytics. Just a scoreboard app that respects your privacy.
              </p>
            </div>

            <!-- Sections -->
            <div class="space-y-12">
              <div>
                <h2 class="heading-3 text-white mb-4">1. Information We Collect</h2>
                <p class="text-white/70 mb-4">
                  <strong class="text-white">None.</strong> TableMatch does not collect any personal information. We don't ask for your name, email, or any other identifying information because there are no accounts or sign-ups.
                </p>
                <p class="text-white/70">
                  All data created while using TableMatch (match scores, tournament brackets, team selections, and settings) is stored locally on your device using your browser's localStorage. This data never leaves your device and is not accessible to us or any third party.
                </p>
              </div>

              <div>
                <h2 class="heading-3 text-white mb-4">2. Cookies and Tracking</h2>
                <p class="text-white/70 mb-4">
                  TableMatch does not use cookies for tracking purposes. We do not use any analytics services, advertising trackers, or third-party scripts that monitor your behaviour.
                </p>
                <p class="text-white/70">
                  The only data stored in your browser is your match and settings data via localStorage, which is essential for the app to function.
                </p>
              </div>

              <div>
                <h2 class="heading-3 text-white mb-4">3. Third-Party Services</h2>
                <p class="text-white/70 mb-4">
                  TableMatch uses the following third-party services:
                </p>
                <ul class="text-white/70 space-y-2">
                  <li class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong class="text-white">Google Fonts</strong> - To load the Inter font family. Google may collect anonymous usage data as per their privacy policy.</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong class="text-white">football-data.org</strong> (app only) - To fetch team data for real club teams. No personal data is sent to this service.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 class="heading-3 text-white mb-4">4. Data Storage</h2>
                <p class="text-white/70 mb-4">
                  All your data is stored locally on your device:
                </p>
                <ul class="text-white/70 space-y-2">
                  <li class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Match history and scores</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Tournament brackets and results</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Custom team configurations</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>App settings and preferences</span>
                  </li>
                </ul>
                <p class="text-white/70 mt-4">
                  You can clear this data at any time by clearing your browser's localStorage or site data for TableMatch.
                </p>
              </div>

              <div>
                <h2 class="heading-3 text-white mb-4">5. Children's Privacy</h2>
                <p class="text-white/70">
                  TableMatch does not collect any personal information from anyone, including children. The app is safe for users of all ages.
                </p>
              </div>

              <div>
                <h2 class="heading-3 text-white mb-4">6. Data Security</h2>
                <p class="text-white/70">
                  Since we don't collect or transmit any data, there's nothing to secure on our end. Your local data is protected by your device's security measures and your browser's built-in protections.
                </p>
              </div>

              <div>
                <h2 class="heading-3 text-white mb-4">7. Changes to This Policy</h2>
                <p class="text-white/70">
                  If we make changes to this privacy policy, we will update the "Last updated" date at the top of this page. We encourage you to review this policy periodically.
                </p>
              </div>

              <div>
                <h2 class="heading-3 text-white mb-4">8. Contact Us</h2>
                <p class="text-white/70">
                  If you have any questions about this privacy policy, please
                  <NuxtLink to="/about#contact" class="text-accent hover:underline">contact us</NuxtLink>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding">
      <div class="container-max">
        <div class="glass-hover p-8 lg:p-12 text-center max-w-3xl mx-auto">
          <h2 class="heading-3 text-white mb-4">Ready to Play?</h2>
          <p class="text-white/70 mb-6">
            No data collection means no worries. Just pure table football fun.
          </p>
          <a href="https://app.tablematchapp.com" class="btn-primary">
            Launch TableMatch
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
