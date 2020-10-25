<template>
  <div class="display" :style="{ backgroundColor: budgetDisplayColor }">
    <h3>{{ setTransactionSymbol }}${{ setBudgetDisplay }}</h3>
  </div>
</template>

<script>
export default {
  computed: {
    getBudget() {
      return this.$store.getters.totalIncome - this.$store.getters.totalExpense;
    },

    setBudgetDisplay() {
      return Math.abs(this.getBudget);
    },

    setTransactionSymbol() {
      // return this.getBudget > 0 ? "+" : "-";
      let symbol;
      if (this.getBudget === 0) {
        symbol = "";
      } else if (this.getBudget > 0) {
        symbol = "+";
      } else symbol = "-";

      return symbol;
    },

    budgetDisplayColor() {
      return this.getBudget >= 0 ? "#99c34b" : "#e6494e";
    },
  },
};
</script>

<style lang="scss" scoped>
.display {
  width: 100%;
  border: none;
  color: #fff;

  h3 {
    font-size: 40px;
  }
}
</style>