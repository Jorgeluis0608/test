<template>
  <v-container class="root">
    <title-main align="center"> Bussines Type </title-main>
    <p class="use-text-subtitle2 px-15 text-center">
      Small businesses can now manage their customer relationships more easily
      than ever
    </p>
    <div class="circle-group">
      <div v-for="(item, index) in businessData" :key="index">
        <div
          data-aos="zoom-in"
          :data-aos-delay="100 * index"
          :class="['fill-' + item.color, item.type]"
          :style="{ top: item.y + 'px', left: item.x + 'px' }"
          class="circle"
        >
          <svg :style="{ transform: 'rotate(' + item.rotate + 'deg)' }">
            <use
              :xlink:href="'/images/retail/circle-' + item.type + '.svg#main'"
            />
          </svg>
          <a v-ripple href="javascipt:void(0)" class="paper">
            <i :class="item.icon" />
            <h6>
              {{ item.name }}
            </h6>
          </a>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import Title from '../../Title'

export default {
  components: {
    'title-main': Title,
  },
  data() {
    return {
      businessData: [
        {
          icon: 'ion-ios-briefcase',
          name: 'profesional',
          type: 'large',
          color: 'primary',
          rotate: -90,
          x: 0,
          y: 0,
        },
        {
          icon: 'ion-ios-cut',
          name: 'barbershop',
          type: 'medium',
          color: 'secondary',
          rotate: 0,
          x: 320,
          y: 10,
        },
        {
          icon: 'ion-md-shirt',
          name: 'clothing',
          type: 'medium',
          color: 'accent',
          rotate: 180,
          x: 40,
          y: 315,
        },
        {
          icon: 'ion-md-home',
          name: 'minimarket',
          type: 'small',
          color: 'secondary',
          rotate: 180,
          x: 275,
          y: 295,
        },
        {
          icon: 'ion-md-restaurant',
          name: 'restaurant',
          type: 'large',
          color: 'accent',
          rotate: 120,
          x: 425,
          y: 303,
        },
        {
          icon: 'ion-md-car',
          name: 'automotive',
          type: 'medium',
          color: 'primary',
          rotate: 80,
          x: 748,
          y: 277,
        },
        {
          icon: 'ion-md-cafe',
          name: 'cafe',
          type: 'small',
          color: 'accent',
          rotate: 120,
          x: 580,
          y: 100,
        },
        {
          icon: 'ion-ios-cafe',
          name: 'cofeshop',
          type: 'small',
          color: 'primary',
          rotate: -60,
          x: 720,
          y: 10,
        },
        {
          icon: 'ion-ios-cart',
          name: 'retail',
          type: 'large',
          color: 'secondary',
          rotate: 0,
          x: 873,
          y: 0,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import './business-style.scss';
</style>
