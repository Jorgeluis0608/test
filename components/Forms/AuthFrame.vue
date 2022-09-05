<template>
  <div class="page-wrap">
    <v-container class="inner-wrap">
      <div class="auth-frame">
        <v-row>
          <v-col md="6" class="px-sm-6 px-2" cols="12">
            <v-card class="form-box fragment-fadeUp">
              <div class="form-wrap">
                <slot />
              </div>
            </v-card>
          </v-col>
          <v-col md="6" class="px-sm-6 pa-0" cols="12">
            <hidden point="smDown">
              <div class="greeting">
                <h4 class="use-text-title2 pb-2">
                  {{ title }}
                </h4>
                <h6 class="use-text-subtitle2">
                  {{ subtitle }}
                </h6>
                <div class="img">
                  <img
                    v-if="type === 'login'"
                    :src="imgAPI.retailInner[3]"
                    :data-2d="imgAPI.retailInner[2]"
                    :data-3d="imgAPI.retailInner[3]"
                    class="img-2d3d"
                    alt="login"
                  />
                  <img
                    v-else
                    :src="imgAPI.retailInner[5]"
                    :data-2d="imgAPI.retailInner[4]"
                    :data-3d="imgAPI.retailInner[5]"
                    class="img-2d3d"
                    alt="register"
                  />
                </div>
              </div>
            </hidden>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import Hidden from '../Hidden'
import brand from '~/static/text/brand'
import routerLink from '~/static/text/link'
import imgAPI from '~/static/images/imgAPI'

export default {
  components: {
    Hidden,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      imgAPI,
      brand,
      routerLink,
    }
  },
}
</script>

<style lang="scss" scoped>
@import './form-style.scss';
</style>
