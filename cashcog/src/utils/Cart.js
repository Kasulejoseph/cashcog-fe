import { Line } from "vue-chartjs";

export default {
  extends: Line,
  name: "LineChart",
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
