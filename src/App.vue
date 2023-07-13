<script setup>
import WeatherData from './components/WeatherData.vue'
</script>

<template>
  <main>
    <Suspense>
      <WeatherData />
    </Suspense>
  </main>
</template>
