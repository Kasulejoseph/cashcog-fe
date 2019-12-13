<template>
  <div>
    <MultiSelect :options="options" @addTag="addTag" @updateTags="updateTags" />
  </div>
</template>

<script>
import MultiSelect from "@/components/MultiSelect";
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
    MultiSelect
  },
  methods: {
    addTag(newTag) {
      this.searchKeys = [...newTag]
    },
    updateTags(select) {
        const searchValue = Object.assign({}, [...select])
        console.log(this.searchKeys);
        
        // this.$store.dispatch('GET_EXPENSES', `?amount=${searchValue[0]}`)
    }
  }
};
</script>

<style lang="scss" scoped>
</style>