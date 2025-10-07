<template>
    <AppHeader />
    <slot />
    <AppFooter />
</template>

<script setup lang="ts">
    import AppHeader from '@/components/Header/Header.vue'
    import AppFooter from '@/components/Footer/Footer.vue'
</script>

<style lang="scss"></style>
