<template>
  <!-- Error/empty state -->
  <div class="container">
    <SectionUndefined
      v-if="!panels.length"
      heading="Multiple panels"
      description="No panels added"
    />

    <section
      v-else
      class="relative flex flex-wrap items-center"
      style="overflow: hidden"
    >
      <div
        v-for="(panel, index) in panels"
        :key="id + 'multiPanel' + index"
        class="relative min-h-72 w-full md:w-1/2 lg:min-h-96"
        :class="[
          `bg-${bgColor}`,
          {
            'py-20 md:py-16 lg:py-32': panel.type === 'text' && panel.heading,
            'text-left': textAlign === 'left',
            'text-right': textAlign === 'right',
            'text-center': textAlign === 'center',
          },
        ]"
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-offset="500"
      >
        <!-- Empty states -->
        <div
          v-if="!panel.type"
          class="m-6 border border-dashed py-32 text-center"
        >
          <h3>Panel {{ index + 1 }}</h3>
          <p>No type chosen</p>
        </div>
        <div
          v-else-if="!panel.image && !panel.heading"
          class="m-6 border border-dashed py-32 text-center"
        >
          <h3>Panel {{ index + 1 }}</h3>
          <p>No content added</p>
        </div>
        <!-- Image panel -->
        <template v-else-if="panel.type === 'image'">
          <div v-if="index == 1">
            <img
              :src="require('~/assets/image/amotarget_Services.svg')"
              alt="service"
            />
          </div>
          <div v-else>
            <BaseLink v-if="panel.url" :link="panel.url">
              <VisualMedia
                :source="panel.image"
                :is-background="true"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </BaseLink>
            <VisualMedia
              v-else
              :source="panel.image"
              :is-background="true"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            <!-- TODO Fixed aspect ratio + background behavior? -->
          </div>
        </template>
        <!-- Text panel -->
        <template v-else-if="panel.type === 'text'">
          <h2 :class="panel.heading == 'Amotarget' ? 'firstTitle' : ''">
            {{ panel.heading }}
          </h2>
          <div
            v-balance-text.children
            class="mt-4 whitespace-pre-line"
            v-html="panel.description"
          />
          <div :class="{ '-ml-3': panel.textAlign !== 'center' }">
            <div
              v-for="(link, i) in panel.links"
              :key="`link-${i}`"
              :class="{ 'inline-block': panel.links.length < 3 }"
            >
              <BaseButton
                class="mx-3 mt-6 inline-block"
                :type="link.style"
                :link="link.url"
                :label="link.label"
                fit="auto"
              />
            </div>
          </div>
        </template>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SectionMultiPanel',

  props: {
    type: {
      type: String,
      default: null,
    },
    id: {
      type: String,
      default: null,
    },
    panels: {
      type: Array,
      default: () => [],
    },
    textAlign: {
      type: String,
      default: null,
    },
    bgColor: {
      type: String,
      default: 'primary-lightest',
    },
  },
}
</script>
