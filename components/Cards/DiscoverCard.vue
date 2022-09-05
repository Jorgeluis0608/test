<template>
  <div class="discover-card">
    <figure class="screen">
      <img :src="img" alt="screen" />
    </figure>
    <v-card class="paper">
      <img
        :src="illustration3d"
        :data-2d="illustration2d"
        :data-3d="illustration3d"
        class="img-2d3d"
        alt="illustration"
      />
      <strong :class="color + '--text'">{{ title }}</strong>
      <p>
        {{ desc }}
      </p>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    illustration3d: {
      type: String,
      required: true,
    },
    illustration2d: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'primary',
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import './discover-card.scss';
</style>
