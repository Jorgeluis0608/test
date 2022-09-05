<template>
  <v-row justify="center">
    <v-col lg="10" md="12" class="pa-6">
      <h4 class="use-text-subtitle mb-3">Related Products</h4>
      <v-row class="scroll-tablet">
        <v-col
          v-for="index in 4"
          :key="index"
          class="px-2"
          lg="3"
          sm="4"
          cols="10"
        >
          <product-card
            :rating="3"
            :price="20"
            :img="imgAPI.photo[20 + index]"
            title="Sed lacinia velit"
            desc="Proin pretium arcu eget metus porta consecteturc"
            orientation="portrait"
            type="oval"
          />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import ProductCard from '../Cards/ProductCard'
import imgAPI from '~/static/images/imgAPI'

export default {
  components: {
    ProductCard,
  },
  data: () => ({
    imgAPI,
  }),
  computed: {
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.includes(this.$mq)
    },
  },
}
</script>

<style lang="scss" scoped>
@import './list.scss';
</style>
