# Safe Mode Implementation Brief

## Overview

This document outlines how to implement a "safe mode" in the TableMatch app that removes club crests/badges and replaces them with generic alternatives. This protects against potential IP complaints from football clubs/leagues.

---

## Implementation Approach

### 1. Runtime Config Variable

Add to `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      // Safe mode - set to true to disable club crests
      safeMode: process.env.NUXT_PUBLIC_SAFE_MODE === 'true' || false
    }
  }
})
```

### 2. Environment Variable

Create/update `.env`:

```
NUXT_PUBLIC_SAFE_MODE=false
```

To enable safe mode instantly, just change to `true` and redeploy.

### 3. Composable for Safe Mode

Create `composables/useSafeMode.ts`:

```ts
export const useSafeMode = () => {
  const config = useRuntimeConfig()
  const safeMode = computed(() => config.public.safeMode)

  return {
    safeMode,
    // Helper to get team display
    getTeamDisplay: (team: Team) => {
      if (safeMode.value) {
        return {
          name: team.name,
          shortName: team.tla || team.name.substring(0, 3).toUpperCase(),
          // Use team colours as fallback
          primaryColour: team.clubColors?.split('/')[0] || '#666',
          secondaryColour: team.clubColors?.split('/')[1] || '#999',
          crest: null // No crest in safe mode
        }
      }
      return {
        name: team.name,
        shortName: team.tla,
        primaryColour: team.clubColors?.split('/')[0],
        secondaryColour: team.clubColors?.split('/')[1],
        crest: team.crest
      }
    }
  }
}
```

### 4. Team Badge Component

Create `components/TeamBadge.vue`:

```vue
<script setup lang="ts">
const props = defineProps<{
  team: {
    name: string
    tla?: string
    crest?: string
    clubColors?: string
  }
  size?: 'sm' | 'md' | 'lg'
}>()

const { safeMode, getTeamDisplay } = useSafeMode()
const display = computed(() => getTeamDisplay(props.team))

const sizeClasses = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-12 h-12 text-sm',
  lg: 'w-16 h-16 text-base'
}
</script>

<template>
  <!-- Normal mode: show crest -->
  <img
    v-if="!safeMode && display.crest"
    :src="display.crest"
    :alt="display.name"
    :class="sizeClasses[size || 'md']"
    class="object-contain"
  />

  <!-- Safe mode: show lettermark -->
  <div
    v-else
    :class="sizeClasses[size || 'md']"
    class="rounded-lg flex items-center justify-center font-bold"
    :style="{
      background: `linear-gradient(135deg, ${display.primaryColour}, ${display.secondaryColour})`
    }"
  >
    {{ display.shortName }}
  </div>
</template>
```

### 5. Alternative Displays for Safe Mode

**Option A: Lettermarks (ARS, LIV, MCI)**
- Use team's TLA code
- Display on gradient of team colours

**Option B: Generic Shields**
- SVG shield shape
- Fill with team's primary/secondary colours

**Option C: Colour Swatches**
- Simple circle or square
- Split diagonal with both team colours

---

## What to Include in the App

### Required Legal Pages (In-App)

The app should have accessible links to:

1. **Terms of Service** (can link to marketing site)
2. **Privacy Policy** (can link to marketing site)
3. **Disclaimer** (visible in settings or about screen)

### In-App Disclaimer (Required)

Add to Settings or About screen:

```
DISCLAIMER

This is an unofficial fan-made app. Club names, badges,
and logos are the property of their respective owners.

TableMatch is not affiliated with, endorsed by, or
sponsored by any football club, league, or governing body.

Team data provided by football-data.org.
```

### Privacy Notice for the App

The app should clearly state:

```
PRIVACY

• All data stored locally on your device
• No personal information collected
• No accounts or sign-ups required
• No analytics or tracking
• No data sent to external servers (except football-data.org API for team lists)
```

---

## Recommended App Settings Screen

```
Settings
├── Sound Effects [toggle]
├── Match Duration [10/15/20 min]
├── Theme [Dark/Light - if applicable]
├── Team Display Mode
│   ├── Full (with crests)
│   └── Generic (lettermarks only)
├── About
│   ├── Version
│   ├── Disclaimer
│   └── Credits
└── Legal
    ├── Privacy Policy → links to tablematch.com/privacy
    └── Terms of Service → links to tablematch.com/terms
```

---

## Emergency Response Plan

If you receive a takedown request:

1. **Immediate**: Set `NUXT_PUBLIC_SAFE_MODE=true` and redeploy
2. **Within 24h**: Respond to the requester acknowledging receipt
3. **Within 7 days**: Implement permanent removal if requested for specific clubs
4. **Document**: Keep records of all communications

### Quick Deploy Commands

```bash
# Enable safe mode immediately
NUXT_PUBLIC_SAFE_MODE=true yarn build
yarn deploy

# Or if using Vercel/Netlify, update env var in dashboard
```

---

## Summary

| Component | Action |
|-----------|--------|
| `nuxt.config.ts` | Add `runtimeConfig.public.safeMode` |
| `.env` | Add `NUXT_PUBLIC_SAFE_MODE=false` |
| `composables/useSafeMode.ts` | Create safe mode composable |
| `components/TeamBadge.vue` | Create badge component with fallback |
| Settings screen | Add "Team Display Mode" toggle |
| About/Settings | Add disclaimer text |
| Footer/About | Link to Privacy Policy and Terms |

This architecture means you can flip one environment variable and instantly remove all club imagery from the app without any code changes.
