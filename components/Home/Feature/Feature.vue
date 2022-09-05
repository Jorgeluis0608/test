<template>
  <div class="root">
    <v-dialog v-model="dialog" max-width="690">
      <v-card class="video-popup">
        <v-card-title class="headline d-flex justify-space-between mb-3">
          <h4 class="use-text-subtitle">
            Reimagine how you sell with Sales Apps
          </h4>
          <v-btn icon @click="handleVideoClose()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <div v-if="yt.use" class="text-center">
          <youtube
            ref="youtube"
            :video-id="videoId"
            :player-vars="playerVars"
            :width="640"
            :height="360"
          />
        </div>
      </v-card>
    </v-dialog>
    <v-container>
      <title-main align="center"> features </title-main>
      <div class="item">
        <v-row
          align="center"
          justify="center"
          :class="[isMobile ? 'column-reverse' : 'row']"
        >
          <v-col cols="12" md="4" class="px-8">
            <div data-aos="zoom-in" data-aos-delay="200">
              <div class="illustration">
                <div class="bg pipe1" />
                <figure class="screen1 mobile-screen">
                  <img :src="imgAPI.retail[25]" alt="screen" />
                </figure>
                <figure class="graphic artwork1">
                  <img
                    :src="imgAPI.retail[10]"
                    :data-2d="imgAPI.retail[9]"
                    :data-3d="imgAPI.retail[10]"
                    class="img-2d3d"
                    alt="illustration"
                  />
                </figure>
              </div>
            </div>
          </v-col>
          <v-col md="6" cols="12" class="px-8">
            <div class="desc">
              <title-secondary
                text="Point of sale"
                :align="isMobile ? 'center' : 'left'"
              />
              <p
                class="use-text-subtitle2"
                :class="[isMobile ? 'text-center' : 'text-start']"
              >
                Transform your smartphone or tablet into an easy to use
                point-of-sale. Connect a receipt printer, barcode scanner, and
                cash drawer.
              </p>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="item">
        <v-row align="center">
          <v-col md="6" cols="12" class="px-8">
            <div class="desc">
              <title-secondary
                text="CRM and customer loyalty"
                :align="isMobile ? 'center' : 'right'"
              />
              <p
                class="use-text-subtitle2"
                :class="[isMobile ? 'text-center' : 'text-end']"
              >
                Turn once-in-a-while shoppers into regulars. Run loyalty program
                to reward customers for their recurring purchases
              </p>
            </div>
          </v-col>
          <v-col md="6" cols="12" class="px-sm-15">
            <div data-aos="zoom-in" data-aos-delay="200">
              <div class="illustration">
                <div class="bg pipe2" />
                <figure class="screen2 desktop-screen">
                  <img :src="imgAPI.retail[26]" alt="screen" />
                </figure>
                <figure class="graphic artwork2">
                  <img
                    :src="imgAPI.retail[12]"
                    :data-2d="imgAPI.retail[11]"
                    :data-3d="imgAPI.retail[12]"
                    class="img-2d3d"
                    alt="illustration"
                  />
                </figure>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="item last">
        <v-container>
          <v-row justify="center">
            <v-col md="8" cols="12" class="video-container">
              <div class="bg pipe3" />
              <div class="bg pipe4" />
              <title-secondary text="See how it works" align="center" />
              <p class="use-text-subtitle2 text-center">
                Imagine resolving every customer service inquiry promptly and
                proficiently—without a single sloppy handoff or having to
                scramble for purchase histories.
              </p>
              <div data-aos="zoom-in" data-aos-delay="200">
                <v-card class="video">
                  <img :src="imgAPI.retail[27]" alt="screen" />
                  <v-btn icon large class="button" @click="handleVideoOpen()">
                    <i class="ion-md-play" />
                  </v-btn>
                </v-card>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-container>
  </div>
</template>

<script>
import Title from '../../Title'
import TitleSecondary from '../../Title/TitleSecondary'
import imgAPI from '~/static/images/imgAPI'
import youtube from '~/youtube'

export default {
  name: 'HomeFeature',

  components: {
    TitleSecondary,
    'title-main': Title,
  },
  data() {
    return {
      videoId: 'MltGO66gTbo',
      imgAPI,
      dialog: false,
      playerVars: {
        autoplay: 0,
        controls: 1,
        rel: 0,
        showinfo: 1,
        mute: 0,
        origin: 'https://localhost:8006',
      },
      yt: youtube,
    }
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.includes(this.$mq)
    },
    isMobile() {
      const smDown = this.$store.state.breakpoints
        ? this.$store.state.breakpoints.smDown
        : ''
      return smDown.includes(this.$mq)
    },
    player() {
      return this.$refs.youtube.player
    },
  },
  methods: {
    handleVideoOpen() {
      if (!this.yt.use) {
        return false
      }
      this.dialog = true
      setTimeout(() => {
        this.player = this.$refs.youtube.player
        this.player.playVideo()
      }, 100)
    },
    handleVideoClose() {
      this.dialog = false
      this.player.pauseVideo()
    },
  },
}
</script>

<style lang="scss" scoped>
@import './feature-style.scss';
</style>
