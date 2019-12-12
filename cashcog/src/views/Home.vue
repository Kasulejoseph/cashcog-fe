<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('../assets/expense-icon.png')"
          transition="scale-transition"
          width="40"
        />
      </div>
    </v-app-bar>

    <v-content>
      <HelloWorld/>
    </v-content>
    <div :key="item.id" v-for="item in expenses.data">
      <ExpenseCard :currency="item.currency + ' ' + item.amount " :description="item.description" :created_at="new Date(item.created_at).toLocaleString()" ></ExpenseCard>
    </div>
  </v-app>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ExpenseCard from '@/components/ExpenseCard'

export default {
  name: 'home',
  components: {
    HelloWorld,
    ExpenseCard
  },
  data: () => {
    return {
      items: 
      [
        {id: 1, currency: "shs 700", description: "Greyhound divisely hello coldly fonwderfully"}, 
        {id: 2, currency: "USD 600", description: "Greyhound divisely hello coldly fonwderfully"}
        ]
      }
  },
  computed: {
    expenses () { return this.$store.getters.GET_EXPENSES}

  },
  created() {
    this.$store.dispatch('GET_EXPENSES')
  }
}
</script>
