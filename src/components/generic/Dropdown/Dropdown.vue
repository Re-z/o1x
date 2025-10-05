<template>
    <!-- TODO: add tests for the component -->
    <div class="relative">
        <Input
            :size="props.size"
            :placeholder="props.placeholder"
            @focus="handleFocus(true)"
            @blur="handleFocus(false)"
        />
        <ul
            v-if="isDropdownVisible"
            class="absolute w-full"
        >
            <li class="bg-gray-100 p-2">1</li>
            <li class="bg-gray-100 p-2">2</li>
            <li class="bg-gray-100 p-2">3</li>
        </ul>
    </div>
</template>
<script setup lang="ts">
    import { INPUT_SIZE } from '@/components/generic/Input/Input.ts'
    import Input from '@/components/generic/Input/Input.vue'
    import { ref } from 'vue'
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
    // focus
    const isDropdownVisible = ref(false)

    function handleFocus(isVisible: boolean) {
        isDropdownVisible.value = isVisible
    }
</script>
