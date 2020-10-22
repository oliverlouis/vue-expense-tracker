<template>
  <div class="container">
    <TransactionItem
      v-for="transaction in transactions"
      :key="transaction.id"
      :description="transaction.description"
      :amount="transaction.amount"
      :date="transaction.date"
    />
  </div>
</template>

<script>
import TransactionItem from "./TransactionItem";
export default {
  components: {
    TransactionItem,
  },

  computed: {
    transactions() {
      return this.$store.getters.transactions;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 60%;
}
</style>