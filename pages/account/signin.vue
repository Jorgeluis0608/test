<template>
  <div class="main-wrap">
    <div class="container-general">
      <login-form />
    </div>
  </div>
</template>

<script>
import brand from '~/static/text/brand'
import LoginForm from '~/components/Forms/Login'
import link from '~/static/text/link'

export default {
  name: 'LoginForm',
  components: {
    LoginForm,
  },
  data() {
    return {
      link,
    }
  },
  head() {
    return {
      title: 'Login | ' + brand.retail.desc,
    }
  },
}
</script>

<style scoped lang="scss">
@import '~/assets/pages';
</style>
