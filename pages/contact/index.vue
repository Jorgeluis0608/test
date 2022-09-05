<template>
  <div class="main-wrap">
    <div class="container-general">
      <contact />
    </div>
  </div>
</template>

<script>
import brand from '~/static/text/brand'
import Contact from '~/components/Forms/Contact'

export default {
  components: {
    Contact,
  },
  head() {
    return {
      title: 'Contact | ' + brand.retail.desc,
    }
  },
}
</script>

<style scoped lang="scss">
@import '~/assets/pages';
</style>
