<template>
  <div class="transaction-select">
    <button class="btn" @click.stop="openModalIncome">Income</button>
    <button class="btn" @click.stop="openModalExpense">Expense</button>
  </div>
</template>

<script>
export default {
  emits: ["open-modal"],

  methods: {
    openModalIncome() {
      this.$emit("open-modal", {
        modalState: true,
        transType: "inc",
      });
    },

    openModalExpense() {
      this.$emit("open-modal", {
        modalState: true,
        transType: "exp",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.transaction-select {
  margin-bottom: 30px;
}

.btn {
  cursor: pointer;
  margin: 20px;
}
</style>