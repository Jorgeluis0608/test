<template>
  <aside class="filter">
    <div class="filter-block">
      <v-list>
        <v-subheader class="title-filter">Filter Categories</v-subheader>
        <v-list-item-group
          :value="filterCategory"
          color="primary"
          @change="(e) => changeCategory(e)"
        >
          <v-list-item value="all">
            <v-list-item-title> All categories </v-list-item-title>
          </v-list-item>
          <v-list-item value="cat-a">
            <v-list-item-title>Category a</v-list-item-title>
          </v-list-item>
          <v-list-item value="cat-b">
            <v-list-item-title>Category b</v-list-item-title>
          </v-list-item>
          <v-list-item value="cat-c">
            <v-list-item-title>Category c</v-list-item-title>
          </v-list-item>
          <v-list-item value="cat-d">
            <v-list-item-title>Category d</v-list-item-title>
          </v-list-item>
          <v-list-item value="cat-e">
            <v-list-item-title>Category e</v-list-item-title>
          </v-list-item>
          <v-list-item value="cat-f">
            <v-list-item-title>Category f</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>
    <div class="filter-block">
      <v-subheader class="title-filter">Rating</v-subheader>
      <v-list-item-group
        :value="filterRating"
        color="primary"
        @change="(e) => changeRating(e)"
      >
        <v-list-item :value="0">
          <v-list-item-title>All Rating</v-list-item-title>
        </v-list-item>
        <v-list-item :value="1">
          <v-list-item-content>
            <v-list-item-title>
              <v-icon color="orange">mdi-star</v-icon>
              <v-icon>mdi-star</v-icon>
              <v-icon>mdi-star</v-icon>
              <v-icon>mdi-star</v-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-title>
            <v-list-item-subtitle>Minimum 1 star rating</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :value="2">
          <v-list-item-content>
            <v-list-item-title>
              <v-icon color="orange">mdi-star</v-icon>
              <v-icon color="orange">mdi-star</v-icon>
              <v-icon>mdi-star</v-icon>
              <v-icon>mdi-star</v-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-title>
            <v-list-item-subtitle>Minimum 2 star rating</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :value="3">
          <v-list-item-content>
            <v-list-item-title>
              <v-icon color="orange">mdi-star</v-icon>
              <v-icon color="orange">mdi-star</v-icon>
              <v-icon color="orange">mdi-star</v-icon>
              <v-icon>mdi-star</v-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-title>
            <v-list-item-subtitle>Minimum 3 star rating</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :value="4">
          <v-list-item-content>
            <v-list-item-title>
              <v-icon color="orange">mdi-star</v-icon>
              <v-icon color="orange">mdi-star</v-icon>
              <v-icon color="orange">mdi-star</v-icon>
              <v-icon color="orange">mdi-star</v-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-title>
            <v-list-item-subtitle>Minimum 4 star rating</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :value="5">
          <v-list-item-content>
            <v-list-item-title>
              <v-icon color="orange">mdi-star</v-icon>
              <v-icon color="orange">mdi-star</v-icon>
              <v-icon color="orange">mdi-star</v-icon>
              <v-icon color="orange">mdi-star</v-icon>
              <v-icon color="orange">mdi-star</v-icon>
            </v-list-item-title>
            <v-list-item-subtitle>Minimum 5 star rating</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </div>
    <div class="filter-block">
      <h3 class="title-filter">Filter Tags</h3>
      <span class="btn-tag">
        <input
          id="tag_one"
          v-model="filterTag"
          type="checkbox"
          :checked="filterTag.includes('tag-one')"
          value="tag-one"
          @click="collectTag(filterTag)"
        />
        <label v-ripple for="tag_one">Tag One</label>
      </span>
      <span class="btn-tag">
        <input
          id="tag_two"
          v-model="filterTag"
          type="checkbox"
          :checked="filterTag.includes('tag-two')"
          value="tag-two"
          @click="collectTag(filterTag)"
        />
        <label v-ripple for="tag_two">Tag Two</label>
      </span>
      <span class="btn-tag">
        <input
          id="tag_three"
          v-model="filterTag"
          type="checkbox"
          :checked="filterTag.includes('tag-three')"
          value="tag-three"
          @click="collectTag(filterTag)"
        />
        <label v-ripple for="tag_three">Tag Three</label>
      </span>
      <span class="btn-tag">
        <input
          id="tag_four"
          v-model="filterTag"
          type="checkbox"
          :checked="filterTag.includes('tag-four')"
          value="tag-four"
          @click="collectTag(filterTag)"
        />
        <label v-ripple for="tag_four">Tag Four</label>
      </span>
    </div>
    <div class="filter-block">
      <h3 class="title-filter">Filter Range</h3>
      <v-text-field
        v-model="from"
        class="input-price"
        hide-details
        outlined
        placeholder="$ From"
      />
      &nbsp; - &nbsp;
      <v-text-field
        v-model="to"
        class="input-price"
        hide-details
        outlined
        placeholder="$ To"
      />
      <v-btn
        color="primary"
        :elevation="0"
        small
        block
        @click="changeRange({ from, to })"
      >
        Apply
        <v-icon class="use-rtl-flip">mdi-chevron-right</v-icon>
      </v-btn>
    </div>
    <div class="filter-block">
      <v-list>
        <v-subheader class="title-filter">Filter Check</v-subheader>
        <v-list-item @click="handleCheckAll">
          <v-list-item-content>
            <v-list-item-title>Select All</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item-group
          :value="filterCheck"
          multiple
          active-class=""
          @change="(e) => changeCheck(e)"
        >
          <v-list-item value="check-a">
            <template #default="{ active }">
              <v-list-item-action>
                <v-checkbox
                  :input-value="active"
                  color="secondary"
                ></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>Check A</v-list-item-title>
              </v-list-item-content>
            </template>
          </v-list-item>
          <v-list-item value="check-b">
            <template #default="{ active }">
              <v-list-item-action>
                <v-checkbox
                  :input-value="active"
                  color="secondary"
                ></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>Check B</v-list-item-title>
              </v-list-item-content>
            </template>
          </v-list-item>
          <v-list-item value="check-c">
            <template #default="{ active }">
              <v-list-item-action>
                <v-checkbox
                  :input-value="active"
                  color="secondary"
                ></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>Check C</v-list-item-title>
              </v-list-item-content>
            </template>
          </v-list-item>
          <v-list-item value="check-d">
            <template #default="{ active }">
              <v-list-item-action>
                <v-checkbox
                  :input-value="active"
                  color="secondary"
                ></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>Check D</v-list-item-title>
              </v-list-item-content>
            </template>
          </v-list-item>
          <v-list-item value="check-e">
            <template #default="{ active }">
              <v-list-item-action>
                <v-checkbox
                  :input-value="active"
                  color="secondary"
                ></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>Check E</v-list-item-title>
              </v-list-item-content>
            </template>
          </v-list-item>
          <v-list-item value="check-f">
            <template #default="{ active }">
              <v-list-item-action>
                <v-checkbox
                  :input-value="active"
                  color="secondary"
                ></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>Check F</v-list-item-title>
              </v-list-item-content>
            </template>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>
    <div class="filter-block">
      <v-list>
        <v-subheader class="title-filter">Filter Radio</v-subheader>
        <v-radio-group :value="filterRadio" @change="(e) => changeRadio(e)">
          <v-list-item>
            <v-radio label="All categories" color="secondary" value="all" />
          </v-list-item>
          <v-list-item>
            <v-radio value="radio-a" color="secondary" label="Radio A" />
          </v-list-item>
          <v-list-item>
            <v-radio value="radio-b" color="secondary" label="Radio B" />
          </v-list-item>
          <v-list-item>
            <v-radio value="radio-c" color="secondary" label="Radio C" />
          </v-list-item>
          <v-list-item>
            <v-radio value="radio-d" color="secondary" label="Radio D" />
          </v-list-item>
          <v-list-item>
            <v-radio value="radio-e" color="secondary" label="Radio E" />
          </v-list-item>
          <v-list-item>
            <v-radio value="radio-f" color="secondary" label="Radio F" />
          </v-list-item>
        </v-radio-group>
      </v-list>
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    filterRating: {
      type: Number,
      default: 0,
    },
    filterCategory: {
      type: String,
      required: true,
    },
    filterRadio: {
      type: String,
      required: true,
    },
    filterCheck: {
      type: Array,
      required: true,
    },
    handleCheckAll: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      from: 0,
      to: 100,
      filterTag: ['tag-one', 'tag-two', 'tag-three', 'tag-four'],
    }
  },
  methods: {
    changeRating(filterRating) {
      this.$emit('change-rating', filterRating)
    },
    changeCategory(filterCategory) {
      this.$emit('change-category', filterCategory)
    },
    changeRadio(filterRadio) {
      this.$emit('change-radio', filterRadio)
    },
    changeCheck(filterCheck) {
      this.$emit('change-check', filterCheck)
    },
    changeFrom(from) {
      this.$emit('change-from', from)
    },
    changeTo(to) {
      this.$emit('change-to', to)
    },
    changeTag(filterTag) {
      this.$emit('change-tag', filterTag)
    },
    changeRange(val) {
      this.$emit('change-range', val)
    },
    collectTag(val) {
      this.$emit('collect-tag', val)
    },
  },
}
</script>

<style scoped lang="scss">
@import './filter1';
</style>
