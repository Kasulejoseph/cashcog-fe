<template>
  <div>
    <v-row>
      <v-col cols="6" md="6" sm="0" class="mp-5">
    <MultiSelect :options="options" @addTag="addTag"/>
      </v-col>
      <v-col cols="6" md="6" sm="0">
      <ComboBox @updateTags="updateTags"  />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MultiSelect from "@/components/SearchExpenses/MultiSelect";
import ComboBox from "@/components/SearchExpenses/ComboBox"

export default {
  name: "SelectView",
  data() {
    return {
      select: [],
      items: [],
      searchKeys: [],
      options: [
        { name: "Currency", code: "00" },
        { name: "Amount", code: "01" },
        { name: "status", code: "02" },
        { name: "Employee", code: "03" }
      ]
    };
  },
  components: {
    MultiSelect,
    ComboBox
  },
  methods: {
    addTag(newTag) {
      this.searchKeys = [...newTag];
    },
    updateTags(select) {
      const searchValue = Object.assign({}, [...select]);
      const selectArray = [...select];
      let searchQuery = "";
      for (let key in selectArray) {
        this.searchKeys[key].code = selectArray[key];
        searchQuery += `${this.searchKeys[key].name.toLowerCase()}=${
          this.searchKeys[key].code
        }&`;
      }
      this.$store.dispatch("GET_EXPENSES", `?${searchQuery}`);
    }
  }
};
</script>

<style lang="scss" scoped></style>
