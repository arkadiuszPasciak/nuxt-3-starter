<template>
  <div class="PageLayout">
    <Header />
    <Main><slot /></Main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Footer from '@/components/base/Footer.vue'
import Header from '@/components/base/Header.vue'
import Main from '@/components/base/Main.vue'
</script>

<style lang="scss" scoped></style>
