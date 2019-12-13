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
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ExpenseCard from "@/components/ExpenseCard";
import SelectView from "@/views/SelectView"
export default {
  name: "home",
  components: {
    HelloWorld,
    ExpenseCard,
    SelectView
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
