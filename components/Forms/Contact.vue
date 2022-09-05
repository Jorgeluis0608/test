<template>
  <div class="page-wrap">
    <form-deco v-if="isDesktop" />
    <v-snackbar
      v-model="snackbar"
      :timeout="4000"
      top
      right
      class="notification"
    >
      <div class="action">Message Sent</div>
      <v-btn text icon @click="snackbar = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
    <v-container class="inner-wrap max-md">
      <div class="full-form-wrap">
        <div class="text-center">
          <h3 class="use-text-title pb-3 text-center">Say Hello to Us</h3>
          <p class="desc use-text-subtitle2 text-center">
            Do you have any questions? Are you ready to reduce cost and create
            new revenue? Or you simply want to say hi? Drop us a message.
          </p>
        </div>
        <div class="form">
          <v-form ref="form" v-model="valid">
            <v-row class="spacing6">
              <v-col cols="12" sm="6" class="px-6 py-0">
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  label="What is your name? *"
                  class="input-field"
                  color="secondary"
                  filled
                  required
                />
              </v-col>
              <v-col cols="12" sm="6" class="px-6 py-0">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="What is your email? *"
                  class="input-field"
                  color="secondary"
                  filled
                  required
                />
              </v-col>
              <v-col cols="12" sm="6" class="px-6 py-0">
                <v-text-field
                  v-model="phone"
                  label="What is your phone number?"
                  class="input-field"
                  color="secondary"
                  filled
                />
              </v-col>
              <v-col cols="12" sm="6" class="px-6 py-0">
                <v-text-field
                  v-model="company"
                  label="What is your company?"
                  class="input-field"
                  color="secondary"
                  filled
                />
              </v-col>
              <v-col cols="12" class="px-6 py-0">
                <v-textarea
                  v-model="message"
                  label="Write your message here"
                  rows="6"
                  class="input-field"
                  color="secondary"
                  filled
                />
              </v-col>
            </v-row>
            <div class="btn-area">
              <div class="form-control-label">
                <v-checkbox
                  v-model="checkbox"
                  color="primary"
                  :rules="[(v) => !!v || 'You must agree to continue!']"
                  label="I have read and accept the Terms of"
                  required
                />
                <span>
                  <a href="#" class="link"> Service & Privacy Policy * </a>
                </span>
              </div>
              <v-btn :block="isMobile" color="primary" large @click="validate">
                Send Message
              </v-btn>
            </div>
          </v-form>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import FormDeco from '../Decoration/FormDeco'
import logo from '~/static/images/retail-logo.svg'
import brand from '~/static/text/brand'
import link from '~/static/text/link'

export default {
  name: 'ContactPage',

  components: {
    FormDeco,
  },
  data() {
    return {
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
      logo: logo,
      brand: brand,
      routeLink: link,
    }
  },
  computed: {
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.includes(this.$mq)
    },
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.includes(this.$mq)
    },
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import './form-style.scss';
</style>
