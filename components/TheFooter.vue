<template>
  <div id="main-wrap">
    <footer data-sw-path="footer" class="mt-10 md:mt-16 lg:mt-24">
      <!-- Main footer -->
      <div class="container py-16 text-center lg:flex lg:flex-row lg:text-left">
        <div class="lg:w-1/4 lg:pr-6">
          <!-- Copyright & Settings -->
          <img
            v-if="logoSrc"
            :src="logoSrc"
            width="200"
            class="logo block sm:mx-auto"
            :alt="storeName"
          />
        </div>
        <!-- Store info -->
        <div
          v-if="footer.showContactInfo || footer.showSocial"
          class="lg:w-1/4 lg:pr-6"
        >
          <div v-if="footer.showContactInfo" class="mb-5">
            <p v-if="footer.contactInfoHeading" class="footTitle mb-4 text-sm">
              {{ footer.contactInfoHeading }}
            </p>
            <p>
              <a class="block" :href="'tel:' + store.supportPhone">
                {{ store.supportPhone }}
              </a>
              <a class="block" :href="'mailto:' + store.supportEmail">
                {{ store.supportEmail }}
              </a>
            </p>
            <a href="/contact">
              <img
                :src="require('~/assets/image/messages-for-business.png')"
                alt="messages-for-business"
                class="w-100 contact-message"
              />
            </a>
          </div>
        </div>

        <!-- Nav menu -->
        <template v-if="menu">
          <div
            v-for="(column, index) in menu.items"
            :key="'footerMenuCol' + index"
            class="my-10 lg:my-0 lg:w-1/4"
          >
            <ul v-if="column.items">
              <li
                v-for="(item, i) in column.items"
                :key="item.name"
                class="mb-0"
              >
                <!-- Heading -->
                <p
                  v-if="item.type === 'heading'"
                  :class="{ 'mt-6': i > 0 }"
                  class="footTitle mb-3 text-sm text-primary-med"
                >
                  {{ item.name }}
                </p>
                <!-- Standard link -->
                <a
                  v-else-if="item.type === 'url'"
                  class="inline-block py-1 leading-tight"
                  rel="noreferrer noopener"
                  :href="item.value"
                  :target="item.options.target === 'blank' ? '_blank' : '_self'"
                  >{{ item.name }}</a
                >
                <NuxtLink
                  v-else
                  :to="localePath(resolveUrl(item))"
                  class="inline-block py-1 leading-tight"
                >
                  {{ item.name }}
                </NuxtLink>
              </li>
              <li class="mb-0">
                <NuxtLink
                  to="/get-quotation"
                  title="get quotation"
                  rel="noreferrer noopener"
                  class="inline-block py-1 leading-tight"
                >
                  Quotation
                </NuxtLink>
              </li>
              <!-- <li class="mb-0">
                <NuxtLink
                  to="/all-products"
                  title="all products"
                  rel="noreferrer noopener"
                  class="inline-block py-1 leading-tight"
                >
                  Products
                </NuxtLink>
              </li> -->
            </ul>
          </div>
        </template>

        <!-- Email signup -->
        <template v-if="footer.showEmailSignup">
          <div class="ml-auto max-w-96 lg:w-1/4 lg:flex-shrink-0">
            <ul
              v-if="footer.showSocial"
              class="social-icons mx-auto lg:-ml-2"
              data-sw-path="social"
            >
              <li
                v-for="link of orderedSocialLinks"
                :key="link.id"
                class="mb-0 mr-3 inline-block"
              >
                <a
                  :href="link.url"
                  target="_blank"
                  :title="`Join us on ${link.id}`"
                  class="mx-2 block"
                >
                  <BaseIcon :icon="`mdi:${link.id}`" />
                </a>
              </li>
            </ul>
            <!-- Heading + text -->
            <p v-if="footer.emailSignupHeading" class="mt-3 mb-5">
              {{ footer.emailSignupHeading }}
            </p>
            <div
              v-if="footer.emailSignupText"
              v-html="footer.emailSignupText"
            />
            <EmailSignupForm
              :theme="background === 'dark' ? 'dark' : 'light'"
              class="mt-5"
            />
          </div>
        </template>
      </div>
      <!-- END Main footer -->

      <!-- Secondary footer -->
      <div
        :class="{
          'border-primary-darker': background === 'dark',
          'border-primary-med': background === 'light',
        }"
        class="border-primary-darker py-4 text-center"
      >
        <div class="lg:flex-no-wrap container lg:flex lg:justify-between">
          <span class="my-3 block text-sm">
            <span>©{{ currentYear }} {{ store.name }}.</span> Powered by
            <a
              id="powered-by-swell"
              href="https://www.swell.is/"
              title="Headless ecommerce platform for brands"
              class="text-current"
              >Swell</a
            >
          </span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// Helpers
import get from 'lodash/get'

export default {
  name: 'TheFooter',

  data() {
    return {
      footer: {},
      store: {},
      socialLinks: {},
      menu: null,
      secondaryMenu: null,
      paymentMethods: null,
      currentYear: new Date().getFullYear(),
      background: 'dark',
      logoSrc: null,
      storeName: '',
    }
  },

  async fetch() {
    const { $swell } = this

    // Get menu settings
    const menuId = await $swell.settings.get('footer.menu', 'footer')
    const secondaryMenuId = await $swell.settings.get(
      'footer.secondaryMenu',
      'footer-secondary'
    )

    // Set menus
    this.menu = await $swell.settings.menus(menuId)
    this.secondaryMenu = await $swell.settings.menus(secondaryMenuId)

    // Set component data
    this.store = await $swell.settings.get('store', {})
    this.footer = await $swell.settings.get('footer', {})
    this.socialLinks = await $swell.settings.get('socialLinks', {})
    this.background = await $swell.settings.get('footer.background', 'dark')

    // Get Logo
    this.logoSrc = await $swell.settings.get('header.logo.file.url')
    this.storeName = await $swell.settings.get('store.name', 'ORIGIN')
  },

  computed: {
    orderedSocialLinks() {
      return [
        'twitter',
        'facebook',
        'pinterest',
        'instagram',
        'youtube',
        'vimeo',
        'whatsapp',
      ]
        .map((id) => ({ id, ...get(this, `socialLinks.${id}`, {}) })) // Get the network's link value from settings
        .filter((link) => link.show && link.url) // Only include if it's switched on and  has a url
    },
  },
}
</script>
