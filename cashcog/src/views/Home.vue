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
      <ExpenseCard :employee="item.employee.first_name" :currency="item.currency + ' ' + item.amount" :description="item.description" :created_at="new Date(item.created_at).toLocaleString()" ></ExpenseCard>
      <br/>
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
  computed: {
    expenses () { return this.$store.getters.GET_EXPENSES}

  },
  created() {
    this.$store.dispatch('GET_EXPENSES')
  }
}
</script>
