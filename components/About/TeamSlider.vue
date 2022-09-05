<template>
  <div class="bg-wrapper">
    <div class="team-root">
      <v-container>
        <title-main :align="isMobile ? 'center' : 'left'">
          Team Member
        </title-main>
        <p class="use-text-subtitle2">
          Vestibulum faucibus eget erat eget pretium. Donec commodo convallis
          eget suscipit orci. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
      </v-container>
      <div v-if="loaded" class="carousel mt-15">
        <slick ref="slick" :options="slickOptions">
          <div v-for="index in 6" :key="index" class="item px-3">
            <profile-card
              :connection="100"
              :favorites="10"
              :albums="12"
              :cover="imgAPI.photo[40 + index]"
              :avatar="imgAPI.avatar[index]"
              name="John Dalton"
              title="Web Designer"
              type="over"
              orientation="landscape"
            />
          </div>
        </slick>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileCard from '../Cards/ProfileCard'
import Title from '../Title'
import imgAPI from '~/static/images/imgAPI'

export default {
  name: 'AboutTeam',

  components: {
    'title-main': Title,
    ProfileCard,
    Slick: () => import('vue-slick'),
  },
  data() {
    return {
      loaded: false,
      imgAPI,
      slickOptions: {
        dots: true,
        arrows: false,
        slidesToShow: 2,
        variableWidth: true,
        autoplay: false,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.includes(this.$mq)
    },
  },
  mounted() {
    this.loaded = true
  },
}
</script>

<style scoped lang="scss">
@import './about-style.scss';
</style>
