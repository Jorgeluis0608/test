<template>
  <div class="title-main" :class="[align, { dark: dark }]">
    <h3>
      <slot />
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    align: {
      type: String,
      default: 'left',
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
@import './title-style.scss';
</style>
