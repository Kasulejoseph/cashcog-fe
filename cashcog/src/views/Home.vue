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
      <v-row>
        <v-col cols="4" md="4" sm="0">
      <line-chart :chartdata="chartData" />

        </v-col>
      </v-row>
      <!-- style="position: relative; height:40vh; width:80vw" -->
      <div>
        <SelectView />
      </div>
    </v-content>
    <v-row>
      <v-col :key="item.id" v-for="item in expenses.data" cols="4" md="4" sm="0">
        <ExpenseCard
          :employee="item.employee.first_name"
          :currency="item.currency + ' ' + item.amount"
          :description="item.description"
          :created_at="new Date(item.created_at).toLocaleString()"
          :passStatus="item.status"
          :item="item"
          @updateStatus="updateStatus"
        ></ExpenseCard>
      </v-col>
      <v-pagination
        v-model="page"
        class="my-4 page-item"
        :length="pageCount"
        :total-visible="10"
        next-icon="mdi-menu-right"
        prev-icon="mdi-menu-left"
        @input="next"
      ></v-pagination>
    </v-row>
  </v-app>
</template>

<script>
import { Bar } from 'vue-chartjs'

export default {
  name: "home",
  extends: Bar,
  data() {
    return {
      page: 1,
      chartData: {
      labels: ['January', 'February', 'March', 'April'],
      datasets: [
        {
          label: 'Data One',
          borderColor: '#f87979',
          backgroundColor: "null",
          fill: false,
          data: [40, 20, 30, 15]
        }
      ]
    }
    }
  },
  components: {
    HelloWorld: () => import("@/components/HelloWorld.vue"),
    ExpenseCard: () =>
      import(/* webpackChunkName: "ExpenseCard" */ "@/components/ExpenseCard"),
    SelectView: () =>
      import(/* webpackChunkName: "SelectView" */ "@/views/SelectView"),
    LineChart: () => import('./Cart.js')

  },
  methods: {
    next(value) {
      const searchQuery = `${this.$store.state.searchParams}page=${value}`;
      this.$store.dispatch("GET_EXPENSES", `?${searchQuery}`);
    },
    updateStatus(statusObj) {
      this.$store.dispatch("UPDATE_EXPENSE", statusObj);
    }
  },
  computed: {
    expenses() {
      return this.$store.getters.GET_EXPENSES;
    },
    pageCount() {
      return this.expenses.pages;
    }
  },
  created() {
    this.$store.dispatch("GET_EXPENSES");
  },
};
</script>

<style lang="scss">
.v-pagination > li .v-pagination__item--active {
  background: rgb(248, 197, 69) !important;
}
</style>
