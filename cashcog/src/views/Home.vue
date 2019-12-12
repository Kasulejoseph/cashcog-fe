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
    <ExpenseCard></ExpenseCard><ExpenseCard></ExpenseCard>
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
  }
}
</script>
