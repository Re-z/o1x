<template>
    <AppHeader />
    <SearchBlock />
    <Categories />
    <BusinessBanner />
    <SocialsBlock />
    <SeoLinksBlock />
    <AppFooter />
</template>
<script lang="ts" setup>
    import BusinessBanner from '@/components/BusinessBanner/BusinessBanner.vue'
    import AppHeader from '@/components/Header/Header.vue'
    import SeoLinksBlock from '@/components/SeoLinksBlock/SeoLinksBlock.vue'
    import SearchBlock from '@/components/SearchBlock/SearchBlock.vue'
    import SocialsBlock from '@/components/SocialsBlock/SocialsBlock.vue'
    import AppFooter from '@/components/Footer/Footer.vue'
    import Categories from '@/components/Categories/Categories.vue'
</script>
<style lang="scss"></style>
