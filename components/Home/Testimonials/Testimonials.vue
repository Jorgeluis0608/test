<template>
  <div class="root">
    <div :offset="-50" name="fadeInUpShort" delay="0.3s" duration="0.5s">
      <div>
        <title-main align="center"> testimonials </title-main>
      </div>
    </div>
    <div class="carousel-wrap">
      <div :offset="-150" name="fadeInUpShort" delay="0.4s" duration="0.5s">
        <div>
          <v-container class="max-sm">
            <div v-if="loaded" class="carousel-text">
              <slick
                ref="sliderText"
                class="slider-text"
                :options="settingsText"
              >
                <div
                  v-for="(item, index) in testiContent"
                  :key="index"
                  class="item"
                >
                  <p class="content">
                    {{ item.text }}
                  </p>
                  <p class="name">
                    <strong>{{ item.name }}</strong>
                    -
                    {{ item.title }}
                  </p>
                </div>
              </slick>
            </div>
          </v-container>
          <div v-if="loaded" class="carousel-avatar">
            <slick
              ref="sliderAvatar"
              class="slider-avatar"
              :options="settingsAvatar"
            >
              <div
                v-for="(item, index) in testiContent"
                :key="index"
                class="item"
              >
                <v-avatar class="avatar">
                  <img :alt="item.name" :src="item.avatar" />
                </v-avatar>
              </div>
            </slick>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '../../Title'
import imgAPI from '~/static/images/imgAPI'

const testiContent = [
  {
    text: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
    avatar: imgAPI.avatar[10],
    name: 'John Doe',
    title: 'Chief Digital Officer',
  },
  {
    text: 'Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.',
    avatar: imgAPI.avatar[1],
    name: 'Jean Doe',
    title: 'Chief Digital Officer',
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[2],
    name: 'Jena Doe',
    title: 'Graphic Designer',
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
    avatar: imgAPI.avatar[3],
    name: 'Jovelin Doe',
    title: 'Senior Graphic Designer',
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[4],
    name: 'Jihan Doe',
    title: 'Senior Graphic Designer',
  },
  {
    text: 'Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.',
    avatar: imgAPI.avatar[6],
    name: 'Jovelin Doe',
    title: 'Senior Graphic Designer',
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[7],
    name: 'John Doe',
    title: 'Senior Graphic Designer',
  },
  {
    text: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
    avatar: imgAPI.avatar[9],
    name: 'John Doe',
    title: 'Chief Digital Officer',
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[8],
    name: 'Jean Doe',
    title: 'Chief Digital Officer',
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
      currentSlide: 0,
      testiContent: testiContent,
      settingsText: {
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        arrows: false,
        asNavFor: '.slider-avatar',
      },
      settingsAvatar: {
        dots: false,
        infinite: true,
        speed: 500,
        focusOnSelect: true,
        autoplay: true,
        centerPadding: '2px',
        centerMode: true,
        autoplaySpeed: 50000,
        slidesToShow: 7,
        pauseOnHover: false,
        arrows: false,
        asNavFor: '.slider-text',
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
        ],
      },
    }
  },
  mounted() {
    this.loaded = true
  },
}
</script>

<style lang="scss" scoped>
@import './testi-style.scss';
</style>
