<template>
  <div>
    <v-combobox
      multiple
      v-model="select"
      label="Enter search values"
      append-icon
      prepend-icon="mdi-square-edit-outline"
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
