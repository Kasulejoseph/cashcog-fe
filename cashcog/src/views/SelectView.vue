<template>
  <div>
    <MultiSelect :options="options" :value="value" @tag="addTag" />
  </div>
</template>

<script>
import MultiSelect from "@/components/MultiSelect";
export default {
  name: "SelectView",
  data() {
    return {
      value: [{ name: "Status", code: "js" }],
      options: [
        { name: "Currency", code: "vu" },
        { name: "Amount", code: "js" },
        { name: "status", code: "os" },
        {name: "Employee", code: "os" }
      ]
    };
  },
  components: {
    MultiSelect
  },
    methods: {
    addTag (newTag) {        
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.options.push(tag)
      this.value.push(tag)
    }
  },
};
</script>

<style lang="scss" scoped>
</style>