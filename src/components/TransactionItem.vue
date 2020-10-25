<template>
  <div class="transaction">
    <div>
      <h3>{{ description }}</h3>
      <h4>{{ amount }}</h4>
    </div>
    <div>
      <button @click="deleteTransaction">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TransactionItem",

  props: ["description", "amount", "id"],

  methods: {
    deleteTransaction() {
      this.$store.dispatch("DELETE_TRANSACTION", this.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.transaction {
  border: 1px solid black;
  width: 100%;
  padding: 10px 20px;
  margin-bottom: 20px;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
}
</style>