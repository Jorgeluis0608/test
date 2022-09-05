<template>
  <div class="root">
    <title-main align="center">Management</title-main>
    <p class="use-text-subtitle2 px-sm-15 px-4 text-center">
      With a customer support platform focused on the features that matter most
      to service agents, you’ll always have instant access to the exact insights
      you need.
    </p>
    <div class="slider-wrap">
      <div v-if="loaded" class="carousel carousel-side">
        <slick ref="sliderSide" class="slider-side" :options="sideOptions">
          <div
            v-for="(item, index) in managementData"
            :key="index"
            class="item"
          >
            <div class="paper-round">
              <img
                class="img-2d3d"
                :src="item.illustration[1]"
                :data-2d="item.illustration[0]"
                :data-3d="item.illustration[1]"
                alt="illustration"
              />
              <h4 :class="item.color + '--text'">
                {{ item.title }}
              </h4>
            </div>
          </div>
        </slick>
      </div>
      <div v-if="loaded" class="carousel carousel-center">
        <slick
          ref="sliderCenter"
          class="slider-center"
          :options="centerOptions"
        >
          <div
            v-for="(item, index) in managementData"
            :key="index"
            class="item"
          >
            <div class="item" :class="index % 2 ? 'mobile' : 'desktop'">
              <figure>
                <img :src="item.img" alt="screen" />
              </figure>
              <div class="desc">
                <div>
                  <img
                    class="img-2d3d"
                    :src="item.illustration[1]"
                    :data-2d="item.illustration[0]"
                    :data-3d="item.illustration[1]"
                    alt="illustration"
                  />
                  <div class="text">
                    <h4 :class="item.color + '--text'">{{ item.title }}</h4>
                    <p>{{ item.desc }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </slick>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '../../Title'
import imgAPI from '~/static/images/imgAPI'

const managementData = [
  {
    title: 'Manage Customer',
    desc: 'Reach customers across every channel: telephone, email, live chat, and social media.',
    color: 'primary',
    illustration: [imgAPI.retail[13], imgAPI.retail[14]],
    img: imgAPI.retail[28],
  },
  {
    title: 'Manage Payment',
    desc: 'Integrated payments save time, ensure better accuracy and minimize errors',
    color: 'secondary',
    illustration: [imgAPI.retail[15], imgAPI.retail[16]],
    img: imgAPI.retail[29],
  },
  {
    title: 'Manage Shop',
    desc: 'From a single source of truth, you can exceed customer expectations and build bigger shop',
    color: 'accent',
    illustration: [imgAPI.retail[17], imgAPI.retail[18]],
    img: imgAPI.retail[30],
  },
  {
    title: 'Manage Wallet',
    desc: 'You can set your preferences to be alerted only for specific kinds of activities',
    color: 'primary',
    illustration: [imgAPI.retail[19], imgAPI.retail[20]],
    img: imgAPI.retail[31],
  },
  {
    title: 'Online Catalog',
    desc: 'Create an online catalog of your products, and allow your customers to make purchases directly',
    color: 'secondary',
    illustration: [imgAPI.retail[21], imgAPI.retail[22]],
    img: imgAPI.retail[32],
  },
  {
    title: 'Manage Shipping',
    desc: 'We offer real-time shipment monitoring for all of your express pickups and deliveries',
    color: 'accent',
    illustration: [imgAPI.retail[23], imgAPI.retail[24]],
    img: imgAPI.retail[33],
  },
]

export default {
  components: {
    'title-main': Title,
    Slick: () => import('vue-slick'),
  },
  data() {
    return {
      loaded: false,
      managementData: managementData,
      sideOptions: {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 7000,
        slidesToShow: 3,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        asNavFor: '.slider-center',
      },
      centerOptions: {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: false,
        fade: true,
        arrows: false,
        pauseOnHover: true,
        asNavFor: '.slider-side',
      },
    }
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.includes(this.$mq)
    },
  },
  mounted() {
    this.loaded = true
    setTimeout(() => {
      this.$refs.sliderSide.goTo(1)
    }, 100)
  },
}
</script>

<style lang="scss" scoped>
@import './management-style.scss';
</style>
