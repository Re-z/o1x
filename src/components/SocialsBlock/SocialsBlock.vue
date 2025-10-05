<template>
    <div class="justify-center bg-amber-700 px-2 py-4 text-center">
        <img
            src="https://place-hold.it/100x100"
            class="mx-auto"
        />
        <p class="text-l py-7 text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod cumque rem aperiam
            dolores perspiciatis laudantium deleniti id? Quam, enim rerum. Doloribus officiis
            maiores accusantium vero a voluptates tempore quae. Ipsam qui incidunt sunt? Dolores
            labore qui maxime explicabo quaerat deleniti debitis ea adipisci, perferendis veniam
            soluta, nemo nihil illum sit.
        </p>
        <div class="flex justify-center">
            <Button
                data-test-id="socials-button"
                class="px-2"
                :type="BUTTON_TYPES.SECONDARY"
                v-for="social in socials"
                :key="social.title"
                :text="social.title"
                @click="handleSocialClick(social.link)"
            />
        </div>
    </div>
</template>
<script setup lang="ts">
    // imports
    import { ref } from 'vue'
    import Button from '../generic/Button/Button.vue'
    import { BUTTON_TYPES } from '../generic/Button/Button'

    // social buttons click handler
    const socials = ref([
        {
            title: 'Instagram',
            link: 'https://instagram.com',
            img: '',
        },
        {
            title: 'Facebook',
            link: 'https://facebook.com',
            img: '',
        },
        {
            title: 'Threads',
            link: 'https://threads.com',
            img: '',
        },
    ])

    function handleSocialClick(link: any) {
        window.open(link, '_blank')
    }
</script>
