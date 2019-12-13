<template>
  <v-app>
    <v-app-bar app color="primary" dark>
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
      <HelloWorld />
      <div>
        <SelectView />
      </div>
    </v-content>
    <v-row>
      <v-col :key="item.id" v-for="item in expenses.data" cols="6" md="6" sm="0">
        <ExpenseCard
          :employee="item.employee.first_name"
          :currency="item.currency + ' ' + item.amount"
          :description="item.description"
          :created_at="new Date(item.created_at).toLocaleString()"
        ></ExpenseCard>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: "home",
  components: {
    HelloWorld: () => import("@/components/HelloWorld.vue"),
    ExpenseCard: () => import(/* webpackChunkName: "ExpenseCard" */ "@/components/ExpenseCard"),
    SelectView: () => import(/* webpackChunkName: "SelectView" */ "@/views/SelectView")
  },
  computed: {
    expenses() {
      return this.$store.getters.GET_EXPENSES;
    }
  },
  created() {
    this.$store.dispatch("GET_EXPENSES");
  }
};
</script>
