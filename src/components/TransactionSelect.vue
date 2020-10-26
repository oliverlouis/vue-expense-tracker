<template>
  <div class="transaction-select">
    <button class="btn btn-inc" @click.stop="openModalIncome">
      Add Income
    </button>
    <button class="btn btn-exp" @click.stop="openModalExpense">
      Add Expense
    </button>
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
  margin-bottom: 60px;
}

.btn {
  width: 170px;
  padding: 25px 20px;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  transition: all 0.2s;
  margin: 0 30px;
  font-family: "Poppins", sans-serif;

  &:active {
    outline: none;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }

  &-inc {
    background-color: #99c34b;
  }

  &-exp {
    background-color: #e6494e;
  }
}
</style>