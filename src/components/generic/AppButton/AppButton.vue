<template>
  <div type="button" class="app-button" :class="props.type">
    {{ props.text }}
  </div>
</template>
<script lang="ts" setup>
// imports
import { BUTTON_TYPES } from './AppButton'
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
})
</script>
<style lang="scss" scoped>
.app-button {
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:active {
    transform: scale(0.95);
  }
  &.primary {
    background: white;
    color: $color-primary;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: bold;
    &:hover {
      background: $color-secondary;
      color: white;
    }
  }
  &.secondary {
    color: white;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
