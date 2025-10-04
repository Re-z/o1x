<template>
    <footer class="bg-gray-500 px-10 py-15">
        <ul class="flex flex-col gap-3">
            <li>
                <router-link
                    to="tac"
                    class="inline-block px-1 text-lg text-white transition-all duration-300 hover:underline"
                    :class="{ 'bg-yellow-500': route.name === ROUTES.TAC_VIEW }"
                    @click="navigateToPage(ROUTES.TAC_VIEW)"
                >
                    {{ $t('termsAndConditions') }}
                </router-link>
            </li>
        </ul>
    </footer>
</template>

<script setup lang="ts">
    //imports
    import { ROUTES } from '@/router/routesMap'

    import { useRouter, useRoute } from 'vue-router'
    // router
    const router = useRouter()
    const route = useRoute()
    function navigateToPage(name: string) {
        router.push({
            name,
        })
    }
</script>

<style lang="scss" scoped></style>
