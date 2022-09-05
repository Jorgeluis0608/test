<template>
  <div class="form-comment">
    <div class="write">
      <v-avatar v-if="!isMobile" :size="36" class="avatar">
        <img :src="avatar" alt="avatar" />
      </v-avatar>
      <v-text-field
        placeholder="Write Comments"
        solo
        color="primary"
        single-line
      />
      <v-btn class="send-btn" color="primary">
        {{ isMobile ? '' : 'Send Message' }}
        <v-icon v-if="isMobile">mdi-send</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import avatarDefault from '~/static/images/avatars/pp_boy4.svg'

export default {
  props: {
    avatar: {
      type: String,
      default: avatarDefault,
    },
  },
  computed: {
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.includes(this.$mq)
    },
  },
}
</script>

<style lang="scss" scoped>
@import './comment.scss';
</style>
