<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">kasule</div>
        <v-list-item-title class="headline mb-1" v-text="currency"></v-list-item-title>
        <v-list-item-subtitle v-text="description"></v-list-item-subtitle>
            <v-switch v-model="switch1" inset :label="`approved: ${switch1.toString()}`"></v-switch>
      </v-list-item-content>

    </v-list-item>

    <v-card-actions >
      <v-spacer></v-spacer>
      <span class="text-sm-left">12/12/2009</span>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: "ExpenseCard",
    props: ['currency', 'description'],
    data () {
      return {
        switch1: false,
      }
    },
  }
</script>
