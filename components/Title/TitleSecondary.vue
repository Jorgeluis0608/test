<template>
  <div class="title-secondary" :class="align">
    <h4>
      {{ text }}
    </h4>
  </div>
</template>

<script>
export default {
  props: {
    align: {
      type: String,
      default: 'left',
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import './title-style.scss';
</style>
