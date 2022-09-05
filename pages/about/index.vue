<template>
  <div class="main-wrap">
    <div class="container-front">
      <banner>
        <img
          :src="imgAPI.retailInner[1]"
          :data-2d="imgAPI.retailInner[0]"
          :data-3d="imgAPI.retailInner[1]"
          class="img-2d3d"
          alt="services 3d"
        />
      </banner>
      <company-logo />
      <div class="space-top-short">
        <counter />
      </div>
      <div class="space-top-short">
        <v-container>
          <v-row justify="center">
            <v-col md="6" cols="12" class="px-md-12">
              <about-video />
            </v-col>
            <v-col md="6" sm="8" cols="12" class="px-md-12">
              <about-progress />
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div class="space-top-short">
        <team-slider />
      </div>
      <div class="space-top-short space-bottom-short">
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
import CompanyLogo from '~/components/CompanyLogo'
import Counter from '~/components/Counter'
import Video from '~/components/About/Video'
import Progress from '~/components/About/Progress'
import TeamSlider from '~/components/About/TeamSlider'
import PhotoSlider from '~/components/About/PhotoSlider'
import CallAction from '~/components/CallAction'

export default {
  name: 'AboutPage',

  components: {
    Banner,
    CompanyLogo,
    Counter,
    'about-progress': Progress,
    'about-video': Video,
    TeamSlider,
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
      title: 'About | ' + brand.retail.desc,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/pages';
</style>
