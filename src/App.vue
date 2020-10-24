<template>
  <div class="app-container">
    <TransactionSelect @open-modal="setModalOpen" />
    <div class="app-container__transactions">
      <TransactionModal
        v-if="modalOpen"
        :type="type"
        @close-modal="setModalClose"
      />
      <TransactionList v-else />
      <BudgetList />
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
      console.log(this.modalOpen);
      console.log(this.type);
    },

    setModalClose(value) {
      this.modalOpen = value;
      console.log(this.modalOpen);
    },
  },

  created() {
    console.log(this.modalOpen);
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app-container {
  width: 70%;
  margin: 0 auto;

  &__transactions {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}

.display {
  width: 100%;
  border: 1px solid grey;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 30px;
}
</style>
