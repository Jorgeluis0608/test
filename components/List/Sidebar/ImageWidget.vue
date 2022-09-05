<template>
  <paper title="Gallery" icon="mdi-image-multiple" subtitle="">
    <div>
      <v-item-group v-model="selected" multiple>
        <v-row class="ma-0">
          <v-col
            v-for="(item, i) in images"
            :key="i"
            cols="6"
            md="6"
            sm="3"
            class="gallery-item"
          >
            <v-item v-slot="{ active, toggle }">
              <v-img
                :src="item.src"
                height="150"
                class="pa-2 text-right"
                @click="toggle"
              >
                <v-btn icon dark>
                  <v-icon>
                    {{ active ? 'mdi-heart' : 'mdi-heart-outline' }}
                  </v-icon>
                </v-btn>
              </v-img>
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>
      <v-btn text block color="primary">See all</v-btn>
    </div>
  </paper>
</template>

<script>
import Paper from '../../Paper'
import imgAPI from '~/static/images/imgAPI'

export default {
  components: {
    Paper,
  },
  data() {
    return {
      images: [
        {
          src: imgAPI.photo[5],
        },
        {
          src: imgAPI.photo[6],
        },
        {
          src: imgAPI.photo[7],
        },
        {
          src: imgAPI.photo[9],
        },
      ],
      selected: [],
    }
  },
}
</script>

<style scoped lang="scss">
@import '../list.scss';
</style>
