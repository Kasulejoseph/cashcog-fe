<template>
  <div>
    <v-row>
      <v-col cols="6" md="6" sm="0" class="mp-5">
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
          @input="updateTags"
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
  props: ["options", "search"],
   data() {
    return {
      select: [],
      value: []
    };
  },
  methods: {
    addTag() {      
       this.$emit('addTag', this.value)
    },
    updateTags(){      
      this.$emit('updateTags', this.select)
    }
  },
  components: { Multiselect }

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
