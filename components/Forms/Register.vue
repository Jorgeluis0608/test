<template>
  <AuthFrame
    title="Just register to join with us"
    subtitle="A platform with efficient integration of many features and so much more"
  >
    <div>
      <div class="head">
        <h3 :class="isMobile2 ? 'use-text-title' : 'use-text-subtitle'">
          Create new account
        </h3>
      </div>
      <social-auth />
      <div class="separator">
        <p>Or register with email</p>
      </div>
      <v-form ref="form" v-model="valid">
        <v-row class="spacing3">
          <v-col cols="12" sm="12" class="px-3 py-0">
            <v-text-field
              v-model="name"
              label="Name? *"
              :rules="requiredRules"
              color="secondary"
              filled
              class="input-field"
              name="name"
              required
            />
          </v-col>
          <v-col cols="12" sm="12" class="px-3 py-0">
            <v-text-field
              v-model="email"
              label="Email? *"
              :rules="emailRules"
              color="secondary"
              filled
              class="input-field"
              name="email"
              required
            />
          </v-col>
          <v-col cols="12" md="6" class="px-3 py-0">
            <v-text-field
              v-model="password"
              label="Password"
              :rules="requiredRules"
              color="secondary"
              filled
              class="input-field"
              type="password"
              name="email"
              required
            />
          </v-col>
          <v-col cols="12" md="6" class="px-3 py-0">
            <v-text-field
              v-model="confirmPassword"
              label="Confirm Password"
              :rules="passwordRules"
              color="secondary"
              filled
              class="input-field"
              type="password"
              name="confirm"
              required
            />
          </v-col>
        </v-row>
        <div class="btn-area flex">
          <div class="form-helper">
            <div class="form-control-label">
              <v-checkbox
                v-model="checkbox"
                label="I have read and accept the Terms of"
                :rules="requiredRules"
                color="secondary"
                required
              />
              <span>
                <a href="#" class="link"> Service & Privacy Policy * </a>
              </span>
            </div>
          </div>
          <v-btn
            :block="isTablet || isMobile"
            large
            color="secondary"
            @click="handleSubmit"
          >
            Continue
          </v-btn>
        </div>
      </v-form>
    </div>
  </AuthFrame>
</template>

<script>
import SocialAuth from './SocialAuth'
import AuthFrame from './AuthFrame'

export default {
  components: {
    SocialAuth,
    AuthFrame,
  },
  data() {
    return {
      valid: true,
      email: '',
      name: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      confirmPassword: '',
      requiredRules: [(v) => !!v || 'This field is required'],
      passwordRules: [
        (v) => !!v || 'This field is required',
        (v) => v === this.password || 'Passwords do not match',
      ],
      checkbox: false,
    }
  },
  computed: {
    isTablet() {
      const mdDown = this.$store.state.breakpoints.mdDown
      const mdUp = this.$store.state.breakpoints.mdUp
      return mdDown.includes(this.$mq) && mdUp.includes(this.$mq)
    },
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.includes(this.$mq)
    },
    isMobile2() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.includes(this.$mq)
    },
  },
  methods: {
    handleSubmit() {
      if (this.$refs.form.validate()) {
        console.log('data submited')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import './form-style';
</style>
