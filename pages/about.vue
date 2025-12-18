<script setup lang="ts">
useSeoMeta({
  title: 'About - TableMatch',
  description: 'Learn the story behind TableMatch and our mission to elevate table football matches everywhere.'
})

const values = [
  {
    title: 'Simplicity First',
    description: 'Every feature is designed to get out of your way. Open the app, pick teams, play. No learning curve, no friction.',
    icon: 'simple'
  },
  {
    title: 'Works Everywhere',
    description: 'From phones to tablets to TVs, TableMatch adapts to your device. Online or offline, it just works.',
    icon: 'everywhere'
  },
  {
    title: 'Privacy Focused',
    description: 'No accounts, no tracking, no data collection. Everything stays on your device.',
    icon: 'privacy'
  },
  {
    title: 'Forever Free',
    description: 'TableMatch is free to use with no ads, no premium tiers, no hidden costs. Just pure table football fun.',
    icon: 'free'
  }
]

const timeline = [
  {
    title: 'The Problem',
    description: 'Tired of losing track of scores, arguing about time, and using pen and paper for tournament brackets.'
  },
  {
    title: 'The Idea',
    description: 'What if there was a simple digital scoreboard that anyone could use without downloading an app?'
  },
  {
    title: 'The Build',
    description: 'Built as a Progressive Web App to work on any device, with or without internet connection.'
  },
  {
    title: 'The Launch',
    description: 'TableMatch is now live and helping players around the world track their matches.'
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
            About <span class="gradient-text">TableMatch</span>
          </h1>
          <p class="subheading">
            A passion project born from a love of table football and a frustration with keeping score.
          </p>
        </div>
      </div>
    </section>

    <!-- Story -->
    <section class="section-padding">
      <div class="container-max">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span class="text-accent font-semibold text-sm uppercase tracking-wider">Our Story</span>
            <h2 class="heading-3 text-white mt-2 mb-6">From Game Night Frustration to Solution</h2>
            <div class="space-y-4 text-white/70">
              <p>
                It started with a simple problem: keeping track of scores during table football matches was a hassle. Pieces of paper got lost, phone timers weren't quite right, and running tournaments with spreadsheets was painful.
              </p>
              <p>
                TableMatch was built to solve these problems with a single, focused tool. No bloat, no unnecessary features, no signup walls - just a beautiful scoreboard that works on any device.
              </p>
              <p>
                Whether you're playing Subbuteo with traditional painted teams, foosball at a bar, or running a tournament at the office, TableMatch gives you the tools to track every match professionally.
              </p>
            </div>
          </div>
          <div class="glass-hover p-6">
            <div class="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
              <div class="text-center">
                <svg class="w-24 h-24 text-white/40 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <p class="text-white/40">Made with love for table football</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="section-padding bg-white/5">
      <div class="container-max">
        <div class="text-center mb-12">
          <span class="text-accent font-semibold text-sm uppercase tracking-wider">Journey</span>
          <h2 class="heading-3 text-white mt-2">How We Got Here</h2>
        </div>

        <div class="max-w-3xl mx-auto">
          <div class="relative">
            <!-- Timeline line -->
            <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent transform md:-translate-x-1/2" />

            <!-- Timeline items -->
            <div class="space-y-12">
              <div
                v-for="(item, index) in timeline"
                :key="item.title"
                class="relative pl-12 md:pl-0"
                :class="index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'"
              >
                <!-- Dot -->
                <div
                  class="absolute left-2.5 md:left-1/2 top-1 w-3 h-3 bg-gradient-primary rounded-full transform md:-translate-x-1/2 ring-4 ring-deep-purple"
                />

                <!-- Content -->
                <div class="glass-hover p-6" :class="index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'">
                  <h3 class="text-lg font-semibold text-white mb-2">{{ item.title }}</h3>
                  <p class="text-white/60 text-sm">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="section-padding">
      <div class="container-max">
        <div class="text-center mb-12">
          <span class="text-accent font-semibold text-sm uppercase tracking-wider">What We Believe</span>
          <h2 class="heading-3 text-white mt-2">Our Core Values</h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="value in values"
            :key="value.title"
            class="glass-hover p-6 text-center"
          >
            <div class="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
              <svg v-if="value.icon === 'simple'" class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <svg v-else-if="value.icon === 'everywhere'" class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <svg v-else-if="value.icon === 'privacy'" class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <svg v-else-if="value.icon === 'free'" class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">{{ value.title }}</h3>
            <p class="text-white/60 text-sm">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission -->
    <section class="section-padding bg-white/5">
      <div class="container-max">
        <div class="max-w-3xl mx-auto text-center">
          <span class="text-accent font-semibold text-sm uppercase tracking-wider">Our Mission</span>
          <h2 class="heading-2 text-white mt-2 mb-6">Elevate Every Game</h2>
          <p class="text-xl text-white/70 mb-8">
            We believe every table football match deserves the same attention and excitement as a professional game. Whether it's a casual kickabout or a championship final, TableMatch makes every match feel special.
          </p>
          <div class="glass p-8">
            <p class="text-2xl font-semibold text-white italic">
              "Making table football matches more fun, organised, and memorable - one goal at a time."
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack -->
    <section class="section-padding">
      <div class="container-max">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1">
            <div class="glass-hover p-6">
              <div class="grid grid-cols-2 gap-4">
                <div class="glass p-4 text-center">
                  <p class="text-2xl font-bold gradient-text">Vue 3</p>
                  <p class="text-white/50 text-sm">Frontend Framework</p>
                </div>
                <div class="glass p-4 text-center">
                  <p class="text-2xl font-bold gradient-text">Nuxt 3</p>
                  <p class="text-white/50 text-sm">Meta Framework</p>
                </div>
                <div class="glass p-4 text-center">
                  <p class="text-2xl font-bold gradient-text">PWA</p>
                  <p class="text-white/50 text-sm">Offline Support</p>
                </div>
                <div class="glass p-4 text-center">
                  <p class="text-2xl font-bold gradient-text">Tailwind</p>
                  <p class="text-white/50 text-sm">Styling</p>
                </div>
              </div>
            </div>
          </div>
          <div class="order-1 lg:order-2">
            <span class="text-accent font-semibold text-sm uppercase tracking-wider">Built With</span>
            <h2 class="heading-3 text-white mt-2 mb-6">Modern Technology</h2>
            <p class="text-white/70 mb-6">
              TableMatch is built with modern web technologies to ensure the best possible experience on any device. As a Progressive Web App, it loads fast, works offline, and can be installed on your home screen without visiting an app store.
            </p>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-white/80">Instant loading with service worker caching</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-white/80">Responsive design that adapts to any screen</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-white/80">Local storage for privacy and reliability</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding">
      <div class="container-max">
        <div class="glass-hover p-8 lg:p-16 text-center">
          <h2 class="heading-3 text-white mb-4">Join the Community</h2>
          <p class="subheading max-w-2xl mx-auto mb-8">
            Thousands of players already use TableMatch for their games. Become part of the community today.
          </p>
          <a href="https://app.tablematch.com" class="btn-primary text-lg !px-8 !py-4">
            Start Playing
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
