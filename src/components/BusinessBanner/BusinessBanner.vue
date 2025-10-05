<template>
    <div class="flex items-center justify-center bg-green-900 px-2 py-4">
        <img
            width="100"
            height="100"
            src="https://place-hold.it/100x100"
            alt="placheholder text"
        />
        <div class="mx-5">
            <p class="text-2xl text-white">{{ $t('businessBannerTitle') }}</p>
            <p class="text-l text-white">{{ $t('businessBannerText') }}</p>
        </div>
        <Button :text="$t('details')" />
    </div>
</template>

<script setup lang="ts">
    // imports
    import Button from '../generic/Button/Button.vue'
</script>
