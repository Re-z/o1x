<template>
    <div class="flex min-h-screen flex-col">
        <AppHeader />
        <main class="flex-1">
            <router-view />
        </main>
        <AppFooter />
    </div>
</template>

<script setup lang="ts">
    import AppHeader from '@/components/Header/Header.vue'
    import AppFooter from '@/components/Footer.vue'
</script>
<style scoped></style>
