<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Hello Nuxt3/Vuetify3!` : 'Hello Nuxt3/Vuetify3!';
  }
})
</script>

<template>
  <!--
  <div>
    <NuxtWelcome />
  </div>
  -->

  <div>
    <NuxtPage />
  </div>
</template>
