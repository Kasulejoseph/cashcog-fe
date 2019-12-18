<template>
  <div>
    <v-combobox
      multiple
      v-model="select"
      label="Enter values corresponding to the selected search fields"
      append-icon
      prepend-icon="mdi-pencil"
      chips
      deletable-chips
      class="tag-input"
      @input="updateTags"
    >
    </v-combobox>
  </div>
</template>

<script>

export default {
  name: "combobox",
  data() {
    return {
      select: [],
    };
  },
  methods: {
    updateTags() {
      this.$emit("updateTags", this.select);
    }
  }
};
</script>

<style lang="scss" scoped></style>
