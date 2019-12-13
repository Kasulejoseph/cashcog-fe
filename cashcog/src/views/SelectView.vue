<template>
  <div>
    <MultiSelect :options="options" :value="value" @tag="addTag" @updateTags="updateTags" />
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
      search: "", //sync search
      value: [{ name: "Status", code: "js" }],
      options: [
        { name: "Currency", code: "vu" },
        { name: "Amount", code: "js" },
        { name: "status", code: "os" },
        { name: "Employee", code: "os" }
      ]
    };
  },
  components: {
    MultiSelect
  },
  methods: {
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
      };
      this.options.push(tag);
      this.value.push(tag);
    },
    updateTags(select) {
        const searchValue = Object.assign({}, [...select])
        this.$store.dispatch('GET_EXPENSES', `?amount=${searchValue[0]}`)
    }
  }
};
</script>

<style lang="scss" scoped>
</style>