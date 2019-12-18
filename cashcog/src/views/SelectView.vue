<template>
  <div>
    <v-row class="container2">
      <v-col cols="3" md="3" sm="0" class="mp-5 mr-5 multi-select">
        <MultiSelect :options="options" @addTag="addTag" />
      </v-col>
      <v-col cols="3" md="3" sm="0" class="ml-3 update-tag">
        <combobox @updateTags="updateTags"></combobox>
      </v-col>
      <v-col cols="5" md="5" sm="0" class="ml-3">
        <sortbox @orderSelected="orderSelected" @sortSelected="sortSelected" :radioValue="radioValue"></sortbox>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "SelectView",
  data() {
    return {
      select: [],
      items: [],
      searchKeys: [],
      radioValue: "",
      options: [
        { name: "Currency", code: "00" },
        { name: "Amount", code: "01" },
        { name: "status", code: "02" },
        { name: "Employee", code: "03" }
      ]
    };
  },
  components: {
    MultiSelect: () =>
      import(
        /* webpackChunkName: "multiselect" */ "@/components/SearchExpenses/MultiSelect"
      ),
    sortbox: () =>
      import(
        /* webpackChunkName: "sortbox" */ "@/components/SearchExpenses/SortSelect"
      ),
    combobox: () =>
      import(
        /* webpackChunkName: "combobox" */ "@/components/SearchExpenses/ComboBox"
      )
  },
  methods: {
    orderSelected(value) {
      console.log(this.$store.state.searchParams);
      this.sortOrder = value;
      const checkSort = value === "Ascending" ? 'asc' : 'desc'
      if (this.radioValue) {
        const sortby = `sort=${this.radioValue}:${checkSort}`;
        const searchQuery = this.$store.state.searchParams + sortby
        this.$store.dispatch("GET_EXPENSES", `?${searchQuery}`);
      }
    },
    sortSelected(value) {
      this.radioValue = value
      
      if (this.sortOrder === "Ascending") {
        const sortby = `sort=${value}:asc`;
        const searchQuery = this.$store.state.searchParams + sortby
        this.$store.dispatch("GET_EXPENSES", `?${searchQuery}`);
      }
      if (this.sortOrder === "Descending") {
        const sortby = `sort=${value}:desc`;
        const searchQuery = this.$store.state.searchParams + sortby
        this.$store.dispatch("GET_EXPENSES", `?${searchQuery}`);
      }
    },
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
      this.$store.commit("SET_SEARCH_PARAMS", searchQuery);
      this.$store.dispatch("GET_EXPENSES", `?${searchQuery}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.container2 {
  display: -webkit-box;
}
.multi-select {
  margin-left: 20px;
  width: 47%;
}
.update-tag {
  width: 48%;
}
.v-input {
  max-width: 90% !important;
}

// media query
@media only screen and (max-width: 600px) {
}
</style>