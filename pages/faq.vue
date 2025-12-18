<script setup lang="ts">
useSeoMeta({
  title: 'FAQ - TableMatch',
  description: 'Frequently asked questions about TableMatch - the digital scoreboard for table football, Subbuteo, and foosball.'
})

const openItems = ref<Set<number>>(new Set())

const toggleItem = (index: number) => {
  if (openItems.value.has(index)) {
    openItems.value.delete(index)
  } else {
    openItems.value.add(index)
  }
}

const faqCategories = [
  {
    name: 'Getting Started',
    faqs: [
      {
        question: 'Do I need to create an account?',
        answer: 'No! TableMatch requires no signup or login. Just open the app and start playing. All your data is stored locally on your device.'
      },
      {
        question: 'Is TableMatch free to use?',
        answer: 'Yes, TableMatch is completely free with no ads, no premium tiers, and no hidden costs. All features are available to everyone.'
      },
      {
        question: 'What devices does TableMatch work on?',
        answer: 'TableMatch works on any device with a modern web browser - smartphones, tablets, laptops, and even smart TVs. It\'s optimised for both portrait and landscape orientations.'
      },
      {
        question: 'Can I use TableMatch offline?',
        answer: 'Yes! TableMatch is a Progressive Web App (PWA) that works offline after your first visit. Once loaded, you can use it anywhere without an internet connection.'
      },
      {
        question: 'How do I add TableMatch to my home screen?',
        answer: 'On iOS: Open TableMatch in Safari, tap the Share button, then "Add to Home Screen." On Android: Open in Chrome, tap the menu, then "Install app" or "Add to Home screen."'
      }
    ]
  },
  {
    name: 'Match Features',
    faqs: [
      {
        question: 'How do I track goals?',
        answer: 'Simply tap the score area for the team that scored. The score updates instantly. Made a mistake? Use the undo button to reverse the last goal.'
      },
      {
        question: 'Can I customise the match length?',
        answer: 'Yes, you can choose between 10, 15, or 20-minute halves before starting your match. You can also pause the timer at any point during play.'
      },
      {
        question: 'Does TableMatch support extra time and penalties?',
        answer: 'Absolutely! If a match ends in a draw, you can enable extra time. If still tied, the penalty shootout feature tracks each kick with visual indicators for scored and missed attempts.'
      },
      {
        question: 'Can I disable sound effects?',
        answer: 'Yes, there\'s a sound toggle in the match settings. You can mute goal celebrations and timer alerts while keeping the visual experience.'
      },
      {
        question: 'Will my screen stay on during matches?',
        answer: 'Yes, TableMatch uses the Screen Wake Lock API to keep your display on during active matches. No more fumbling with a locked screen when you need to update the score.'
      }
    ]
  },
  {
    name: 'Team Selection',
    faqs: [
      {
        question: 'What teams are available?',
        answer: 'TableMatch includes teams from 11 major competitions: Premier League, La Liga, Serie A, Bundesliga, Ligue 1, Eredivisie, Primeira Liga, Championship, Champions League, European Championship, and World Cup.'
      },
      {
        question: 'Can I create custom teams?',
        answer: 'Yes! The custom team feature lets you create Subbuteo-style coloured teams by selecting two colours. Perfect for generic table football sets or creating your own unique teams.'
      },
      {
        question: 'How many colours can I choose from?',
        answer: 'There are 12 basic colours available for custom teams: Red, Blue, Green, Yellow, White, Black, Orange, Purple, Claret, Sky Blue, Navy, and Gold.'
      },
      {
        question: 'Can I save my custom teams?',
        answer: 'Yes, custom teams are saved locally on your device for quick reuse in future matches.'
      }
    ]
  },
  {
    name: 'Tournament Mode',
    faqs: [
      {
        question: 'How many players can participate in a tournament?',
        answer: 'TableMatch supports tournaments with 4, 8, or 16 players in a knockout bracket format.'
      },
      {
        question: 'Can I seed players in the bracket?',
        answer: 'Yes, you can seed players to ensure balanced matchups. Seeding helps prevent the best players from meeting in early rounds.'
      },
      {
        question: 'How does bracket progression work?',
        answer: 'After each match, the bracket updates automatically. Winners advance to the next round, and you can see the entire tournament structure at a glance.'
      },
      {
        question: 'Is there match history for tournaments?',
        answer: 'Yes, all tournament matches are tracked with scores and progression. You can review past matches and see the path to the final.'
      }
    ]
  },
  {
    name: 'Privacy & Data',
    faqs: [
      {
        question: 'What data does TableMatch collect?',
        answer: 'TableMatch collects no personal data. All match data, team selections, and settings are stored locally on your device using browser localStorage.'
      },
      {
        question: 'Can I export my match history?',
        answer: 'Currently, match data is stored locally on your device. Cloud backup and export features may be added in future updates.'
      },
      {
        question: 'What happens if I clear my browser data?',
        answer: 'Since all data is stored locally, clearing your browser data will reset TableMatch. Consider taking screenshots of important tournament results before clearing data.'
      }
    ]
  },
  {
    name: 'Technical',
    faqs: [
      {
        question: 'Why isn\'t TableMatch in the App Store or Play Store?',
        answer: 'TableMatch is a Progressive Web App (PWA), which means it runs in your browser but can be installed like a native app. This approach allows us to provide the same experience across all platforms without the overhead of app stores.'
      },
      {
        question: 'What browsers are supported?',
        answer: 'TableMatch works best in Chrome, Safari, Firefox, and Edge. For the best experience, we recommend using the latest version of your browser.'
      },
      {
        question: 'The app isn\'t working properly. What should I do?',
        answer: 'Try refreshing the page or clearing your browser cache. If the issue persists, try accessing TableMatch in an incognito/private window. If you continue to have problems, please contact us.'
      }
    ]
  }
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="section-padding pt-32 lg:pt-40">
      <div class="container-max">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="heading-1 text-white mb-6">
            Frequently Asked <span class="gradient-text">Questions</span>
          </h1>
          <p class="subheading">
            Find answers to common questions about TableMatch. Can't find what you're looking for? Get in touch.
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ Accordion -->
    <section class="section-padding">
      <div class="container-max">
        <div class="max-w-4xl mx-auto">
          <div
            v-for="(category, categoryIndex) in faqCategories"
            :key="category.name"
            class="mb-12"
          >
            <h2 class="heading-3 text-white mb-6">{{ category.name }}</h2>

            <div class="space-y-4">
              <div
                v-for="(faq, faqIndex) in category.faqs"
                :key="faq.question"
                class="glass-hover overflow-hidden"
              >
                <button
                  class="w-full px-6 py-4 flex items-center justify-between text-left"
                  @click="toggleItem(categoryIndex * 100 + faqIndex)"
                >
                  <span class="font-semibold text-white pr-4">{{ faq.question }}</span>
                  <svg
                    class="w-5 h-5 text-accent shrink-0 transition-transform duration-300"
                    :class="{ 'rotate-180': openItems.has(categoryIndex * 100 + faqIndex) }"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <Transition
                  enter-active-class="transition-all duration-300 ease-out"
                  enter-from-class="max-h-0 opacity-0"
                  enter-to-class="max-h-96 opacity-100"
                  leave-active-class="transition-all duration-200 ease-in"
                  leave-from-class="max-h-96 opacity-100"
                  leave-to-class="max-h-0 opacity-0"
                >
                  <div
                    v-if="openItems.has(categoryIndex * 100 + faqIndex)"
                    class="px-6 pb-4"
                  >
                    <p class="text-white/70">{{ faq.answer }}</p>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section-padding bg-white/5">
      <div class="container-max">
        <div class="max-w-3xl mx-auto text-center">
          <span class="text-accent font-semibold text-sm uppercase tracking-wider">Still Have Questions?</span>
          <h2 class="heading-3 text-white mt-2 mb-6">Get in Touch</h2>
          <p class="text-white/70 mb-8">
            Can't find the answer you're looking for? We're here to help. Reach out and we'll get back to you as soon as possible.
          </p>
          <div class="glass-hover p-8">
            <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="text-left">
                  <p class="text-white/50 text-sm">Email us at</p>
                  <a href="mailto:hello@tablematch.com" class="text-white hover:text-accent transition-colors">
                    hello@tablematch.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Links -->
    <section class="section-padding">
      <div class="container-max">
        <div class="text-center mb-12">
          <h2 class="heading-3 text-white">Helpful Links</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <NuxtLink to="/how-it-works" class="glass-hover p-6 text-center group">
            <div class="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors">How It Works</h3>
            <p class="text-white/60 text-sm">Step-by-step guide to get started</p>
          </NuxtLink>

          <NuxtLink to="/features" class="glass-hover p-6 text-center group">
            <div class="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors">All Features</h3>
            <p class="text-white/60 text-sm">Explore everything TableMatch offers</p>
          </NuxtLink>

          <NuxtLink to="/use-cases" class="glass-hover p-6 text-center group">
            <div class="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors">Use Cases</h3>
            <p class="text-white/60 text-sm">See how others use TableMatch</p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding">
      <div class="container-max">
        <div class="glass-hover p-8 lg:p-16 text-center">
          <h2 class="heading-3 text-white mb-4">Ready to Get Started?</h2>
          <p class="subheading max-w-2xl mx-auto mb-8">
            Stop reading, start playing. TableMatch is ready when you are.
          </p>
          <a href="https://app.tablematch.com" class="btn-primary text-lg !px-8 !py-4">
            Launch TableMatch
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
