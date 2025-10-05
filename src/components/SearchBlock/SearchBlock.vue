<template>
    <div class="flex justify-center bg-gray-300 p-9">
        <Input
            placeholder="input placeholder"
            :size="INPUT_SIZE.LG"
        />
        <Dropdown
            class="mx-3"
            placeholder="dropdown placeholder"
            :size="INPUT_SIZE.LG"
        />
        <Button
            :type="BUTTON_TYPES.PRIMARY"
            text="Search"
        />
    </div>
</template>
<script setup lang="ts">
    import { BUTTON_TYPES } from '@/components/generic/Button/Button'
    import Dropdown from '@/components/generic/Dropdown/Dropdown.vue'
    import { INPUT_SIZE } from '@/components/generic/Input/Input'
    import Input from '@/components/generic/Input/Input.vue'
    import Button from '@/components/generic/Button/Button.vue'
</script>
