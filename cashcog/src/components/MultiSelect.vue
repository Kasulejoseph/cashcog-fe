<template>
  <div>
    <v-row>
      <v-col cols="6" md="6" sm="0" class="mp-5">
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
      </v-col>
      <v-col cols="6" md="6" sm="0">
        <v-combobox
          multiple
          v-model="select"
          label="Search Values"
          append-icon
          chips
          deletable-chips
          class="tag-input"
          :search-input.sync="search"
          @keyup.tab="updateTags"
          @paste="updateTags"
        >
        </v-combobox>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
export default {
  name: "MultiSelect",
  props: ["options", "addTag", "value"],
  components: { Multiselect }
  //   mounted() {
  //           this.$emit('tag', this.value)
  //   }
};
</script>

<style lang="scss">
.multiselect .multiselect__tag{
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
