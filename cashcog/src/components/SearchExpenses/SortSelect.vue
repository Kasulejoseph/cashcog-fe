<template>
  <div>
    <v-col class="sortItem">
      <v-select
        class="sort-select"
        :items="SortItems"
        @change="orderSelected"
        label="Sort By"
        width="151px"
        dense
        outlined
        color = "#53b4ed"
      ></v-select>
      <v-radio-group v-model="radios" @change="sortSelected" row class="sort-radio">
        <v-radio label="Date" value="created_at"></v-radio>
        <v-radio label="Amount" value="amount"></v-radio>
      </v-radio-group>
    </v-col>
  </div>
</template>

<script>
export default {
props: ['radioValue'],
  data() {
    return {
      items: [],
      SortItems: ["Ascending", "Descending"],
      radios: "",
      sortOrder: "",
      row: null
    };
  },
  methods: {
      orderSelected(value){
          this.$emit('orderSelected', value)
      },
      sortSelected(value){
          this.$emit('sortSelected', value)
      }
  }
};
</script>

<style>
.sortItem{
    display: flex;
}
.v-text-field.v-text-field--enclosed:not(.v-text-field--rounded) > .v-input__control > .v-input__slot {
width: 150px;
}
.sort-select{
    margin-top: 7px !important;
    max-width: fit-content;
}
.sort-radio{
    padding-left: 10px;
}
</style>