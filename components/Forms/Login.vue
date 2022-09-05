<template>
  <AuthFrame
    title="Please login to continue"
    subtitle="A platform with efficient integration of many features and so much more"
    type="login"
  >
    <div>
      <div class="head">
        <h3 :class="isMobile ? 'use-text-title' : 'use-text-subtitle'">
          Welcome back
        </h3>
      </div>
      <social-auth />
      <div class="separator">
        <p>Or login with email</p>
      </div>
      <v-form ref="form" v-model="valid">
        <v-row class="spacing3">
          <v-col cols="12" sm="12" class="px-3 py-0">
            <v-text-field
              v-model="email"
              label="Email"
              :rules="emailRules"
              name="email"
              required
              color="secondary"
              filled
              class="input-field"
            />
          </v-col>
          <v-col cols="12" sm="12" class="px-3 py-0">
            <v-text-field
              v-model="password"
              label="Password"
              :rules="requiredRules"
              type="password"
              name="password"
              required
              color="secondary"
              filled
              class="input-field"
            />
          </v-col>
        </v-row>
        <div class="form-helper">
          <div class="form-control-label">
            <v-checkbox v-model="checkbox" label="Remember" color="secondary" />
          </div>
          <v-btn small class="button-link" text href="#">
            Forgot Password
          </v-btn>
        </div>
        <div class="btn-area">
          <v-btn large block color="secondary" @click="handleSubmit">
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
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      requiredRules: [(v) => !!v || 'This field is required'],
      checkbox: false,
    }
  },
  computed: {
    isMobile() {
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
