<template>
    <footer class="bg-gray-500 px-10 py-15">
        <ul class="flex flex-col gap-3 w-max">
            <li>
                <AppButton
                    :class="{ 'bg-yellow-500': route.name === ROUTES.TAC_VIEW }"
                    :type="BUTTON_TYPES.SECONDARY"
                    @click="navigateToPage(ROUTES.TAC_VIEW)"
                    :text=" $t('termsAndConditions')"
                />
            </li>
        </ul>
    </footer>
</template>

<script setup lang="ts">
    //imports
    import { ROUTES } from '@/router/routesMap.ts'
    import { BUTTON_TYPES } from '@/components/generic/Button/Button'

    import { useRouter, useRoute } from 'vue-router'
    import AppButton from '@/components/generic/Button/Button.vue'
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
