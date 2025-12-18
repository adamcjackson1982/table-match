<script setup lang="ts">
useSeoMeta({
  title: 'TableMatch - Your Table Football Matches, Elevated',
  description: 'Digital scoreboard and match management for table football, Subbuteo, and foosball. Track scores, run tournaments, and elevate your games.'
})

const features = [
  {
    icon: 'scoreboard',
    title: 'Live Scoreboard',
    description: 'Real-time score tracking with countdown timer, goal celebrations, and sound effects.'
  },
  {
    icon: 'teams',
    title: 'Real & Custom Teams',
    description: 'Choose from 11 major competitions or create Subbuteo-style coloured teams.'
  },
  {
    icon: 'tournament',
    title: 'Tournament Mode',
    description: 'Run knockout tournaments for 4, 8, or 16 players with visual brackets.'
  },
  {
    icon: 'offline',
    title: 'Works Offline',
    description: 'Progressive Web App that works without internet once loaded.'
  }
]

const stats = [
  { value: '11', label: 'Competitions' },
  { value: '500+', label: 'Teams Available' },
  { value: '16', label: 'Player Tournaments' },
  { value: '100%', label: 'Free Forever' }
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="section-padding pt-32 lg:pt-40">
      <div class="container-max">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 glass px-4 py-2 mb-8">
            <span class="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span class="text-sm text-white/80">Free to use, no signup required</span>
          </div>

          <!-- Headline -->
          <h1 class="heading-1 text-white mb-6">
            Your Table Football Matches,
            <span class="gradient-text">Elevated</span>
          </h1>

          <!-- Subheadline -->
          <p class="subheading max-w-2xl mx-auto mb-10">
            From casual games to tournaments &mdash; TableMatch is the digital scoreboard and match management system that brings professional match features to your table football games.
          </p>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://app.tablematchapp.com" class="btn-primary text-lg !px-8 !py-4">
              Launch App
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <NuxtLink to="/features" class="btn-secondary text-lg !px-8 !py-4">
              See Features
            </NuxtLink>
          </div>
        </div>

        <!-- Hero Image -->
        <div class="mt-16 lg:mt-20 max-w-5xl mx-auto">
          <div class="glass-hover p-4 lg:p-6">
            <img
              src="/screen-shots/match-inplay-safe.png"
              alt="TableMatch live match screen showing score and timer"
              class="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="section-padding !py-12">
      <div class="container-max">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="text-center"
          >
            <p class="text-3xl lg:text-4xl font-bold gradient-text">{{ stat.value }}</p>
            <p class="text-white/60 text-sm mt-1">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Preview -->
    <section class="section-padding">
      <div class="container-max">
        <div class="text-center mb-12 lg:mb-16">
          <h2 class="heading-2 text-white mb-4">Everything You Need</h2>
          <p class="subheading max-w-2xl mx-auto">
            A complete match experience with professional features for casual and competitive play.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="glass-hover p-6"
          >
            <!-- Icon -->
            <div class="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
              <svg v-if="feature.icon === 'scoreboard'" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <svg v-else-if="feature.icon === 'teams'" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <svg v-else-if="feature.icon === 'tournament'" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <svg v-else-if="feature.icon === 'offline'" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
            </div>

            <h3 class="text-lg font-semibold text-white mb-2">{{ feature.title }}</h3>
            <p class="text-white/60 text-sm">{{ feature.description }}</p>
          </div>
        </div>

        <div class="text-center mt-10">
          <NuxtLink to="/features" class="btn-secondary">
            View All Features
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- How It Works Preview -->
    <section class="section-padding bg-white/5">
      <div class="container-max">
        <div class="text-center mb-12 lg:mb-16">
          <h2 class="heading-2 text-white mb-4">Get Started in Seconds</h2>
          <p class="subheading max-w-2xl mx-auto">
            No signup, no installation, no hassle. Just open and play.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div class="text-center">
            <div class="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl font-bold">1</span>
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">Open the App</h3>
            <p class="text-white/60">
              Visit app.tablematchapp.com on any device. Add to home screen for quick access.
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl font-bold">2</span>
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">Select Teams</h3>
            <p class="text-white/60">
              Choose from real club teams or create custom Subbuteo-style coloured teams.
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl font-bold">3</span>
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">Start Playing</h3>
            <p class="text-white/60">
              Track goals, manage time, and let TableMatch handle the scorekeeping.
            </p>
          </div>
        </div>

        <div class="text-center mt-10">
          <NuxtLink to="/how-it-works" class="btn-secondary">
            Learn More
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Testimonials Placeholder -->
    <section class="section-padding">
      <div class="container-max">
        <div class="text-center mb-12 lg:mb-16">
          <h2 class="heading-2 text-white mb-4">Loved by Players</h2>
          <p class="subheading max-w-2xl mx-auto">
            Join thousands of table football enthusiasts already using TableMatch.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="glass-hover p-6">
            <div class="flex items-center gap-1 mb-4">
              <svg v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p class="text-white/80 mb-4">
              "Finally, a proper scoreboard app for Subbuteo! The custom team colours feature is exactly what we needed."
            </p>
            <p class="text-white/60 text-sm">- Subbuteo Enthusiast</p>
          </div>

          <div class="glass-hover p-6">
            <div class="flex items-center gap-1 mb-4">
              <svg v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p class="text-white/80 mb-4">
              "We use TableMatch for our weekly foosball tournament at the office. The bracket system is fantastic!"
            </p>
            <p class="text-white/60 text-sm">- Tournament Organiser</p>
          </div>

          <div class="glass-hover p-6">
            <div class="flex items-center gap-1 mb-4">
              <svg v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p class="text-white/80 mb-4">
              "Simple, beautiful, and works offline. Perfect for game nights with the kids."
            </p>
            <p class="text-white/60 text-sm">- Casual Player</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="section-padding">
      <div class="container-max">
        <div class="glass-hover p-8 lg:p-16 text-center">
          <h2 class="heading-2 text-white mb-4">Ready to Elevate Your Games?</h2>
          <p class="subheading max-w-2xl mx-auto mb-8">
            No installation, no signup, no cost. Start tracking your matches in seconds.
          </p>
          <a href="https://app.tablematchapp.com" class="btn-primary text-lg !px-8 !py-4">
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
