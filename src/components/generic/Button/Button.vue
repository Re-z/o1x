<template>
    <!-- TODO: optimize -->
    <div class="button-wrapper">
        <div
            v-if="props.type === BUTTON_TYPES.PRIMARY"
            class="transform cursor-pointer rounded-lg bg-yellow-500 px-4 py-2 text-lg transition duration-500 ease-in-out hover:bg-yellow-600 active:scale-95"
            :style="{ color: props.color }"
        >
            {{ props.text }}
        </div>

        <div
            v-if="props.type === BUTTON_TYPES.SECONDARY"
            class="transform cursor-pointer text-lg transition duration-500 ease-in-out hover:underline active:scale-95"
            :style="{ color: props.color }"
        >
            {{ props.text }}
        </div>
    </div>
</template>
<script lang="ts" setup>
    // imports
    import { BUTTON_COLORS, BUTTON_TYPES } from './Button'
    // props
    const props = defineProps({
        text: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: BUTTON_TYPES.PRIMARY,
        },
        color: {
            type: String,
            default: BUTTON_COLORS.WHITE,
        },
    })
</script>
<style lang="scss" scoped></style>
