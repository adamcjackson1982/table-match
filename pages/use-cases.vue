<script setup lang="ts">
useSeoMeta({
  title: 'Use Cases - TableMatch',
  description: 'Discover how casual players, Subbuteo enthusiasts, venue owners, and tournament organisers use TableMatch.'
})

const personas = [
  {
    name: 'Mark',
    age: 32,
    role: 'The Casual Player',
    description: 'Plays foosball with friends on weekends',
    quote: 'We used to argue about the score all the time. Now we just check the app.',
    image: 'casual',
    values: ['Simplicity', 'Reliability', 'No setup required'],
    scenario: 'Mark sets up the phone on a stand next to the foosball table. With a quick tap for each goal, the score updates instantly. At half-time, the app reminds them to switch sides.',
    features: ['Quick match start', 'Large score display', 'Sound effects', 'No account needed']
  },
  {
    name: 'Sarah',
    age: 45,
    role: 'The Subbuteo Collector',
    description: 'Serious Subbuteo player with painted teams',
    quote: 'The custom team colours match my actual Subbuteo pieces perfectly.',
    image: 'subbuteo',
    values: ['Authenticity', 'Customisation', 'Tournament features'],
    scenario: 'Sarah creates custom coloured teams in TableMatch to match her hand-painted Subbuteo figures. For club nights, she runs tournaments using the bracket feature.',
    features: ['Custom coloured teams', 'Tournament brackets', 'Match history', 'Save team presets']
  },
  {
    name: 'James',
    age: 38,
    role: 'The Venue Owner',
    description: 'Runs a sports bar with multiple foosball tables',
    quote: 'Customers love the professional look. It makes our foosball nights feel like real events.',
    image: 'venue',
    values: ['Professional appearance', 'Tournament support', 'Customer engagement'],
    scenario: 'James uses tablets at each foosball table running TableMatch. For weekly league nights, he uses tournament mode to run brackets that display on a TV.',
    features: ['Works on tablets', 'Tournament mode', 'Offline capable', 'No login friction']
  },
  {
    name: 'Lisa',
    age: 28,
    role: 'The Tournament Organiser',
    description: 'Organises office foosball tournaments',
    quote: 'Setting up a 16-person bracket takes 30 seconds now. It used to take forever with spreadsheets.',
    image: 'tournament',
    values: ['Efficiency', 'Fair brackets', 'Easy management'],
    scenario: 'Lisa seeds players based on skill, and TableMatch generates a balanced bracket. As matches complete, the bracket updates automatically and everyone can see who\'s up next.',
    features: ['4/8/16 player brackets', 'Player seeding', 'Auto progression', 'Champion tracking']
  },
  {
    name: 'The Martinez Family',
    age: null,
    role: 'Family Game Night',
    description: 'Parents and two kids for weekend games',
    quote: 'Even the kids can update the score. It makes game night feel special.',
    image: 'family',
    values: ['Family-friendly', 'Easy to use', 'Fun for all ages'],
    scenario: 'During family game night, the tablet sits between the teams. The kids love tapping to score goals and hearing the celebration sounds.',
    features: ['Large touch targets', 'Sound effects', 'Simple interface', 'Goal celebrations']
  },
  {
    name: 'School Sports Club',
    age: null,
    role: 'Educational Setting',
    description: 'After-school table football club',
    quote: 'Students learn about fair play while having fun. The app keeps everything organised.',
    image: 'school',
    values: ['Educational', 'Fair competition', 'Group management'],
    scenario: 'The club leader runs weekly tournaments with the students. Kids learn about brackets, seeding, and sportsmanship while competing.',
    features: ['Tournament mode', 'Clear winner display', 'Match records', 'Works on school wifi']
  }
]

const industries = [
  {
    name: 'Bars & Pubs',
    description: 'Elevate your foosball tables with professional match tracking. Run weekly leagues to keep customers coming back.',
    icon: 'bar'
  },
  {
    name: 'Corporate Offices',
    description: 'Add some fun competition to break rooms. Tournament mode is perfect for team building events.',
    icon: 'office'
  },
  {
    name: 'Youth Centers',
    description: 'Safe, simple, and engaging for young people. No signup means no privacy concerns for minors.',
    icon: 'youth'
  },
  {
    name: 'Gaming Lounges',
    description: 'Complement your arcade with organised table football tournaments. Professional presentation on any screen.',
    icon: 'gaming'
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
            Who Uses <span class="gradient-text">TableMatch?</span>
          </h1>
          <p class="subheading">
            From casual weekend games to organised tournaments, see how different players use TableMatch to elevate their table football experience.
          </p>
        </div>
      </div>
    </section>

    <!-- Personas -->
    <section class="section-padding">
      <div class="container-max">
        <div class="space-y-16">
          <div
            v-for="(persona, index) in personas"
            :key="persona.name"
            class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            <!-- Image -->
            <div :class="index % 2 === 1 ? 'lg:order-2' : ''">
              <div class="glass-hover p-6">
                <div class="aspect-square max-w-md mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                  <div class="text-center">
                    <svg v-if="persona.image === 'casual'" class="w-24 h-24 text-white/40 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <svg v-else-if="persona.image === 'subbuteo'" class="w-24 h-24 text-white/40 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <svg v-else-if="persona.image === 'venue'" class="w-24 h-24 text-white/40 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <svg v-else-if="persona.image === 'tournament'" class="w-24 h-24 text-white/40 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <svg v-else-if="persona.image === 'family'" class="w-24 h-24 text-white/40 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <svg v-else-if="persona.image === 'school'" class="w-24 h-24 text-white/40 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <p class="text-white/40">{{ persona.role }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Content -->
            <div :class="index % 2 === 1 ? 'lg:order-1' : ''">
              <div class="mb-4">
                <span class="text-accent font-semibold text-sm uppercase tracking-wider">{{ persona.role }}</span>
                <h2 class="heading-3 text-white mt-2">
                  {{ persona.name }}
                  <span v-if="persona.age" class="text-white/50 font-normal">, {{ persona.age }}</span>
                </h2>
                <p class="text-white/60">{{ persona.description }}</p>
              </div>

              <!-- Quote -->
              <blockquote class="glass p-4 mb-6">
                <p class="text-white/80 italic">"{{ persona.quote }}"</p>
              </blockquote>

              <!-- Scenario -->
              <p class="text-white/70 mb-6">{{ persona.scenario }}</p>

              <!-- Values -->
              <div class="mb-6">
                <p class="text-white/50 text-sm mb-2">What they value:</p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="value in persona.values"
                    :key="value"
                    class="px-3 py-1 text-sm bg-primary/20 rounded-full text-white/80"
                  >
                    {{ value }}
                  </span>
                </div>
              </div>

              <!-- Features Used -->
              <div>
                <p class="text-white/50 text-sm mb-2">Features they love:</p>
                <ul class="grid grid-cols-2 gap-2">
                  <li
                    v-for="feature in persona.features"
                    :key="feature"
                    class="flex items-center gap-2"
                  >
                    <svg class="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="text-white/70 text-sm">{{ feature }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Industries -->
    <section class="section-padding bg-white/5">
      <div class="container-max">
        <div class="text-center mb-12">
          <span class="text-accent font-semibold text-sm uppercase tracking-wider">Industries</span>
          <h2 class="heading-3 text-white mt-2">Perfect For Any Venue</h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="industry in industries"
            :key="industry.name"
            class="glass-hover p-6 text-center"
          >
            <div class="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
              <svg v-if="industry.icon === 'bar'" class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <svg v-else-if="industry.icon === 'office'" class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <svg v-else-if="industry.icon === 'youth'" class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <svg v-else-if="industry.icon === 'gaming'" class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">{{ industry.name }}</h3>
            <p class="text-white/60 text-sm">{{ industry.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding">
      <div class="container-max">
        <div class="glass-hover p-8 lg:p-16 text-center">
          <h2 class="heading-3 text-white mb-4">Find Your Use Case</h2>
          <p class="subheading max-w-2xl mx-auto mb-8">
            Whether you're a casual player or running professional events, TableMatch adapts to how you play.
          </p>
          <a href="https://app.tablematch.com" class="btn-primary text-lg !px-8 !py-4">
            Try TableMatch Free
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
