<template>
  <div class="main-wrap">
    <div class="container-wrap bottom-shift">
      <div id="home">
        <banner-slider />
      </div>
      <div v-if="sections.length">
        <transition-group name="page-section">
          <div
            v-for="(section, index) in sections"
            :key="`${index}.${section.type}`"
          >
            <SectionAsyncLoader
              v-if="section"
              :section="section"
              :collection-index="index"
              :fetch-is-pending="!loaded && $fetchState.pending"
            />
          </div>
        </transition-group>
      </div>
      <section id="feature" class="space-top-short">
        <feature />
      </section>
      <section :class="isMobile ? 'space-top-short' : 'space-top'">
        <counter />
      </section>
      <section id="management" class="space-top">
        <management />
      </section>
      <section id="business" class="space-top">
        <business />
      </section>
      <section
        id="testimonials"
        :class="isTablet ? 'space-top' : 'space-top-short'"
      >
        <testimonials />
      </section>
    </div>
  </div>
</template>

<script>
import get from 'lodash/get'
import pageMeta from '~/mixins/pageMeta'
import refetchCurrencyMixin from '~/modules/swell/mixins/refetchCurrency'

import BannerSlider from '~/components/Home/BannerSlider'
import Feature from '~/components/Home/Feature'
import Counter from '~/components/Home/Counter'
import brand from '~/static/text/brand'
import Management from '~/components/Home/Management'
import Business from '~/components/Home/Business'
import Testimonials from '~/components/Home/Testimonials'

export default {
  components: {
    BannerSlider,
    Feature,
    Counter,
    Management,
    Business,
    Testimonials,
  },
  mixins: [pageMeta, refetchCurrencyMixin],
  data() {
    return {
      page: null,
      sections: [],
      loaded: false,
    }
  },
  async fetch() {
    const { $swell, $route } = this
    const homePage = await $swell.settings.get('store.homePage')
    const slug = $route.params.slug || homePage || 'home'

    const page = await $swell.content.get('pages', slug)

    // Show 404 if page data isn't found
    if (!page) {
      return this.$nuxt.error({ statusCode: 404 })
    }

    // Set component data
    this.setSections(page)
    this.page = page
    this.loaded = true
  },
  head() {
    return {
      title: brand.retail.desc,
    }
  },
  computed: {
    isTablet() {
      return (
        this.$mq === 'mdDown' || this.$mq === 'smDown' || this.$mq === 'xsDown'
      ) // eslint-disable-line
    },
    isMobile() {
      const xsDown = this.$store.state.breakpoints
        ? this.$store.state.breakpoints.xsDown
        : ''
      return xsDown.includes(this.$mq)
    },
  },
  methods: {
    // Update individual sections as-needed so there's less flashing and
    // the transition group works without scrolling to the page top
    // TODO remove in Vue 3 because it shouldn't be needed
    setSections(page) {
      const newSections = get(page, 'sections')
      if (!Array.isArray(newSections) || !Array.isArray(this.sections)) return

      // We don't want to set sections individually if the array lengths are different,
      // because that means we're either on first load, or a section has been deleted
      const sectionCountIsEqual = newSections.length === this.sections.length

      if (this.$swellEditor && sectionCountIsEqual) {
        newSections.forEach((section, index) => {
          if (
            JSON.stringify(section) !== JSON.stringify(this.sections[index])
          ) {
            // Update section if current data isn't identical
            const cleanSection = { ...section }
            delete cleanSection.$locale // $locale is not a valid attribute name
            this.$set(this.sections, index, cleanSection)
          }
        })
      } else {
        // Set the quick way since the editor isn't active
        this.sections = newSections
      }
    },
  },
}
</script>

<style scoped lang="scss">
@import '~/assets/pages';
</style>
