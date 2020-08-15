<template>
  <div>
    <v-skeleton-loader
      ref="skeleton"
      :boilerplate="boilerplate"
      :type="type"
      :tile="tile"
      class="mx-auto"
    >
      <v-list>
        <v-list-item v-for="item in items" :key="item.name">
          <v-list-item-avatar>
            <v-img :src="item.owner.avatar_url"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-content>
            <v-list-item-title v-html="item.default_branch"></v-list-item-title>
            <v-list-item-subtitle v-html="item.downloads_url"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-skeleton-loader>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      boilerplate: false,
      tile: false,
      type: "list-item-avatar-three-line",
      types: [],
    };
  },
  computed: {
    name() {
      console.log(this.items);
      return null;
    },
  },
  mounted() {
    this.types = Object.keys(this.$refs.skeleton.rootTypes);
  },
};
</script>

<style lang="scss" scoped>
</style>