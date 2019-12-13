<template>
  <div>
    <multiselect
      v-model="value"
      tag-placeholder="Add this as new tag"
      placeholder="Search expenses"
      label="name"
      track-by="code"
      :hide-selected="true"
      :clear-on-select="false"
      :close-on-select="false"
      :options="options"
      :multiple="true"
      :taggable="true"
      @input="addTag"
    ></multiselect>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
export default {
  name: "MultiSelect",
  props: ["options", "search"],
  data() {
    return {
      value: []
    };
  },
  methods: {
    addTag() {
      this.$emit("addTag", this.value);
    }
  },
  components: { Multiselect }
};
</script>

<style lang="scss">
.multiselect .multiselect__tag {
  background-color: rgb(248, 197, 69);
  font-size: large;
}
.multiselect .multiselect__tags {
  margin-top: 15px;
}

.multiselect .multiselect__tag-icon:after {
  content: "\D7";
  color: #fff;
  font-size: 14px;
}
</style>
