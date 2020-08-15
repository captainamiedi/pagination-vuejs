<template>
  <div>
    <div v-if="loading">
      <slot name="loading">
        <!-- <Spinner /> -->
        Loading-----
      </slot>
      <slot name="loading-message">Loading your data...</slot>
    </div>
    <slot name="error" v-else-if="error">{{error}}</slot>
    <slot name="loaded" v-else :data="data" />
  </div>
</template>

<script>
    import axios from 'axios';
export default {
  data() {
    return {
      data: null,
      loading: false,
      error: null,
    };
  },
  props: {
      endpoint: {
          type: String,
          required: true
      },
  },
  created () {
      this.findData();
  },
  watch: {
      endpoint() {
          this.findData();
      }
  },
  methods: {
      async findData() {
          try {
              this.loading = true;
              let result = await axios.get(this.endpoint);
              this.data = result.data;
          } catch (error) {
              console.log(error);
              this.error = 'The resource is not found'
          }
          this.loading = false;
      }
  },
};
</script>

<style lang="scss" scoped>
</style>