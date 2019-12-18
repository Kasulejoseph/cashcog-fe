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
        <v-col>
          <v-select class="yy" :items="SortItems" @change="orderSelected" label="Sort By" dense outlined></v-select>
          <v-radio-group v-model="radios" @change="sortSelected" row>
            <v-radio label="Date" value="created_at"></v-radio>
            <v-radio label="Amount" value="amount"></v-radio>
          </v-radio-group>
        </v-col>
        <v-col></v-col>
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
      SortItems: ["Ascending", "Descending"],
      radios: "",
      searchKeys: [],
      sortOrder: "",
      row: null,
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
    combobox: () =>
      import(
        /* webpackChunkName: "combobox" */ "@/components/SearchExpenses/ComboBox"
      )
  },
  methods: {
    orderSelected(value) {
      this.sortOrder = value
    },

    sortSelected(value) {
      console.log(value);
      
      if(this.sortOrder === 'Ascending') {
        const sortby = `sort=${value}:asc`
        this.$store.dispatch("GET_EXPENSES", `?${sortby}`);
      }
      if(this.sortOrder === 'Descending') {
        const sortby = `sort=${value}:desc`
        this.$store.dispatch("GET_EXPENSES", `?${sortby}`);
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