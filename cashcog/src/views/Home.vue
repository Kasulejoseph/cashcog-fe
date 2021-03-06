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
        <span style="font-size: 28px">Expense Manager</span>
      </div>
    </v-app-bar>
    <v-content>
      <v-row class="chart-row">
        <v-col class="col-graph" cols="6" md="6" sm="0">
          <h1>Monthly Expenses</h1>
          <line-chart class="graph" :chartdata="chartData" />
        </v-col>
        <v-col class="col-graph" cols="6" md="6" sm="0">
          <h1>Expenses</h1>
          <pie-chart class="pie" :chartdata="pieData" />
        </v-col>
      </v-row>
      <div>
        <SelectView />
      </div>
    </v-content>
    <v-row class="expense-cards" v-if="expenses.data">
      <v-col class="cards-col" :key="item.id" v-for="item in expenses.data" cols="4" md="4" sm="0">
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
    <div v-else>
      <PageLoader />
    </div>
  </v-app>
</template>

<script>
import PageLoader from "@/components/PageLoader"
export default {
  name: "home",
  data() {
    return {
      page: 1,
      chartData: {
        labels: [
          "Jan",
          "Feb",
          "May",
          "Apr",
          "Mar",
          "Jun",
          "Jul",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec"
        ],
        datasets: [
          {
            label: "Amount",
            borderColor: "#53b4ed",
            // backgroundColor: "null",
            // fill: false,
            data: [5, 20, 30, 15, 34, 24, 30, 15, 35, 38, 29, 18]
          }
        ]
      },
      pieData: {
        labels: ["Health", "Mobility", "Energy", "Infrastructure"],
        datasets: [
          {
            borderColor: "#FEC42E",
            label: "Expense Chart",
            data: [5, 20, 30, 15],
            backgroundColor: ["#ff8527", "#ff566b", "#fcc32e", "#53b4ed"]
          }
        ]
      }
    };
  },
  components: {
    ExpenseCard: () =>
      import(/* webpackChunkName: "ExpenseCard" */ "@/components/ExpenseCard"),
    SelectView: () =>
      import(/* webpackChunkName: "SelectView" */ "@/views/SelectView"),
    LineChart: () => import("@/utils/Cart.js"),
    PieChart: () => import("@/utils/Pie.js"),
    PageLoader
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
  mounted() {
    // console.log(this);
  },
  created() {
    this.$store.dispatch("GET_EXPENSES");
  }
};
</script>

<style lang="scss">
.v-pagination > li .v-pagination__item--active {
  background: rgb(248, 197, 69) !important;
}
canvas {
  width: 90% !important;
  height: 80% !important;
}
.chart-row {
  height: 72%;
  margin-left: 2%;
}
.graph {
  width: 100%;
  height: 85%;
}
.pie {
  width: 90%;
  height: 90%;
}
.expense-cards {
  margin-top: -8%;
}
.theme--light.v-text-field--outlined fieldset {
    border-color: #53b4ed !important;
}
.multiselect__tags {
    border: 1px solid #53b4ed !important;
}
.theme--light.v-text-field > .v-input__control > .v-input__slot:before {
    border-color: #53b4ed !important;
}

</style>
