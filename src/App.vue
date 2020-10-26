<template>
  <div class="app-container">
    <TransactionSelect @open-modal="setModalOpen" />
    <div class="app-container__transactions">
      <TransactionModal
        v-if="modalOpen"
        :type="type"
        @close-modal="setModalClose"
      />
      <TransactionList v-else class="app-contianer__transactions-trans-list" />
      <BudgetList lass="app-contianer__transactions-budget-list" />
    </div>
  </div>
</template>

<script>
import TransactionList from "./components/TransactionList";
import BudgetList from "./components/BudgetList";
import TransactionSelect from "./components/TransactionSelect";
import TransactionModal from "./components/TransactionModal";

export default {
  name: "App",
  components: {
    TransactionList,
    BudgetList,
    TransactionSelect,
    TransactionModal,
  },

  data() {
    return {
      modalOpen: false,
      type: "",
    };
  },

  methods: {
    setModalOpen(value) {
      this.modalOpen = value.modalState;
      this.type = value.transType;
    },

    setModalClose(value) {
      this.modalOpen = value;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app-container {
  width: 80%;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 20px;
  padding: 50px;
  -webkit-box-shadow: 0px 3px 6px 0px rgba(168, 168, 168, 0.36);
  box-shadow: 0px 3px 6px 0px rgba(168, 168, 168, 0.36);

  &__transactions {
    width: 100%;
    display: flex;
    justify-content: space-between;

    &-trans-list {
      justify-self: center;
    }

    &-budget-list {
      justify-self: flex-end;
    }
  }
}

.display {
  width: 100%;
  border: 1px solid grey;
  border-radius: 15px;
  padding: 5px 10px;
  margin-bottom: 30px;
}
</style>
