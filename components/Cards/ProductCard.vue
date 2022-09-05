<template>
  <v-card :class="[orientation, type]" class="product-card">
    <a v-ripple :href="href" class="hidden-link">&nbsp;</a>
    <figure>
      <img :src="img" :alt="title" />
    </figure>
    <div class="desc">
      <div class="text">
        <h6 class="title text-truncate pb-2">{{ title }}</h6>
        <p class="use-text-paragraph">
          {{ desc }}
        </p>
      </div>
      <div>
        <div class="property">
          <div class="property">
            <div v-if="rating > 0" class="rating">
              <v-rating
                :value="rating"
                color="orange lighten-3"
                background-color="grey"
                length="5"
                readonly
                size="24"
              />
            </div>
          </div>
          <strong v-if="price > 0">${{ price }}</strong>
        </div>
        <v-btn :href="href" block class="button" outlined color="primary">
          see detail
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'full', // available props: full, rounded, over, oval
    },
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      default: 0,
    },
    orientation: {
      type: String,
      default: 'portrait',
    },
    href: {
      type: String,
      default: '#',
    },
  },
}
</script>

<style lang="scss" scoped>
@import './product-card';
</style>
