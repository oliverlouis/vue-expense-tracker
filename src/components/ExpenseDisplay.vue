<template>
  <div class="display">
    <h4>Expenses</h4>
    <h3>{{ setTransactionSymbol }}${{ getTotalExpense }}</h3>
  </div>
</template>

<script>
export default {
  computed: {
    getTotalExpense() {
      return this.$store.getters.totalExpense;
    },

    setTransactionSymbol() {
      return this.getTotalExpense === 0 ? "" : "-";
    },
  },
};
</script>

<style lang="scss" scoped>
.display {
  width: 100%;
  border: none;
  background-color: rgb(251, 251, 251);
  color: #e6494e;
  line-height: 0.5;
  -webkit-box-shadow: 0px 3px 6px 0px rgba(168, 168, 168, 0.36);
  box-shadow: 0px 3px 6px 0px rgba(168, 168, 168, 0.36);
}
</style>