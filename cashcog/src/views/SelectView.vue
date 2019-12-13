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
      value: [{ name: "Javascript", code: "js" }],
      options: [
        { name: "Vue.js", code: "vu" },
        { name: "Javascript", code: "js" },
        { name: "Open Source", code: "os" }
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