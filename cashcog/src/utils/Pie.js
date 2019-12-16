import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  name: "BarChart",
  props: {
    chartdata: {
      type: Object,
      default: null
    }
  },
  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
};
