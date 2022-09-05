<template>
  <div class="video-root">
    <v-dialog v-model="dialog" max-width="690">
      <v-card class="video-popup">
        <v-card-title class="headline d-flex justify-space-between mb-3">
          <h4 class="use-text-subtitle">
            Vestibulum consequat hendrerit lacus
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
    <h4 class="use-text-title2 mb-3">Lorem ipsum dolor sit amet.</h4>
    <p class="use-text-subtitle2 pb-2">
      Proin scelerisque sapien at enim faucibus, ut scelerisque urna consequat.
      In porttitor congue libero
    </p>
    <div class="video-wrap">
      <div v-ripple @click="handleVideoOpen">
        <media-card
          :thumb="imgAPI.photo[11]"
          title="Sed lacinia velit, ut malesuada eros interdum a"
          orientation="landscape"
          type="video"
          duration="04:00"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MediaCard from '../Cards/MediaCard'
import youtube from '~/youtube'
import imgAPI from '~/static/images/imgAPI'

export default {
  name: 'AboutVideo',

  components: {
    MediaCard,
  },
  data() {
    return {
      videoId: 'sf15CtXuw9M',
      player: null,
      yt: youtube,
      imgAPI,
      dialog: false,
      playerVars: {
        autoplay: 0,
        controls: 1,
        rel: 0,
        showinfo: 1,
        mute: 0,
        origin: 'https://localhost:8000',
      },
    }
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

<style scoped lang="scss">
@import './about-style.scss';
</style>
