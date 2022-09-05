<template>
  <div class="banner-wrap">
    <div v-if="loaded" class="carousel">
      <slick
        ref="slider"
        class="slider"
        :options="slickOptions"
        @afterChange="handleAfterChange"
      >
        <div id="slide1" class="slide">
          <div class="inner">
            <div class="img background-banner">
              <img
                class="img-2d3d"
                :src="imgAPI.retail[5]"
                :data-2d="imgAPI.retail[4]"
                :data-3d="imgAPI.retail[5]"
                alt="background"
              />
            </div>
            <v-container>
              <v-row>
                <v-col md="7" cols="12" class="d-flex align-center px-6">
                  <div class="text">
                    <h4 class="use-text-title">
                      Reimagine como você vende com aplicativos de vendas
                    </h4>
                    <h5 class="use-text-subtitle">
                      Ajudamos os líderes de mercado a transformar seus
                      negócios.
                    </h5>
                    <div class="btn-area">
                      <v-btn text large color="primary" href="#" class="button">
                        ver detalhes
                      </v-btn>
                      <v-btn
                        large
                        outlined
                        color="secondary"
                        :href="link.retail.contact"
                        class="button"
                      >
                        começar
                      </v-btn>
                    </div>
                  </div>
                </v-col>
                <v-col md="5" cols="12" class="px-lg-6">
                  <div class="img">
                    <img
                      class="img-2d3d img-slide1"
                      :src="imgAPI.retail[1]"
                      :data-2d="imgAPI.retail[0]"
                      :data-3d="imgAPI.retail[1]"
                      alt="banner 1 3D"
                    />
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
        <div id="slide2" class="slide">
          <div class="inner">
            <v-container>
              <v-row
                justify="end"
                :class="[isMobile ? 'column-reverse' : 'row']"
              >
                <v-col lg="5" md="4" cols="12" class="px-lg-10">
                  <div class="img">
                    <img
                      class="img-2d3d img-slide2"
                      :src="imgAPI.retail[3]"
                      :data-2d="imgAPI.retail[2]"
                      :data-3d="imgAPI.retail[3]"
                      alt="banner 2 3D"
                    />
                  </div>
                </v-col>
                <v-col lg="7" md="8" cols="12" class="d-flex align-center px-6">
                  <div class="text">
                    <h4 class="use-text-title">
                      Reimagine como você vende com aplicativos de vendas
                    </h4>
                    <h5 class="use-text-subtitle">
                      Ajudamos os líderes de mercado a transformar seus
                      negócios.
                    </h5>
                    <div class="btn-area">
                      <v-btn text large color="primary" href="#" class="button">
                        ver detalhes
                      </v-btn>
                      <v-btn
                        large
                        outlined
                        color="secondary"
                        :href="link.retail.contact"
                        class="button"
                      >
                        começar
                      </v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
        <div id="slide3" class="slide center-content">
          <div class="inner">
            <v-container>
              <v-row justify="end">
                <v-col cols="12" class="px-sm-12 px-6">
                  <div class="text text-center">
                    <h4 class="use-text-title">
                      Reimagine como você vende com aplicativos de vendas
                    </h4>
                    <h5 class="use-text-subtitle">
                      Ajudamos os líderes de mercado a transformar seus
                      negócios.
                    </h5>
                    <div class="btn-area">
                      <v-btn text large color="primary" href="#" class="button">
                        ver detalhes
                      </v-btn>
                      <v-btn
                        large
                        outlined
                        color="secondary"
                        :href="link.retail.contact"
                        class="button"
                      >
                        começar
                      </v-btn>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12">
                  <div class="img h-banner">
                    <img
                      class="img-2d3d"
                      :src="imgAPI.retail[7]"
                      :data-2d="imgAPI.retail[6]"
                      :data-3d="imgAPI.retail[7]"
                      alt="banner 3 3D"
                    />
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
      </slick>
    </div>
    <div class="slide-nav-group">
      <hidden point="smDown">
        <v-container>
          <nav class="slide-nav">
            <v-btn
              :class="{ active: currentSlide === 0 }"
              text
              @click="gotoSlide(0)"
            >
              <strong>First Slide</strong>
              Interdum et malesuada fames ac ante
            </v-btn>
            <v-divider class="divider" vertical inset />
            <v-btn
              :class="{ active: currentSlide === 1 }"
              text
              @click="gotoSlide(1)"
            >
              <strong>Second Slide</strong>
              Interdum et malesuada fames ac ante
            </v-btn>
            <v-divider class="divider" vertical inset />
            <v-btn
              :class="{ active: currentSlide === 2 }"
              text
              @click="gotoSlide(2)"
            >
              <strong>Third Slide</strong>
              Interdum et malesuada fames ac ante
            </v-btn>
          </nav>
        </v-container>
      </hidden>
    </div>
  </div>
</template>

<script>
import Hidden from '../../Hidden'
import link from '~/static/text/link'
import imgAPI from '~/static/images/imgAPI'

export default {
  name: 'HomeBanner',

  components: {
    Hidden,
    Slick: () => import('vue-slick'),
  },
  data() {
    return {
      loaded: false,
      currentSlide: 0,
      link,
      imgAPI,
      slickOptions: {
        dots: false,
        arrows: false,
        speed: 800,
        slidesToShow: 1,
        infinite: true,
        autoplay: false,
        cssEase: 'ease-out',
        responsive: [
          {
            breakpoint: 960,
            settings: {
              dots: true,
              fade: true,
            },
          },
        ],
      },
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints
        ? this.$store.state.breakpoints.smDown
        : ''
      return smDown.includes(this.$mq)
    },
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    handleAfterChange(event, slick, currentSlide) {
      this.currentSlide = currentSlide
    },
    gotoSlide(index) {
      this.$refs.slider.goTo(index)
    },
  },
}
</script>

<style scoped lang="scss">
@import './banner-styles';
</style>
