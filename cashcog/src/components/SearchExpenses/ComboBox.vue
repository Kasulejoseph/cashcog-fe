<template>
  <div>
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
  </div>
</template>

<script>

export default {
  name: "ComboBox",
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
