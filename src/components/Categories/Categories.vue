<template>
    <div class="relative bg-emerald-50 px-2 py-4">
        <div class="mx-auto max-w-[800px]">
            <h2 class="mb-6 text-center text-3xl text-gray-500">{{ $t('categories') }}:</h2>
            <!-- preloader -->
            <div
                v-if="isPreloaderVisible"
                class="flex h-64 items-center justify-center"
            >
                <div
                    class="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-blue-500"
                ></div>
            </div>
            <!-- categories -->
            <ul class="columns-3">
                <li
                    v-for="category in categories"
                    :key="category.url"
                >
                    <Button
                        :color="BUTTON_COLORS.GREY"
                        :type="BUTTON_TYPES.SECONDARY"
                        :text="category.name[currentLocale]"
                        @click="setActiveCategory(category)"
                    />
                </li>
            </ul>
            <!-- subcategories -->
            <div
                v-if="!isEmpty(activeCategory)"
                class="mt-4 rounded-2xl border-2 border-gray-500 px-2 py-4"
            >
                <div class="mb-2 flex items-center justify-between border-b py-2">
                    <div class="d flex items-center">
                        <Button
                            :text="$t('showAllinCategory')"
                            :color="BUTTON_COLORS.BLACK"
                            :type="BUTTON_TYPES.SECONDARY"
                            @click="navigateToListPage(activeCategory.url)"
                        />
                        <strong class="ml-2">{{ activeCategory.name[currentLocale] }}</strong>
                    </div>
                    <span
                        class="text-bold mr-4 cursor-pointer text-2xl"
                        @click="setActiveCategory({})"
                    >
                        x
                    </span>
                </div>
                <ul>
                    <li
                        v-for="subcategory in activeCategory.subcategories"
                        :key="subcategory.url"
                    >
                        <span class="inline">
                            <Button
                                class="inline"
                                :color="BUTTON_COLORS.GREY"
                                :type="BUTTON_TYPES.SECONDARY"
                                :text="subcategory.name[currentLocale]"
                                @click="navigateToListPage(subcategory.url)"
                            />
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
    // imports
    import { onMounted, ref } from 'vue'
    import { useCategoriesStore } from '@/stores/categories'
    import { storeToRefs } from 'pinia'
    import { useI18n } from 'vue-i18n'
    import { BUTTON_COLORS, BUTTON_TYPES } from '../generic/Button/Button'
    import Button from '@/components/generic/Button/Button.vue'
    // todo: fix
    import { isEmpty } from 'lodash-es'
    import { useRouter } from 'vue-router'

    const currentLocale = useI18n().locale
    const categoriesStore = useCategoriesStore()
    const { categories } = storeToRefs(categoriesStore)
    const isPreloaderVisible = ref(true)
    
    //categories
    const activeCategory: any = ref({})
    onMounted(async () => {
        await categoriesStore.fetchCategories()
        isPreloaderVisible.value = false
    })
    function setActiveCategory(category: any) {
        activeCategory.value = category
    }

    // routing
    const router = useRouter()
    function navigateToListPage(path: any) {
        router.push(`list/${path}`)
    }
</script>
