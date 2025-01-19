<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
</script>

<template>
  <main>
    <Header />

    <RouterView />
  </main>
</template>

<style scoped>
main{
  background: rgba(102, 221, 193, 0.668);
  min-height: 100vh;
}
</style>
