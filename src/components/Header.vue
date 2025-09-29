<template>
    <!-- TODO: replace styles with tailwind -->
    <header class="flex items-center justify-between bg-gray-500 px-10 py-5">
        <div
            class="logo"
            @click="navigateToPage(ROUTES.MAIN_VIEW)"
        >
            <span class="first">O</span>
            <span class="second">1</span>
            <span class="third">x</span>
        </div>

        <div class="flex items-center">
            <div class="mr-8 flex">
                <AppButton
                    class="mr-8"
                    :class="{ 'bg-yellow-500': route.name === ROUTES.LIST_VIEW }"
                    :type="BUTTON_TYPES.SECONDARY"
                    text="List page exmpl"
                    @click="navigateToPage(ROUTES.LIST_VIEW)"
                />

                <AppButton
                    :class="{ 'bg-yellow-500': locale === 'ua' }"
                    :type="BUTTON_TYPES.SECONDARY"
                    text="UA"
                    @click="switchLang('ua')"
                />
                <span class="px-2 text-white">|</span>
                <AppButton
                    :class="{ 'bg-yellow-500': locale === 'en' }"
                    :type="BUTTON_TYPES.SECONDARY"
                    text="EN"
                    @click="switchLang('en')"
                />
            </div>
            <AppButton
                class="mr-8"
                :type="BUTTON_TYPES.SECONDARY"
                :text="$t('myProfile')"
            />
            <AppButton
                :type="BUTTON_TYPES.PRIMARY"
                :text="$t('createListing')"
            />
        </div>
    </header>
</template>

<script setup lang="ts">
    // imports
    import { ROUTES } from '@/router/routesMap'
    import { BUTTON_TYPES } from './generic/AppButton/AppButton'
    import AppButton from './generic/AppButton/AppButton.vue'
    import { useI18n } from 'vue-i18n'
    import { useRouter, useRoute } from 'vue-router'
    // router
    const router = useRouter()
    const route = useRoute()
    function navigateToPage(name: string) {
        router.push({
            name,
        })
    }

    // lang switch
    const { locale } = useI18n()
    function switchLang(lang: string) {
        locale.value = lang
    }
    // navigation
</script>

<style lang="scss" scoped>
    .logo {
        font-weight: bold;
        display: flex;
        align-items: center;
        cursor: pointer;
        width: fit-content;
        padding: 5px;
        .first {
            font-size: 20px;
        }
        .second {
            font-size: 25px;
        }
        .third {
            font-size: 18px;
        }
    }
</style>
