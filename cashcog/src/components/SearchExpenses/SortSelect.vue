<template>
  <div>
    <v-col>
      <v-select
        class="yy"
        :items="SortItems"
        @change="orderSelected"
        label="Sort By"
        dense
        outlined
      ></v-select>
      <v-radio-group v-model="radios" @change="sortSelected" row>
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

<style lang="scss" scoped>
</style>