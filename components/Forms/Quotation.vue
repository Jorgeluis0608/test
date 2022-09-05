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
          <h3 class="use-text-title pb-3 text-center">Get Quotation</h3>
        </div>
        <div class="form">
          <v-form ref="form" v-model="valid">
            <v-row class="spacing6">
              <v-col cols="12" sm="6" md="4" class="px-6 py-0">
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
              <v-col cols="12" sm="6" md="4" class="px-6 py-0">
                <v-text-field
                  v-model="surname"
                  :rules="nameRules"
                  label="What is your surname? *"
                  class="input-field"
                  color="secondary"
                  filled
                  required
                />
              </v-col>
              <v-col cols="12" sm="6" md="4" class="px-6 py-0">
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
              <v-col cols="12" sm="6" md="4" class="px-6 py-0">
                <v-text-field
                  v-model="phone"
                  :rules="requiredRules"
                  label="What is your phone number?"
                  class="input-field"
                  color="secondary"
                  filled
                  required
                />
              </v-col>
              <v-col cols="12" sm="6" md="4" class="px-6 py-0">
                <v-text-field
                  v-model="companyName"
                  :rules="requiredRules"
                  label="What is your company name?"
                  class="input-field"
                  color="secondary"
                  filled
                  required
                />
              </v-col>
              <v-col cols="12" sm="6" md="4" class="px-6 py-0">
                <v-text-field
                  v-model="companyType"
                  :rules="requiredRules"
                  label="What is your company?"
                  class="input-field"
                  color="secondary"
                  filled
                  required
                />
              </v-col>
              <v-col cols="12" sm="6" md="4" class="px-6 py-0">
                <v-text-field
                  v-model="companyAddress"
                  :rules="requiredRules"
                  label="What is your company address?"
                  class="input-field"
                  color="secondary"
                  filled
                  required
                />
              </v-col>
              <v-col cols="12" sm="6" md="4" class="px-6 py-0">
                <v-text-field
                  v-model="companyWebsite"
                  :rules="requiredRules"
                  label="What is your company website?"
                  class="input-field"
                  color="secondary"
                  filled
                  required
                />
              </v-col>
              <v-col cols="12" sm="6" md="4" class="px-6 py-0">
                <v-text-field
                  v-model="businessEmail"
                  :rules="emailRules"
                  label="What is your business email? *"
                  class="input-field"
                  color="secondary"
                  filled
                  required
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
import link from '~/static/text/link'

export default {
  name: 'QuotationPage',

  components: {
    FormDeco,
  },
  data() {
    return {
      valid: true,
      snackbar: false,
      name: '',
      nameRules: [(v) => !!v || 'Name is required'],
      surnameRules: [(v) => !!v || 'Surname is required'],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      requiredRules: [(v) => !!v || 'This field is required'],
      phone: '',
      surname: '',
      companyName: '',
      companyAddress: '',
      companyType: '',
      companyWebsite: '',
      businessEmail: '',
      message: '',
      checkbox: false,
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
