<script setup lang="ts">
useSeoMeta({
  title: 'Features - TableMatch',
  description: 'Explore all TableMatch features: live scoreboard, team selection, tournament mode, penalty shootouts, and more.'
})

const matchFeatures = [
  {
    title: 'Live Scoreboard',
    description: 'Real-time score tracking for both teams with a beautiful, easy-to-read display optimised for viewing from a distance.',
    icon: 'scoreboard'
  },
  {
    title: 'Countdown Timer',
    description: 'Customisable half lengths (10, 15, or 20 minutes) with pause/resume functionality and manual time adjustments.',
    icon: 'timer'
  },
  {
    title: 'Goal Celebrations',
    description: 'Visual goal celebrations with optional sound effects to make every score feel special.',
    icon: 'celebration'
  },
  {
    title: 'Undo Last Goal',
    description: 'Made a mistake? Quickly undo the last goal with a single tap. No more arguments about miscounts.',
    icon: 'undo'
  },
  {
    title: 'Half-Time & Full-Time',
    description: 'Automatic modals for half-time breaks and full-time results, just like a real broadcast.',
    icon: 'halftime'
  },
  {
    title: 'Extra Time',
    description: 'Need to settle a draw? Enable extra time with the same timer controls and tracking.',
    icon: 'extra'
  }
]

const teamFeatures = [
  {
    title: 'Real Club Teams',
    description: 'Browse teams from 11 major competitions including Premier League, La Liga, Serie A, and more. Team data sourced from football-data.org.',
    competitions: ['Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1', 'Eredivisie', 'Primeira Liga', 'Championship']
  },
  {
    title: 'International Teams',
    description: 'Select national teams from World Cup or European Championship competitions with team names and colours.',
    competitions: ['World Cup', 'European Championship', 'Champions League']
  },
  {
    title: 'Custom Coloured Teams',
    description: 'Create Subbuteo-style teams by picking two colours. Perfect for generic table football sets or creating your own dream teams.',
    colors: ['Red', 'Blue', 'Green', 'Yellow', 'White', 'Black', 'Orange', 'Purple', 'Claret', 'Sky Blue', 'Navy', 'Gold']
  },
  {
    title: 'Generic Mode',
    description: 'Prefer not to use club imagery? Switch to generic mode for simple shields, lettermarks, or plain colour swatches instead.',
    fallback: true
  }
]

const tournamentFeatures = [
  {
    title: 'Knockout Brackets',
    description: 'Visual tournament brackets that update automatically as matches are completed.'
  },
  {
    title: 'Flexible Sizes',
    description: 'Support for 4, 8, or 16 player tournaments to fit your group size.'
  },
  {
    title: 'Player Seeding',
    description: 'Seed players to ensure balanced matchups and competitive brackets.'
  },
  {
    title: 'Match History',
    description: 'Track all tournament matches with scores and progression.'
  },
  {
    title: 'Champion Display',
    description: 'Celebrate the winner with a dedicated champion display at tournament end.'
  }
]

const leagueFeatures = [
  {
    title: 'Flexible League Sizes',
    description: 'Support for 4, 6, 8, 10, 12, or 16 players to fit any group.'
  },
  {
    title: 'Round-Robin Formats',
    description: 'Single round-robin (play everyone once) or home & away (double round-robin).'
  },
  {
    title: 'Professional Standings',
    description: 'Full league table with P, W, D, L, GF, GA, GD, Pts and automatic tiebreakers.'
  },
  {
    title: 'Auto-Generated Fixtures',
    description: 'Fixtures automatically created based on league size and format.'
  },
  {
    title: 'Season Persistence',
    description: 'Resume your league anytime with offline localStorage support.'
  },
  {
    title: 'Champion Celebration',
    description: 'Crown the winner when all matches are complete.'
  }
]

const technicalFeatures = [
  {
    title: 'Progressive Web App',
    description: 'Install TableMatch to your home screen just like a native app. No app store required.',
    icon: 'pwa'
  },
  {
    title: 'Works Offline',
    description: 'Once loaded, TableMatch works without an internet connection. Perfect for any venue.',
    icon: 'offline'
  },
  {
    title: 'Local Storage',
    description: 'All your data stays on your device. No accounts, no cloud sync, complete privacy.',
    icon: 'storage'
  },
  {
    title: 'Screen Wake Lock',
    description: 'Your screen stays on during matches so you never miss updating the score.',
    icon: 'screen'
  },
  {
    title: 'Responsive Design',
    description: 'Optimised for phones, tablets, laptops, and even TVs. Portrait or landscape.',
    icon: 'responsive'
  },
  {
    title: 'Touch Optimised',
    description: 'Large buttons and easy tapping for quick score updates during fast-paced games.',
    icon: 'touch'
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
            Packed with <span class="gradient-text">Features</span>
          </h1>
          <p class="subheading">
            Everything you need to run professional-quality table football matches, from casual games to competitive tournaments.
          </p>
        </div>
      </div>
    </section>

    <!-- Match Management -->
    <section class="section-padding">
      <div class="container-max">
        <div class="mb-12">
          <span class="text-accent font-semibold text-sm uppercase tracking-wider">Match Management</span>
          <h2 class="heading-3 text-white mt-2">Complete Match Control</h2>
        </div>

        <!-- Match Screenshots Showcase -->
        <div class="grid md:grid-cols-2 gap-6 mb-12">
          <div class="glass-hover p-4">
            <img
              src="/screen-shots/match-screen.png"
              alt="Match start screen with teams ready at 00:00"
              class="w-full rounded-lg shadow-xl"
            />
            <p class="text-white/60 text-sm text-center mt-3">Match ready to begin</p>
          </div>
          <div class="glass-hover p-4">
            <img
              src="/screen-shots/halftime.png"
              alt="Half time break modal showing current scores"
              class="w-full rounded-lg shadow-xl"
            />
            <p class="text-white/60 text-sm text-center mt-3">Half-time break</p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="feature in matchFeatures"
            :key="feature.title"
            class="glass-hover p-6"
          >
            <div class="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
              <svg v-if="feature.icon === 'scoreboard'" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <svg v-else-if="feature.icon === 'timer'" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <svg v-else-if="feature.icon === 'celebration'" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <svg v-else-if="feature.icon === 'undo'" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
              </svg>
              <svg v-else-if="feature.icon === 'halftime'" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <svg v-else-if="feature.icon === 'extra'" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">{{ feature.title }}</h3>
            <p class="text-white/60 text-sm">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Penalty Shootouts -->
    <section class="section-padding bg-white/5">
      <div class="container-max">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span class="text-accent font-semibold text-sm uppercase tracking-wider">Penalty Shootouts</span>
            <h2 class="heading-3 text-white mt-2 mb-6">Settle the Score</h2>
            <p class="text-white/70 mb-6">
              When matches end in a draw, take it to penalties. TableMatch tracks each kick with a visual penalty board showing scored and missed attempts for both teams.
            </p>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-white/80">Visual penalty tracking board</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-white/80">Scored/missed indicators for each kick</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-white/80">Sudden death support</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-white/80">Automatic winner detection</span>
              </li>
            </ul>
          </div>
          <div class="glass-hover p-4">
            <img
              src="/screen-shots/match-penalties.png"
              alt="TableMatch penalty shootout screen showing scored and missed penalties"
              class="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Team Selection -->
    <section class="section-padding">
      <div class="container-max">
        <div class="mb-12">
          <span class="text-accent font-semibold text-sm uppercase tracking-wider">Team Selection</span>
          <h2 class="heading-3 text-white mt-2">Play as Any Team</h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="feature in teamFeatures"
            :key="feature.title"
            class="glass-hover p-6"
          >
            <h3 class="text-lg font-semibold text-white mb-3">{{ feature.title }}</h3>
            <p class="text-white/60 text-sm mb-4">{{ feature.description }}</p>
            <div v-if="feature.competitions" class="flex flex-wrap gap-2">
              <span
                v-for="comp in feature.competitions"
                :key="comp"
                class="px-2 py-1 text-xs bg-white/10 rounded-md text-white/70"
              >
                {{ comp }}
              </span>
            </div>
            <div v-if="feature.colors" class="flex flex-wrap gap-2">
              <span
                v-for="color in feature.colors.slice(0, 6)"
                :key="color"
                class="px-2 py-1 text-xs bg-white/10 rounded-md text-white/70"
              >
                {{ color }}
              </span>
              <span class="px-2 py-1 text-xs bg-white/10 rounded-md text-white/70">
                +{{ feature.colors.length - 6 }} more
              </span>
            </div>
            <div v-if="feature.fallback" class="flex flex-wrap gap-2">
              <span class="px-2 py-1 text-xs bg-accent/20 rounded-md text-accent">Shields</span>
              <span class="px-2 py-1 text-xs bg-accent/20 rounded-md text-accent">Lettermarks</span>
              <span class="px-2 py-1 text-xs bg-accent/20 rounded-md text-accent">Swatches</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tournament Mode -->
    <section class="section-padding bg-white/5">
      <div class="container-max">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1 glass-hover p-4">
            <img
              src="/screen-shots/tournament-in-play.png"
              alt="Tournament bracket showing match progression"
              class="w-full rounded-lg shadow-xl"
            />
          </div>
          <div class="order-1 lg:order-2">
            <span class="text-accent font-semibold text-sm uppercase tracking-wider">Tournament Mode</span>
            <h2 class="heading-3 text-white mt-2 mb-6">Run Your Own Tournaments</h2>
            <p class="text-white/70 mb-6">
              Built-in tournament system with visual brackets, automatic progression, and champion tracking. Perfect for office leagues, family game nights, or club events.
            </p>
            <div class="grid sm:grid-cols-2 gap-4">
              <div
                v-for="feature in tournamentFeatures"
                :key="feature.title"
                class="flex items-start gap-3"
              >
                <svg class="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p class="text-white font-medium text-sm">{{ feature.title }}</p>
                  <p class="text-white/50 text-xs">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- League Mode -->
    <section class="section-padding">
      <div class="container-max">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span class="text-accent font-semibold text-sm uppercase tracking-wider">League Mode</span>
            <h2 class="heading-3 text-white mt-2 mb-6">Season-Long Competition</h2>
            <p class="text-white/70 mb-6">
              Run full league seasons with round-robin fixtures, professional standings tables, and automatic fixture generation. Perfect for office competitions, friend groups, or regular gaming nights.
            </p>
            <div class="grid sm:grid-cols-2 gap-4">
              <div
                v-for="feature in leagueFeatures"
                :key="feature.title"
                class="flex items-start gap-3"
              >
                <svg class="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p class="text-white font-medium text-sm">{{ feature.title }}</p>
                  <p class="text-white/50 text-xs">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="grid gap-4">
            <div class="glass-hover p-4">
              <img
                src="/screen-shots/league-in-play.png"
                alt="League standings table showing points and positions"
                class="w-full rounded-lg shadow-xl"
              />
            </div>
            <div class="glass-hover p-4">
              <img
                src="/screen-shots/league-in-play-2.png"
                alt="League fixtures and match schedule"
                class="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Features -->
    <section class="section-padding bg-white/5">
      <div class="container-max">
        <div class="mb-12 text-center">
          <span class="text-accent font-semibold text-sm uppercase tracking-wider">Technical Highlights</span>
          <h2 class="heading-3 text-white mt-2">Built for Reliability</h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="feature in technicalFeatures"
            :key="feature.title"
            class="glass-hover p-6"
          >
            <div class="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
              <svg v-if="feature.icon === 'pwa'" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <svg v-else-if="feature.icon === 'offline'" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
              <svg v-else-if="feature.icon === 'storage'" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
              <svg v-else-if="feature.icon === 'screen'" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <svg v-else-if="feature.icon === 'responsive'" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <svg v-else-if="feature.icon === 'touch'" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">{{ feature.title }}</h3>
            <p class="text-white/60 text-sm">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding">
      <div class="container-max">
        <div class="glass-hover p-8 lg:p-16 text-center">
          <h2 class="heading-3 text-white mb-4">Ready to Try It?</h2>
          <p class="subheading max-w-2xl mx-auto mb-8">
            All these features are available right now, completely free. No signup required.
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
