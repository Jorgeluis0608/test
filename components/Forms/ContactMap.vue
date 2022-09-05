<template>
  <div class="page-wrap">
    <form-deco v-if="isDesktop" />
    <v-snackbar
      :timeout="4000"
      top
      right
      v-model="snackbar"
      class="notification"
    >
      <div class="action">Message Sent</div>
      <v-btn text icon @click="snackbar = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
    <v-container class="inner-wrap">
      <v-row align="center">
        <v-col md="6" cols="12" class="pe-md-0 wrap-deco">
          <v-card :class="{ 'map-form': full }" class="form-box">
            <div class="form">
              <div class="text-center">
                <h4 class="use-text-title2 mb-3">Say Hello to Us</h4>
                <p>
                  Aenean sit amet magna vel magna fringilla fermentum. Donec sit
                  amet nulla sed arcu pulvinar ultricies commodo id ligula.
                </p>
              </div>
              <v-form ref="form" v-model="valid">
                <v-row class="spacing6">
                  <v-col cols="12" sm="12" class="px-6 pb-0">
                    <v-text-field
                      v-model="name"
                      :rules="nameRules"
                      label="What is your name? *"
                      color="secondary"
                      class="input-field"
                      filled
                      required
                    />
                  </v-col>
                  <v-col cols="12" sm="12" class="px-6 py-0">
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      label="What is your email? *"
                      color="secondary"
                      class="input-field"
                      filled
                      required
                    />
                  </v-col>
                  <v-col cols="12" sm="12" class="px-6 py-0">
                    <v-text-field
                      v-model="phone"
                      label="What is your phone number?"
                      color="secondary"
                      class="input-field"
                      filled
                    />
                  </v-col>
                  <v-col cols="12" class="px-6 py-0">
                    <v-textarea
                      v-model="message"
                      rows="6"
                      label="Write your message here"
                      color="secondary"
                      class="input-field"
                      filled
                    />
                  </v-col>
                </v-row>
                <div class="form-control-label">
                  <v-checkbox
                    v-model="checkbox"
                    color="secondary"
                    :rules="[(v) => !!v || 'You must agree to continue!']"
                    label="I have read and accept the Terms of"
                    required
                  />
                  <span>
                    <a href="#" class="link"> Service & Privacy Policy * </a>
                  </span>
                </div>
                <div class="btn-area">
                  <v-btn large block color="primary" @click="validate">
                    Send Message
                  </v-btn>
                </div>
              </v-form>
            </div>
          </v-card>
        </v-col>
        <v-col md="6" cols="12" class="ps-md-0">
          <v-card :class="{ full: full }" class="map" raised>
            <GMap
              ref="gMap"
              :center="{ lat: locations[0].lat, lng: locations[0].lng }"
              :options="{ fullscreenControl: false }"
              :zoom="6"
            >
              <GMapMarker
                ref="gMarker"
                v-for="location in locations"
                :key="location.id"
                :position="{ lat: location.lat, lng: location.lng }"
              >
                <GMapInfoWindow>
                  <div class="bubel">
                    <h6 class="title px-3 pb-2">Head Quarter</h6>
                    <v-row class="ma-3">
                      <v-col sm="6" cols="12" class="pa-0">
                        <p>
                          <v-icon class="icon">mdi-phone</v-icon>
                          +98 765 432 10
                        </p>
                      </v-col>
                      <v-col sm="6" cols="12" class="pa-0">
                        <p>
                          <v-icon class="icon">mdi-email</v-icon>
                          hello@awrora.com
                        </p>
                      </v-col>
                      <v-col sm="12" cols="12" class="pa-0">
                        <p>
                          <v-icon class="icon">mdi-map-marker</v-icon>
                          Lorem ipsum street Block C - Vestibullum Building
                        </p>
                      </v-col>
                    </v-row>
                  </div>
                </GMapInfoWindow>
              </GMapMarker>
            </GMap>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './form-style.scss';
</style>

<script>
import FormDeco from '../Decoration/FormDeco'

export default {
  components: {
    FormDeco,
  },
  data: () => ({
    currentLocation: {},
    locations: [
      {
        lat: 44.933076,
        lng: 15.629058,
      },
    ],
    valid: true,
    snackbar: false,
    name: '',
    nameRules: [(v) => !!v || 'Name is required'],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    phone: '',
    company: '',
    message: '',
    checkbox: false,
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
  },
  props: {
    full: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.includes(this.$mq)
    },
  },
}
</script>
