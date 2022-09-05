<template>
  <div class="main-wrap">
    <div class="container-general">
      <register-form />
    </div>
  </div>
</template>

<script>
import brand from '~/static/text/brand'
import RegisterForm from '~/components/Forms/Register'
import link from '~/static/text/link'

export default {
  name: 'RegisterForm',
  components: {
    RegisterForm,
  },
  data() {
    return {
      link,
    }
  },
  head() {
    return {
      title: 'Register | ' + brand.retail.desc,
    }
  },
}
</script>

<style scoped lang="scss">
@import '~/assets/pages';
</style>
