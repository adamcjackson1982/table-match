<script setup lang="ts">
useSeoMeta({
  title: 'How It Works - TableMatch',
  description: 'Learn how to use TableMatch in seconds. No signup, no installation - just open and play table football matches.'
})

const steps = [
  {
    number: 1,
    title: 'Open the App',
    description: 'Visit app.tablematch.com on any device - phone, tablet, laptop, or even a smart TV browser.',
    details: [
      'Works on any modern browser (Chrome, Safari, Firefox, Edge)',
      'Add to your home screen for quick access',
      'No download or installation required',
      'Loads instantly, works offline after first visit'
    ],
    icon: 'browser'
  },
  {
    number: 2,
    title: 'Choose Your Mode',
    description: 'Select between a single match or tournament mode depending on how you want to play.',
    details: [
      'Quick Match: Jump straight into a single game',
      'Tournament: Set up a knockout bracket for multiple players',
      'Choose tournament size: 4, 8, or 16 players',
      'Seed players for balanced matchups'
    ],
    icon: 'mode'
  },
  {
    number: 3,
    title: 'Select Teams',
    description: 'Pick real club teams from major leagues, international teams, or create your own coloured teams.',
    details: [
      'Browse teams by competition',
      'Search for specific teams',
      'Create Subbuteo-style coloured teams',
      'Save custom teams for reuse'
    ],
    icon: 'teams'
  },
  {
    number: 4,
    title: 'Set Match Options',
    description: 'Configure your match settings to match how you play.',
    details: [
      'Choose half length: 10, 15, or 20 minutes',
      'Enable or disable sound effects',
      'Optional extra time for draws',
      'Penalty shootout for decisive results'
    ],
    icon: 'settings'
  },
  {
    number: 5,
    title: 'Play & Track',
    description: 'Tap to add goals, pause the timer when needed, and let TableMatch handle the rest.',
    details: [
      'Large tap targets for quick scoring',
      'Pause/resume timer as needed',
      'Undo last goal if mistakes happen',
      'Screen stays on during play'
    ],
    icon: 'play'
  },
  {
    number: 6,
    title: 'Celebrate & Continue',
    description: 'See final results, progress through tournaments, or start a new match.',
    details: [
      'Full-time modal with final score',
      'Tournament bracket updates automatically',
      'Match history saved locally',
      'Start next match with one tap'
    ],
    icon: 'celebrate'
  }
]

const tips = [
  {
    title: 'Add to Home Screen',
    description: 'For the best experience, add TableMatch to your home screen. On iOS, tap Share > Add to Home Screen. On Android, tap the menu > Install app.',
    icon: 'home'
  },
  {
    title: 'Prop Up Your Device',
    description: 'Position your phone or tablet near the table where both players can easily reach it to update scores.',
    icon: 'device'
  },
  {
    title: 'Use Landscape for Tablets',
    description: 'Tablets work best in landscape orientation for the scoreboard view, giving more space for scores and timer.',
    icon: 'landscape'
  },
  {
    title: 'Enable Sound',
    description: 'Turn on sound effects for goal celebrations and timer alerts. Makes the experience more immersive!',
    icon: 'sound'
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
            Get Started in <span class="gradient-text">Seconds</span>
          </h1>
          <p class="subheading">
            No signup, no installation, no learning curve. TableMatch is designed to get out of your way and let you focus on playing.
          </p>
        </div>
      </div>
    </section>

    <!-- Quick Start -->
    <section class="section-padding !pt-12">
      <div class="container-max">
        <div class="glass-hover p-8 text-center">
          <h2 class="heading-3 text-white mb-4">The 30-Second Version</h2>
          <p class="text-white/70 mb-6 max-w-2xl mx-auto">
            Open app.tablematch.com &rarr; Pick teams &rarr; Start match &rarr; Tap to score. That's it!
          </p>
          <a href="https://app.tablematch.com" class="btn-primary">
            Try It Now
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Detailed Steps -->
    <section class="section-padding">
      <div class="container-max">
        <div class="mb-12 text-center">
          <span class="text-accent font-semibold text-sm uppercase tracking-wider">Step by Step</span>
          <h2 class="heading-3 text-white mt-2">The Complete Guide</h2>
        </div>

        <div class="space-y-8">
          <div
            v-for="step in steps"
            :key="step.number"
            class="grid lg:grid-cols-2 gap-8 items-center"
          >
            <!-- Content -->
            <div :class="step.number % 2 === 0 ? 'lg:order-2' : ''">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center shrink-0">
                  <span class="text-xl font-bold">{{ step.number }}</span>
                </div>
                <h3 class="heading-3 text-white">{{ step.title }}</h3>
              </div>
              <p class="text-white/70 mb-6 text-lg">{{ step.description }}</p>
              <ul class="space-y-3">
                <li
                  v-for="detail in step.details"
                  :key="detail"
                  class="flex items-start gap-3"
                >
                  <svg class="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-white/80">{{ detail }}</span>
                </li>
              </ul>
            </div>

            <!-- Step Image -->
            <div :class="step.number % 2 === 0 ? 'lg:order-1' : ''">
              <div class="glass-hover p-4">
                <img
                  v-if="step.icon === 'browser'"
                  src="/screen-shots/index.png"
                  alt="TableMatch home screen"
                  class="w-full rounded-lg shadow-xl"
                />
                <img
                  v-else-if="step.icon === 'mode'"
                  src="/screen-shots/index.png"
                  alt="TableMatch mode selection with Match, Tournament, and League options"
                  class="w-full rounded-lg shadow-xl"
                />
                <img
                  v-else-if="step.icon === 'teams'"
                  src="/screen-shots/match-selection-selected.png"
                  alt="Team selection screen with Manchester United and Liverpool selected"
                  class="w-full rounded-lg shadow-xl"
                />
                <img
                  v-else-if="step.icon === 'settings'"
                  src="/screen-shots/match-selection.png"
                  alt="Match setup screen showing half length options"
                  class="w-full rounded-lg shadow-xl"
                />
                <img
                  v-else-if="step.icon === 'play'"
                  src="/screen-shots/match-inplay.png"
                  alt="Live match screen showing 2-2 score in second half"
                  class="w-full rounded-lg shadow-xl"
                />
                <img
                  v-else-if="step.icon === 'celebrate'"
                  src="/screen-shots/match-fulltime-options.png"
                  alt="Full time modal showing final score and options for extra time or penalties"
                  class="w-full rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pro Tips -->
    <section class="section-padding bg-white/5">
      <div class="container-max">
        <div class="mb-12 text-center">
          <span class="text-accent font-semibold text-sm uppercase tracking-wider">Pro Tips</span>
          <h2 class="heading-3 text-white mt-2">Get the Best Experience</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div
            v-for="tip in tips"
            :key="tip.title"
            class="glass-hover p-6"
          >
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0">
                <svg v-if="tip.icon === 'home'" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <svg v-else-if="tip.icon === 'device'" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <svg v-else-if="tip.icon === 'landscape'" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <svg v-else-if="tip.icon === 'sound'" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-white mb-2">{{ tip.title }}</h3>
                <p class="text-white/60 text-sm">{{ tip.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding">
      <div class="container-max">
        <div class="glass-hover p-8 lg:p-16 text-center">
          <h2 class="heading-3 text-white mb-4">Ready to Play?</h2>
          <p class="subheading max-w-2xl mx-auto mb-8">
            You've read the guide - now experience it for yourself. It's even easier than it sounds.
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
