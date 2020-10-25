<template>
  <div class="display">
    <h4>Income</h4>
    <h3>{{ setTransactionSymbol }}${{ getTotalIncome }}</h3>
  </div>
</template>

<script>
export default {
  computed: {
    getTotalIncome() {
      return this.$store.getters.totalIncome;
    },

    setTransactionSymbol() {
      return this.getTotalIncome === 0 ? "" : "+";
    },
  },
};
</script>

<style lang="scss" scoped>
.display {
  width: 100%;
  border: none;
  background-color: rgb(251, 251, 251);
  color: #99c34b;
  line-height: 0.5;
  -webkit-box-shadow: 0px 3px 6px 0px rgba(168, 168, 168, 0.36);
  box-shadow: 0px 3px 6px 0px rgba(168, 168, 168, 0.36);
}
</style>