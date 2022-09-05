<template>
  <hero-banner>
    <section class="search-banner">
      <v-container class="max-md">
        <v-row align="center" class="search-block">
          <v-col sm="12">
            <h2 class="use-text-title2 use-text-primary text-center">
              Milion of resources for everyone
            </h2>
            <h3 class="use-text-subtitle2 text-center">
              Browse over 300 million stock items. Quickly find authentic and
              premium items.
            </h3>
            <div class="search">
              <v-text-field
                placeholder="I'm looking for..."
                :value="value"
                :height="56"
                outlined
                color="primary"
                single-line
                @input="(e) => updateValue(e)"
              />
              <v-icon class="search-icon">mdi-magnify</v-icon>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </hero-banner>
</template>

<script>
import HeroBanner from '../HeroBanner'

export default {
  components: {
    HeroBanner,
  },
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  methods: {
    updateValue: function (value) {
      this.$emit('input', value)
    },
  },
}
</script>

<style scoped lang="scss">
@import './filter1';
</style>
