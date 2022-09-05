<template>
  <div class="main-wrap">
    <div class="container-general">
      <Quotation />
    </div>
  </div>
</template>

<script>
import brand from '~/static/text/brand'
import Quotation from '~/components/Forms/Quotation'

export default {
  components: {
    Quotation,
  },
  head() {
    return {
      title: 'Quotation | ' + brand.retail.desc,
    }
  },
}
</script>

<style scoped lang="scss">
@import '~/assets/pages';
</style>
