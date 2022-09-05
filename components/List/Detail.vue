<template>
  <div>
    <vue-easy-lightbox
      v-if="loaded"
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    />
    <v-row justify="center">
      <v-col lg="4" sm="5" cols="12" class="pa-md-6 py-0">
        <div v-if="loaded" class="carousel">
          <slick ref="slick" :options="slickOptions">
            <div
              v-for="index in 6"
              :key="index"
              class="image"
              @click="() => showImg(index - 1)"
            >
              <div class="figure">
                <v-img
                  v-ripple
                  :src="imgAPI.photo[20 + index]"
                  class="image-detail"
                  height="200px"
                />
                <v-icon class="zoom-icon">mdi-magnify-plus-outline</v-icon>
              </div>
            </div>
          </slick>
        </div>
      </v-col>
      <v-col lg="6" sm="7" cols="12" class="pa-6 px-md-10 pb-0">
        <div class="text">
          <h4 class="use-text-title2">
            <span class="use-text-subtitle2">Vivamus sit amet</span>
            The Lorem Ipsum Dolor Sit Amet
          </h4>
          <div class="property">
            <div class="star">
              <v-icon v-for="index in 5" :key="index" class="star-icon">
                mdi-star
              </v-icon>
            </div>
            5.0<span class="divider"></span>213 Sales
          </div>
          <article class="desc">
            <h6 class="use-text-paragraph">
              Maecenas nisl libero, tincidunt id odio id, feugiat vulputate
              quam. Vestibulum feugiat rhoncus metus.
            </h6>
          </article>
          <div class="btn-area">
            <v-btn href="#" text large class="text-btn">
              Add to wishlist
            </v-btn>
            <v-btn href="#" large class="button primary"> Add to cart </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import imgAPI from '~/static/images/imgAPI'

export default {
  name: 'ListDetail',
  components: {
    Slick: () => import('vue-slick'),
  },
  data: () => ({
    loaded: false,
    visible: false,
    index: 0,
    item: 0,
    imgAPI,
    imgs: [
      imgAPI.photo[21],
      imgAPI.photo[22],
      imgAPI.photo[23],
      imgAPI.photo[24],
      imgAPI.photo[25],
      imgAPI.photo[26],
    ],
    slickOptions: {
      dots: true,
      arrows: false,
      slidesToShow: 1,
      infinite: false,
      autoplay: false,
    },
  }),
  computed: {
    isMobile() {
      const xsDown = this.$store.state.breakpoints
        ? this.$store.state.breakpoints.xsDown
        : ''
      return xsDown.includes(this.$mq)
    },
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    showImg(index) {
      this.index = index
      this.visible = true
    },
    handleHide() {
      this.visible = false
    },
  },
}
</script>

<style lang="scss" scoped>
@import './list.scss';
</style>
