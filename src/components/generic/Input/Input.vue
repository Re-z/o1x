<template>
    <!-- TODO: add tests for the component -->
    <div>
        <input
            class="rounded-1 rounded-sm bg-white outline-0"
            :class="{
                'px-4 py-2 text-xl': props.size === INPUT_SIZE.LG,
                'bg-amber-100': props.size === INPUT_SIZE.MD,
            }"
            type="text"
            :placeholder="props.placeholder"
            @focus="emit('focus')"
            @blur="emit('blur')"
        />
    </div>
</template>
<script setup lang="ts">
    import { INPUT_SIZE } from './Input'

    const emit = defineEmits<{
        (e: 'focus'): void
        (e: 'blur'): void
    }>()
    // props
    const props = defineProps({
        placeholder: {
            type: String,
            default: '',
        },
        size: {
            //TODO: add strict validation from map INPUT_SIZE
            type: String,
            default: INPUT_SIZE.SM,
        },
    })
</script>
