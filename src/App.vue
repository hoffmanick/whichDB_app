<script setup>
import { RouterView } from 'vue-router'
import LandingPageHeader from "@/views/resources/header.vue"
import LandingPageFooter from "@/views/resources/footer.vue"
</script>

<template>
  <LandingPageHeader></LandingPageHeader>
  <RouterView />
  <LandingPageFooter />
</template>
