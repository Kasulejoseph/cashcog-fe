<template>
  <v-card
    class="mx-auto"
    max-width="95%"
    shaped
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-subtitle v-text="employee"></v-list-item-subtitle>
        <v-list-item-title style="color:#FEC42E" class="headline mb-1"  v-text="currency"></v-list-item-title>
        <div class="subtitle-1 font-weight-regular" v-text="description"></div>
            <v-switch v-model="switch1" inset :label="`approved: ${switch1.toString()}`"></v-switch>
      </v-list-item-content>

    </v-list-item>

    <v-card-actions >
      <v-spacer></v-spacer>
      <v-card-subtitle class="text-sm-left" v-text="created_at"></v-card-subtitle>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: "ExpenseCard",
    props: ['currency', 'description', 'created_at', 'employee'],
    data () {
      return {
        switch1: false,
      }
    },
  }
</script>
