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
        <AppButton
            :type="BUTTON_TYPES.PRIMARY"
            text="Search"
        />
    </div>
</template>
<script setup lang="ts">
    import { BUTTON_TYPES } from './generic/AppButton/AppButton'
    import Dropdown from './generic/Dropdown.vue'
    import { INPUT_SIZE } from './generic/Input/Input'
    import Input from './generic/Input/Input.vue'
    import AppButton from './generic/AppButton/AppButton.vue'
</script>
