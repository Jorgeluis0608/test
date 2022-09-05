<template>
  <div class="main-wrap">
    <div class="container-front">
      <banner>
        <img
          :src="imgAPI.ui[5]"
          :data-2d="imgAPI.ui[4]"
          :data-3d="imgAPI.ui[5]"
          class="img-2d3d"
          alt="services 3d"
        />
      </banner>
      <counter />
      <div class="space-top space-bottom-short text-md-start text-center">
        <v-container>
          <title-main :align="isMobile ? 'center' : 'left'">
            <span> Team Member </span>
          </title-main>
          <p class="use-text-subtitle2">
            Vestibulum faucibus eget erat eget pretium. Donec commodo convallis
            eget suscipit orci. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
          <team-grid />
        </v-container>
      </div>
      <div class="space-bottom-short">
        <photo-slider />
      </div>
      <div id="call-to-action" class="space-top-short space-bottom-short">
        <call-action />
      </div>
    </div>
  </div>
</template>

<script>
import brand from '~/static/text/brand'
import imgAPI from '~/static/images/imgAPI'
import Banner from '~/components/About/Banner'
import Counter from '~/components/Counter'
import PhotoSlider from '~/components/About/PhotoSlider'
import CallAction from '~/components/CallAction'
import TeamGrid from '~/components/About/TeamGrid'
import Title from '~/components/Title'

export default {
  name: 'AboutTeam',

  components: {
    'title-main': Title,
    TeamGrid,
    Banner,
    Counter,
    PhotoSlider,
    CallAction,
  },
  data() {
    return {
      imgAPI,
    }
  },
  head() {
    return {
      title: 'Team | ' + brand.retail.desc,
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.includes(this.$mq)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/pages';
</style>
