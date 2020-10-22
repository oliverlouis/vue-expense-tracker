<template>
  <div class="app-container">
    <TransactionList />
    <BudgetList />
  </div>
</template>

<script>
import TransactionList from "./components/TransactionList";
import BudgetList from "./components/BudgetList";
export default {
  name: "App",
  components: {
    TransactionList,
    BudgetList,
  },
};
</script>

<style>
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
  display: flex;
  justify-content: space-between;
}

.display {
  width: 100%;
  border: 1px solid grey;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 30px;
}
</style>
