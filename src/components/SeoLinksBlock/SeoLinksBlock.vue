<template>
    <div class="flex justify-center bg-gray-300 px-4 py-2">
        <div class="mr-5 w-1/2 max-w-[600px]">
            <img
                class="mx-auto mb-4"
                src="https://place-hold.it/100x100"
                alt=""
            />
            <div class="flex flex-wrap items-center justify-center">
                <strong class="mr-4">{{ $t('sections') }}:</strong>
                <Button
                    :type="BUTTON_TYPES.SECONDARY"
                    :color="BUTTON_COLORS.BLACK"
                    v-for="link in links.sections"
                    :key="link.name"
                    :text="link.name"
                    class="mr-2"
                />
            </div>
        </div>
        <div class="w-1/2 max-w-[600px]">
            <img
                class="mx-auto mb-4"
                src="https://place-hold.it/100x100"
                alt=""
            />

            <div class="flex flex-wrap items-center justify-center">
                <strong class="mr-4">{{ $t('popularRequests') }}:</strong>
                <Button
                    :type="BUTTON_TYPES.SECONDARY"
                    :color="BUTTON_COLORS.BLACK"
                    v-for="link in links.popularRequests"
                    :key="link.name"
                    :text="link.name"
                    class="mr-2"
                />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    // imports
    import { useSeoLinksStore } from '@/stores/seoLinks'
    import Button from '@/components/generic/Button/Button.vue'
    import { BUTTON_COLORS, BUTTON_TYPES } from '@/components/generic/Button/Button'

    const links = useSeoLinksStore()
</script>
