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
        const selectArray = [...select]
        for(let key in selectArray) {
          this.searchKeys[key].code = selectArray[key]
        }
        console.log(this.searchKeys);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>