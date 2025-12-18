<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  message: ''
})

const status = ref<'idle' | 'loading' | 'success' | 'error'>('idle')
const errorMessage = ref('')

async function handleSubmit() {
  status.value = 'loading'
  errorMessage.value = ''

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: form
    })
    status.value = 'success'
    form.name = ''
    form.phone = ''
    form.message = ''
  } catch (error: any) {
    status.value = 'error'
    errorMessage.value = error?.data?.message || 'Something went wrong. Please try again.'
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <!-- Success Message -->
    <div v-if="status === 'success'" class="p-4 bg-accent/20 border border-accent/40 rounded-lg">
      <p class="text-accent font-medium">Message sent successfully! We'll be in touch soon.</p>
    </div>

    <!-- Error Message -->
    <div v-if="status === 'error'" class="p-4 bg-red-500/20 border border-red-500/40 rounded-lg">
      <p class="text-red-400">{{ errorMessage }}</p>
    </div>

    <template v-if="status !== 'success'">
      <!-- Name -->
      <div>
        <label for="name" class="block text-white/80 text-sm font-medium mb-2">Name</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          required
          placeholder="Your name"
          class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
        />
      </div>

      <!-- Email -->
      <div>
        <label for="email" class="block text-white/80 text-sm font-medium mb-2">Email Address</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          placeholder="Your email address"
          class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
        />
      </div>

      <!-- Message -->
      <div>
        <label for="message" class="block text-white/80 text-sm font-medium mb-2">Message</label>
        <textarea
          id="message"
          v-model="form.message"
          required
          rows="4"
          placeholder="How can we help?"
          class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
        />
      </div>

      <!-- Submit -->
      <button
        type="submit"
        :disabled="status === 'loading'"
        class="btn-primary w-full !py-4 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span v-if="status === 'loading'">Sending...</span>
        <span v-else>Send Message</span>
      </button>
    </template>

    <!-- Send Another -->
    <button
      v-if="status === 'success'"
      type="button"
      @click="status = 'idle'"
      class="btn-secondary w-full"
    >
      Send Another Message
    </button>
  </form>
</template>
