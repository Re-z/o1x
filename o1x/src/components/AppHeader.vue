<template>
  <header class="main-header">
    <div class="logo">
      <span class="first">O</span>
      <span class="second">1</span>
      <span class="third">x</span>
    </div>

    <div class="action-buttons">
      <AppButton :type="BUTTON_TYPES.SECONDARY" :text="'My cabinet'" />
      <AppButton :type="BUTTON_TYPES.PRIMARY" :text="'Create Listing'" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { BUTTON_TYPES } from './generic/AppButton/AppButton'
import AppButton from './generic/AppButton/AppButton.vue'
</script>

<style lang="scss" scoped>
.action-buttons {
  display: flex;
  align-items: center;
}
.main-header {
  background: $color-primary;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  color: $color-secondary;
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
