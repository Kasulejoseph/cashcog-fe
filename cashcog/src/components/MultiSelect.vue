<template>
  <div>
    <multiselect
      v-model="value"
      tag-placeholder="Add this as new tag"
      placeholder="Search or add a tag"
      label="name"
      track-by="code"
      :options="options"
      :multiple="true"
      :taggable="true"
      @tag="addTag"
    ></multiselect>
    <pre class="language-json"><code>{{ value  }}</code></pre>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
export default {
  name: "MultiSelect",
  props: ['options', 'addTag', 'value'],
  components: { Multiselect },
//   mounted() {
//           this.$emit('tag', this.value)
//   }
};
</script>

<style lang="scss" scoped>
</style>