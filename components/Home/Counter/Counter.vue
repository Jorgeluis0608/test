<template>
  <div class="counter-wrap">
    <v-container class="max-md" id="watched_counter">
      <v-row justify="center" align="center" class="counter-inner spacing6">
        <v-col md="4" class="pa-6">
          <div class="counter-item">
            <div class="text">
              <h3 class="use-text-title">
                <span
                  v-if="loaded"
                  v-countUp:onWindowScroll.once="{
                    watchedElId: 'watched_counter',
                    startValue: 0,
                    endValue: 20000,
                    options: { duration: 2 },
                  }"
                />M
              </h3>
              <p class="use-text-subtitle">
                <i class="ion-ios-cloud-download-outline" />
                downloads
              </p>
            </div>
          </div>
        </v-col>
        <v-col md="4" class="pa-6">
          <div class="counter-item">
            <div class="text">
              <h3 class="use-text-title">
                +<span
                  v-if="loaded"
                  v-countUp:onWindowScroll.once="{
                    watchedElId: 'watched_counter',
                    startValue: 0,
                    endValue: 18000,
                    options: { duration: 2 },
                  }"
                />M
              </h3>
              <p class="use-text-subtitle">
                <i class="ion-ios-checkmark-circle-outline" />
                transactions
              </p>
            </div>
          </div>
        </v-col>
        <v-col md="4" class="pa-6">
          <div class="counter-item">
            <div class="text">
              <h3 class="use-text-title">
                +<span
                  v-if="loaded"
                  v-countUp:onWindowScroll.once="{
                    watchedElId: 'watched_counter',
                    startValue: 0,
                    endValue: 18000,
                    options: { duration: 2 },
                  }"
                />K
              </h3>
              <p class="use-text-subtitle">
                <i class="ion-ios-home-outline" />
                merchants
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loaded: false,
    }
  },
  mounted() {
    this.loaded = true
  },
}
</script>

<style lang="scss" scoped>
@import 'counter-style.scss';
</style>
